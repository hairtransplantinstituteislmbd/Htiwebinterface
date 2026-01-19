// src/components/Home.jsx
import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import InfoSection from './InfoSection';
import DoctorsHighlight from './DoctorsHighlight';
import ExpertCare from './ExpertCare';
import ResultsSection from './ResultsSection';
import FeaturedProcedures from './FeaturedProcedures';
import AboutInstitute from './AboutInstitute';
import LocationSection from './LocationSection';



const Home = () => {
  return (
    <>
      <Hero />
      <Awards />
      <InfoSection />
      <DoctorsHighlight />
      <ExpertCare />
      <ResultsSection />
      <FeaturedProcedures />
       <AboutInstitute />
       <LocationSection />
       
       
    </>
  );
};

export default Home;