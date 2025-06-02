"use client"
import React, { useState, useEffect } from 'react';
import './Game.css';

export default function Game() {
  const [secretCode, setSecretCode] = useState('');
  const [guessInput, setGuessInput] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(10);
  const [gameStatus, setGameStatus] = useState('playing'); 

  useEffect(() => {
    startNewGame();
  }, []);

  const generateSecretCode = () => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let code = '';
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      code += digits[randomIndex];
      digits.splice(randomIndex, 1);
    }
    return code;
  };

  const startNewGame = () => {
    const newSecretCode = generateSecretCode();
    setSecretCode(newSecretCode);
    setAttempts([]);
    setRemainingAttempts(10);
    setGameStatus('playing');
    setGuessInput('');
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setGuessInput(value);
    }
  };

  const handleSubmitGuess = () => {
    if (guessInput.length !== 4 || new Set(guessInput).size !== 4) {
      alert('Por favor, insira um número de 4 dígitos com dígitos únicos.');
      return;
    }

    let bulls = 0;
    let cows = 0;
    const secretCodeArray = secretCode.split('');
    const guessInputArray = guessInput.split('');

    for (let i = 0; i < 4; i++) {
      if (guessInputArray[i] === secretCodeArray[i]) {
        bulls++;
      }
    }

    for (let i = 0; i < 4; i++) {
      if (secretCodeArray.includes(guessInputArray[i]) && guessInputArray[i] !== secretCodeArray[i]) {
        cows++;
      }
    }

    const newAttempt = { guess: guessInput, result: `${bulls} Touros, ${cows} Vacas` };
    setAttempts(prevAttempts => [newAttempt, ...prevAttempts]); 
    setRemainingAttempts(prevAttempts => prevAttempts - 1);
    setGuessInput('');

    if (bulls === 4) {
      setGameStatus('won');
    } else if (remainingAttempts - 1 === 0) {
      setGameStatus('lost');
    }
  };

  const showSecretCode = () => {
    alert(`O código secreto era: ${secretCode}`);
  };

  return (
    <div className="game-container">
      <h2 className="section-title">Jogo da Senha</h2>
      <p className="game-explanation">Tente adivinhar o código secreto de 4 dígitos únicos. Depois de cada palpite, você receberá "Touros" para dígitos corretos na posição correta e "Vacas" para dígitos corretos em posições erradas. Você tem 10 tentativas.</p>
      {gameStatus === 'playing' && (
        <div className="game-input">
          <input
            type="text"
            value={guessInput}
            onChange={handleInputChange}
            maxLength="4"
            disabled={gameStatus !== 'playing'}
          />
          <button onClick={handleSubmitGuess} disabled={gameStatus !== 'playing'} className="hire-button">Enviar Palpite</button>
        </div>
      )}

      <button onClick={showSecretCode} className="secondary-button">Mostrar Código Secreto</button>

      {gameStatus !== 'playing' && (
        <div className="game-over-message">
          {gameStatus === 'won' ? (
            <p>Parabéns! Você acertou o código!</p>
          ) : (
            <p>Fim de Jogo! Você ficou sem tentativas. O código era {secretCode}.</p>
          )}
          <button onClick={startNewGame}>Novo Jogo</button>
        </div>
      )}

      <div className="attempts-list">
        <h3>Tentativas:</h3>
        {attempts.length === 0 ? (
          <p>Nenhuma tentativa ainda.</p>
        ) : (
          <ul>
            {attempts.map((attempt, index) => (
              <li key={index}>{attempt.guess} - {attempt.result}</li>
            ))}
          </ul>
        )}
      </div>
      {gameStatus === 'playing' && <p>Tentativas restantes: {remainingAttempts}</p>}
    </div>
  );
}
