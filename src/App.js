import React, { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import { Route } from 'react-router-dom';
import GlobalStyles from './components/globalStyles/globalStyles';
import Navbar from './components/navbar';
import Home from './components/home';
import Work from './components/work';
import Contact from './components/contact';
import Skills from './components/skills';
import About from './components/about';
import Footer from './components/footer';
import Spinner from './components/spinner';
import './App.scss';

const AboutWebsite = lazy(() => import('./components/about-website'));

function App() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <div id='container'>
      <Suspense fallback={<Spinner />}>
        <GlobalStyles />
        <Navbar inView={inView} />
        <Home ref={ref} />
        <Work />
        <About />
        <Route path='/portfolio' component={AboutWebsite} />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
