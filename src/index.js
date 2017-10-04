
import React from 'react';
import Layout from './components/Layout';

function cleanURL(url) {
  return url.replace(/https?[:/]*/, '');
}

export default function Index(props) {
  const phone = "+49 176 3013 9466";
  return (
    <Layout {...props} className="ear-tr">
      <div className="flex flex_row flex_center">
        <div className="flex__item">
          <h2>Javier Carrillo Milla</h2>
        </div>
      </div>
      <br />
      <div className="flex flex_row flex_justify-around">
        <div className="flex__item thumbnail">
          <img src={props.avatar_url} alt="profile" className="thumbnail__src" />
        </div>
        <div className="flex__item">
          <h2 className="u-mt0">Contact</h2>
          <ul className="list">
            <li>
              <a href={`//github.com/${props.login}`}>
                {`github.com/${props.login}`}
              </a>
            </li>
            <li>
              <a href={`mailto:${props.email}`}>
                {props.email}
              </a>
            </li>
            <li>
              <a href={`tel:${phone.replace(/\s+/g, '')}`}>
                {phone}
              </a>
            </li>
            <li>
              13353, Berlin, Germany
            </li>
          </ul>
        </div>
        <div className="flex__item">
          <h2 className="u-mt0">Languages</h2>
          <ul>
            <li>
              C++: intermediate
            </li>
            <li>
              Scala: intermediate
            </li>
            <li>
              German: intermediate
            </li>
            <li>
              English: advanced
            </li>
            <li>
              Spanish: native
            </li>
            <li>
              JavaScript: advanced
            </li>
            <li>
              TypeScript: intermediate
            </li>
            <li>
              CoffeeScript: advanced
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex_column flex_center">
        <h2 className="u-m0">tl;dr</h2>
        <p className="u-indent-1 u-fixed-width-45">
          My background is in Physics, I've studied it in <a href="//www.ugr.es">Granada</a> (Spain) and in <a href="//www.lmu.de">Munich</a> (Germany). I like to solve problems, the simpler the better. I'm from a <a href="//goo.gl/maps/pNam2Bxtsyw">tiny town in Jaén</a> (Spain). I like talking with people. I have had 3 bands in Granada for which I made some songs and sing. The first contact I had with web development was around winter 2012. Started with <a href="//nodejs.org">node</a> which led to <a href="//github.com/strongloop/express">express</a>, <a href="//github.com/jadejs/jade">jade</a> and <a href="//mongodb.org/">mongodb</a>, moved to <a href="//github.com/meteor/meteor">meteor</a> after which I wanted to really learn something from the ground up so I looked around and found <a href="//facebook.github.io/react">React</a>, <a href="//github.com/faye/faye">faye</a> and <a href="//github.com/gulpjs/gulp">gulp</a>. I prefer doing things and then talking about them instead of the other way around. I like kindness and honesty. I believe in patience and hard work.
        </p>
      </div>

      <div className="flex flex_justify-between">
        <div className="flex__item">
          <h2>Education</h2>
          <quote>
            Only a subset of lectures listed
          </quote>
          <ul className="list list_unstyled">
            <li>
              1996-2004: Musical Studies on Piano
            </li>
            <li>
              2004-2012: Physics UGR, 5 years, M.Sc.<br/>
              <ul>
                <li>General Relativity</li>
                <li>Quantum Field Theory</li>
                <li>Computational Statistics with R</li>
                <li>Mid-Latitude Atmospheric Dynamics</li>
                <li>Computational Statistical Mechanics</li>
              </ul>
            </li>
            <li>
              2009-2010: LMU Munich, Germany
              <ul>
                <li>Biophysics of Systems</li>
                <li>Fortgeschrittendenn Praktikum Biophysik</li>
              </ul>
            </li>
          </ul>

          UGR: University of Granada<br/>
          LMU: Ludwig-Maximilians-Universität
        </div>

        <div className="flex__item">
          <h2>Experience</h2>
          <quote>
            programming, education and consulting
          </quote>
          <ul className="list list_unstyled">
            <li>
              2007: Summer School Physics Tutor
            </li>
            <li>
              2012-2013: Freelance Physics and Math Tutor
            </li>
            <li>
              2013-2015.02: Junior Programmer at NGA HR
              <ul>
                <li>Issue consultant</li>
                <li>Implementing and maintaining features</li>
                <li>Testing front-end user interfaces</li>
              </ul>
            </li>
            <li>
              2015.08-2016.12: Front-end developer at Fit Analytics GmbH
              <ul>
                <li>Writing integrations for new clients</li>
                <li>Improving build process of front end code</li>
                <li>Implementing new features for the size advisor</li>
                <li>Implementing highly customized versions of the size advisor</li>
                <li>Actively contributing with the core team</li>
              </ul>
            </li>
            <li>
              2017.01-present: Software Egineer at Zalando SE
            </li>
          </ul>
        </div>
      </div>

      <div className="page flex flex_justify-between">
        <div className="flex__item">
          <h2>Projects</h2>
          <quote>
            libraries or projects I'm involved with <br />
          </quote>
          <ul className="list list_unstyled">
            <li>
              <a href="//github.com/stevelacy/gulp-git">
                stevelacy/gulp-git
                </a>
              <p>Git plugin for gulp (gulpjs.com)</p>
            </li>
            <li>
              <a href="//github.com/stringparser/parth">
                stringparser/parth
                </a>
              <p>Path to RegExp madness not only for an url</p>
            </li>
            <li>
              <a href="//github.com/stringparser/gulp-repl">
                stringparser/gulp-repl
                </a>
              <p>A simple repl for gulp</p>
            </li>
            <li>
              <a href="//github.com/stringparser/gulp-runtime">
                stringparser/gulp-runtime
                </a>
              <p>An alternate interface to vinyl-fs</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
