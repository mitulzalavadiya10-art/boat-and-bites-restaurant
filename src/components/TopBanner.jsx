import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="bg-gold-500 text-navy-900 py-3 px-4 relative overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <div className="container mx-auto flex items-center justify-center gap-2 relative z-10">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <p className="text-sm md:text-base font-semibold text-center">
            Flat 10% Off on Birthday Celebrations - Book Your Boat Table Now!
          </p>
          <Sparkles className="w-5 h-5 animate-pulse" />
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 hover:scale-110 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TopBanner;
