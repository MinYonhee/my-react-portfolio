import "./globals.css";
import React from "react";
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: "Beatriz Costa - Portfolio",
  description: "Portfolio pessoal de Beatriz Costa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="main-layout">
          <Sidebar />
          <main className="content">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
