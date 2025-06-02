import React from 'react';
import "../globals.css";
import Sidebar from '../../components/sidebar/Sidebar';
import ProfessionalExperience from '../../components/professionalExperience/ProfessionalExperience';
import Contact from '../../components/contact/Contact';

export default function ProfessionalExp() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <ProfessionalExperience />
      <Contact />
    </main>

    </>
  );
}
