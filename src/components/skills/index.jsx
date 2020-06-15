import React from 'react';
import './index.scss';
import sprite from '../logo-and-icons/skill-logo-and-icons.svg';
import { PageHeading, Paragraph } from '../styled-components';

const iconsArr = [
  'bootstrap',
  'html',
  'redis',
  'docker',
  'css',
  'webpack',
  'javascript',
  'expressjs',
  'mongodb',
  'nodejs',
  'git',
  'circleci',
  'github',
  'jira',
  'react',
  'redux',
  'sass',
  'adobe-xd',
  'redux-saga',
  'eslint',
  'w3c',
];

export default () => (
  <section className='skills' id='skills'>
    <div className='skill-description-text'>
      <PageHeading>Skills & Experience</PageHeading>
      <Paragraph>
        Well-organised person, problem solver, independent employee with high
        attention to detail. Fan of MMA, outdoor activities, TV series and,
        recently, English literature. A family person, father of two fractious
        girls, therefore remote employment is preferred. I also like work on
        C2H.
        <br />
        <br />
        I have got around 9 years of experience and I wokred on multiple stacks
        like LAMP, MEAN, MERN stack. Started my currier as a web developer back
        in 2010.
        <br />
        <br />
        Currently working on MERN Stack.
      </Paragraph>
    </div>
    <div className='skill-logos'>
      {iconsArr.map((icon) => (
        <svg className={icon} key={icon}>
          <use href={`${sprite}#${icon}`} />
        </svg>
      ))}
    </div>
  </section>
);
