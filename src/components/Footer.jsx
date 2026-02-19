import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-gold-500/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-2xl font-bold text-gold-500">Boat & Bites</h3>
            </div>
            <p className="text-cream-200 mb-4 leading-relaxed">
              Experience luxury pure veg fine dining in Surat's most exclusive boat-themed restaurant.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/boatandbites" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/boatandbites_surat/?hl=en" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/boatandbites" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-gold-500 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <p className="text-cream-200">
                  Mota Varachha, Saniya Hemad<br />
                  Surat, Gujarat
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500" />
                <a href="tel:+919099105448" className="text-cream-200 hover:text-gold-500 transition-colors">
                  +91 90991 05448
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500" />
                <a href="mailto:info@boatandbites.com" className="text-cream-200 hover:text-gold-500 transition-colors">
                  info@boatandbites.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-gold-500 mb-4">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <div className="text-cream-200">
                  <p className="font-semibold">Every Day</p>
                  <p>9:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="text-cream-200/60 text-sm">
                <p>Last order: 9:30 PM</p>
                <p>Kitchen closes: 9:45 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-gold-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-cream-200 hover:text-gold-500 transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-cream-200 hover:text-gold-500 transition-colors">
                  Reserve Table
                </a>
              </li>
              <li>
                <a href="https://wa.me/919099105448" className="text-cream-200 hover:text-gold-500 transition-colors">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-200 hover:text-gold-500 transition-colors">
                  Private Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="border-t border-gold-500/20 pt-8 mb-8">
          <div className="text-center text-cream-200/60 text-sm space-y-2">
            <p>
              Best Pure Veg Restaurant in Mota Varachha | Boat Themed Dining Surat | 
              Top Rated Family Restaurant Saniya Hemad
            </p>
            <p>
              Fine Dining in Surat | Luxury Restaurant Near Me | Pure Veg Fine Dining Mota Varachha
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mb-8 rounded-2xl overflow-hidden border-2 border-gold-500/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d72.8!3d21.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Boat & Bites Location"
          ></iframe>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold-500/20 pt-8 text-center">
          <p className="text-cream-200/60 text-sm">
            © 2024 Boat & Bites. All rights reserved. | Designed with luxury in mind
          </p>
          <p className="text-cream-200/40 text-xs mt-2">
            Order directly via WhatsApp - No commission, Better prices for you!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
