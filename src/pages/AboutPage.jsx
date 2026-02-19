import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Award, Users, Leaf, Ship, Clock, MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppFloat from '../components/WhatsAppFloat';
import StoryReveal from '../components/StoryReveal';

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Ship,
      title: "Boat-Themed Ambience",
      description: "Immerse yourself in our unique yacht-inspired interiors that transport you to a world of luxury and elegance."
    },
    {
      icon: Leaf,
      title: "100% Pure Veg",
      description: "We serve only the finest vegetarian cuisine, prepared with premium ingredients and authentic recipes."
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect venue for family gatherings, celebrations, and creating memorable moments together."
    },
    {
      icon: Award,
      title: "Top Rated",
      description: "Recognized as Surat's most loved dining destination with 4.9/5 rating on Google Reviews."
    }
  ];

  return (
    <div className="pt-20">
      <section ref={ref} className="py-16 md:py-24 bg-navy-900 relative overflow-hidden">
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
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-gold-500 mb-6">
              About Boat & Bites
            </h1>
            <p className="text-xl md:text-2xl text-cream-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Welcome to Boat & Bites, where luxury meets tradition in the heart of Mota Varachha, Surat. 
              We bring you an unparalleled dining experience that combines the elegance of royal hospitality 
              with innovative boat-themed interiors.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-gold-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream-200 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold-400 mb-8 text-center">Visit Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gold-400 mb-2">Location</h3>
                    <p className="text-cream-200">
                      Mota Varachha, Saniya Hemad<br />
                      Surat, Gujarat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gold-400 mb-2">Opening Hours</h3>
                    <p className="text-cream-200">
                      Every Day: 9:00 AM - 10:00 PM<br />
                      Last Order: 9:30 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gold-400 mb-2">Phone</h3>
                    <a href="tel:+919099105448" className="text-cream-200 hover:text-gold-500 transition-colors">
                      +91 90991 05448
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gold-400 mb-2">Email</h3>
                    <a href="mailto:info@boatandbites.com" className="text-cream-200 hover:text-gold-500 transition-colors">
                      info@boatandbites.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Reveal with Scroll Animation */}
      <StoryReveal />

      <WhatsAppFloat />
    </div>
  );
};

export default AboutPage;
