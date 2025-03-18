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
import Loader from "./components/Loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mainContainerLoaded, setMainContainerLoaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 100); // Match fade-out duration
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Ensure mainContainerLoaded is set after the loader is completely removed
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setMainContainerLoaded(true);
      }, 50); // Short delay to ensure reflow
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader isFadingOut={isFadingOut} />
      ) : (
        <>
          
          <Background />
          
          <Header />
          <div
            className={`container ${mainContainerLoaded ? "slide-up" : "slide-hidden"}`}
          >
             
             
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
