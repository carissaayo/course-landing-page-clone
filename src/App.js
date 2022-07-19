import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Subjects from "./components/Subjects/Subjects";
import CTA from "./components/CTA/CTA";
import Experts from "./components/Experts/Experts";
import Outcome from "./components/Outcome/Outcome";
import Footer from "./components/Footer/Footer";


function App() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const scrollUp = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", scrollUp);

    return () => window.removeEventListener("scroll",scrollUp);
  }, []);
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <Subjects />
      <CTA />
      <Experts />
      <Outcome />
      <Footer />
      <a href="#" className={showScroll ? "scrollup show-scroll" : "scrollup "}>
        <i class="bi bi-arrow-90deg-up"></i>
      </a>
    </div>
  );
}

export default App;
