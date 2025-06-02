import "./globals.css";
import React from "react";
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: "Bruno Rufino da Costa - Portfolio",
  description: "Portfolio pessoal de Bruno Rufino da Costa",
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
