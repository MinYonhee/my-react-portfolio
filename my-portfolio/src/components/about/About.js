import React, { forwardRef } from 'react';
import './About.css';

const About = forwardRef(({ aboutRef }, ref) => {
  return (
    <section className="about-section" ref={ref}>
      <h2 className="section-title">Sobre mim</h2>
      <div className="about-wrapper">
        <div className="about-left-content">
          <div className="about-image">
            <img src="/profile.jpg" alt="Beatriz Costa" />
          </div>
        </div>
        <div className="about-card">
          <div className="about-description-and-button">
            <p className="description">
              Eu sou Beatriz Costa, Publicitária e Desenvolvedora Full-Stack. Apaixonada por comunicação e tecnologia, resolvi unir os dois mundos.
            </p>
            <a href="https://www.canva.com/design/DAGVXOH0vzU/czuQT-3rM9N2KUBkWKts7g/edit?continue_in_browser=true" className="download-cv-button" target="_blank" rel="noopener noreferrer">Acesse o meu CV</a>
          </div>
          <div className="skills">
            <div className="skill-item">
              <div className="skill-name">Marketing</div>
              <div className="skill-bar">
                <div className="skill-level yellow" style={{ width: '90%' }}></div>
              </div>
              <div className="skill-percentage">90%</div>
            </div>
            <div className="skill-item">
              <div className="skill-name">UI/UX design</div>
              <div className="skill-bar">
                <div className="skill-level red" style={{ width: '80%' }}></div>
              </div>
              <div className="skill-percentage">80%</div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Desenvolvimento</div>
              <div className="skill-bar">
                <div className="skill-level blue" style={{ width: '60%' }}></div>
              </div>
              <div className="skill-percentage">60%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
