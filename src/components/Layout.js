
import React from 'react';

export default function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title></title>
        <meta name="charset" content="utf-8" />
        <meta name="robots" content="index, follow" />
        <style id="css" dangerouslySetInnerHTML={{ __html: props.css }} />
      </head>
      <body className="flex-column">
        {props.children}
      </body>
    </html>
  );
}
