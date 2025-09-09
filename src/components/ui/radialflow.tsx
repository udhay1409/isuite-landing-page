"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export interface Topic {
  id: string;
  name: string;
  position: { x: number; y: number };
  color: string;
  highlighted: boolean;
}

interface RadialFlowProps {
  topics: Topic[];
  badgeName: string;
  centralDotColor?: string;
}

export function RadialFlow({
  topics,
  badgeName,
  centralDotColor = "#FFFFFF",
}: RadialFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    const resizeObserver = new ResizeObserver(() =>
      requestAnimationFrame(updateDimensions)
    );
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [updateDimensions]);

  const getLabelPosition = useCallback(
    (position: { x: number; y: number }) => {
      if (isMobile) {
        return {
          x: position.x < 50 ? 15 : 85,
          y: position.y,
        };
      }
      return position;
    },
    [isMobile]
  );

  const getPathData = useCallback(
    (topic: Topic) => {
      if (!dimensions.width || !dimensions.height) return "";

      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      const pos = getLabelPosition(topic.position);
      const x = (pos.x / 100) * dimensions.width;
      const y = (pos.y / 100) * dimensions.height;

      const controlX =
        pos.x < 50 ? x + (centerX - x) * 0.75 : x - (x - centerX) * 0.75;

      return `M ${x} ${y} Q ${controlX} ${y} ${centerX} ${centerY}`;
    },
    [dimensions, getLabelPosition]
  );

  const generateParticles = useCallback(
    (topic: Topic) => {
      if (!topic.highlighted) return null;

      const pathData = getPathData(topic);
      const eggWidth = 16;
      const eggHeight = 10;

      return (
        <motion.g key={`particle-${topic.id}`}>
          <motion.path
            d={`M -${eggWidth / 2} 0 
             a ${eggWidth / 2} ${eggHeight / 2} 0 1 0 ${eggWidth} 0 
             a ${eggWidth / 2} ${eggHeight / 2} 0 1 0 -${eggWidth} 0`}
            fill={`url(#gradient-${topic.id})`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.5, 1],
            }}
          >
            <animateMotion
              dur="3.5s"
              repeatCount="indefinite"
              path={pathData}
              rotate="auto"
              calcMode="spline"
              keyPoints="0;1"
              keyTimes="0;1"
              keySplines="0.42 0 0.58 1"
            />
          </motion.path>
        </motion.g>
      );
    },
    [getPathData]
  );

  const getTopicLabelClasses = useCallback(
    (topic: Topic) =>
      `absolute transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1b4b] text-transparent bg-clip-text bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] rounded-md 
     backdrop-blur-sm border transition-all duration-300 px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold
     ${
       topic.highlighted
         ? "border-[#e63ca3] shadow-lg shadow-[#a91ac1]/20"
         : "border-gray-800"
     }
     whitespace-normal break-words text-center leading-tight`,
    []
  );

  const getLabelStyle = useCallback(
    (topic: Topic) => ({
      left: `${getLabelPosition(topic.position).x}%`,
      top: `${getLabelPosition(topic.position).y}%`,
      color: topic.color,
      maxWidth: isMobile ? "100px" : "200px",
      minWidth: isMobile ? "60px" : "80px",
      lineHeight: "1.2",
    }),
    [isMobile, getLabelPosition]
  );

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-visible"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mb-8">
        <Badge variant="default">
          {badgeName}
        </Badge>
      </div>

      {dimensions.width > 0 && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {topics.map((topic) => (
              <linearGradient key={`gradient-${topic.id}`} id={`gradient-${topic.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e63ca3" />
                <stop offset="100%" stopColor="#a91ac1" />
              </linearGradient>
            ))}
          </defs>

          {topics.map((topic) => (
            <path
              key={`path-${topic.id}`}
              d={getPathData(topic)}
              stroke={topic.highlighted ? topic.color : "#374151"}
              strokeWidth="1"
              strokeOpacity={topic.highlighted ? 0.4 : 0.2}
              fill="none"
            />
          ))}

          {topics.map((topic) => generateParticles(topic))}

          <motion.circle
            cx={dimensions.width / 2}
            cy={dimensions.height / 2}
            r="4"
            fill={centralDotColor}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </svg>
      )}

      {topics.map((topic) => (
        <div
          key={`label-${topic.id}`}
          className={getTopicLabelClasses(topic)}
          style={getLabelStyle(topic)}
        >
          {topic.name}
        </div>
      ))}
    </div>
  );
}
