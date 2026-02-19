import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const galleryItems = [
    // Interior Photos
    { type: 'image', src: require('../images/569691679_17889379035364950_7393175199000590703_n.jpg'), category: 'Interior', alt: 'Boat themed dining area' },
    { type: 'image', src: require('../images/570038328_17889379026364950_1420839489967443783_n.jpg'), category: 'Interior', alt: 'Luxury seating arrangement' },
    { type: 'image', src: require('../images/570078818_17889379017364950_2629759202481275618_n.jpg'), category: 'Interior', alt: 'Elegant ambience' },
    
    // Food Photos
    { type: 'image', src: require('../images/572159336_17890118499364950_7112117626334774196_n.jpg'), category: 'Food', alt: 'Gourmet dish' },
    { type: 'image', src: require('../images/572960272_17890118508364950_6739765247735490429_n.jpg'), category: 'Food', alt: 'Signature cuisine' },
    { type: 'image', src: require('../images/573439330_17890118511364950_4547673455823649374_n.jpg'), category: 'Food', alt: 'Fine dining presentation' },
    { type: 'image', src: require('../images/580761928_17891283912364950_5875169259020513750_n.jpg'), category: 'Food', alt: 'Delicious platter' },
    { type: 'image', src: require('../images/581186755_17891283915364950_8225296752713362426_n.jpg'), category: 'Food', alt: 'Chef special' },
    
    // Ambience
    { type: 'image', src: require('../images/586992632_17892953601364950_4934726740773328371_n.jpg'), category: 'Ambience', alt: 'Restaurant atmosphere' },
    { type: 'image', src: require('../images/587293667_17892953604364950_4961002561957270215_n.jpg'), category: 'Ambience', alt: 'Dining experience' },
    { type: 'image', src: require('../images/587644736_17896096854364950_2016682097997781401_n.jpg'), category: 'Ambience', alt: 'Evening vibes' },
    
    // Videos
    { type: 'video', src: require('../images/AQOAmWnT0UwtySuLywxCh0aMva3CNuNuGmLuOvpFKWJjO-6J8mJJzWFBnY_8eH8cdjsMFFrgL_KUJkL49_bEYBDxrmwPnHFKEZUKsW8.mp4'), category: 'Videos', alt: 'Restaurant tour' },
    { type: 'video', src: require('../images/AQOiVI8gmhXSWso9hEG5SNH3BtTBB2jA1_g8vDTWk0SS0XkJxkTOQbH4H4005JtyzOw7i9UGjYZAK6q9XP-gqjet-6wkpK4QAfQQ3SE.mp4'), category: 'Videos', alt: 'Food preparation' },
    { type: 'video', src: require('../NewImages/AQMCY9Xpt8_jnwl2_GSG_cDI6bKMrmwqluBotxNwFkRuQyqGqaseu5_NIgwMJ3H7cqI4xDjNK_vqeZUWg8tsX5eKQxea6iYuWH4B5ZE.mp4'), category: 'Videos', alt: 'Dining experience' },
  ];

  const categories = ['All', 'Interior', 'Food', 'Ambience', 'Videos'];

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section ref={ref} className="py-12 md:py-16 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gold-500 mb-6">
            Gallery
          </h2>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Experience the elegance and ambience of Boat & Bites
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gold-500 text-navy-900 shadow-lg shadow-gold-500/50'
                  : 'bg-navy-800 text-cream-100 hover:bg-navy-700 border border-gold-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMedia(item)}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-cream-100 text-sm font-semibold">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 text-white hover:text-gold-500 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full"
              >
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    className="w-full h-auto rounded-xl"
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="w-full h-auto rounded-xl"
                  />
                )}
                <p className="text-center text-cream-100 mt-4 text-lg">{selectedMedia.alt}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
