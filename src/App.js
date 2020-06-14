import React from "react";
import GlobalStyles from "./components/globalStyles/globalStyles";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Work from "./components/work";
import Contact from "./components/contact";
import Skills from "./components/skills";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Home />
      <Work />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
