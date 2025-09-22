import React from 'react'
import { motion } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
    
const Projectmodal = ({ selectedProject, setSelectedProject }) => {
    return (
        <>
            {/* Project Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-[#F2E1C5] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-80 object-cover"
                            />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        <div className="p-8">
                            <span className="text-xs uppercase tracking-wider text-[#0E5543]/70 bg-[#0E5543]/10 px-2 py-1 rounded-full">
                                {selectedProject.category}
                            </span>
                            <h2 className="text-3xl font-serif mt-3 mb-4">{selectedProject.title}</h2>
                            <p className="text-[#0E5543]/90 mb-6">{selectedProject.description}</p>
                            <div className="bg-[#e8d5b5] p-6 rounded-lg mb-6">
                                <h4 className="text-lg font-serif mb-3">Project Details</h4>
                                <p className="text-[#0E5543]/80">{selectedProject.details}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="px-6 py-3 bg-[#0E5543] text-[#F2E1C5] rounded-lg font-medium hover:bg-[#0E5543]/90 transition-colors">
                                    Request Similar Project
                                </button>
                                <div className="flex space-x-4">
                                    <button className="p-3 bg-[#e8d5b5] rounded-lg border border-[#0E5543]/20 hover:border-[#0E5543] transition-colors">
                                        <FiChevronLeft size={20} />
                                    </button>
                                    <button className="p-3 bg-[#e8d5b5] rounded-lg border border-[#0E5543]/20 hover:border-[#0E5543] transition-colors">
                                        <FiChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default Projectmodal
