import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiZoomIn, FiTool, FiSettings, FiBox, FiAward } from 'react-icons/fi'

const Section3 = () => {

    const [activeTab, setActiveTab] = useState('cutting');

    // Technology data
    const technologyCategories = [
        {
            id: 'cutting',
            name: 'Precision Cutting',
            icon: <FiTool size={24} />,
            description: 'Advanced diamond wire and bridge saws for perfect cuts every time',
            technologies: [
                {
                    name: 'Diamond Wire Saws',
                    description: 'Computer-controlled cutting with precision up to 0.1mm tolerance',
                    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    video: 'https://player.vimeo.com/video/370756669'
                },
                {
                    name: 'Bridge Saw Systems',
                    description: 'CNC-operated saws with laser guidance for flawless straight cuts',
                    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    video: 'https://player.vimeo.com/video/370756669'
                }
            ]
        },
        {
            id: 'polishing',
            name: 'Surface Finishing',
            icon: <FiSettings size={24} />,
            description: 'Automated polishing lines that create mirror-like finishes',
            technologies: [
                {
                    name: 'Automatic Polishing Lines',
                    description: '16-head polishing machines that create perfect glossy surfaces',
                    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    video: 'https://player.vimeo.com/video/370756669'
                },
                {
                    name: 'Calibrating Machines',
                    description: 'Ensure uniform thickness across all slabs with precision engineering',
                    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    video: 'https://player.vimeo.com/video/370756669'
                }
            ]
        },
        {
            id: 'digital',
            name: 'Digital Fabrication',
            icon: <FiBox size={24} />,
            description: 'CNC technology for intricate designs and custom patterns',
            technologies: [
                {
                    name: 'CNC Waterjet Cutters',
                    description: 'Precision cutting complex shapes with high-pressure water and abrasives',
                    image: 'https://images.unsplash.com/photo-1581094271901-8242d0fcd5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    video: 'https://player.vimeo.com/video/370756669'
                },
                {
                    name: '3D Stone Scanning',
                    description: 'Advanced scanning for perfect template creation and measurements',
                    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    video: 'https://player.vimeo.com/video/370756669'
                }
            ]
        },
        {
            id: 'quality',
            name: 'Quality Control',
            icon: <FiAward size={24} />,
            description: 'Advanced inspection systems ensuring perfection in every slab',
            technologies: [
                {
                    name: 'Laser Measurement',
                    description: 'Sub-millimeter accuracy in dimensional verification',
                    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    video: 'https://player.vimeo.com/video/370756669'
                },
                {
                    name: 'Spectrophotometry',
                    description: 'Color matching technology ensuring batch consistency',
                    image: 'https://images.unsplash.com/photo-1581094271901-8242d0fcd5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    video: 'https://player.vimeo.com/video/370756669'
                }
            ]
        }
    ];

    const activeCategory = technologyCategories.find(cat => cat.id === activeTab);


    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };


    return (
        <>
            {/* Technology Categories */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-serif mb-4">Our Advanced Technology</h2>
                        <p className="text-lg text-[#0E5543]/90 max-w-3xl mx-auto">
                            Explore the cutting-edge machinery and processes that make our marble products exceptional
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {technologyCategories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`px-6 py-3 rounded-full border flex items-center space-x-2 transition-all duration-300 ${activeTab === category.id
                                    ? 'bg-[#0E5543] text-[#F2E1C5] border-[#0E5543]'
                                    : 'bg-transparent text-[#0E5543] border-[#0E5543]/30 hover:border-[#0E5543]'
                                    }`}
                            >
                                <span>{category.icon}</span>
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Technology Grid */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {activeCategory.technologies.map((tech, index) => (
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                key={index}
                                className="bg-[#F2E1C5] rounded-xl overflow-hidden border border-[#0E5543]/10 hover:border-[#0E5543]/30 transition-all duration-300 group"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={tech.image}
                                        alt={tech.name}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#F2E1C5] to-transparent opacity-80"></div>
                                    <button
                                        onClick={() => setActiveVideo(tech.video)}
                                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                                    >
                                        <FiZoomIn size={20} />
                                    </button>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif mb-2">{tech.name}</h3>
                                    <p className="text-[#0E5543]/80 mb-4">{tech.description}</p>
                                    <button
                                        onClick={() => setActiveVideo(tech.video)}
                                        className="flex items-center text-[#0E5543] group-hover:text-[#0E5543] font-medium"
                                    >
                                        <FiPlay className="mr-2" />
                                        Watch Technology in Action
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Section3
