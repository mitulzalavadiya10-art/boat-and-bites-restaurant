import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = [
    {
      name: "Rajesh Patel",
      location: "Mota Varachha",
      rating: 5,
      text: "The best pure veg restaurant in Mota Varachha! The boat-themed ambience is absolutely stunning. Perfect place for family celebrations.",
      date: "2 weeks ago"
    },
    {
      name: "Priya Shah",
      location: "Saniya Hemad",
      rating: 5,
      text: "Outstanding food quality and royal hospitality. The paneer tikka and dal makhani are must-try dishes. Highly recommended for fine dining in Surat!",
      date: "1 month ago"
    },
    {
      name: "Amit Desai",
      location: "Surat",
      rating: 5,
      text: "Celebrated my wife's birthday here. The boat dining experience is unique and the staff made it extra special. Top-rated family restaurant indeed!",
      date: "3 weeks ago"
    },
    {
      name: "Neha Mehta",
      location: "Mota Varachha",
      rating: 5,
      text: "Luxury restaurant near me that exceeded all expectations. The mocktails are amazing and the ambience is perfect for romantic dinners.",
      date: "1 week ago"
    },
    {
      name: "Kiran Joshi",
      location: "Surat",
      rating: 5,
      text: "Best pure veg fine dining experience in Surat. The boat-themed interiors transport you to a different world. Worth every penny!",
      date: "2 months ago"
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gold-500 mb-6">
            What Our Guests in Surat Say
          </h2>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Discover why we're the top-rated family restaurant in Mota Varachha
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-500/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-cream-100 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="border-t border-gold-500/20 pt-4">
                  <p className="font-semibold text-gold-400">{review.name}</p>
                  <p className="text-sm text-cream-200">{review.location}</p>
                  <p className="text-xs text-cream-200/60 mt-1">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-cream-200 mb-4">Rated 4.9/5 on Google Reviews</p>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold-500 text-gold-500" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
