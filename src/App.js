import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <img src={logo} alt="Company Logo" className="logo" />
          <span className="brand-text">gatana.ge</span>
        </div>

        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
        </div>

        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>მთავარი</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>ჩვენ შესახებ</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>სერვისები</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>კონტაქტი</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="hero-content">
          <h1>კეთილი იყოს თქვენი მობრძანება <span>gatana.ge</span>-ზე</h1>
          <p>ჩვენ გთავაზობთ სანდო და პროფესიონალურ მომსახურებას.</p>
          <a href="#services" className="btn">გაიგე მეტი</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="about-container">
          <div className="about-text">
            <h2>ჩვენ შესახებ</h2>
            <p>
              ჩვენ ვართ პროფესიონალთა გუნდი, რომელიც ორიენტირებულია ხარისხზე,
              სანდოობაზე და შედეგებზე. ჩვენი მიზანია კლიენტებს შევთავაზოთ
              საუკეთესო გამოცდილება.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">📷</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section services">
        <h2>სერვისები</h2>
        <div className="service-cards">
          <div className="card">💡 სერვისი 1</div>
          <div className="card">⚡ სერვისი 2</div>
          <div className="card">🚀 სერვისი 3</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>კონტაქტი</h2>
        <p>📞 +995 555 55 00 32</p>
        <p>✉ info@company.ge</p>
        <a href="mailto:info@company.ge" className="btn">მოგვწერეთ</a>
      </section>
    </div>
  );
}

export default App;
