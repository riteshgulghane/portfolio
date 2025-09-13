import React from 'react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
    image?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      {project.image ? (
        <div className="h-48 relative overflow-hidden">
          <img 
            src={project.image} 
            alt={`${project.title} preview`} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-20 transition-opacity duration-300"></div>
          <div className="absolute bottom-2 right-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
            <span className="text-white text-xs font-medium">#{project.id}</span>
          </div>
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="text-white text-lg font-semibold z-10">Project Preview</div>
          <div className="absolute bottom-2 right-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
            <span className="text-white text-xs font-medium">#{project.id}</span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white text-center py-2.5 rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm"
          >
            <span className="inline-flex items-center">
              🐙 GitHub
            </span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
          >
            <span className="inline-flex items-center">
              🚀 Live Demo
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
