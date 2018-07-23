
import React from 'react';
import Layout from './components/Layout';

export default function Index(props) {
  return (
    <Layout {...props} className="ear-tr">

      <div className="flex flex_column">
        <h1 className="u-m0">
          Javier Carrillo Milla
        </h1>
        <br />
        <ul className="u-m0 list list_unstyled list_inline">
          <li>
            <a href={`tel:${props.phone}`}>
              {props.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${props.email}`}>
              {props.email}
            </a>
          </li>
          {props.website && <li>{props.website}</li>}
          <li>{props.location}</li>
        </ul>
      </div>

      <div className="flex flex_justify-center">
        <div className="flex__item">
          <h2>
            Technologies
          </h2>
          <ul className="list list_unstyled u-m0">
            {props.technologies
              .map((el, index) => <li key={index}>{el}</li>)
            }
          </ul>
        </div>
        <div className="flex__item">
          <h2>
            Languages
          </h2>
          <ul className="list list_unstyled u-mt0">
            {props.languages
              .map((el, index) =>
                <li key={index}>{el.name}: {el.level}</li>
              )
            }
          </ul>
        </div>
      </div>

      <div className="flex flex_justify-center">
        <div className="flex__item">
          <h2>
            Experience
          </h2>
          <ul className="list list_unstyled u-m0">
            {props.experience.map((el, index) => {
              return (
                <li key={index}>
                  <p className="u-m0">
                    {el.duration} ({el.location})
                  </p>
                  <h3 className="u-m0">
                    {el.title}
                  </h3>
                  {el.link && (
                    <p className="u-m0">
                      {el.link && 'For '}
                      {el.link && <a href={el.link}>{el.company}</a>}
                    </p>
                  )}

                  {(el.description || '')
                    .trim()
                    .split('\n')
                    .map((line, jndex) => <p key={jndex}>{line}</p>)
                  }
                  <br />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex__item">
          <h2>
            Education
          </h2>
          <ul className="list list_unstyled u-m0">
            {props.education.map((el, index) => {
              return (
                <li key={index}>
                  <p className="u-m0">
                    {el.duration} at {el.location}
                  </p>
                  <h3 className="u-m0">
                    {el.title}
                  </h3>
                  <br />
                  {(el.description || '')
                    .trim()
                    .split('\n')
                    .map((line, jndex) =>
                      <p key={jndex} className="u-m0">
                        {line}
                      </p>
                    )
                  }
                  <br />
                </li>
              )
            })}
            <li>
              <hr />
              <p>
                UGR: University of Granada <br />
                LMU: Ludwig-Maximilians-Universität <br />
                CPM: Conservatorio Profesional de Música
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
