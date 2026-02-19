import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Boat & Bites! I am browsing your website and I want to order/book a table.");
    window.open(`https://wa.me/919099105448?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-20 right-0 bg-white text-navy-900 px-4 py-3 rounded-lg shadow-xl max-w-xs"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 bg-gold-500 rounded-full p-1"
                >
                  <X className="w-3 h-3" />
                </button>
                <p className="text-sm font-semibold mb-1">Order Direct & Save!</p>
                <p className="text-xs">No commission fees - Better prices for you</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(37, 211, 102, 0.7)',
                '0 0 0 20px rgba(37, 211, 102, 0)',
              ],
            }}
            transition={{
              boxShadow: {
                repeat: Infinity,
                duration: 2,
              },
            }}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl flex items-center gap-3 group"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="font-semibold pr-2 hidden group-hover:inline-block">
              Order via WhatsApp
            </span>
          </motion.button>

          {/* Pulse Ring */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute inset-0 bg-green-500 rounded-full -z-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;
