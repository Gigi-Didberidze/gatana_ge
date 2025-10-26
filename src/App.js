import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import logo from "./logo.png";
import slide1 from "./assets/slide1.jpeg";
import slide2 from "./assets/slide2.jpeg";
import slide3 from "./assets/slide3.jpeg";
import gatanaLogo from "./assets/gatana.png";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";

function App() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slide1, slide2, slide3];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setMenuOpen(false);
  };

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
          <span className="brand-text">Gatana.ge</span>
        </div>

        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
        </div>

        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            {t("nav.home")}
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("nav.about")}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("nav.contact")}
          </a>
          
          <div className="language-selector">
            <button 
              className={`lang-btn ${i18n.language === 'ka' ? 'active' : ''}`}
              onClick={() => changeLanguage('ka')}
              title="Georgian"
            >
              ქართ.
            </button>
            <button 
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
              title="English"
            >
              EN
            </button>
            <button 
              className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
              onClick={() => changeLanguage('ru')}
              title="Russian"
            >
              РУ
            </button>
          </div>
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
            {t("hero.title")} <span>{t("hero.titleHighlight")}</span>-{i18n.language === 'ru' ? 'е' : i18n.language === 'en' ? '' : 'ზე'}
          </h1>
          <p>{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="about-container">
          <div className="about-text">
            <h2>{t("about.title")}</h2>
            <p>{t("about.description")}</p>
          </div>
          <div className="about-image">
            <img src={gatanaLogo} alt="About" className="gatana-logo" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>{t("contact.title")}</h2>
        <div className="contact-info">
          <a href="tel:+99555550032" className="contact-item call-button" aria-label="Call us">
            <span className="contact-icon"><FiPhone /></span>
            <span>{t("contact.phone")}</span>
          </a>
          <a href="mailto:info@gatana.ge" className="contact-item" aria-label="Email us">
            <span className="contact-icon"><FiMail /></span>
            <span>{t("contact.email")}</span>
          </a>
        </div>

        <div className="social-links">
          <h3>{t("contact.socialTitle")}</h3>
          <div className="social-grid">
            <a
              href="https://www.facebook.com/gatana.ge?mibextid=wwXIfr&rdid=FidXhVFXT5X3we7K&share_url=https://www.facebook.com/share/1CaN2YKEdE/?mibextid%3DwwXIfr"
              className="social-link facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon" aria-hidden="true"><SiFacebook /></div>
              <div className="social-text">
                <span className="social-name">{t("contact.facebook")}</span>
                <span className="social-handle">@gatana.ge</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/gatana.ge?igsh=MTBhb2V6ODh5M3Z6dw%3D%3D&utm_source=qr"
              className="social-link instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon" aria-hidden="true"><SiInstagram /></div>
              <div className="social-text">
                <span className="social-name">{t("contact.instagram")}</span>
                <span className="social-handle">@gatana.ge</span>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@gatana.ge?_t=ZS-90iEeSurEtp&_r=1"
              className="social-link tiktok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon" aria-hidden="true"><SiTiktok /></div>
              <div className="social-text">
                <span className="social-name">{t("contact.tiktok")}</span>
                <span className="social-handle">@gatana.ge</span>
              </div>
            </a>
          </div>
        </div>

        <a href="mailto:info@gatana.ge" className="btn">
          {t("contact.sendMessage")}
        </a>
      </section>
    </div>
  );
}

export default App;
