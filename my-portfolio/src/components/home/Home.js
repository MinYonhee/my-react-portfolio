'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import './Home.css';

export default function Home({ contactRef, aboutRef }) {
  const scrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home-section">
      <div className="home-content">
        <Image src="/perfil.jpg" alt="Beatriz Costa" className="profile-image" width={150} height={150} />
        <h1 className="name">Beatriz Costa</h1>
        <p className="title">Olá, eu sou uma Desenvolvedora Full-Stack, atualmente trabalhando com Mobile com foco em Front-End e entusiasta de Dados</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/beatrizcosta.dev"><FaInstagram size={20} /></a>
          <a href="https://github.com/MinYonhee"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/beatriz-suelen-costa/"><FaLinkedin size={20} /></a>
        </div>

        <button className="hire-button" onClick={scrollToContact}>
          Fala comigo!
        </button>

        <div className="scroll-down" onClick={scrollToAbout}>
          <span>Scroll Down</span>
          <div className="mouse-icon"></div>
        </div>
      </div>
    </section>
  );
}
