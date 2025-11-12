
import React from 'react';
import { type Profile } from '../types';
import Header from './Header';
import Hero from './Hero';
import ContentRow from './ContentRow';
import ProjectCard from './ProjectCard';
import SimpleCard from './SimpleCard';
import { TOP_PICKS, CONTINUE_WATCHING } from '../constants';

type Page = 'home' | 'experience' | 'skills' | 'projects';

interface PortfolioProps {
  profile: Profile;
  onNavigate?: (page: Page) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ profile, onNavigate }) => {
  const handleExperienceClick = () => {
    if (onNavigate) {
      onNavigate('experience');
    }
  };

  const handleSkillsClick = () => {
    if (onNavigate) {
      onNavigate('skills');
    }
  };

  const handleProjectsClick = () => {
    if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <div className="w-full">
      <Header currentPage="home" onNavigate={onNavigate} />
      <Hero />
      <main className="px-4 md:px-14 pb-16 space-y-12 -mt-24 md:-mt-36 relative z-10">
        <ContentRow title={`Today's Top Picks for ${profile.name}`} className="mt-16 md:mt-24">
          {TOP_PICKS.map((item) => (
            <ProjectCard key={item.title} project={item} onNavigate={onNavigate} />
          ))}
        </ContentRow>

        <ContentRow title={`Continue Watching for ${profile.name}`}>
          {CONTINUE_WATCHING.map((item) => (
            <ProjectCard key={item.title} project={item} onNavigate={onNavigate} />
          ))}
        </ContentRow>
      </main>
    </div>
  );
};

export default Portfolio;
