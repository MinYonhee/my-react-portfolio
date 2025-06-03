'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import {
  Home,
  User,
  Code,
  Gamepad2,
  GraduationCap,
  BriefcaseBusiness,
  Menu
} from 'lucide-react';
import './Sidebar.css';

const NavLink = ({ href, icon, isActive, onClick }) => (
  <li>
    <Link
      href={href}
      className={`nav-icon ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {icon}
    </Link>
  </li>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default function Sidebar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const navLinks = [
    { href: '/', icon: <Home size={24} /> },
    { href: '/Sobre', icon: <User size={24} /> },
    { href: '/ExperienciaAcademica', icon: <GraduationCap size={24} /> },
    { href: '/ExperienciaProfissional', icon: <BriefcaseBusiness size={24} /> },
    { href: '/Projetos', icon: <Code size={24} /> },
    { href: '/Jogo', icon: <Gamepad2 size={24} /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <button 
        ref={hamburgerRef}
        className="hamburger-button" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      <div 
        ref={sidebarRef}
        className={`sidebar-container ${isMenuOpen ? 'open' : ''}`}
      >
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </div>

        <nav className="navigation">
          <ul>
            {navLinks.map(({ href, icon }, index) => (
              <NavLink
                key={index}
                href={href}
                icon={icon}
                isActive={pathname === href}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
