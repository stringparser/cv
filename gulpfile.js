import fs from 'fs';
import del from 'del';
import util from 'util';
import path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import ReactDOMServer from 'react-dom/server';

import gulp from 'gulp';
import less from 'gulp-less';
import concat from 'gulp-concat';
import cssmin from 'gulp-cssmin';

dotenv.config();

const readFile = util.promisify(fs.readFile);
const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;

gulp.task('rm', function (done) {
  del.sync(['./build']);
  done();
});

gulp.task('styles', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: [
        path.resolve('.', 'node_modules')
      ]
    }))
    .pipe(concat('bundle.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('build'))
  ;
});

gulp.task('watch', function () {
  const browserSync = require('browser-sync');

  const bs = browserSync({
    open: false,
    server: './build',
  });

  const reload = (done) => {
    bs.reload();
    if (done) { done(); }
  };

  gulp.watch('./src/**/*.js', gulp.series('render', reload));
  gulp.watch('./src/**/*.less', gulp.series('styles', 'render', reload));
});

gulp.task('render', function (done) {
  clearRequireCache();

  const Index = require('./src/index').default;
  const login = 'stringparser';

  return fetch(`https://api.github.com/users/${login}`, {
    headers: {
      'Authorization': `token ${GITHUB_API_TOKEN}`
    }
  })
    .then(res => Object.assign(
      require('./src/config'),
      res.json()
    ))
    .then(props => {
      return readFile('build/bundle.min.css')
        .then(css => {
          props.css = css.toString('utf8');
          return props;
        })
      ;
    })
    .then(props => (
      ReactDOMServer.renderToStaticMarkup(Index(props))
    ))
    .then(html => {
      fs.mkdir('build', function (_) {
        fs.writeFile('build/index.html', html, done);
      });
    })
  ;
});

gulp.task('default',
  gulp.series('rm', 'styles', 'render')
);

function clearRequireCache() {
  Object.keys(require.cache).forEach(id => {
    if (!/node_modules|gulpfile/.test(id)) {
      delete require.cache[id];
    }
  });
}
