import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChefHat, Star, Flame } from 'lucide-react';

const ChefSpecial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specials = [
    {
      name: "Paneer Schezwan Special",
      description: "Our signature dish - Spicy schezwan paneer with exotic vegetables, perfectly balanced flavors that keep our guests coming back",
      price: 290,
      image: require('../images/572159336_17890118499364950_7112117626334774196_n.jpg'),
      badge: "Chef's Favorite"
    },
    {
      name: "Paneer Shaslik Sizzler",
      description: "Grilled paneer with bell peppers and onions, served on a sizzling hot plate with aromatic rice and signature sauce",
      price: 420,
      image: require('../images/572960272_17890118508364950_6739765247735490429_n.jpg'),
      badge: "Most Ordered"
    },
    {
      name: "Thai Soup Special",
      description: "Authentic Thai flavored hot soup with fresh vegetables and aromatic herbs, a perfect start to your meal",
      price: 180,
      image: require('../images/573439330_17890118511364950_4547673455823649374_n.jpg'),
      badge: "Guest Favorite"
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <ChefHat className="w-12 h-12 text-gold-500" />
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-gold-500">
              Chef's Specials
            </h2>
          </div>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Handpicked by our master chef - dishes that define our culinary excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={special.image}
                  alt={special.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-navy-900" />
                  {special.badge}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3">
                  {special.name}
                </h3>
                <p className="text-cream-200 text-sm mb-4 leading-relaxed">
                  {special.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-gold-500">₹{special.price}</p>
                  <Flame className="w-6 h-6 text-gold-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-cream-200 italic">
            "Every dish is crafted with passion and served with love"
          </p>
          <p className="text-gold-400 font-semibold mt-2">- Chef, Boat & Bites</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChefSpecial;
