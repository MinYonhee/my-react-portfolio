import React from 'react';
import './ProfessionalExperience.css';
export default function ProfessionalExperience() {
  return (
    <div className="professional-experience-section">
      <h2 className="section-title">Experiência Profissional</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">{/* Icon */}</div>
          <div className="timeline-content">
            <span className="date">Fev 2025 - Atual</span>
            <h3 className="title">Jr. Front-End Developer</h3>
            <p className="description">Como Anlista Jr. com foco em Front-End na Avanade, atuo do desenvolvimento Mobile no App da Gol.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">{/* Icon */}</div>
          <div className="timeline-content">
            <span className="date">Ago 2024 - Atual</span>
            <h3 className="title">Publicitária Freelance</h3>
            <p className="description">Trabalho com diversos clientes nas mais diferentes frentes do mercado Publicitário</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">{/* Icon */}</div>
          <div className="timeline-content">
            <span className="date">Ago 2024 - Out 2024</span>
            <h3 className="title">Estagiária de Marketing</h3>
            <p className="description">Atuei como estagiária de Marketing na FAST com foco na solução FlowUp, auxiliando na criação de blogs com SEO e campanhas para Redes Sociais.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
