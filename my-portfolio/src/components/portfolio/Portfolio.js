"use client"
import React from 'react';
import './Portfolio.css';
import { FaGamepad, FaCode, FaSignInAlt, FaHeartbeat, FaUtensils, FaBuilding, FaKey } from 'react-icons/fa';

export default function Portfolio() {

  return (
    <section className="portfolio-section">
      <h2 className="section-title">Projetos Recentes</h2>
      {/* <div className="filter-buttons">
        <button className="filter-button">Everything</button>
        <button className="filter-button">Creative</button>
        <button className="filter-button">Art</button>
        <button className="filter-button">Design</button>
        <button className="filter-button">Branding</button>
      </div> */}
      <div className="portfolio-grid">
        {/* Portfolio items will go here */}
        {/* You can add your project cards manually here */}
        <a href="https://lola-lia-jogo.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="portfolio-item">
            {/* <img src="/images/portfolio-item-1.jpg" alt="Portfolio Item" /> */}
            <div className="project-icon"><FaGamepad /></div>
            <h3 className="project-title">Jogo Lola e Lia</h3>
            <div className="overlay"></div>
          </div>
        </a>
        <a href="https://challenge-decodificador-alura-one-t7.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="portfolio-item">
            {/* <img src="/images/portfolio-item-2.jpg" alt="Portfolio Item" /> */}
            <div className="project-icon"><FaCode /></div>
            <h3 className="project-title">Decodificador de Texto</h3>
            <div className="overlay"></div>
          </div>
        </a>
        <a href="https://projeto-desenvolvimento-web-five.vercel.app/login.html" target="_blank" rel="noopener noreferrer">
          <div className="portfolio-item">
            {/* <img src="/images/portfolio-item-3.jpg" alt="Portfolio Item" /> */}
            <div className="project-icon"><FaUtensils /></div>
            <h3 className="project-title">Cook.io</h3>
            <div className="overlay"></div>
          </div>
        </a>
        <a href="https://site-institucional-meiajuda.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="portfolio-item">
            {/* <img src="/images/portfolio-item-4.jpg" alt="Portfolio Item" /> */}
            <div className="project-icon"><FaHeartbeat /></div>
            <h3 className="project-title">Institucional MeIAjuda</h3>
            <div className="overlay"></div>
          </div>
        </a>
        <a href="https://github.com/MinYonhee/projeto-frontend" target="_blank" rel="noopener noreferrer">
          <div className="portfolio-item">
            {/* <img src="/images/portfolio-item-5.jpg" alt="Portfolio Item" /> */}
            <div className="project-icon"><FaBuilding /></div>
            <h3 className="project-title">Imobiliária Urban Valle</h3>
            <div className="overlay"></div>
          </div>
        </a>
        <a href="/Jogo" target="_blank" rel="noopener noreferrer">
          <div className="portfolio-item">
            <div className="project-icon"><FaKey /></div>
            <h3 className="project-title">Jogo da Senha</h3>
            <div className="overlay"></div>
          </div>
        </a>
      </div>
    </section>
  );
}