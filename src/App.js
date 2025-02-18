import './App.css';
import About from './components/About';
import Background from './components/Background';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Project from './components/Projects';


function App() {
  return (
    <>
      <Background />
      <Header /> 
      <div className="container">
        <HeroSection />
        <About />
        <Project />
      </div>
    </>
  );
}

export default App;
