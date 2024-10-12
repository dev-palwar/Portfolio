import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import ContactForm from "./Pages/contact/ContactForm";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<ContactForm/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
