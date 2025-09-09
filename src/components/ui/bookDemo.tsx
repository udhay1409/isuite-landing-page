"use client";
import { motion } from "framer-motion";

interface BookDemoProps {
  className?: string;
}

const BookDemo = ({ className = "" }: BookDemoProps) => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.a
      href="https://admin.isuite.io/u/60357/saravanan-s-calendar-i-suite-demo--"
      target="_self"
      rel="noopener noreferrer"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className={`rounded-full border-1 border-white bg-gradient-to-r from-[#e63ca3] to-[#a91ac1]   px-7 sm:px-9 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg inline-block text-center cursor-pointer ${className}`}
    >
      Book Demo
    </motion.a>
  );
};

export default BookDemo;
