// components/About/VideoShot.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Marble', 'Granite', 'Quartz'];

const videos = [
  { src: '/hero.webm', thumb: '/kitchen.jpg', title: 'Signature Marble Cuts', desc: 'Elegant veins with cinematic lighting.', category: 'Marble' },
  { src: '/hero.webm', thumb: '/furniture.jpg', title: 'Premium Countertops', desc: 'Refined edges and polished surfaces.', category: 'Granite' },
  { src: '/hero.webm', thumb: '/cozyroom.jpg', title: 'Flooring Showcase', desc: 'Durable, luxurious floors in motion.', category: 'Marble' },
  { src: '/hero.webm', thumb: '/livingrooom.jpg', title: 'Bathroom Finishes', desc: 'Moody textures and water resistance.', category: 'Quartz' },
  { src: '/hero.webm', thumb: '/kitchen2.jpg', title: 'Kitchen Islands', desc: 'Bold slabs, seamless joints.', category: 'Granite' },
  { src: '/hero.webm', thumb: '/bedroom.jpg', title: 'Feature Walls', desc: 'Texture, depth, and natural character.', category: 'Quartz' },
];

export default function VideoShot() {
  const videoRefs = useRef([]);
  const [states, setStates] = useState(
    videos.map(() => ({ isPlaying: true, isMuted: true }))
  );
  const [activeCat, setActiveCat] = useState('All');
  const [modalIdx, setModalIdx] = useState(null);

  const visibleVideos = activeCat === 'All' ? videos : videos.filter(v => v.category === activeCat);

  useEffect(() => {
    states.forEach((state, idx) => {
      const el = videoRefs.current[idx];
      if (!el) return;
      if (state.isPlaying) {
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [states]);

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/90">
              Media
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-3 tracking-tight">
            Video Shot of the site
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
        </motion.div>

        {/* Category selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${activeCat === c ? 'bg-amber-500 text-gray-900 border-amber-500' : 'bg-transparent text-gray-200 border-amber-600/30 hover:bg-amber-500/10'}`}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Marble video gallery (3 columns per row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleVideos.map((v) => {
            const idx = videos.indexOf(v);

            return (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden border border-amber-600/20 bg-black/30"
              >
                <button
                  className="aspect-video w-full relative will-change-transform transition-transform duration-500 hover:scale-[1.02] text-left"
                  onClick={() => setModalIdx(idx)}
                >
                  <img src={v.thumb} alt={v.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm">Play</span>
                  </div>
                </button>
                <div className="absolute left-0 right-0 bottom-0 p-4 md:p-5 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-white text-base md:text-lg font-serif">{v.title}</h3>
                    <p className="text-gray-300/90 text-[11px] md:text-sm mt-1">{v.desc}</p>
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-600/30">{v.category}</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-70 text-xs md:text-sm text-gray-200">Click to play</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal player */}
        {modalIdx !== null && (
          <div className="fixed inset-0 z-[60]">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setModalIdx(null)}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-amber-600/30 bg-black">
                <div className="aspect-video w-full relative">
                  <video
                    ref={(el) => (videoRefs.current[modalIdx] = el)}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={videos[modalIdx].src}
                    autoPlay
                    controls
                    muted={false}
                    playsInline
                  />
                </div>
                <button
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition text-sm"
                  onClick={() => setModalIdx(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


