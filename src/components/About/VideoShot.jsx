// components/About/VideoShot.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderContent from "../Helper/HeaderContent";

const categories = ["All", "Marble", "Granite", "Quartz"];

const videos = [
  {
    src: "/hero.webm",
    thumb: "/kitchen.jpg",
    title: "Signature Marble Cuts",
    desc: "Elegant veins with cinematic lighting.",
    category: "Marble",
    duration: "2:15",
  },
  {
    src: "/hero.webm",
    thumb: "/furniture.jpg",
    title: "Premium Countertops",
    desc: "Refined edges and polished surfaces.",
    category: "Granite",
    duration: "1:45",
  },
  {
    src: "/hero.webm",
    thumb: "/cozyroom.jpg",
    title: "Flooring Showcase",
    desc: "Durable, luxurious floors in motion.",
    category: "Marble",
    duration: "3:20",
  },
  {
    src: "/hero.webm",
    thumb: "/livingrooom.jpg",
    title: "Bathroom Finishes",
    desc: "Moody textures and water resistance.",
    category: "Quartz",
    duration: "2:50",
  },
  {
    src: "/hero.webm",
    thumb: "/kitchen2.jpg",
    title: "Kitchen Islands",
    desc: "Bold slabs, seamless joints.",
    category: "Granite",
    duration: "2:30",
  },
  {
    src: "/hero.webm",
    thumb: "/bedroom.jpg",
    title: "Feature Walls",
    desc: "Texture, depth, and natural character.",
    category: "Quartz",
    duration: "1:55",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
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
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

export default function VideoShot() {
  const videoRefs = useRef([]);
  const modalVideoRef = useRef(null);
  const [activeCat, setActiveCat] = useState("All");
  const [modalIdx, setModalIdx] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const visibleVideos =
    activeCat === "All"
      ? videos
      : videos.filter((v) => v.category === activeCat);

  // Handle modal video playback
  useEffect(() => {
    if (modalIdx !== null && modalVideoRef.current) {
      modalVideoRef.current.play().catch(console.error);
    }
  }, [modalIdx]);

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setModalIdx(null);
    setIsVideoLoaded(false);
  };

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-[#0E5543] to-[#0a3a2d] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#F2E1C5]/5 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#F2E1C5]/5 rounded-full"></div>

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#F2E1C5 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}

        <HeaderContent
          tagline=" Video Gallery"
          title="Our Marble Showcase"
          subtitle="Discover the elegance and durability of our premium stone collection"
          theme="dark"
        />

        {/* Category selector */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {categories.map((c) => (
            <motion.button
              key={c}
              whileHover={{
                scale: 1.05,
                color: "#0E5543",
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 text-sm font-medium border transition-all font-sans `}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </motion.button>
          ))}
        </motion.div>

        {/* Video gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {visibleVideos.map((v, idx) => {
            const globalIdx = videos.indexOf(v);

            return (
              <motion.div
                key={globalIdx}
                variants={itemVariants}
                className="relative  overflow-hidden group cursor-pointer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setModalIdx(globalIdx)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3a2d]/90 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 overflow-hidden z-20">
                  <div className="absolute -inset-full group-hover:inset-0 transition-all duration-700 bg-gradient-to-r from-transparent via-[#F2E1C5]/10 to-transparent transform rotate-12"></div>
                </div>

                <div className="aspect-video w-full relative overflow-hidden">
                  <motion.img
                    src={v.thumb}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 px-2 py-1  bg-[#0a3a2d]/90 text-[#F2E1C5] text-xs font-medium z-20 font-sans">
                    {v.duration}
                  </div>

                  {/* Play button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-30"
                    initial={{ opacity: 0.8, scale: 1 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#0a3a2d]/90 backdrop-blur-sm flex items-center justify-center border border-[#F2E1C5]/30 shadow-lg">
                      <div className="w-0 h-0 border-t-6 border-b-6 border-l-10 border-transparent border-l-[#F2E1C5] ml-1"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Content overlay */}
                <motion.div
                  className="absolute left-0 right-0 bottom-0 p-4 z-30"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-white text-lg font-medium mb-1 font-sans">
                      {v.title}
                    </h3>
                    <p className="text-[#F2E1C5]/90 text-sm mb-2 font-sans">
                      {v.desc}
                    </p>
                    <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-[#F2E1C5]/20 text-[#F2E1C5] font-medium font-sans">
                      {v.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modal player */}
        <AnimatePresence>
          {modalIdx !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#0a3a2d]/25 backdrop-blur-sm "
                onClick={closeModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></motion.div>

              <motion.div
                className="relative w-full max-w-7xl rounded-xl overflow-hidden bg-[#0E5543] border border-[#F2E1C5]/20 shadow-2xl z-10"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="aspect-video w-full relative bg-black">
                  <video
                    ref={modalVideoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={videos[modalIdx].src}
                    autoPlay
                    controls
                    muted={false}
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                  />

                  {/* Loading spinner */}
                  {!isVideoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-3 border-[#F2E1C5] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#F2E1C5",
                    color: "#0E5543",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0E5543]/90 backdrop-blur-sm flex items-center justify-center text-[#F2E1C5] border border-[#F2E1C5]/30 hover:bg-[#F2E1C5] hover:text-[#0E5543] transition-colors shadow-md"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Add font imports */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");

        .font-serif {
          font-family: "Playfair Display", serif;
        }

        .font-sans {
          font-family: "Inter", sans-serif;
        }

        /* Custom video controls styling */
        video::-webkit-media-controls-panel {
          background: linear-gradient(
            to top,
            rgba(14, 85, 67, 0.7),
            transparent
          );
        }

        video::-webkit-media-controls-play-button {
          background-color: #f2e1c5;
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
}
