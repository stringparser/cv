

import fs from 'fs';
import del from 'del';
import util from 'util';
import path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import htmlToPdf from 'html-pdf';
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

  browserSync({
    open: false,
    files: [ './build/**/*.{css,html}' ],
    server: './build',
  });

  gulp.watch('./src/**/*', gulp.task('default'));
});

gulp.task('render', function (done) {
  const indexFilename = path.resolve('.', 'src', 'Index');

  delete require.cache[indexFilename];
  const Index = require(indexFilename).default;

  return fetch('https://api.github.com/users/stringparser', {
    headers: {
      'Authorization': `token ${GITHUB_API_TOKEN}`
    }
  })
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
      return ReactDOMServer.renderToStaticMarkup(Index(props));
    })
    .then(html => {
      const outputFile = 'build/index';

      fs.mkdir('build', function (mkdirError) {
        fs.writeFile(`${outputFile}.html`, html, done);

        htmlToPdf
          .create(html, { options: 'A4' })
          .toFile(`${outputFile}.pdf`, done)
        ;
      });
    })
  ;
});

gulp.task('default',
  gulp.series('rm', 'styles', 'render')
);
