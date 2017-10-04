
import fs from 'fs';
import util from 'util';
import React from 'react';
import fetch from 'node-fetch';
import htmlToPDF from 'html-pdf';
import ReactDOMServer from 'react-dom/server';
import { StyleSheet } from 'aphrodite/no-important';

import Index from '../src';

const readFile = util.promisify(fs.readFile);

fetch('https://api.github.com/users/stringparser')
  .then(res => res.json())
  .then(props => {
    return readFile('src/styles/main.css')
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
