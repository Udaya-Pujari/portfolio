import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AnimatedCursor from "react-animated-cursor"
import v5 from "../src/slickvideos/v5.mp4"
import v8 from "../src/slickvideos/v8.mp4"

function App() {
  return (
    <>
      {/* <div className="bg-gradient-to-r from-sky-100 to-teal-100"> */}
      <video className="video-background" src={v8} autoPlay loop muted />

      <div className="content-wrapper">
        <AnimatedCursor />
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio />

        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
