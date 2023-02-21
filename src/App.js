import React from "react";
import Home from "./components/Home";
import Languages from "./components/Languages";
import Navigation from "./components/Navigation";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Summery from "./components/Summery";
import Carrer from "./components/Carrer";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Progress from "./components/Progress";
import Theme from "./components/Theme";

function App() {
  return (
    <>
      <Theme />
      <Progress />
      <div className="container">
        <Navigation />
        <Home />
        <Summery />
        <Languages />
        <Process />
        <Projects />
        <Carrer />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
