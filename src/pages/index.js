import React from 'react';
import Download from '../components/Download';
import Faq from '../components/Faq';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Section2 from '../components/Section2';

const index = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Section />
      <Section2 />
      <Download />
      <Faq />
    </div>
  );
};

export default index;
