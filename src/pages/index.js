import React from 'react';
import Contact from '../components/Contact';
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
      <div className='bg-bookmark-white '>
        <Features />
        <Section />
        <Section2 />
      </div>
      <Download />
      <Faq />
      <Contact />
    </div>
  );
};

export default index;
