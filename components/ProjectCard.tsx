import React from 'react';
import { type Project, type Page } from '../types';

interface ProjectCardProps {
  project: Project;
  onNavigate?: (page: Page) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onNavigate }) => {
  const cardContent = (
    <div className="relative rounded-lg overflow-hidden aspect-video bg-zinc-800 transition-transform duration-300 ease-in-out group-hover:scale-105">
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-transparent to-[rgba(0,0,0,0.2)]"></div>
      <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">{project.title}</h3>
    </div>
  );

  // External link takes priority
  if (project.link) {
    return (
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-shrink-0 w-64 md:w-72 group cursor-pointer block"
      >
        {cardContent}
      </a>
    );
  }

  if (project.description && onNavigate) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleOpenModal = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsModalOpen(true);
      if (onNavigate) onNavigate('projects');
    };

    const handleCloseModal = (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setIsModalOpen(false);
    };

    // Only open modal on click, not on hover (to avoid overlapping/moving issues)
    return (
      <>
        <div
          className="flex-shrink-0 w-64 md:w-72 group cursor-pointer"
          onClick={handleOpenModal}
        >
          {cardContent}
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60"
            onClick={handleCloseModal}
          >
            <div
              className="bg-zinc-900 p-8 rounded-2xl shadow-2xl w-full max-w-3xl relative z-50 flex flex-col md:flex-row gap-8"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-white"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex-shrink-0 w-full md:w-2/5">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-60 md:h-72 object-cover rounded-lg mb-4 md:mb-0"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                {project.description && (
                  <p className="text-gray-300 text-base md:text-lg">{project.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // No link or page - just display
  return (
    <div className="flex-shrink-0 w-64 md:w-72 group cursor-pointer">
      {cardContent}
    </div>
  );
};

export default ProjectCard;