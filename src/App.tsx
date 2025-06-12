import './App.css';
import './responsive.css';
import { Analytics } from '@vercel/analytics/react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import FashionPurpose from './components/FashionPurpose';
import HowItWorks from './components/HowItWorks';
import ClothesStats from './components/ClothesStats';
import ClothesGrid from './components/ClothesGrid';
import PartnerWaitlist from './components/PartnerWaitlist';
import Revolution from './components/Revolution';


function App() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Hero />
        <FashionPurpose />
        <HowItWorks />
        <ClothesStats />
        <ClothesGrid />
        <PartnerWaitlist />
        <Revolution />
      </main>
     <Analytics />
    </div>
  );
}

export default App;
