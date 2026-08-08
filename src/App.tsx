import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/shell/Header';
import Footer from './components/shell/Footer';
import Home from './routes/Home';
import GraphicDesign from './routes/GraphicDesign';
import DevProjects from './routes/DevProjects';
import Contact from './routes/Contact';

export const AppContent: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/dev-projects" element={<DevProjects />} />
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
