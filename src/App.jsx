import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Policies from "./pages/Policies";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      {/* Global theme wrapper */}
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
