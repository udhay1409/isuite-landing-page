"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";
import type React from "react";
import { BorderBeam } from "@/components/ui/border-beam";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://admin.isuite.io/api/automations/68bbd5777817b/execute";
const API_TOKEN =
  process.env.NEXT_PUBLIC_API_TOKEN || "df3bf939158c12fc20d7f622337374f8";

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_token: API_TOKEN,
          contact_name: formData.name,
          contact_email: formData.email,
          contact_phone: formData.phone,
        }),
      });

      if (response.ok) {
        // Success - show toast and play video
        toast.success("Registration successful! Enjoy the demo video.");
        setIsModalOpen(false);
        setIsVideoPlaying(true);

        // Reset form data
        setFormData({ name: "", email: "", phone: "" });
      } else {
        // Handle API error
        const errorData = await response.json().catch(() => null);
        toast.error(
          errorData?.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      // Handle network error
      console.error("API Error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: 1.2,
      }}
      className="relative z-10 rounded-xl xs:rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white/50 p-2 xs:p-3 sm:p-4 shadow-lg sm:shadow-xl backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50 overflow-hidden mx-auto max-w-[280px] xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl"
    >
      <BorderBeam
        size={300}
        duration={30}
        delay={0}
        colorFrom="#e63ca3"
        colorTo="#a91ac1"
        borderWidth={4}
      />
      <div className="group relative z-10 w-full overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#e63ca3]/30 bg-gradient-to-br from-[#e63ca3]/5 to-[#a91ac1]/5 shadow-lg sm:shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-[#e63ca3]/50 hover:shadow-2xl dark:border-[#e63ca3]/30 dark:from-[#e63ca3]/10 dark:to-[#a91ac1]/10 dark:hover:border-[#e63ca3]/50">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/video/updatedgif.gif"
            alt="Background Animation"
            className="w-full h-full "
            fill
          />

          <div className="absolute inset-0 bg-black/10  " />
        </div>

        <div className="relative w-full aspect-video">
          <div className="absolute inset-0 flex items-center justify-center">
            {isVideoPlaying ? (
              <motion.iframe
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
                src="https://www.youtube.com/embed/xSTcMOgTEqc?si=nBBSHym32TP_ijtF&amp;&autoplay=1"
                title="Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center w-full h-full "
              >
                <div
                  className="flex flex-col items-center gap-6 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="group/play relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] p-0.5 xs:p-1"
                  >
                    <div className="absolute inset-0 rounded-full   bg-gradient-to-r from-[#ffffff] to-[#e7e2e2] transition-opacity duration-500 group-hover/play:opacity-100" />
                    <div className="relative cursor-pointer h-full w-full rounded-full bg-gradient-to-r from-[#e63ca3] to-[#a91ac1]  flex items-center justify-center">
                      <Play className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-white ml-0.5 xs:ml-1" />
                    </div>
                  </motion.div>
                  {/* <div className="space-y-1 xs:space-y-2 text-center">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] bg-clip-text text-transparent"
                    >
                      Unlock the Demo
                    </motion.p>
                  </div> */}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-[425px] w-[calc(100%-24px)] xs:w-[90vw] overflow-hidden rounded-xl xs:rounded-2xl border border-gray-200 bg-white/95 p-4 xs:p-6 sm:p-8 shadow-2xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/95">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
          <div className="absolute -left-32 -top-32 h-[300px] xs:h-[400px] w-[300px] xs:w-[400px] rounded-full bg-[#e63ca3]/10 blur-[100px]" />
          <div className="absolute -right-32 -bottom-32 h-[300px] xs:h-[400px] w-[300px] xs:w-[400px] rounded-full bg-[#a91ac1]/10 blur-[100px]" />

          <DialogHeader className="relative ">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DialogTitle className="text-center">
                <span className="bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] bg-clip-text text-xl xs:text-2xl sm:text-3xl font-bold tracking-tight text-transparent">
                  Get Early Access
                </span>
                <p className="mt-2 xs:mt-3 text-xs xs:text-sm text-gray-600 dark:text-gray-400">
                  Enter your details to watch the demo video
                </p>
              </DialogTitle>
            </motion.div>
          </DialogHeader>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleFormSubmit}
            className="relative mt-2 space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 text-gray-900 shadow-sm backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:border-[#e63ca3] focus:outline-none focus:ring-2 focus:ring-[#e63ca3]/20 dark:border-gray-800 dark:bg-gray-900/80 dark:text-white dark:placeholder:text-gray-500"
                disabled={isLoading}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-2"
            >
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 text-gray-900 shadow-sm backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:border-[#e63ca3] focus:outline-none focus:ring-2 focus:ring-[#e63ca3]/20 dark:border-gray-800 dark:bg-gray-900/80 dark:text-white dark:placeholder:text-gray-500"
                disabled={isLoading}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2"
            >
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 text-gray-900 shadow-sm backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:border-[#e63ca3] focus:outline-none focus:ring-2 focus:ring-[#e63ca3]/20 dark:border-gray-800 dark:bg-gray-900/80 dark:text-white dark:placeholder:text-gray-500"
                disabled={isLoading}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="relative cursor-pointer w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] px-4 xs:px-6 py-3 xs:py-4 text-sm xs:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="relative z-10"
                >
                  {isLoading ? "Submitting..." : "Watch Demo Video"}
                </motion.span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#e63ca3]/90 to-[#a91ac1]/90 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </Button>
            </motion.div>
          </motion.form>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
