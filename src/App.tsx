import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/shell/Header';
import Footer from './components/shell/Footer';
import Home from './routes/Home';
import DevProjects from './routes/DevProjects';
import ExperiencePage from './routes/ExperiencePage';
import CertificationsPage from './routes/CertificationsPage';
import TechnologiesPage from './routes/TechnologiesPage';
import Contact from './routes/Contact';

export const AppContent: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dev-projects" element={<DevProjects />} />
            <Route path="/projects" element={<DevProjects />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;


