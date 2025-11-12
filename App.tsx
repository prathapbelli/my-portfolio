
import React, { useState, useEffect } from 'react';
import ProfileSelection from './components/ProfileSelection';
import Portfolio from './components/Portfolio';
import ExperiencePage from './components/ExperiencePage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import { type Profile, type Page } from './types';
import ProfileModal from './components/ProfileModal';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleProfileSelect = (profile: Profile) => {
    setSelectedProfile(profile);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page: Page) => {
    // If page is 'personal', open profile modal instead
    if (page === 'personal') {
      setIsProfileModalOpen(true);
      return;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    if (!selectedProfile) {
      return <ProfileSelection onProfileSelect={handleProfileSelect} />;
    }

    switch (currentPage) {
      case 'experience':
        return <ExperiencePage onNavigate={handlePageChange} />;
      case 'skills':
        return <SkillsPage onNavigate={handlePageChange} />;
      case 'projects':
        return <ProjectsPage onNavigate={handlePageChange} />;
      case 'home':
      default:
        return <Portfolio profile={selectedProfile} onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="bg-netflix-dark min-h-screen text-white antialiased">
      {renderPage()}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        name={PERSONAL_INFO.name}
        title={PERSONAL_INFO.title}
        email={PERSONAL_INFO.email}
        phone={PERSONAL_INFO.phone}
        linkedin={PERSONAL_INFO.linkedin}
        resumeUrl={PERSONAL_INFO.resumeUrl}
        github={PERSONAL_INFO.github}
      />
    </div>
  );
};

export default App;
