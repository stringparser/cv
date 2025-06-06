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
      <p>
        {el.duration} ({el.location})
      </p>
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
    margin: '0 auto',
    padding: '2rem 2.75rem',
  },
  flexColumn: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  other: {
    color: 'here',
  },
  pageBreak: {
    marginTop: '3rem',
    pageBreakBefore: 'always',
  },
});

export default function Index() {
  const classes = useStyles();
  const freelanceExperienceIndex = 7;

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
              <a href={`tel:${props.phone}`} target="_blank">{props.phone}</a>
            </p>
            <p>
              <a href={`mailto:${props.email}`} target="_blank">{props.email}</a>
            </p>
          </li>
          <li className={classes.flexColumn}>
            <p>
              <a href={props.github} target="_blank">{cleanUrl(props.github)}</a>
            </p>
            <p>
              <a href={props.linkedIn} target="_blank">{cleanUrl(props.linkedIn)}</a>
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

      <div className={classes.flexRow}>
        <div>
          <h2>Experience</h2>
          <hr />

          <h3>Freelance</h3>
          <hr />

          <ul className={classes.flexRow}>
            {props.experience
              .slice(0, freelanceExperienceIndex)
              .map((el, index) => {
                return <ExperienceItem showTitle={false} key={index} el={el} />;
              })}
          </ul>

          <h3 className={classes.pageBreak}>Fulltime</h3>
          <hr />

          <ul className={classes.flexRow}>
            {props.experience
              .slice(freelanceExperienceIndex)
              .map((el, index) => {
                return <ExperienceItem key={index} el={el} />;
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