import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-root">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-overlay">
            <div className="landing-content">
              <div className="landing-hero-section">
                <div className="landing-badge">🌿 Premium Houseplants & Botany</div>
                <h1 className="landing-title">Paradise Nursery</h1>
                <div className="landing-divider"></div>
                <p className="landing-tagline">Where Greenery Meets Serenity</p>
                <p className="landing-intro">
                  Breathe fresh life into your indoor sanctuaries with our hand-curated collection of air-purifying, aromatic, and easy-care plants.
                </p>
                <button
                  className="get-started-btn"
                  onClick={handleGetStarted}
                  title="Explore our botanical collection"
                >
                  Get Started →
                </button>
              </div>

              <div className="landing-about-wrapper">
                <AboutUs />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default App;
