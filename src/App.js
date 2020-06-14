import React from 'react';
import { useInView } from 'react-intersection-observer';
import GlobalStyles from './components/globalStyles/globalStyles';
import Navbar from './components/navbar';
import Home from './components/home';
import Work from './components/work';
import Contact from './components/contact';
import Skills from './components/skills';
import About from './components/about';
import Footer from './components/footer';

import './App.scss';

function App() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <div id='container'>
      <GlobalStyles />
      <Navbar inView={inView} />
      <Home ref={ref} />
      <Work />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
