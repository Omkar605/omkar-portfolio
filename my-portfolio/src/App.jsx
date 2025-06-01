import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white scroll-smooth">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Resume />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
