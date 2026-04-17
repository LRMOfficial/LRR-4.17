import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Layout from './components/Layout';
import EmailPopup from './components/EmailPopup';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Merch from './pages/Merch';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('hasSeenPopup', 'true');
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={setCurrentPage} />;
      case Page.Artists: return <Artists />;
      case Page.Merch: return <Merch />;
      case Page.Downloads: return <Downloads />;
      case Page.Contact: return <Contact />;
      case Page.Privacy: return <Privacy />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-black">
      <Layout activePage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
      {showPopup && <EmailPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default App;