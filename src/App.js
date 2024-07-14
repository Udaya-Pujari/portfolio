import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* <div className="bg-gradient-to-r from-sky-300 to-cyan-300"> */}
      <div className="bg-gradient-to-r from-sky-100 to-teal-100">
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
