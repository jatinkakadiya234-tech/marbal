import React from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const Section5 = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden" 
      style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
        {/* Background with elegant pattern */}
        <div className="absolute inset-0 bg-[white]">
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230E5543' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 -left-10 w-40 h-40 bg-[#0E5543]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-10 w-60 h-60 bg-[#0E5543]/3 rounded-full blur-3xl"></div>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-[#0E5543] text-[#F2E1C5] mb-4 sm:mb-6 md:mb-8 shadow-2xl shadow-[#0E5543]/30"
            >
              <div className="text-lg sm:text-xl md:text-2xl font-light">✓</div>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-[#0E5543] mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
            >
              Witness <span className="italic" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Marble</span>
              <br />
              Perfection
            </motion.h2>

            {/* Decorative divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-2 mb-8 mx-auto"
            >
              <div className="w-12 h-0.5 bg-[#0E5543]"></div>
              <div className="w-4 h-0.5 bg-[#0E5543]/50"></div>
              <div className="w-12 h-0.5 bg-[#0E5543]"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#0E5543]/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
            >
              Experience the transformation of raw marble into exquisite
              surfaces through our state-of-the-art technology and master
              craftsmanship
            </motion.p>

            {/* CTA Button with premium effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block relative group"
            >
              {/* Button with gradient border effect */}
              <div className="relative">
                {/* Main button */}
                <button className="relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5  rounded-2xl font-medium text-sm sm:text-base md:text-lg tracking-wide overflow-hidden z-10 flex items-center mx-auto" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {/* Shine effect */}

                  <span className="relative z-10" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    Schedule a Private Factory Tour
                  </span>
                  <FiChevronRight
                    className="ml-3 relative z-10"
                    size={20}
                  />
                </button>

                {/* Border gradient effect */}
                {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div> */}
              </div>

              {/* Additional info text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-[#0E5543]/60 mt-3 sm:mt-4 text-xs sm:text-sm font-light"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
              >
                Limited slots available • Complimentary consultation included
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute -top-5 -right-5 w-20 h-20 border border-[#0E5543]/5 rounded-full"
          ></motion.div>
        </div>
      </section>
    </>
  );
};

export default Section5;
