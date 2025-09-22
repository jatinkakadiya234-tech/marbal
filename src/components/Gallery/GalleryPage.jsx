import React, { useState } from 'react';
import GalleryHero from './GalleryHero';
import GalleryNavbar from './GalleryNavbar';
import Projects from './Projects';
import GalleryBottomSections from './GalleryBottomSections';
import Projectmodal from './Projectmodal';

const ProjectsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen pt-20 bg-[#F2E1C5] text-[#0E5543]">
      <GalleryHero />

      <GalleryNavbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Projects
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        setSelectedProject={setSelectedProject}
      />

      <GalleryBottomSections />

      <Projectmodal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </div>
  );
};

export default ProjectsGallery;
