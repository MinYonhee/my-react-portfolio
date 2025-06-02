import React from 'react';
import "../globals.css";
import Sidebar from '../../components/sidebar/Sidebar';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaGitAlt, FaGithub, FaNodeJs, FaPython, FaJava, FaDatabase, FaCodeBranch, FaCode } from 'react-icons/fa'; // Import some potential icons, added FaCode
import { SiTypescript, SiTestinglibrary, SiNextdotjs, SiAngular, SiReactquery, SiSpringboot, SiNotion, SiTrello } from 'react-icons/si'; // Removed SiCsharp
import LanguageStats from '../../components/languageStats/LanguageStats';

export default function Sobre() {
  return (
    <>
    <Sidebar />
    <main className="main">
      {/* About Component */}
      <About />

      {/* Section for Technologies Used in This Site */}
      <div className="technologies-used-section">
        <h2>Tecnologias utilizadas</h2> {/* Title changed back */}

        <div className="technology-cards-container">
          {/* Technologies used in this site */}
          <div className="technology-card">
             <div className="tech-icons">
                <FaReact size={40} title="React" />
                <SiNextdotjs size={40} title="Next.js" />
                <FaJs size={40} title="JavaScript" />
                <FaHtml5 size={40} title="HTML5" />
                <FaCss3Alt size={40} title="CSS3" />
             </div>
           </div>

            <div className="technology-card">
             <div className="tech-icons">
                <FaGitAlt size={40} title="Git" />
                <FaGithub size={40} title="GitHub" />
             </div>
           </div>
        </div>
      </div>

      {/* Section for Other Skills */}
      <div className="other-skills-section technologies-used-section"> {/* Kept Other Skills section */}
        <h2>Outras Habilidades</h2> {/* Kept this title */}
        <div className="technology-cards-container"> {/* Reusing container */}

          {/* Frontend Card (Other Skills) */}
          <div className="technology-card">
            <h3>Frontend</h3> {/* Added Frontend title */}
            <div className="tech-icons">
              <SiAngular size={40} title="Angular" />
              <SiReactquery size={40} title="React Native" /> {/* Using SiReactquery for React Native */}
              {/* Add other frontend icons if needed */}
            </div>
          </div>

           {/* Backend Card (Other Skills) */}
          <div className="technology-card">
             <h3>Backend</h3> {/* Added Backend title */}
             <div className="tech-icons">
                <FaJava size={40} title="Java" />
                <SiSpringboot size={40} title="Spring Boot" />
                <FaDatabase size={40} title="PostgreSQL" />
                <FaPython size={40} title="Python" />
                <FaNodeJs size={40} title="Node.js" />          
                {/* Add other backend icons if needed */}
             </div>
           </div>

          {/* Tools Card (Other Skills) */}
          <div className="technology-card">
            <h3>Ferramentas</h3> {/* Added Ferramentas title */}
            <div className="tech-icons">
              <FaFigma size={40} title="Figma" />
              <SiNotion size={40} title="Notion" />
              <SiTrello size={40} title="Trello" />
               {/* Add more tool icons as needed */}
            </div>
          </div>
        </div>
      </div>

      <LanguageStats />

      <Contact />
    </main>
    </>
  );
}
