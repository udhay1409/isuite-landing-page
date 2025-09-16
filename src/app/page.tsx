import HeroSection from "@/components/LandingPage/hero-section";
import VideoSection from "@/components/LandingPage/video-section";
// import FeaturesSection from "@/components/LandingPage/features";
// import TestimonialsSection from "@/components/LandingPage/testimonials-section";
import RadialFlowDemo from "@/components/LandingPage/isuite-flow";
import BookDemo from "@/components/ui/bookDemo";
import {Services} from "@/components/LandingPage/services"
import KineticTestimonialDemo from "@/components/LandingPage/kinetik-testimonials";
import SparklesPreview from "@/components/LandingPage/sparkles-demo";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-50/80 via-white/90 to-blue-50/80 dark:from-gray-900/80 dark:via-gray-900/90 dark:to-gray-800/80" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="fixed -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-200 opacity-20 blur-[100px] filter dark:bg-purple-900" />
      <div className="fixed -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-blue-200 opacity-20 blur-[100px] filter dark:bg-blue-900" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex  w-full flex-col items-center justify-start">
        <div className="w-full max-w-7xl">
          <HeroSection />
        </div>
        <div className="w-full max-w-7xl ">
          <VideoSection />
          <div className="col-span-full mt-5 flex justify-center items-center">
            <BookDemo />
          </div>
        </div>

        <div className="w-full   items-center justify-center">
          <RadialFlowDemo />
          <div className="col-span-full mt-8 flex justify-center items-center">
            <BookDemo />
          </div>
        </div>
        {/* <div className="w-full max-w-7xl">
          <FeaturesSection />
        </div> */}
        <div className="w-full max-w-7xl">
          <Services />
        </div>
{/* 
        <div className="w-full max-w-7xl ">
          <TestimonialsSection />
        </div> */}

        <div className="w-full max-w-7xl ">
          <KineticTestimonialDemo />
        </div>

        <div className="w-full ">
          <SparklesPreview />
        </div>


        <div className="w-full p-0">
        <Footer />
        </div>

        
      </div>
    </div>
  );
}
