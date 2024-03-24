import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import End from "./components/End";
import About from "./components/About";
import Footer from "./components/Foot";
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
          <End></End>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
