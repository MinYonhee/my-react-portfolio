import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} MinYonhee. </p>
        <p>Todos os direitos reservados.</p>

      </div>
    </footer>
  );
};

export default Footer; 