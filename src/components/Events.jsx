import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { PartyPopper, Users, Briefcase, Heart, Calendar } from 'lucide-react';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const eventTypes = [
    {
      icon: PartyPopper,
      title: "Birthday Celebrations",
      description: "Make your special day unforgettable with our exclusive birthday packages",
      features: ["Customized decoration", "Special birthday cake", "Dedicated seating area", "Complimentary mocktail"],
      offer: "Flat 10% Off"
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Perfect venue for business meetings, team lunches, and corporate gatherings",
      features: ["Private dining area", "Audio/Visual setup", "Custom menu options", "Professional service"],
      offer: "Group Discounts"
    },
    {
      icon: Heart,
      title: "Romantic Dinners",
      description: "Create magical moments with your loved one in our boat-themed ambience",
      features: ["Candlelight setup", "Special table arrangement", "Personalized service", "Romantic music"],
      offer: "Couple Special"
    },
    {
      icon: Users,
      title: "Family Gatherings",
      description: "Celebrate family occasions in our spacious and comfortable dining area",
      features: ["Large group seating", "Family-friendly menu", "Kids special dishes", "Flexible timing"],
      offer: "Family Packages"
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gold-500 mb-6">
            Events & Celebrations
          </h2>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Host your special occasions at Boat & Bites - Where every celebration becomes a cherished memory
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-xs font-bold">
                {event.offer}
              </div>

              <event.icon className="w-12 h-12 text-gold-500 mb-4" />
              
              <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3">
                {event.title}
              </h3>
              
              <p className="text-cream-200 mb-4">
                {event.description}
              </p>

              <ul className="space-y-2 mb-6">
                {event.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-cream-100 text-sm">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-2xl p-8 md:p-12 text-center border-2 border-gold-500/30"
        >
          <Calendar className="w-16 h-16 text-gold-500 mx-auto mb-6" />
          <h3 className="font-serif text-3xl font-bold text-gold-400 mb-4">
            Book Your Event Today
          </h3>
          <p className="text-cream-200 mb-6 max-w-2xl mx-auto">
            Contact us to discuss your requirements and let us create a memorable experience for you and your guests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919099105448?text=Hello%20Boat%20%26%20Bites!%20I%20want%20to%20book%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gold-500/50"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+919099105448"
              className="px-8 py-4 border-2 border-gold-500 text-gold-500 font-semibold rounded-full hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
