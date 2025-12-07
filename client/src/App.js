import React from 'react';
import './styles.css'; // Import the main CSS file

// Import Components
import Header from './components/common/Header';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import IndustriesSection from './components/sections/IndustriesSection';
import RolesCtaSection from './components/sections/RolesCtaSection';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        
        <hr />
        
        <FeaturesSection />

        <hr />

        <IndustriesSection />

        <hr />

        <RolesCtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;