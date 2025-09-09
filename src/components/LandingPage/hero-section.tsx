"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";


export default function HeroSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="relative px-3 py-6 sm:px-4 sm:py-10 md:py-10 max-w-[1400px] mx-auto w-full">
        <h1 className="relative z-10 mx-auto max-w-6xl text-center text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold flex flex-wrap justify-center items-center">
            {["Transform", "Your", "Vision", "into", "Reality"].map((word, index) => (
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
                  word === "Transform" || word === "Reality"
                    ? "bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] bg-clip-text text-transparent"
                    : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {word}
              </motion.span>
            ))}
            <div className="inline-flex items-center gap-2 mt-0 sm:mt-2">
              <motion.span
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="text-gray-900 dark:text-gray-100"
              >
                with
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center"
              >
                <Image
                  src="/isuite-org.png"
                  alt="iSuite.org"
                  width={200}
                  height={50}
                  className="h-10 sm:h-14 md:h-16 lg:h-16 w-auto"
                />
              </motion.span>
            </div>
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
            className="relative z-10 mx-auto max-w-4xl px-3 xs:px-4 sm:px-6 py-3 sm:py-4 text-center text-sm xs:text-base sm:text-lg font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed"
          >
            Unleash the full potential of your business with our comprehensive suite of cutting-edge tools.
            From intelligent automation to seamless integration, we empower you to innovate, scale, and succeed in today&apos;s digital landscape.
          </motion.p>
          
        </div>
      </div>
  );
}
