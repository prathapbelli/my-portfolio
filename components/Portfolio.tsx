
import React from 'react';
import { type Profile } from '../types';
import Header from './Header';
import Hero from './Hero';
import ContentRow from './ContentRow';
import HomeCard from './HomeCard';
import { TOP_PICKS, CONTINUE_WATCHING } from '../constants';
import { type Page } from '../types';

interface PortfolioProps {
  profile: Profile;
  onNavigate?: (page: Page) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ profile, onNavigate }) => {
  return (
    <div className="w-full">
      <Header currentPage="home" onNavigate={onNavigate} />
      <Hero />
      <main className="px-4 md:px-14 pb-16 space-y-12 -mt-24 md:-mt-36 relative z-10">
        <ContentRow title={`Today's Top Picks for ${profile.name}`} className="mt-16 md:mt-24">
          {TOP_PICKS.map((item) => (
            <HomeCard key={item.title} homecard={item} onNavigate={onNavigate} />
          ))}
        </ContentRow>

        <ContentRow title={`Continue Watching for ${profile.name}`}>
          {CONTINUE_WATCHING.map((item) => (
            <HomeCard key={item.title} homecard={item} onNavigate={onNavigate} />
          ))}
        </ContentRow>
      </main>
    </div>
  );
};

export default Portfolio;
