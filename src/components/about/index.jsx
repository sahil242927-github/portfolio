import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './index.scss';
import { PageHeading, Paragraph } from '../styled-components';
export default () => (
  <section className='about' id='about'>
    <div>
      <PageHeading>About Me</PageHeading>
      <Paragraph>
        Well-organised person, problem solver, independent employee with high
        attention to detail. Fan of MMA, outdoor activities, TV series and,
        recently, English literature. A family person, father of two fractious
        girls, therefore remote employment is preferred.
      </Paragraph>
      <Paragraph>
        I believe in quality work. Deliver small pieces, but must have quality
        work! I Design websites from wireframes to deployement including coding
        frontend / backend and APIs.
      </Paragraph>

      <Paragraph>
        This portfolio website looks simple, but it has all the modern tech
        <br />
        <br />
        <Link smooth to='/website#tech-stack' offset={-70} duration={500}>
          <strong>About this website &#62;</strong>
        </Link>
      </Paragraph>
    </div>
    <div className='aboutme-img' />
  </section>
);
