"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface FramerButtonProps { 
  text?: string | React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function FramerButton({ 
  text = "Hover me", 
  onClick, 
  className = "", 
  type = "button",
  disabled = false 
}: FramerButtonProps) {
  // Track hover state to control animations
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      // Base styling for the button
      className={`relative px-[18px] py-[12px] border-none bg-transparent cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      // Handle hover state changes
      onHoverStart={() => !disabled && setIsHovered(true)}
      onHoverEnd={() => !disabled && setIsHovered(false)}
      // Scale animation on click (active state)
      whileTap={!disabled ? { scale: 0.95 } : {}}
      // Initial scale to match the original CSS
      initial={{ scale: 1 }}
      // Smooth transition for the scale animation
      transition={{ duration: 0.2 }}
      // Pass through the onClick handler and form props
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {/* Background circle/pill that expands on hover */}
      <motion.span
        className="absolute top-0 left-0 block rounded-[50px] bg-gradient-to-r from-[#e63ca3] to-[#a91ac1]  w-[50px] h-[50px]"
        // Animate width based on hover state
        animate={{
          width: isHovered ? "100%" : "50px",
        }}
        // Match the original CSS transition timing and easing
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1], // Cubic bezier curve for smooth easing
        }}
      />

      {/* Text content with color transition */}
      <motion.span 
        className={`relative font-ubuntu text-[18px] font-bold tracking-[0.05em] z-10 flex items-center`}
        animate={{
          color: isHovered ? "#FFFFFF" : "#000000"
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
        
        {/* Arrow SVG with color transition - only show if not custom content */}
        {typeof text === 'string' && (
          <motion.svg
            className="relative inline-block ml-[10px] z-10"
            width="15px"
            height="10px"
            viewBox="0 0 13 10"
            animate={{
              x: isHovered ? 0 : -5,
              stroke: isHovered ? "#FFFFFF" : "#000000"
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Horizontal line of the arrow */}
            <path d="M1,5 L11,5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Arrow head */}
            <polyline
              points="8 1 12 5 8 9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.svg>
        )}
      </motion.span>
    </motion.button>
  )
}

