import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import WaterDroplets from "./components/WaterDroplets";
function App() {
  return (
     <div className="min-h-screen text-slate-900">
       {/* <WaterDroplets /> */}
          <div className="relative z-10"> 
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
    </div>
  );
}

export default App;