import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
      </div>
    </>
  );
}

export default App;
