"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function HeroSection() {
  return (
      <div className="relative flex w-full flex-col items-center justify-center ">
        <div className="relative px-3 py-8 sm:px-4 sm:py-10 md:py-20 max-w-7xl mx-auto w-full">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold">
            {["Grow", "Your", "Business", "Smarter", "with", "iSuite"].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className={`mr-2 inline-block ${
                  word === "iSuite"
                    ? "bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] bg-clip-text text-transparent"
                    : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-[280px] xs:max-w-sm sm:max-w-xl px-3 xs:px-4 sm:px-6 py-3 sm:py-4 text-justify text-sm xs:text-base sm:text-lg font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed"
          >
            Streamline your business operations with our all-in-one suite of powerful tools.
            From website building to marketing automation, we&apos;ve got everything you need to scale your success.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-4 xs:mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 xs:gap-3 sm:gap-4 w-full max-w-[280px] xs:max-w-sm sm:max-w-none px-3 xs:px-4 sm:px-0 mx-auto"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="relative cursor-pointer w-full sm:w-52 md:w-60 h-11 xs:h-12 sm:h-14 overflow-hidden rounded-lg bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] px-3 xs:px-4 sm:px-6 text-xs xs:text-sm sm:text-base font-medium text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center">
                <span className="relative z-10">Explore Now</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="relative cursor-pointer w-full sm:w-52 md:w-60 h-11 xs:h-12 sm:h-14 overflow-hidden rounded-lg border-2 border-[#e63ca3] bg-white/80 px-3 xs:px-4 sm:px-6 text-xs xs:text-sm sm:text-base font-medium text-[#e63ca3] backdrop-blur-sm transition-all duration-300 hover:border-[#a91ac1] hover:text-[#a91ac1] dark:bg-black/80 dark:text-white flex items-center justify-center"
              >
                <span className="relative z-10">Contact Support</span>
                <div className="absolute inset-0 -z-10 bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
  );
}
