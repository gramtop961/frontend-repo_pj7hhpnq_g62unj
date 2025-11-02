import React from 'react';
import Hero from './components/Hero';
import SpellGrid from './components/SpellGrid';
import RealmShowcase from './components/RealmShowcase';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <SpellGrid />
      <RealmShowcase />
      <Footer />
    </div>
  );
};

export default App;
