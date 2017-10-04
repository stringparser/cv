
import fs from 'fs';
import del from 'del';
import util from 'util';
import path from 'path';
import fetch from 'node-fetch';
import ReactDOMServer from 'react-dom/server';

import gulp from 'gulp';
import less from 'gulp-less';
import concat from 'gulp-concat';
import cssmin from 'gulp-cssmin';

const readFile = util.promisify(fs.readFile);

gulp.task('rm', function (done) {
  del.sync(['./build']);
  done();
});

gulp.task('styles', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: [ path.resolve('.', 'node_modules') ]
    }))
    .pipe(concat('bundle.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('build'))
  ;
});

gulp.task('watch', function () {
  const browserSync = require('browser-sync');

  browserSync({
    open: false,
    server: './build',
    files: [ './build/**' ]
  });

  gulp.watch('./src/**/*', gulp.task('default'));
});

gulp.task('render', function (done) {
  const Index = require('./src/Index').default;

  return fetch('https://api.github.com/users/stringparser')
    .then(res => res.json())
    .then(props => {
      return readFile('build/bundle.min.css')
        .then(css => {
          props.css = css.toString('utf8');
          return props;
        })
        ;
    })
    .then(props => {
      return ReactDOMServer.renderToStaticMarkup(Index(props))
    })
    .then(staticMarkup => {
      fs.mkdir('build', function (mkdirError) {
        fs.writeFile('build/index.html', staticMarkup, function (writeFileError) {
          if (writeFileError) {
            throw writeFileError;
          }
        });
      });
    })
  ;
});

gulp.task('default',
  gulp.series('rm', 'styles', 'render')
);
