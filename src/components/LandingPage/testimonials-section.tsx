"use client";

import { AnimatedTestimonials } from "./testimonials";

const testimonials = [
   {
      quote:
        "iSuite has changed the way we handle leads. Every enquiry is tracked, and our sales improved within 3 months.",
      name: "K. Vinoth Kumar",
      designation: "Chennai",
      rating: 5,
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Managing customer data was tough before. With CRM and WhatsApp marketing, I now close deals much faster.",
      name: "Priya R",
      designation: "Coimbatore",
      rating: 5,
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "iSuite's LMS made student management simple. We share lessons, track progress,and even collect fees online.",
      name: "Senthil Kumar R ",
      designation: "Madurai",
      rating: 5,
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Earlier we used many apps for business tasks. Now with iSuite, billing, promotions,and follow-ups are effortless.",
      name: "Meenakshi Sundaram L",
      designation: "Tirunelveli",
      rating: 5,
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="noise absolute inset-0 opacity-[0.02]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#e63ca3]">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            See What Our Clients Say
          </p>
         
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
