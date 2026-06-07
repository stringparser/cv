import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

import * as config from '../src/config';
import { globalStyles } from '../src/shared/styles';

const props = {
  ...config,
  ...config.default,
  website: undefined,
};

const sharedStyles = createStyles({
  flexRow: {
    display: 'flex',
    flexWrap: 'wrap',

    '& > :not(:last-child)': {
      marginRight: '1.5rem',
    },

    '& > *': {
      minWidth: 0,
      flex: '1 1 0',
      maxWidth: '100%',
    },
  },
  columnList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '1.5rem',

    '& > li': {
      minWidth: 0,
      maxWidth: '100%',
      boxSizing: 'border-box',
      breakInside: 'avoid',
      pageBreakInside: 'avoid',
    },
  },
});

export type ExperienceItemProps = {
  el: typeof config.experience[0];
  showTitle?: boolean;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  el,
  showTitle = true,
}) => {
  return (
    <li>
      <p className="job-title">{el.title}</p>
      <p>{el.duration}</p>
      <p>{el.location}</p>
      {showTitle && <h3>{el.title}</h3>}
      {el.companyLink && (
        <p>
          {el.appName && 'On '}
          {el.appName && el.appLink && <a href={el.appLink}>{el.appName}</a>}
          {el.appLink ? ' for ' : 'For '}
          {el.companyLink && <a href={el.companyLink}>{el.company}</a>}
        </p>
      )}

      <hr />

      {(el.description || '')
        .trim()
        .split(/[\n]+|\s{2,}/)
        .map((line, jndex) => (
          <p key={jndex}>{line.trim()}</p>
        ))}
      <br />
    </li>
  );
};

const useStyles = makeStyles({
  ...globalStyles,
  ...sharedStyles,
  root: {
    width: '1300px',
    maxWidth: '100%',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: '2rem 2.75rem',

    '@media print': {
      width: '100%',
      maxWidth: '100%',
      padding: '1rem 1.25rem',
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
          <li className={classes.flexColumn}>
            <p>
              <a href={`tel:${props.phone}`} target="_blank" rel="noreferrer">
                {props.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${props.email}`}
                target="_blank"
                rel="noreferrer"
              >
                {props.email}
              </a>
            </p>
          </li>
          <li className={classes.flexColumn}>
            <p>
              <a href={props.github} target="_blank" rel="noreferrer">
                {cleanUrl(props.github)}
              </a>
            </p>
            <p>
              <a href={props.linkedIn} target="_blank" rel="noreferrer">
                {cleanUrl(props.linkedIn)}
              </a>
            </p>
          </li>
        </ul>
      </div>

      <hr />

      <div className={classes.flexRow}>
        <div>
          <h2>Technologies</h2>
          <hr />

          <ul>
            {props.technologies.map((el, index) => (
              <li key={index}>
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Languages</h2>
          <hr />

          <ul>
            {props.languages.map((el, index) => (
              <li key={index}>
                <p>
                  {el.name}: {el.level}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr />
      <hr />

      <div>
        <h2>Education</h2>
        <hr />

        <ul className={classes.columnList}>
          {props.education.map((el, index) => {
            return (
              <li key={index}>
                <p className="job-title">{el.title}</p>
                <p>{el.duration}</p>
                <p>{el.location}</p>
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

      <div className={classes.flexRow}>
        <div>
          <h2>Experience</h2>
          <hr />
          <ul className={classes.columnList}>
            {props.experience.map((el, index) => {
              return <ExperienceItem showTitle={false} key={index} el={el} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function cleanUrl(url: string) {
  return url.replace(/^https?[:]\/\//, '');
}
