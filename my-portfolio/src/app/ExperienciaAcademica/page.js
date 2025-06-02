import React from 'react';
import "../globals.css";
import Sidebar from '../../components/sidebar/Sidebar';
import AcademicExperience from '../../components/academicExperience/AcademicExperience';
import Contact from '../../components/contact/Contact';

export default function AcadExp() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <AcademicExperience />
      <Contact />
    </main>

    </>
  );
}
