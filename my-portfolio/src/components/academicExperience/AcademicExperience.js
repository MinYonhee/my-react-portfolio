import React from 'react';
import './AcademicExperience.css';

export default function AcademicExperience() {
  return (
    <section className="academic-experience-section">
      <h2 className="section-title">Experiência Acadêmica</h2>
      <div className="timeline">
         <div className="timeline-item">
          <div className="timeline-icon">{/* Icon */}</div>
          <div className="timeline-content">
            <span className="date">2025 - Atual</span>
            <h3 className="title">Pós-Graduação Uniamérica</h3>
            <p className="description">Desenvolvimento Full-Stack</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">{/* Icon */}</div>
          <div className="timeline-content">
            <span className="date">2024 - Atual</span>
            <h3 className="title">Superior Tecnólogo - UNICAP</h3>
            <p className="description">Sistema para Internet</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">{/* Icon */}</div>
          <div className="timeline-content">
            <span className="date">2023 - 2024</span>
            <h3 className="title">MBA - Uniamérica</h3>
            <p className="description">Jornalismo Digital</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">{/* Icon */}</div>
          <div className="timeline-content">
            <span className="date">2018.2 - 2022.1</span>
            <h3 className="title">Bacharelado - UFPE</h3>
            <p className="description">Comunicação Social - Publicidade e Propaganda</p>
          </div>
        </div>
      </div>
    </section>
  );
}