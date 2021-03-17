import React from 'react';
import { Link, makeStyles } from '@material-ui/core';

import * as config from 'src/config';
import { globalStyles } from 'src/shared/styles';

const props = {
  ...config,
  ...config.default,
  website: undefined,
};

const useStyles = makeStyles({
  ...globalStyles,
  root: {
    width: '1300px',
    margin: '0 auto',
    padding: '2rem 2.75rem',
  },
  flexRow: {
    display: 'flex',
    flexWrap: 'wrap',

    '& > :not(:last-child)': {
      marginRight: '1.5rem',
    },
  },
  flexColumn: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  other: {
    color: 'here',
  },
});

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <hr />
        <hr />

        <h1>Javier Carrillo Milla</h1>
        <hr />

        <ul className={classes.flexRow}>
          <li>
            <p>{props.address.street}</p>
            <p>
              {props.address.zip} {props.address.city}
            </p>
          </li>
          <li className={classes.flexColumn}>
            <p>
              <Link href={`tel:${props.phone}`}>{props.phone}</Link>
            </p>
            <p>
              <Link href={`mailto:${props.email}`}>{props.email}</Link>
            </p>
          </li>
        </ul>
      </div>

      <hr />
      <hr />
      <hr />

      <div className={classes.flexRow}>
        <div>
          <h2>Technologies</h2>
          <hr />

          <ul>
            {props.technologies.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Languages</h2>
          <hr />

          <ul>
            {props.languages.map((el, index) => (
              <li key={index}>
                {el.name}: {el.level}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr />
      <hr />
      <hr />

      <div>
        <h2>Education</h2>
        <hr />

        <ul className={classes.flexRow}>
          {props.education.map((el, index) => {
            return (
              <li key={index}>
                <p>
                  {el.duration} at {el.location}
                </p>
                <h3>{el.title}</h3>
                {(el.description || '')
                  .trim()
                  .split('\n')
                  .map((line, jndex) => (
                    <p key={jndex}>{line.trim()}</p>
                  ))}
                <br />
              </li>
            );
          })}
        </ul>
      </div>

      <hr />
      <hr />
      <hr />

      <div className={classes.flexRow}>
        <div>
          <h2>Experience</h2>
          <hr />

          <ul className={classes.flexRow}>
            {props.experience.map((el, index) => {
              return (
                <li key={index}>
                  <p>
                    {el.duration} ({el.location})
                  </p>
                  <h3>{el.title}</h3>
                  {el.link && (
                    <p>
                      {el.link && 'For '}
                      {el.link && <Link href={el.link}>{el.company}</Link>}
                    </p>
                  )}

                  <hr />

                  {(el.description || '')
                    .trim()
                    .split('\n')
                    .map((line, jndex) => (
                      <p key={jndex}>{line.trim()}</p>
                    ))}
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
