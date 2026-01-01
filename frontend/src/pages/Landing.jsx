import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Team from './components/Team/Team.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
export default function Landing() {
    return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}