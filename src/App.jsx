import React from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import Projects from "../src/components/Projects/Projects";
import About from "../src/components/About/About";
import Skills from "../src/components/Skills/Skills";
import Socials from "../src/components/Socials/Socials";
import Footer from "../src/components/Footer/Footer";
import Services from "../src/components/Services/Services";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Services />
      <Socials />
      <Footer />
    </>
  );
}

export default App;

