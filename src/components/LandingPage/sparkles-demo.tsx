"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

export default function SparklesPreview() {
  return (
    <div className="w-full mt-7  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <Image
        src="/isuite-org.png"
        alt="iSuite.org"
        width={200}
        height={50}
      />
      <div className="w-full h-20 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#e63ca3] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#a91ac1] to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#e63ca3] to-transparent h-[5px] w-3/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#a91ac1] to-transparent h-px w-3/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#e63ca3"
        />

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
      </div>
    </div>
  );
}
