
import React from 'react';
import Layout from './components/Layout';

export default function Index(props) {
  return (
    <Layout {...props}>
      <div className="flex-row">
        <div className="flex-column thumbnail" data-src={JSON.stringify(props)}>
          page 1
        </div>
        <div className="flex-column">
          list
        </div>
        <div className="flex-column">
          list
        </div>
      </div>

      <div className="page flex-row flex-align-center">
        page 2 - paragraph centered
      </div>

      <div className="flex-row">
        <quote>
          Only a subset of lectures listed
        </quote>
      </div>
    </Layout>
  );
}
