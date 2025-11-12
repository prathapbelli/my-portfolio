import React from 'react';
import { type Project, type Page } from '../types';

interface HomeCardProps {
  homecard: Project;
  onNavigate?: (page: Page) => void;
}

const HomeCard: React.FC<HomeCardProps> = ({ homecard, onNavigate }) => {
  const cardContent = (
    <div className="relative rounded-lg overflow-hidden aspect-video bg-zinc-800 transition-transform duration-300 ease-in-out group-hover:scale-105">
      <img src={homecard.imageUrl} alt={homecard.title} className="w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-transparent to-[rgba(0,0,0,0.2)]"></div>
      <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">{homecard.title}</h3>
    </div>
  );

  // External link takes priority
  if (homecard.link) {
    return (
      <a 
        href={homecard.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-shrink-0 w-64 md:w-72 group cursor-pointer block"
      >
        {cardContent}
      </a>
    );
  }

  // Internal page navigation
  if (homecard.page && onNavigate) {
    return (
      <div 
        className="flex-shrink-0 w-64 md:w-72 group cursor-pointer"
        onClick={() => onNavigate(homecard.page!)}
      >
        {cardContent}
      </div>
    );
  }

  // No link or page - just display
  return (
    <div className="flex-shrink-0 w-64 md:w-72 group cursor-pointer">
      {cardContent}
    </div>
  );
};

export default HomeCard;