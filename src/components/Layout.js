
import React from 'react';

import { classes } from '../util';

export default function Layout(props = {}) {
  return (
    <html lang="en">
      <head>
        <title>Javier Carrillo Milla</title>
        <meta name="charset" content="utf-8" />
        <meta name="robots" content="index, follow" />
        <style id="css" dangerouslySetInnerHTML={{ __html: props.css }} />
      </head>
      <body className={classes("flex-column", props.className)}>
        {props.children}
      </body>
    </html>
  );
}
