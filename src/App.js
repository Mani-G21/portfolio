import './App.css';
import About from './components/About';
import Background from './components/Background';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Project from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
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
  );
}

export default App;
