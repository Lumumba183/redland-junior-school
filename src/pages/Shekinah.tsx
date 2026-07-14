import { useEffect, useRef } from 'react';
import HelpingHands from '../sections/shekinah/HelpingHands';
import ShekinahHero from '../sections/shekinah/ShekinahHero';
import ShekinahMission from '../sections/shekinah/ShekinahMission';
import ImpactStats from '../sections/shekinah/ImpactStats';
import ChildrenStories from '../sections/shekinah/ChildrenStories';
import NeedsSection from '../sections/shekinah/NeedsSection';
import DonationCards from '../sections/shekinah/DonationCards';
import ShekinahContactForm from '../sections/shekinah/ShekinahContactForm';

export default function Shekinah() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={pageRef} className="relative">
      {/* Helping Hands cursor effect */}
      <HelpingHands />

      <ShekinahHero />
      <ShekinahMission />
      <ImpactStats />
      <ChildrenStories />
      <NeedsSection />
      <DonationCards />
      <ShekinahContactForm />
    </div>
  );
}
