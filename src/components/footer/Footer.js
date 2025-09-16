"use client";

import React, { useState, useCallback, useMemo, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  ChevronUp,
} from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import FramerButton from "../ui/framer-button.tsx";
import { TfiLocationPin } from "react-icons/tfi";






const Footer = () => {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [logo, setLogo] = useState(null);



  const handleSubscribe = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/newsletter/subscribe`, { email },
        {
          headers: {
            'x-api-key': API_KEY,
          }
        }
      );
      if (response.data.success) {
        setEmail("");
        toast.success("Successfully subscribed to newsletter!");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error(error.response?.data?.message || "Failed to subscribe");
    }
  }, [email]);

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 300);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
     
      <footer 
        className="bg-[#ffffff] text-white pt-10 bottom-0 w-full shadow-[0px_0px_24px_0px_#00000024] border-t" 
        role="contentinfo" 
        itemScope 
        itemType="http://schema.org/WPFooter"
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div 
              className="transform hover:translate-y-[-5px] transition-transform duration-300"
              itemScope 
              itemType="http://schema.org/Organization"
            >
              {logo ? (
                <img
                  src={logo}
                  alt="iSuite Logo"
                  className="w-32 mb-3"
                  loading="lazy"
                  width="128"
                  height="auto"
                  itemProp="logo"
                />
              ) : (
                <img
                  src="/isuite-org.png"
                  alt="iSuite Logo"
                  className="w-32 mb-3"
                  loading="lazy"
                  width="128"
                  height="auto"
                  itemProp="logo"
                />
              )}
              <p className="text-gray-400 mb-6" itemProp="description">
                Our mission is to empower businesses with impactful digital
                marketing solutions. We transform your online presence into a
                powerful tool for growth.
              </p>
              <div className="flex space-x-4" itemProp="sameAs">
                <a
                  href="https://www.facebook.com/profile.php?id=61579810682598"
                  target="_blank"
                  aria-label="Follow us on Facebook"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.08)] text-[#e63ca3] rounded-full flex items-center justify-center group relative overflow-hidden transition-all duration-300 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.15)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e63ca3] to-[#a91ac1]  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <Facebook size={20} className="relative z-10 transition-colors duration-300 group-hover:text-white" />
                </a>
                <a
                  href="https://youtube.com/@isuite-saas?si=_oxrcVynwYYerZjm"
                   target="_blank"
                  aria-label="Follow us on Youtube"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.08)] text-[#e63ca3] rounded-full flex items-center justify-center group relative overflow-hidden transition-all duration-300 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.15)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e63ca3] to-[#a91ac1]  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <Youtube size={20} className="relative z-10 transition-colors duration-300 group-hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/isuite_saas?igsh=MWJvMWdneWhtcTQ3Mg=="
                   target="_blank"
                  aria-label="Follow us on Instagram"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.08)] text-[#e63ca3] rounded-full flex items-center justify-center group relative overflow-hidden transition-all duration-300 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.15)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e63ca3] to-[#a91ac1]  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <Instagram size={20} className="relative z-10 transition-colors duration-300 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/showcase/isuite-saas/posts/?feedView=all"
                   target="_blank"
                  aria-label="Follow us on Linkedin"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.08)] text-[#e63ca3] rounded-full flex items-center justify-center group relative overflow-hidden transition-all duration-300 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.15)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e63ca3] to-[#a91ac1]  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <Linkedin size={20} className="relative z-10 transition-colors duration-300 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Links Section */}
            <nav 
              aria-label="Footer Navigation" 
              className="transform hover:translate-y-[-5px] transition-transform duration-300"
              itemScope 
              itemType="http://schema.org/SiteNavigationElement"
            >
              <h3 className=" text-xl text-[#e63ca3] font-bold mb-6 relative after:content-[''] after:block after:w-16 after:h-[6px] after:rounded-lg  after:bg-[#e63ca3]  after:mt-2">
                Links
              </h3>
              <ul className="space-y-3">
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    href="https://isuite.io/"
                    className="text-black hover:text-[#e63ca3] transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    href="https://isuite.io/about/"
                    className="text-black hover:text-[#e63ca3] transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    href="https://isuite.io/features/"
                    className="text-black hover:text-[#e63ca3] transition-colors duration-300"
                  >
                    Features
                  </Link>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    href="https://isuite.io/pricing/"
                    className="text-black hover:text-[#e63ca3] transition-colors duration-300"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    href="https://isuite.io/contact/"
                    className="text-black hover:text-[#e63ca3] transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact Section */}
            <div 
              className="transform hover:translate-y-[-5px] transition-transform duration-300"
              itemScope 
              itemType="http://schema.org/ContactPoint"
            >
              <h3 className="text-[#e63ca3] text-xl font-bold mb-6 relative after:content-[''] after:block after:h-[6px] after:rounded-lg  after:w-16  after:bg-[#e63ca3]  after:mt-2">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone className="text-[#e63ca3]" size={20} />
                  <Link
                    href="tel:+918220947112"
                    className="text-black hover:text-[#e63ca3]"
                    itemProp="telephone"
                    title="Call our customer service"
                  >
                    +91 8220947112
                  </Link>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-[#e63ca3]" size={20} />
                  <Link
                    href="mailto:udhay@isuite.io"
                    className="text-black hover:text-[#e63ca3]" 
                  > 
                    udhay@isuite.io
                  </Link>
                </li>
                <li className="flex items-start space-x-3">
                  <TfiLocationPin  className="text-[#e63ca3] mt-1" size={20} />
                  <span className="text-black">
                    3/501, Subash Street,
                    <br />
                    Munneswaran Nagar, Iyer
                    <br />
                    Bungalow, Madurai - 625014
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-[#e63ca3] text-xl font-bold mb-6 relative after:block after:h-[6px] after:rounded-lg  after:w-16   after:bg-[#e63ca3]  after:mt-2">
                Newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-4" aria-label="Newsletter Subscription">
                <p className="text-gray-400">
                  Subscribe to our newsletter for updates and exclusive offers!
                </p>
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border border-gray-600 px-4 py-3 pr-12 focus:outline-none focus:border-[#e63ca3] transition-all duration-300 group-hover:border-[#e63ca3] text-black"
                    required
                  />
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[#e63ca3] p-3 transition-all duration-300">
                    <FaLocationArrow size={20} />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-8 mt-3">
                  <FramerButton type="submit" text="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section with metadata */}
        <div 
          className="mt-16 py-5 bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] "
          itemScope 
          itemType="http://schema.org/WPFooter"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col text-sm md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white">
                © 2024 -  {currentYear} All rights reserved by <span className="  text-white duration-300 transition-all hover:scale-105 transform"> <Link href="https://mntfuture.com/">MnT</Link> </span>
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-white">
                <Link
                  href="https://isuite.io/terms-conditions/"
                  className="hover:text-white transition-all duration-300 hover:scale-105 transform"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="https://isuite.io/privacy-policy/"
                  className="hover:text-white transition-all duration-300 hover:scale-105 transform"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="https://isuite.io/payment-policy/"
                  className="hover:text-white transition-all duration-300 hover:scale-105 transform"
                >
                  Payment Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <AnimatePresence>
          
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed right-4 bottom-4  z-50 bg-gradient-to-r from-[#e63ca3] to-[#a91ac1]  p-3 rounded-full shadow-lg hover:bg-[#0d86e0]"
              aria-label="Scroll to top"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
       
      </footer>
    </>
  );
};

// Add display name for better debugging
Footer.displayName = 'Footer';

// Memoize the component
export default React.memo(Footer);
