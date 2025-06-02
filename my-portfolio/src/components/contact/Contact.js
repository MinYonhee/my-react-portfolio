"use client";
import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact({ contactRef }) {
  const whatsappNumber = '5581995052771';
  const instagramHandle = 'beatrizcosta.dev';
  const emailAddress = 'beatrizcostapubli@gmail.com';

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    const instagramUrl = `https://www.instagram.com/${instagramHandle}`;
    window.open(instagramUrl, '_blank');
  };

  const handleEmailClick = () => {
    const emailUrl = `mailto:${emailAddress}`;
    window.location.href = emailUrl;
  };

  return (
    <section className="contact-section" ref={contactRef}>
      <div className="contact-content">
        <h2 className="section-title">Vamos trocar uma ideia?</h2>
        <p className="section-description">Se você quiser dar vida a um projeto, compartilhar conhecimento ou só bater um papo, é assim que você pode me contatar!</p>

        <div className="contact-cards-container">
          <div className="contact-card">
            <div className="contact-icon whatsapp-icon">
              <FaWhatsapp size={40} />
            </div>
            <h3 className="contact-card-title">WhatsApp</h3>
            <p className="contact-card-description">Estou sempre disponível no WhatsApp!</p>
            <button className="contact-button whatsapp-button" onClick={handleWhatsAppClick}>Abrir WhatsApp</button>
          </div>

          <div className="contact-card">
            <div className="contact-icon instagram-icon">
               <FaInstagram size={40} />
            </div>
            <h3 className="contact-card-title">Instagram</h3>
            <p className="contact-card-description">Você pode acompanhar de perto a minha jornada tech pelo instagram.</p>
            <button className="contact-button instagram-button" onClick={handleInstagramClick}>Acessar Instagram</button>
          </div>

          <div className="contact-card">
            <div className="contact-icon email-icon">
              <FaEnvelope size={40} />
            </div>
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-description">Se você prefere a formalidade, pode me mandar um email também!</p>
            <a href={`mailto:${emailAddress}`} className="contact-button email-button">Enviar Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
