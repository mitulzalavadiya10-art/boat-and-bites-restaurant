import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import WhatsAppFloat from '../components/WhatsAppFloat';

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      <section ref={ref} className="py-16 md:py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-gold-500 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-cream-100 max-w-2xl mx-auto">
              Have questions or want to make a reservation? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-3xl p-8 md:p-12"
            >
              <h2 className="font-serif text-3xl font-bold text-gold-400 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gold-400 font-semibold mb-2">Your Name</label>
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

                <div>
                  <label className="block text-gold-400 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-900/50 border-2 border-gold-500/30 rounded-xl px-4 py-3 text-cream-100 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gold-400 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-900/50 border-2 border-gold-500/30 rounded-xl px-4 py-3 text-cream-100 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-gold-400 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-navy-900/50 border-2 border-gold-500/30 rounded-xl px-4 py-3 text-cream-100 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 text-navy-900 font-bold py-4 rounded-xl hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/50 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border-2 border-green-500 rounded-xl p-4 flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p className="text-green-500 font-semibold">
                      Message sent! We'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-2xl p-8">
                <MapPin className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3">Location</h3>
                <p className="text-cream-200 text-lg">
                  Mota Varachha, Saniya Hemad<br />
                  Surat, Gujarat, India
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <Phone className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3">Phone</h3>
                <a href="tel:+919099105448" className="text-cream-200 text-lg hover:text-gold-500 transition-colors">
                  +91 90991 05448
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <Mail className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3">Email</h3>
                <a href="mailto:info@boatandbites.com" className="text-cream-200 text-lg hover:text-gold-500 transition-colors">
                  info@boatandbites.com
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <Clock className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3">Opening Hours</h3>
                <p className="text-cream-200 text-lg">
                  Every Day<br />
                  9:00 AM - 10:00 PM<br />
                  <span className="text-sm text-cream-200/60">Last Order: 9:30 PM</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 rounded-3xl overflow-hidden border-2 border-gold-500/30"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d72.8!3d21.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Boat & Bites Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
      <WhatsAppFloat />
    </div>
  );
};

export default ContactPage;
