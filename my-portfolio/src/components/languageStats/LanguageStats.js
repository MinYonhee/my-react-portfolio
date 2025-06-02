"use client";
import React, { useState, useEffect } from 'react';
import './LanguageStats.css';

const LanguageStats = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('https://api.github.com/users/MinYonhee/repos');
        const data = await response.json();
        
        const languageStats = data.reduce((acc, repo) => {
          if (repo.language) {
            acc[repo.language] = (acc[repo.language] || 0) + 1;
          }
          return acc;
        }, {});

        const sortedLanguages = Object.entries(languageStats)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 10);

        setLanguages(sortedLanguages);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar dados das linguagens do GitHub');
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  if (loading) return <div className="language-stats-loading">Carregando...</div>;
  if (error) return <div className="language-stats-error">{error}</div>;

  return (
    <div className="language-stats">
      <h2>Minhas Linguagens no GitHub</h2>
      <div className="language-stats-grid">
        {languages.map((lang, index) => (
          <div key={lang.name} className="language-card">
            <div className="language-rank">#{index + 1}</div>
            <div className="language-name">{lang.name}</div>
            <div className="language-count">{lang.count} repositórios</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageStats; 