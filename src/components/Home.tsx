import React from "react";
import Projects from "./Projects";
import HBar from "./HBar";
import Footer from "./Footer";
import Dogs from "./Dogs";
import About from "./About";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <About />
      <HBar />
      <Projects />
      <HBar />
      <Dogs />
      <Footer />
    </>
  );
}


export default Home;
