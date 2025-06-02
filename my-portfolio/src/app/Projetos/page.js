import React from 'react';
import "../globals.css";
import Sidebar from '../../components/sidebar/Sidebar';
import Portfolio from '../../components/portfolio/Portfolio';
import Contact from '../../components/contact/Contact';

export default function Projetos() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Portfolio />
      <Contact />
    </main>

    </>
  );
}
