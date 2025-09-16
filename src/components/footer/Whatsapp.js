"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaClock, FaHeadset, FaCheck, FaBell } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const PHONE_NUMBER = '+918925845077';
const WHATSAPP_API_URL = `https://wa.me/${PHONE_NUMBER}`;

// Memoize static content
const FeatureList = React.memo(({ features }) => (
  <div className="space-y-3">
    {features.map((feature, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.1 }}
        className="flex items-center gap-2 text-gray-600"
      >
        <FaCheck className="w-4 h-4 text-green-500" />
        <span className="text-sm">{feature}</span>
      </motion.div>
    ))}
  </div>
));

FeatureList.displayName = 'FeatureList';



const WhatsAppButton = ({ logo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  // Memoize static data
  const tips = useMemo(() => [
    "💡 Get instant support",
    "🚀 Quick response time",
    "🔒 Secure conversations",
    "📱 Available on all devices"
  ], []);

  const features = useMemo(() => [
    "24/7 Live Support",
    "Instant Solutions",
    "Secure Conversations",
    "Multi-language Support"
  ], []);

  // Optimize callbacks
  const handleDirectContact = useCallback(() => {
    window.open(WHATSAPP_API_URL, '_blank');
    setIsExpanded(false);
  }, []);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  // Optimize interval with proper cleanup
  useEffect(() => {
    if (!isExpanded) return;
    
    const interval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tips.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isExpanded, tips.length]);

  // Simplified animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 }
  };

  // Enhanced book animation variants
  const bookVariants = {
    closed: {
      rotateY: 90,
      opacity: 0,
      transformOrigin: "left center",
      transformStyle: "preserve-3d",
      boxShadow: "0 0 0 rgba(0,0,0,0)"
    },
    open: {
      rotateY: 0,
      opacity: 1,
      transformOrigin: "left center",
      transformStyle: "preserve-3d",
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1
      },
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    },
    exit: {
      rotateY: 90,
      opacity: 0,
      transformOrigin: "left center",
      transformStyle: "preserve-3d",
      transition: { duration: 0.5 }
    }
  };

  const pageVariants = {
    closed: { rotateY: 90, opacity: 0 },
    open: i => ({
      rotateY: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="fixed left-4 md:left-8 bottom-4 md:bottom-8 z-[9999] flex items-center">
      <motion.div className="relative">
        {/* Floating Button */}
        <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
        <motion.button
          onClick={toggleExpanded}
          className="relative bg-gradient-to-r from-green-500 to-green-600 p-3 md:p-4 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isExpanded ? <IoMdClose size={24} className="text-white" /> : <FaWhatsapp size={24} className="text-white" />}
        </motion.button>

        {/* Modal with optimized animations */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={bookVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="absolute bottom-20 left-0 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl w-[90vw] sm:w-[350px] max-h-[90vh] overflow-hidden border border-green-100 perspective-1000"
            >
              {/* Glass Header with page animation */}
              <motion.div
                variants={pageVariants}
                custom={0}
                className="bg-gradient-to-r from-green-500 to-green-600 p-4 md:p-6 text-white relative backdrop-blur-lg"
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer"></div>
                
                {/* Profile Section */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="relative"
                    animate={{ 
                      rotateY: [0, 180, 360],
                      transition: { duration: 3, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-[2px] shadow-lg">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                        <img
                          src={logo || "/isuite/isuite-org.png"}
                          alt="Support"
                          className="w-full h-full object-contain scale-[0.85] transform transition-transform duration-300 hover:scale-[0.9]"
                          loading="eager"
                          style={{
                            imageRendering: 'crisp-edges',
                            backfaceVisibility: 'hidden'
                          }}
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <motion.h3 
                      className="text-lg md:text-xl font-bold"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      iSuite Support
                    </motion.h3>
                    <motion.div 
                      className="flex flex-wrap items-center gap-2 text-xs text-green-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                        Online Now
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        Instant Reply
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Animated Tips */}
                <motion.div
                  key={currentTip}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-2 p-3 bg-white/10 backdrop-blur-sm rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <div className="min-w-[24px] h-6 flex items-center justify-center">
                      {tips[currentTip].split(' ')[0]}
                    </div>
                    <p className="text-sm">{tips[currentTip].split(' ').slice(1).join(' ')}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Scrollable Content with page animation */}
              <motion.div
                variants={pageVariants}
                custom={1}
                className="overflow-y-auto max-h-[68vh] md:max-h-[450px] hide-scrollbar transform-gpu"
              >
                <div className="p-4 md:p-6 space-y-6">
                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-xl"
                    >
                      <div className="flex items-center gap-2 text-green-700 mb-1">
                        <FaHeadset className="w-3 h-3" />
                        <span className="text-small">Online Now</span>
                      </div>
                      <p className="text-[10px] text-green-600">Ready to help you</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl"
                    >
                      <div className="flex items-center gap-2 text-blue-700 mb-1">
                        <FaBell className="w-3 h-3" />
                        <span className="text-small">Fast Reply</span>
                      </div>
                      <p className="text-[10px] text-blue-600">Average 2 min</p>
                    </motion.div>
                  </div> 

                  {/* Optimized Feature List */} 
                  <FeatureList features={features} />

                  {/* Action Button */}
                  <motion.button
                    onClick={handleDirectContact}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-shimmer"></div>
                    <motion.div 
                      className="relative z-10 flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                          transition: { duration: 1, repeat: Infinity }
                        }}
                      >
                        <FaWhatsapp size={24} />
                      </motion.div>
                      <span className="font-semibold">Start Conversation</span>
                    </motion.div>
                  </motion.button>

                  {/* Enhanced Trust Badges */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {[
                      { icon: "🔒", text: "Encrypted" },
                      { icon: "✨", text: "Premium Support" },
                      { icon: "💯", text: "Satisfaction" }
                    ].map((badge, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl mb-1">{badge.icon}</div>
                        <div className="text-xs text-gray-500">{badge.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// Add perspective to global CSS
const globalStyles = `
  .perspective-1000 {
    perspective: 1000px;
    transform-style: preserve-3d;
  }
`;

// Add style tag to head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = globalStyles;
  document.head.appendChild(style);
}

// Memoize the entire component
export default React.memo(WhatsAppButton);
