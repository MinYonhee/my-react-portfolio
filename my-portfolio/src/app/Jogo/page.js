import React from 'react';
import "../globals.css";
import Sidebar from '../../components/sidebar/Sidebar';
import Game from '../../components/game/Game';

export default function Jogo() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Game />
    </main>

    </>
  );
}
