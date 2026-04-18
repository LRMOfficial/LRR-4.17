import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Layout from './components/Layout';
import InquiryPopup from './components/InquiryPopup';
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
      }, 2600);
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
      case Page.Merch: return <Merch onNavigate={setCurrentPage} />;
      case Page.Downloads: return <Downloads onNavigate={setCurrentPage} />;
      case Page.Contact: return <Contact onNavigate={setCurrentPage} />;
      case Page.Privacy: return <Privacy />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-black">
      <Layout activePage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
      <InquiryPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
        onNavigate={setCurrentPage}
      />
    </div>
  );
};

export default App;