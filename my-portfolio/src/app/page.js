'use client';
import React, { useRef } from 'react';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Portfolio from '../components/portfolio/Portfolio';
import LanguageStats from '../components/languageStats/LanguageStats';

export default function HomePage() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
    <main className="main">
      <Home aboutRef={aboutRef} contactRef={contactRef} />
      <About ref={aboutRef} />
      <Portfolio ref={portfolioRef} />
      <LanguageStats />
      <div ref={contactRef} className="main-contact-section">
        <Contact />
      </div>
    </main>
    </>
  );
}
