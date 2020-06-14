import React from 'react';
import './index.scss';

import { PageHeadingWithLines } from '../styled-components';

export default () => (
  <section className='work' id='work'>
    <PageHeadingWithLines>Work</PageHeadingWithLines>

    <div className='projects'>
      {/* Using Art Direction method for responsive images */}
      <picture>
        <source
          media='(max-width:64em)'
          srcSet={
            process.env.PUBLIC_URL +
            '/img/project-1-ipad-1x.jpg 1x ,' +
            process.env.PUBLIC_URL +
            '/img/project-1-ipad-2x.jpg 2x'
          }
        />
        <img
          srcSet={
            process.env.PUBLIC_URL +
            '/img/project-1.jpg 1x,' +
            process.env.PUBLIC_URL +
            '/img/project-1.jpg 2x'
          }
          alt='project-1'
          src={process.env.PUBLIC_URL + '/img/project-1.jpg'}
        />

        {/* Using Resolution Switching method for responsive images */}
      </picture>
      <img
        srcSet={
          process.env.PUBLIC_URL +
          '/img/project-2.jpg 300w,' +
          process.env.PUBLIC_URL +
          '/img/project-2.jpg 640w'
        }
        sizes='(max-width:25em) 72vw , 280px'
        img={process.env.PUBLIC_URL + '/img/project-1.jpg'}
        alt='project-2'
      />

      <img
        src={process.env.PUBLIC_URL + '/img/project-3.jpg'}
        alt='project-3'
      />
      <img
        src={process.env.PUBLIC_URL + '/img/project-4.jpg'}
        alt='project-4'
      />
      <img
        src={process.env.PUBLIC_URL + '/img/project-5.jpg'}
        alt='project-5'
      />
      <img
        src={process.env.PUBLIC_URL + '/img/project-6.jpg'}
        alt='project-6'
      />
    </div>
  </section>
);
