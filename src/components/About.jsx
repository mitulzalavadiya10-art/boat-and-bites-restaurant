import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Leaf, Ship } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Ship,
      title: "Boat-Themed Ambience",
      description: "Immerse in luxury yacht-inspired interiors"
    },
    {
      icon: Leaf,
      title: "100% Pure Veg",
      description: "Premium vegetarian fine dining experience"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect for celebrations and gatherings"
    },
    {
      icon: Award,
      title: "Top Rated",
      description: "Surat's most loved dining destination"
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gold-500 mb-6">
            Experience Luxury Redefined
          </h2>
          <p className="text-lg md:text-xl text-cream-100 max-w-3xl mx-auto leading-relaxed">
            At Boat & Bites, we bring you an unparalleled dining experience that combines the elegance of royal hospitality with innovative boat-themed interiors. Located in the heart of Mota Varachha, Surat, we serve exquisite pure vegetarian cuisine in an atmosphere of timeless sophistication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="glass-effect rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-4" />
              </motion.div>
              <h3 className="font-serif text-xl font-semibold text-gold-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-cream-200 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
