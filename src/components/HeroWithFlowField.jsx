import { motion } from 'framer-motion';
import FlowFieldBackground from './FlowFieldBackground';

const HeroWithFlowField = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Flow Field Background */}
      <div className="absolute inset-0 z-0">
        <FlowFieldBackground
          color="#d4af37"
          trailOpacity={0.1}
          particleCount={typeof window !== 'undefined' && window.innerWidth < 768 ? 300 : 600}
          speed={0.8}
        />
      </div>

      {/* Content - with pointer-events-none on container, pointer-events-auto on buttons */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 pointer-events-none">
        <div className="relative max-w-6xl w-full text-center">
          {/* Anchor Icon with Float Animation */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ 
              y: [0, -10, 0],
              opacity: 1,
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { delay: 0.3, duration: 0.8 }
            }}
            className="mb-4 sm:mb-8"
          >
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto text-gold-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2v20m0-20c-2.5 0-4.5 2-4.5 4.5V10c0 1.5-1 2.5-2.5 2.5S2.5 11.5 2.5 10V6.5C2.5 4 4.5 2 7 2m5 0c2.5 0 4.5 2 4.5 4.5V10c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5V6.5C19.5 4 17.5 2 15 2"
              />
            </svg>
          </motion.div>

          {/* Main Heading with Glow Effect */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-6"
          >
            <span className="text-gold-500 drop-shadow-[0_0_30px_rgba(212,175,55,0.6)] inline-block hover:scale-105 transition-transform duration-300">
              Boat & Bites
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream-100 mb-2 sm:mb-4 font-light px-2"
          >
            Luxury Pure Veg Fine Dining
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-cream-100/80 mb-2 sm:mb-4 italic px-4"
          >
            Where Royal Hospitality Meets Boat-Themed Elegance
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-gold-500/80 mb-6 sm:mb-8"
          >
            Mota Varachha, Surat
          </motion.p>

          {/* CTA Buttons - ADD pointer-events-auto */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pointer-events-auto px-4"
          >
            <a
              href="/menu"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gold-500/50 text-base sm:text-lg"
            >
              Explore Our Menu
            </a>
            <a
              href="/events"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gold-500 text-gold-500 font-semibold rounded-full hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 hover:scale-105 text-base sm:text-lg"
            >
              Reserve Your Table
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gold-500"
        >
          <span className="text-sm font-semibold">Scroll to Explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroWithFlowField;
