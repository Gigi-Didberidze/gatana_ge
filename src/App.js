import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.png";
import slide1 from "./assets/slide1.jpeg";
import slide2 from "./assets/slide2.jpeg";
import slide3 from "./assets/slide3.jpeg";
import gatanaLogo from "./assets/gatana.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slide1, slide2, slide3];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
          <a href="#home" onClick={() => setMenuOpen(false)}>
            მთავარი
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            ჩვენ შესახებ
          </a>
          {/* <a href="#services" onClick={() => setMenuOpen(false)}>
            სერვისები
          </a> */}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            კონტაქტი
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="slider-container">
          <div className="slider-wrapper">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                style={{ backgroundImage: `url(${slide})` }}
              />
            ))}
          </div>
        </div>

        <div className="hero-content">
          <h1>
            კეთილი იყოს თქვენი მობრძანება <span>gatana.ge</span>-ზე
          </h1>
          <p>ჩვენ გთავაზობთ სანდო და პროფესიონალურ მომსახურებას.</p>
          {/* <a href="#services" className="btn">
            გაიგე მეტი
          </a> */}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="about-container">
          <div className="about-text">
            <h2>ჩვენ გთავაზობთ</h2>
            <p>
              ჩვენ ვართ პროფესიონალთა გუნდი, რომელიც ორიენტირებულია ხარისხზე,
              სანდოობაზე და შედეგებზე. ჩვენი მიზანია კლიენტებს შევთავაზოთ
              საუკეთესო გამოცდილება.
            </p>
          </div>
          <div className="about-image">
            <img src={gatanaLogo} alt="About" className="gatana-logo" />
          </div>
        </div>
      </section>

      {/* Services */}
      {/* <section id="services" className="section services">
        <h2>სერვისები</h2>
        <div className="service-cards">
          <div className="card">💡 სერვისი 1</div>
          <div className="card">⚡ სერვისი 2</div>
          <div className="card">🚀 სერვისი 3</div>
        </div>
      </section> */}

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>კონტაქტი</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+995 555 55 00 32</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <span>info@gatana.ge</span>
          </div>
        </div>

        <div className="social-links">
          <h3>ჩვენი სოციალური ქსელები</h3>
          <div className="social-grid">
            <a
              href="https://www.facebook.com/gatana.ge?mibextid=wwXIfr&rdid=FidXhVFXT5X3we7K&share_url=https://www.facebook.com/share/1CaN2YKEdE/?mibextid%3DwwXIfr"
              className="social-link facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon">📘</div>
              <div className="social-text">
                <span className="social-name">Facebook</span>
                <span className="social-handle">@gatana.ge</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/gatana.ge?igsh=MTBhb2V6ODh5M3Z6dw%3D%3D&utm_source=qr"
              className="social-link instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon">📷</div>
              <div className="social-text">
                <span className="social-name">Instagram</span>
                <span className="social-handle">@gatana.ge</span>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@gatana.ge?_t=ZS-90iEeSurEtp&_r=1"
              className="social-link tiktok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon">🎵</div>
              <div className="social-text">
                <span className="social-name">TikTok</span>
                <span className="social-handle">@gatana.ge</span>
              </div>
            </a>

            {/* <a href="mailto:info@gatana.ge" className="social-link email">
              <div className="social-icon">✉</div>
              <div className="social-text">
                <span className="social-name">Email</span>
                <span className="social-handle">info@gatana.ge</span>
              </div>
            </a> */}
          </div>
        </div>

        <a href="mailto:info@gatana.ge" className="btn">
          მოგვწერეთ
        </a>
      </section>
    </div>
  );
}

export default App;
