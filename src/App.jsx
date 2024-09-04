// src/App.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import { portugueseTopics, administrativeLawTopics, programmingTopics, databaseTopics, englishTopics } from './data/topics.js'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portuguese" element={<TopicPage title="Língua Portuguesa" topics={portugueseTopics} />} />
          <Route path="/administrative-law" element={<TopicPage title="Noções de Direito Administrativo" topics={administrativeLawTopics} />} />
          <Route path="/programming" element={<TopicPage title="Programação de Sistemas" topics={programmingTopics} />} />
          <Route path="/databases" element={<TopicPage title="Bancos de Dados" topics={databaseTopics} />} />
          <Route path="/english" element={<TopicPage title="Língua Inglesa" topics={englishTopics} />} />
        </Routes>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portuguese">Língua Portuguesa</Link>
        <Link to="/administrative-law">Noções de Direito Administrativo</Link>
        <Link to="/programming">Programação de Sistemas</Link>
        <Link to="/databases">Bancos de Dados</Link>
        <Link to="/english">Língua Inglesa</Link>
      </nav>
    </header>
  );
}

export default App;