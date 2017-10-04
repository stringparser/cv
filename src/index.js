
import React from 'react';
import Layout from './components/Layout';

export default function Index(props) {
  return (
    <Layout {...props}>
      <div className="flex-row">
        <div className="flex-column thumbnail" data-src={JSON.stringify(props)}>
          <img src={props.avatar_url} className="thumbnail__src" />
        </div>
        <div className="flex-column">
          list
        </div>
        <div className="flex-column">
          list
        </div>
      </div>

      <div className="flex-row flex-align-center">
        paragraph centered
      </div>
    </Layout>
  );
}
