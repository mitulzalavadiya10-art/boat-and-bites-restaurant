import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, Users, User, CheckCircle } from 'lucide-react';

const Reservation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', guests: '', date: '', time: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservation" ref={ref} className="py-12 md:py-16 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gold-500 mb-6">
            Reserve Your Table
          </h2>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Secure your spot at Surat's most exclusive dining destination
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-gold-500/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <label className="block text-gold-400 font-semibold mb-2 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy-900/50 border-2 border-gold-500/30 rounded-xl px-4 py-3 text-cream-100 focus:border-gold-500 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-gold-400 font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy-900/50 border-2 border-gold-500/30 rounded-xl px-4 py-3 text-cream-100 focus:border-gold-500 focus:outline-none transition-colors"
                >
                  <option value="">Select guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-gold-400 font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-900/50 border-2 border-gold-500/30 rounded-xl px-4 py-3 text-cream-100 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <label className="block text-gold-400 font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-900/50 border-2 border-gold-500/30 rounded-xl px-4 py-3 text-cream-100 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold-500 text-navy-900 font-bold py-4 rounded-xl hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/50"
              >
                Confirm Reservation
              </motion.button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-green-500/20 border-2 border-green-500 rounded-xl p-4 flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500" />
                <p className="text-green-500 font-semibold">
                  Reservation confirmed! We'll contact you shortly.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
