import React from 'react';
import TopBanner from '../components/TopBanner';
import HeroWithFlowField from '../components/HeroWithFlowField';
import About from '../components/About';
import LuxuryExperience from '../components/LuxuryExperience';
import ChefSpecial from '../components/ChefSpecial';
import Reviews from '../components/Reviews';
import WhatsAppFloat from '../components/WhatsAppFloat';

const HomePage = () => {
  return (
    <>
      <TopBanner />
      <HeroWithFlowField />
      <About />
      <LuxuryExperience />
      <ChefSpecial />
      <Reviews />
      <WhatsAppFloat />
    </>
  );
};

export default HomePage;
