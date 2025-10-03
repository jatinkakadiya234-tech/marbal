import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiClock, FiSquare } from 'react-icons/fi';

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
      features: ["Premium Materials", "6 Month Project", "2,000+ sq ft"],
      accentColor: "#0E5543"
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
      features: ["Custom Design", "3 Month Project", "Premium Finishing"],
      accentColor: "#B8860B"
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
      features: ["Weather Resistant", "Specialty Treatment", "Non-Porous Finish"],
      accentColor: "#1E90FF"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryIcons = {
    commercial: <FiAward className="text-[#0E5543]" />,
    residential: <FiSquare className="text-[#0E5543]" />,
    outdoor: <FiClock className="text-[#0E5543]" />,
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#F2E1C5]/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-serif text-[#0E5543]">No projects found</h3>
            <p className="mt-2 text-[#0E5543]/80">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden border border-[#0E5543]/15 hover:border-[#0E5543]/30 transition-all duration-500 group cursor-pointer shadow-lg hover:shadow-xl flex flex-col"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -8 }}
              >
                {/* Image Section */}
                <div className="overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute top-4 right-4 z-20 text-2xl backdrop-blur-sm rounded-full p-2 shadow-md">
                    {categoryIcons[project.category] || <FiSquare className="text-[#0E5543]" />}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="absolute -top-3 left-6 h-1 w-12 rounded-full bg-[#0E5543] group-hover:w-16 transition-all duration-500"
                    style={{ backgroundColor: project.accentColor }}
                  />

                  <span className="text-xs uppercase tracking-wider text-[#0E5543] font-semibold bg-[#F2E1C5]/60 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                    {categoryIcons[project.category] || <FiSquare />}
                    {project.category}
                  </span>

                  <h3 className="text-xl font-serif mt-4 mb-3 text-[#0E5543] group-hover:text-[#0E5543]/90 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#0E5543]/80 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-5">
                    {project.features &&
                      project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-xs text-[#0E5543]/70 mb-2 last:mb-0"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0E5543]/40 mr-2" />
                          {feature}
                        </div>
                      ))}
                  </div>

                  {/* Stick to Bottom */}
                  <div className="mt-auto pt-3 border-t border-[#0E5543]/10 flex items-center justify-between">
                    <span className="text-[#0E5543] font-medium text-sm group-hover:underline">
                      View Details
                    </span>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full    transition-colors duration-300">
                      <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                    </div>
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
