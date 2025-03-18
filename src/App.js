import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Loader from "./components/Loader"; // Import the loader component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add a 2-second delay after the content is loaded
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2-second delay
    };

    // Check if the document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      document.addEventListener("DOMContentLoaded", handleLoad);
      window.addEventListener("load", handleLoad);

      return () => {
        document.removeEventListener("DOMContentLoaded", handleLoad);
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <>
          <Background />
          <Header />
          <div className="container">
            <HeroSection />
            <About />
            <Project />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
