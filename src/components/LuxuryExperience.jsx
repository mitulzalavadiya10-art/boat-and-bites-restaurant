import { ScrollRevealSection } from './ScrollRevealSection';
import { motion } from 'framer-motion';
import { Anchor, Sparkles, Users, Award } from 'lucide-react';

// Import images
import interior1 from '../images/569691679_17889379035364950_7393175199000590703_n.jpg';
import interior2 from '../images/570038328_17889379026364950_1420839489967443783_n.jpg';
import interior3 from '../images/570078818_17889379017364950_2629759202481275618_n.jpg';
import food1 from '../images/572159336_17890118499364950_7112117626334774196_n.jpg';

const LuxuryExperience = () => {
  return (
    <div className="bg-navy-900 overflow-hidden relative">
      {/* Curved Background Waves */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-navy-800 rounded-b-[100%] transform -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-navy-800 rounded-t-[100%] transform translate-y-16"></div>

      <ScrollRevealSection
        titleComponent={
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-cream-100 mb-3 sm:mb-4 leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experience Luxury
                <br />
                <span className="text-gold-500">Boat-Themed Dining</span>
              </motion.h1>
              <motion.p 
                className="text-cream-100/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Where royal hospitality meets pure vegetarian excellence
              </motion.p>
            </motion.div>
          </>
        }
      >
        {/* Content inside the scrolling card */}
        <div className="h-full w-full">
          {/* Main Image Grid with Animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-full">
            <motion.div 
              className="col-span-2 row-span-2 overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={interior1}
                alt="Boat & Bites Luxury Interior"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="col-span-1 overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={interior2}
                alt="Fine Dining Ambience"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="col-span-1 overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={interior3}
                alt="Elegant Seating"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="col-span-1 overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={food1}
                alt="Gourmet Cuisine"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="col-span-1 bg-gradient-to-br from-gold-500/20 to-gold-500/5 rounded-3xl flex items-center justify-center p-4 border-2 border-gold-500/30"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(212,175,55,0.6)",
                boxShadow: "0 0 30px rgba(212,175,55,0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Anchor className="w-12 h-12 text-gold-500 mx-auto mb-2" />
                </motion.div>
                <p className="text-cream-100 font-serif font-bold text-lg">Boat & Bites</p>
                <p className="text-cream-100/60 text-sm">Mota Varachha, Surat</p>
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Features Section Below with More Curves */}
      <div className="container mx-auto px-4 pb-20 -mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Anchor,
              title: "Boat-Themed Elegance",
              desc: "Unique nautical ambiance that transports you",
              delay: 0
            },
            {
              icon: Sparkles,
              title: "Pure Veg Excellence",
              desc: "Gourmet vegetarian cuisine crafted to perfection",
              delay: 0.1
            },
            {
              icon: Users,
              title: "Perfect Celebrations",
              desc: "Create unforgettable memories with loved ones",
              delay: 0.2
            },
            {
              icon: Award,
              title: "Award-Winning Service",
              desc: "Hospitality that exceeds expectations",
              delay: 0.3
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08,
                y: -10,
                boxShadow: "0 20px 40px rgba(212,175,55,0.2)"
              }}
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-500/20 rounded-3xl p-6 text-center transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-gold-500" />
              </motion.div>
              <motion.h3 
                className="font-serif text-xl font-bold text-gold-500 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-cream-100/60 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default LuxuryExperience;
