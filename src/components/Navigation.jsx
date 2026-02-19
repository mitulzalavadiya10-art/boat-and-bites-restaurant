import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/menu", label: "Our Menu" },
    { path: "/gallery", label: "Gallery" },
    { path: "/events", label: "Events & Celebrations" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-gold-500/20">
        <header className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="font-serif text-2xl font-bold text-gold-500 hover:text-gold-400 transition-colors">
              Boat & Bites
            </Link>

            <button 
              onClick={toggleMenu} 
              className="flex items-center gap-3 px-6 py-3 bg-gold-500 text-navy-900 rounded-full hover:bg-gold-400 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <span className="hidden sm:inline">Menu</span>
              {isMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </nav>
        </header>
      </div>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Dark Overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={closeMenu}
          ></div>
          
          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-full sm:max-w-md md:max-w-lg bg-navy-900 shadow-2xl z-[101] overflow-y-auto animate-slideInRight">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-20 right-20 w-64 h-64 bg-gold-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
            </div>

            {/* Menu Content */}
            <div className="relative z-10 p-8 pt-24">
              <nav className="mb-12">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link 
                        to={item.path} 
                        onClick={closeMenu}
                        className="block p-5 rounded-xl bg-navy-800/60 border-2 border-gold-500/30 hover:border-gold-500 hover:bg-navy-800 transition-all duration-300 group"
                      >
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold-400 group-hover:text-gold-300 transition-colors">
                          {item.label}
                        </h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Info */}
              <div className="pt-6 border-t-2 border-gold-500/30">
                <p className="text-cream-100 text-sm mb-3 font-semibold">Contact Us</p>
                <a 
                  href="https://wa.me/919099105448" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-gold-300 font-bold text-xl transition-colors block mb-4"
                >
                  +91 90991 05448
                </a>
                <p className="text-cream-100/80 text-sm leading-relaxed">
                  Mota Varachha, Saniya Hemad<br />
                  Surat, Gujarat
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
