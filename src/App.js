import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import logo from "./logo.png";
import slide1 from "./assets/slide1.jpeg";
import slide2 from "./assets/slide2.jpeg";
import slide3 from "./assets/slide3.jpeg";
import gatanaLogo from "./assets/gatana.png";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import { FiPhone, FiMail, FiCheck, FiPackage, FiTruck, FiShield } from "react-icons/fi";

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
    // Update document language for SEO
    document.documentElement.lang = lang;
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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

  // SEO: Set initial language and meta tags
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    
    // Update meta description based on language
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const descriptions = {
        ka: "Gatana.ge - პროფესიონალური ნარჩენების მართვის სერვისი საქართველოში. ხელმისაწვდომი, სანდო და ეფექტური.",
        en: "Gatana.ge - Professional waste management services in Georgia. Affordable, reliable, and efficient.",
        ru: "Gatana.ge - Профессиональные услуги по управлению отходами в Грузии. Доступно, надежно и эффективно."
      };
      metaDescription.setAttribute('content', descriptions[i18n.language] || descriptions.en);
    }
  }, [i18n.language]);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="nav-left">
          <a href="#home" className="brand-link" aria-label="Gatana.ge - Return to homepage">
            <img src={logo} alt="Gatana.ge waste management company logo" className="logo-img" />
            <span className="brand-text">Gatana.ge</span>
          </a>
        </div>

        <button 
          className="burger" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
        </button>

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
          
          <div className="language-selector" role="group" aria-label="Language selection">
            <button 
              className={`lang-btn ${i18n.language === 'ka' ? 'active' : ''}`}
              onClick={() => changeLanguage('ka')}
              aria-label="Switch to Georgian language"
              lang="ka"
            >
              ქართ.
            </button>
            <button 
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
              aria-label="Switch to English language"
              lang="en"
            >
              EN
            </button>
            <button 
              className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
              onClick={() => changeLanguage('ru')}
              aria-label="Switch to Russian language"
              lang="ru"
            >
              РУ
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="section hero">
        <div className="slider-container" role="region" aria-label="Image slideshow">
          <div className="slider-wrapper">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                style={{ backgroundImage: `url(${slide})` }}
                role="img"
                aria-label={`Slide ${index + 1} of ${slides.length}`}
              />
            ))}
          </div>
          
          <div className="hero-overlay" aria-hidden="true"></div>
          
          {/* Arrow buttons */}
          <button 
            className="slider-nav prev" 
            onClick={prevSlide} 
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button 
            className="slider-nav next" 
            onClick={nextSlide} 
            aria-label="Next slide"
          >
            ›
          </button>
          
          {/* Dots */}
          <div className="slider-dots" role="tablist" aria-label="Slide navigation">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === currentSlide}
              />
            ))}
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">{t("hero.title")}</h1>
          <p className="hero-subtitle">{t("hero.subtitle")}</p>
          <a href="#contact" className="cta-button">
            {t("contact.sendMessage")}
          </a>
        </div>
      </header>

      {/* About / Services */}
      <section id="about" className="section about">
        <div className="container">
          <article className="about-content">
            <h2 className="section-title">{t("services.title")}</h2>
            <p className="services-subtitle">{t("services.subtitle")}</p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <FiCheck />
                </div>
                <span className="feature-text">{t("services.cheap")}</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <FiTruck />
                </div>
                <span className="feature-text">{t("services.efficient")}</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <FiShield />
                </div>
                <span className="feature-text">{t("services.reliable")}</span>
              </div>
            </div>

            <div className="services-list">
              <div className="service-item">
                <FiPackage className="service-icon" aria-hidden="true" />
                <span>{t("services.bins")}</span>
              </div>
              <div className="service-item">
                <FiCheck className="service-icon" aria-hidden="true" />
                <span>{t("services.inStock")}</span>
              </div>
              <div className="service-item">
                <FiTruck className="service-icon" aria-hidden="true" />
                <span>{t("services.serve")}</span>
              </div>
            </div>

            <div className="about-image-container">
              <img 
                src={gatanaLogo} 
                alt="Gatana waste management services - eco-friendly solutions" 
                className="gatana-logo"
                loading="lazy"
                width="300"
                height="300"
              />
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="contact-title">{t("contact.title")}</h2>
          
          <div className="contact-info">
            <a 
              href="tel:+995555550032" 
              className="contact-card" 
              aria-label="Call Gatana at +995 555 55 00 32"
              itemProp="telephone"
            >
              <FiPhone className="contact-icon" aria-hidden="true" />
              <span className="contact-text">{t("contact.phone")}</span>
            </a>
          </div>

          <div className="social-section">
            <h3 className="social-title">{t("contact.socialTitle")}</h3>
            <div className="social-grid">
              <a
                href="https://www.facebook.com/gatana.ge?mibextid=wwXIfr&rdid=FidXhVFXT5X3we7K&share_url=https://www.facebook.com/share/1CaN2YKEdE/?mibextid%3DwwXIfr"
                className="social-link facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Gatana on Facebook"
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
                aria-label="Visit Gatana on Instagram"
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
                aria-label="Visit Gatana on TikTok"
              >
                <div className="social-icon" aria-hidden="true"><SiTiktok /></div>
                <div className="social-text">
                  <span className="social-name">{t("contact.tiktok")}</span>
                  <span className="social-handle">@gatana.ge</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <a 
        href="tel:+995555550032" 
        className="floating-call-button" 
        aria-label="Call Gatana at +995 555 55 00 32"
      >
        <FiPhone />
      </a>

      {/* Footer for SEO */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Gatana.ge </p>
        </div>
      </footer>
    </div>
  );
}

export default App;