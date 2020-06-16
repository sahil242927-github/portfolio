import React, { useState } from 'react';
import sprite from '../logo-and-icons/skill-logo-and-icons.svg';
import { Link } from 'react-scroll';
import { Link as RouteLink } from 'react-router-dom';
import { Button } from '../styled-components';

import './index.scss';

export default ({ inView }) => {
  let [navLinks, setNavLinks] = useState([
    { link: '#home', text: 'home', status: 'inactive' },
    { link: '#skills', text: 'skills', status: 'inactive' },
    { link: '#work', text: 'work', status: 'inactive' },
    { link: '#about', text: 'about', status: 'inactive' },
    { link: '#contact', text: 'contact', status: 'inactive' },
  ]);

  const addClass = inView ? 'nav-bar' : 'nav-bar nav-bar-inverse';

  const makeActive = (clickedLink) => {
    const updatedLinks = [...navLinks];
    updatedLinks.forEach((link) =>
      clickedLink === link.text
        ? (link.status = 'active')
        : (link.status = 'inactive')
    );
    setNavLinks(updatedLinks);
  };

  return (
    <div>
      <div className='burger-menu'>
        <svg>
          <use href={`${sprite}#burger-menu`} />
        </svg>
        <ul>
          {navLinks.map((nav) => (
            <li className={nav.status} key={nav.text}>
              <Link
                to={nav.text}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={(event) => makeActive(event.target.text)}
                hashSpy={true}
              >
                {nav.text}
              </Link>
            </li>
          ))}
          <li>
            <RouteLink
              to={process.env.PUBLIC_URL + '/resume.pdf'}
              target='_blank'
              rel='noopener noreferrer'
              download
            >
              Download CV
            </RouteLink>
          </li>
        </ul>
      </div>
      <nav className={addClass}>
        <div className='left-links'>
          <ul>
            {navLinks.map((nav) => (
              <li className={nav.status} key={nav.text}>
                <Link
                  to={nav.text}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={(event) => makeActive(event.target.text)}
                  hashSpy={true}
                >
                  {nav.text}
                </Link>
              </li>
            ))}
          </ul>
          <Button className='resume' width='auto'>
            <RouteLink
              to={process.env.PUBLIC_URL + '/resume.pdf'}
              target='_blank'
              rel='noopener noreferrer'
              download
            >
              Download CV
            </RouteLink>
          </Button>
        </div>
      </nav>
    </div>
  );
};
