import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Leaf, Flame, Plus, Minus, ShoppingCart, X } from 'lucide-react';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const menuData = {
    Starters: [
      { id: 1, name: "Paneer Tikka", description: "Marinated cottage cheese grilled to perfection", price: 280, bestSeller: true },
      { id: 2, name: "Paneer Schezwan", description: "Spicy schezwan paneer with vegetables", price: 290, bestSeller: true },
      { id: 3, name: "Crispy Corn", description: "Golden fried corn with exotic spices", price: 220, bestSeller: false },
      { id: 4, name: "Veg Spring Rolls", description: "Crispy rolls with fresh vegetables", price: 200, bestSeller: false },
      { id: 5, name: "Stuffed Mushroom", description: "Button mushrooms stuffed with cheese", price: 260, bestSeller: false },
      { id: 6, name: "Paneer 65", description: "South Indian style spicy paneer", price: 270, bestSeller: false },
    ],
    Soups: [
      { id: 7, name: "Thai Soup", description: "Authentic Thai flavored hot soup", price: 180, bestSeller: true },
      { id: 8, name: "Hot & Sour Soup", description: "Tangy and spicy Chinese soup", price: 160, bestSeller: false },
      { id: 9, name: "Manchow Soup", description: "Spicy soup with crispy noodles", price: 170, bestSeller: false },
      { id: 10, name: "Sweet Corn Soup", description: "Creamy sweet corn soup", price: 150, bestSeller: false },
    ],
    Sizzlers: [
      { id: 11, name: "Paneer Shaslik Sizzler", description: "Grilled paneer with vegetables on sizzler", price: 420, bestSeller: true },
      { id: 12, name: "Paneer Tikka Sizzler", description: "Tandoori paneer tikka on hot plate", price: 400, bestSeller: false },
      { id: 13, name: "Veg Extravaganza Sizzler", description: "Mixed vegetables with exotic sauce", price: 380, bestSeller: false },
      { id: 14, name: "Mushroom Sizzler", description: "Grilled mushrooms with special sauce", price: 410, bestSeller: false },
    ],
    "Main Course": [
      { id: 15, name: "Paneer Butter Masala", description: "Cottage cheese in rich tomato gravy", price: 320, bestSeller: true },
      { id: 16, name: "Dal Makhani", description: "Slow-cooked black lentils in butter", price: 280, bestSeller: true },
      { id: 17, name: "Palak Paneer", description: "Cottage cheese in spinach gravy", price: 300, bestSeller: false },
      { id: 18, name: "Malai Kofta", description: "Cottage cheese dumplings in creamy gravy", price: 310, bestSeller: false },
      { id: 19, name: "Kadai Paneer", description: "Paneer cooked with bell peppers", price: 310, bestSeller: false },
      { id: 20, name: "Veg Kolhapuri", description: "Spicy mixed vegetables Kolhapuri style", price: 290, bestSeller: false },
    ],
    Chinese: [
      { id: 21, name: "Veg Manchurian", description: "Crispy veg balls in tangy sauce", price: 250, bestSeller: true },
      { id: 22, name: "Chilli Paneer", description: "Spicy paneer with bell peppers", price: 280, bestSeller: true },
      { id: 23, name: "Veg Hakka Noodles", description: "Stir-fried noodles with vegetables", price: 220, bestSeller: false },
      { id: 24, name: "Veg Fried Rice", description: "Aromatic fried rice with vegetables", price: 210, bestSeller: false },
      { id: 25, name: "American Chopsuey", description: "Crispy noodles with sweet & sour sauce", price: 260, bestSeller: false },
    ],
    "Rice & Breads": [
      { id: 26, name: "Veg Biryani", description: "Aromatic basmati rice with vegetables", price: 300, bestSeller: true },
      { id: 27, name: "Jeera Rice", description: "Cumin flavored basmati rice", price: 180, bestSeller: false },
      { id: 28, name: "Butter Naan", description: "Soft leavened bread with butter", price: 60, bestSeller: false },
      { id: 29, name: "Garlic Naan", description: "Naan topped with garlic", price: 70, bestSeller: false },
      { id: 30, name: "Tandoori Roti", description: "Whole wheat bread from tandoor", price: 40, bestSeller: false },
      { id: 31, name: "Butter Roti", description: "Whole wheat bread with butter", price: 50, bestSeller: false },
    ],
    Mocktails: [
      { id: 32, name: "Blue Lagoon", description: "Refreshing blue curacao mocktail", price: 160, bestSeller: true },
      { id: 33, name: "Virgin Mojito", description: "Classic mint & lime refresher", price: 140, bestSeller: true },
      { id: 34, name: "Tropical Paradise", description: "Mixed fruit mocktail", price: 150, bestSeller: false },
      { id: 35, name: "Sunset Splash", description: "Orange & passion fruit blend", price: 150, bestSeller: false },
      { id: 36, name: "Watermelon Cooler", description: "Fresh watermelon with mint", price: 130, bestSeller: false },
      { id: 37, name: "Mango Delight", description: "Fresh mango shake", price: 140, bestSeller: false },
    ],
  };

  const categories = ['All', ...Object.keys(menuData)];

  const getFilteredItems = () => {
    if (activeCategory === 'All') {
      return Object.entries(menuData).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      );
    }
    return menuData[activeCategory].map(item => ({ ...item, category: activeCategory }));
  };

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem.quantity === 1) {
      setCart(cart.filter(cartItem => cartItem.id !== itemId));
    } else {
      setCart(cart.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) return;
    
    let message = "Hello Boat & Bites! I want to order:\n\n";
    cart.forEach(item => {
      message += `${item.quantity}x ${item.name} - ₹${item.price * item.quantity}\n`;
    });
    message += `\nTotal: ₹${getCartTotal()}\n\nPlease confirm my order.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919099105448?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="menu" ref={ref} className="py-12 md:py-16 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gold-500 mb-6">
            Our Exquisite Menu
          </h2>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Discover our carefully curated selection of pure vegetarian delicacies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold-500 text-navy-900 shadow-lg shadow-gold-500/50'
                  : 'bg-navy-800 text-cream-100 hover:bg-navy-700 border border-gold-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredItems().map((item, index) => (
              <motion.div
                key={`${item.category}-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="glass-effect rounded-2xl p-4 sm:p-6 transition-all duration-300 relative overflow-hidden group"
              >
                {item.bestSeller && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    Best Seller
                  </div>
                )}

                <div className="flex items-start gap-3 mb-4">
                  <Leaf className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-gold-400 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-cream-200 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-gold-500">
                        ₹{item.price}
                      </p>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gold-500 text-navy-900 px-4 py-2 rounded-full font-semibold hover:bg-gold-400 transition-all duration-300 flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setShowCart(true)}
          className="fixed bottom-24 right-6 bg-gold-500 text-navy-900 p-4 rounded-full shadow-2xl hover:bg-gold-400 transition-all duration-300 z-40"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
            {getCartItemCount()}
          </span>
        </motion.button>
      )}

      {/* Cart Modal */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCart(false)}
              className="fixed inset-0 bg-black/70 z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 h-full w-full md:w-96 bg-navy-800 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-2xl font-bold text-gold-500">Your Order</h3>
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-cream-100 hover:text-gold-500 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-cream-200 text-center py-8">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="glass-effect rounded-xl p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gold-400">{item.name}</h4>
                              <p className="text-sm text-cream-200">₹{item.price} each</p>
                            </div>
                            <p className="font-bold text-gold-500">₹{item.price * item.quantity}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="bg-navy-900 text-gold-500 p-2 rounded-full hover:bg-navy-700 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-cream-100 font-semibold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="bg-navy-900 text-gold-500 p-2 rounded-full hover:bg-navy-700 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gold-500/30 pt-4 mb-6">
                      <div className="flex items-center justify-between text-xl font-bold">
                        <span className="text-cream-100">Total:</span>
                        <span className="text-gold-500">₹{getCartTotal()}</span>
                      </div>
                    </div>

                    <button
                      onClick={sendWhatsAppOrder}
                      className="w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Order via WhatsApp
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;
