import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Projects = ({ selectedCategory, searchQuery, setSelectedProject }) => {
  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Lobby",
      category: "commercial",
      description:
        "Grand entrance featuring our premium green marble with gold veining, creating an opulent first impression.",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
      details:
        "Over 2,000 sq ft of Emerald Green marble installed with precision cutting technology for seamless patterns.",
    },
    {
      id: 2,
      title: "Modern Kitchen Design",
      category: "residential",
      description:
        "Elegant kitchen countertops and backsplashes using our polished white marble with subtle grey veins.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      details:
        "Custom-cut marble countertops with integrated sink and waterfall edges for a continuous flow.",
    },
    {
      id: 8,
      title: "Outdoor Pool Deck",
      category: "outdoor",
      description:
        "Weather-resistant marble decking around a luxury pool area that stays cool underfoot even in direct sunlight.",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=800&q=80",
      details:
        "Specialty treated marble with non-porous finish to withstand weather elements and pool chemicals.",
    },
    // ... add the rest of your projects here
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-serif">No projects found</h3>
            <p className="mt-2 text-[#0E5543]/80">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-[#e8d5b5] rounded-xl overflow-hidden border border-[#0E5543]/10 hover:border-[#0E5543]/30 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-[#0E5543]/70 bg-[#0E5543]/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-serif mt-3 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#0E5543]/80 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-[#0E5543] font-medium">
                    View Details
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
