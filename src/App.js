import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Email from "./components/Email";
import End from "./components/End";
import About from "./components/About";
const App = () => {
  return (
    <>
      <div className="portfolio-body">
        <div className="portfolio-container wf-section">
          <Navbar></Navbar>
          <Hero></Hero>
          <About></About>
          <Projects></Projects>
          <Technologies></Technologies>
          <Email></Email>
          <End></End>
        </div>
      </div>
    </>
  );
};

export default App;
