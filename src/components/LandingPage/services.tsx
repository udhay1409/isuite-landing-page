"use client";

import Image from "next/image";
import { JSX, useEffect, useState } from "react";

interface ServiceItem {
  title: string;
  description: JSX.Element;
  image: string;
}

const dummyContent: ServiceItem[] = [
  {
    title: "Website Builder & Shop",
    description: (
      <>
        <p className="mb-4">
          Our Website Builder makes it easy for anyone-regardless of technical
          skills-to create a professional, fully functional website in just
          minutes. With pre-designed templates and drag-and-drop tools, you can
          build a modern site that reflects your brand. What makes it even more
          powerful is the built-in shop feature, allowing you to sell products
          or services directly without relying on third-party platforms.
          
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>
            Create and customize your website quickly with professional
            templates
          </li>
          <li>Add your own online store to sell products/services directly</li>
          <li>
            No coding required-easy tools make it user-friendly for everyone
          </li>
        </ul>
      </>
    ),
    image: "/features/website-builder-shop.png",
  },
  {
    title: "Form Builder",
    description: (
      <>
        <p className="mb-4">
          Collecting customer information and leads becomes simple with our Form
          Builder. You can design forms exactly the way you want-whether for
          inquiries, registrations, or surveys-and embed them directly on your
          website or share them via links. This ensures that your database grows
          faster and remains organized.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Create customized forms for different purposes</li>
          <li>Embed forms on your website or share via links</li>
          <li>Collect, organize, and manage leads effortlessly</li>
        </ul>
      </>
    ),
    image: "/features/form-builder.png",
  },
  {
    title: "AI Ad Launcher",
    description: (
      <>
        <p className="mb-4">
          Run smarter ad campaigns without needing a marketing expert. Our
          AI-powered Ad Launcher analyzes your target audience and automatically
          runs ads that deliver maximum results while saving both time and
          money. This helps businesses of any size compete effectively online.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>AI automatically identifies the right audience for your ads</li>
          <li>Saves time and cuts down advertising costs</li>
          <li>Delivers better engagement and conversions with less effort</li>
        </ul>
      </>
    ),
    image: "/features/AI-Ad-Launcher.png",
  },
  {
    title: "Social Media Manager",
    description: (
      <>
        <p className="mb-4">
          No more switching between multiple apps-manage all your social media
          pages from one platform. Schedule posts in advance, monitor
          engagement, and track performance, all from a single dashboard. This
          makes your social media strategy more consistent and effective.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Manage all social media accounts in one place</li>
          <li>Schedule posts and updates in advance</li>
          <li>Monitor engagement and track growth easily</li>
        </ul>
      </>
    ),
    image: "/features/socail-media-page-manager.png",
  },
  {
    title: "1:1 Calendar Booking",
    description: (
      <>
        <p className="mb-4">
          Simplify the way clients or customers book time with you. Our Calendar
          Booking feature allows people to directly schedule appointments
          without unnecessary back-and-forth communication. With automated
          reminders, you never miss an important meeting again.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Let customers book appointments directly with you</li>
          <li>Eliminate the need for constant calls and follow-ups</li>
          <li>Automated reminders reduce no-shows</li>
        </ul>
      </>
    ),
    image: "/features/1_1-Calendar-Booking.png",
  },
  {
    title: "CRM System",
    description: (
      <>
        <p className="mb-4">
          All your customer information and interactions are stored in one
          system, making it easier to track conversations, history, and
          follow-ups. This helps you build stronger relationships, increase
          sales, and never lose important data.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Store and manage customer data in one place</li>
          <li>Track interactions and communication history</li>
          <li>Build long-term relationships effectively</li>
        </ul>
      </>
    ),
    image: "/features/CRM.png",
  },
  {
    title: "WhatsApp Marketing",
    description: (
      <>
        <p className="mb-4">
          Engage customers instantly with personalized WhatsApp messages or send
          bulk promotions to reach a wider audience. This feature helps you keep
          communication direct, interactive, and highly effective.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Send personalized updates and offers directly</li>
          <li>Run bulk campaigns efficiently</li>
          <li>Increase customer engagement with direct communication</li>
        </ul>
      </>
    ),
    image: "/features/WhatsApp-Bulk-Marketing_.png",
  },
  {
    title: "Email Marketing",
    description: (
      <>
        <p className="mb-4">
          Run professional email campaigns with beautifully designed templates
          and real-time tracking. Send newsletters, promotions, or updates to
          thousands of people at once and track open rates, clicks, and
          responses easily.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Design and send attractive email campaigns</li>
          <li>Reach thousands of people at once</li>
          <li>Measure campaign success with analytics</li>
        </ul>
      </>
    ),
    image: "/features/Email-Bulk-Marketing.png",
  },
  {
    title: "SMS Portal",
    description: (
      <>
        <p className="mb-4">
          Instantly connect with customers on their phones using bulk SMS
          campaigns. Whether it&apos;s offers, alerts, or reminders, SMS
          messages have some of the highest open rates, ensuring your message
          gets seen.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Run instant bulk SMS campaigns</li>
          <li>Send reminders and alerts directly</li>
          <li>High open rates for better reach</li>
        </ul>
      </>
    ),
    image: "/features/SMS-Portal.png",
  },
  {
    title: "Sales & Finance",
    description: (
      <>
        <p className="mb-4">
          Manage deals, invoices, and payments all in one simple dashboard. Get
          a clear picture of your revenue, expenses, and profits in real time,
          ensuring better financial decisions for your business.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Track and manage all sales in one place</li>
          <li>Generate and manage invoices easily</li>
          <li>Get real-time financial insights</li>
        </ul>
      </>
    ),
    image: "/features/Sales-Finance.png",
  },
  {
    title: "Workflow Automation",
    description: (
      <>
        <p className="mb-4">
          Automate repetitive tasks such as follow-ups, reminders, and data
          entry, freeing up your time to focus on growing your business. Our
          workflow automation ensures smoother operations with less manual
          effort.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Automate repetitive tasks</li>
          <li>Reduce errors with reliable workflows</li>
          <li>Save time for business growth</li>
        </ul>
      </>
    ),
    image: "/features/Workflow-Automation.png",
  },
  {
    title: "Private Community",
    description: (
      <>
        <p className="mb-4">
          Build a private online space where your members, students, or
          customers can connect and engage. Share updates, host discussions, and
          keep your audience active with features like leaderboards and chat
          groups.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Create a secure space for members</li>
          <li>Host discussions and group chats</li>
          <li>Keep members engaged with features</li>
        </ul>
      </>
    ),
    image: "/features/Private-community.png",
  },
  {
    title: "Learning Management",
    description: (
      <>
        <p className="mb-4">
          Launch and manage online courses with ease. Upload videos, lessons,
          and resources while tracking student progress. Reward learners with
          certificates and make your courses interactive for better results.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Create and manage courses easily</li>
          <li>Track student progress</li>
          <li>Award certificates automatically</li>
        </ul>
      </>
    ),
    image: "/features/LMS.png",
  },
  {
    title: "Payment Integration",
    description: (
      <>
        <p className="mb-4">
          Accept payments through trusted platforms like Razorpay, Stripe,
          PayPal, and more. Transactions are secure, fast, and seamless, making
          it easier for your customers to pay without hassle.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Multiple payment gateway options</li>
          <li>Secure transaction processing</li>
          <li>Flexible payment methods</li>
        </ul>
      </>
    ),
    image: "/features/Payment-Gateway.png",
  },
  {
    title: "Secure Vault",
    description: (
      <>
        <p className="mb-4">
          Securely store all your important files, documents, images, audios,
          and videos in one place. With unlimited storage, you never run out of
          space and can access your files safely at any time.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Unlimited secure storage</li>
          <li>Easy file organization</li>
          <li>Access control and sharing</li>
        </ul>
      </>
    ),
    image: "/features/vault.png",
  },
  {
    title: "Unlimited Resources",
    description: (
      <>
        <p className="mb-4">
          Scale your business without worrying about limitations. iSuite allows
          you to add unlimited staff members and provides unlimited storage,
          ensuring smooth collaboration and secure data management. Whether your
          team grows or your data expands, the platform adapts to your needs
          without extra costs or restrictions.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Add unlimited team members</li>
          <li>Unlimited storage space</li>
          <li>No hidden costs or restrictions</li>
        </ul>
      </>
    ),
    image: "/features/Unlimited-Staff.png",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const serviceElements = document.querySelectorAll("[data-service-index]");

      serviceElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementCenter = elementTop + rect.height / 2;

        if (
          scrollPosition + windowHeight / 2 >= elementCenter - 200 &&
          scrollPosition + windowHeight / 2 <= elementCenter + 200
        ) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl px-4">
      {/* Center line with your specific gradient */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 hidden md:block transform -translate-x-0.5">
        <div className="w-full h-full bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] rounded-full opacity-30"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] rounded-full blur-sm opacity-20"></div>
      </div>

      <div className="space-y-20">
        {dummyContent.map((service, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeIndex === index;

          return (
            <div key={index} className="relative" data-service-index={index}>
              {/* Animated Timeline dot with scroll-based activation */}
              <div className="absolute left-1/2 top-8 hidden md:block transform -translate-x-1/2 z-10">
                <div className="relative">
                  {/* Main dot */}
                  <div
                    className={`w-6 h-6 bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] rounded-full shadow-lg transition-all duration-500 ${
                      isActive ? "scale-125 shadow-xl" : "scale-100"
                    }`}
                  ></div>

                  {/* Pulsing effect when active */}
                  {isActive && (
                    <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] rounded-full animate-ping opacity-75"></div>
                  )}

                  {/* Glow effect when active */}
                  <div
                    className={`absolute -inset-2 w-10 h-10 bg-gradient-to-r from-[#e63ca3]/30 to-[#a91ac1]/30 rounded-full blur-md transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>

                  {/* Outer ring animation when active */}
                  {isActive && (
                    <div className="absolute -inset-3 w-12 h-12 border-2 border-[#e63ca3] rounded-full animate-pulse opacity-60"></div>
                  )}
                </div>
              </div>

              {/* Desktop Layout - Alternating */}
              <div className="hidden md:flex items-center">
                {isLeft ? (
                  <>
                    {/* Content on left side of center line */}
                    <div className="w-5/12 pr-8 text-right">
                      <h3
                        className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                          isActive
                            ? "bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] bg-clip-text text-transparent"
                            : "text-black"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <div className="text-gray-600 text-justify">
                        {service.description}
                      </div>
                    </div>
                    <div className="w-2/12"></div> {/* Space for center line */}
                    {/* Image on right side of center line */}
                    <div className="w-5/12 pl-8">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image on left side of center line */}
                    <div className="w-5/12 pr-8">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                    <div className="w-2/12"></div> {/* Space for center line */}
                    {/* Content on right side of center line */}
                    <div className="w-5/12 pl-8 text-left">
                      <h3
                        className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                          isActive
                            ? "bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] bg-clip-text text-transparent"
                            : "text-black"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <div className="text-gray-600 text-justify">
                        {service.description}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Layout - Title first, then image, then description */}
              <div className="md:hidden mt-5">
                {/* Title first */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-4 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] bg-clip-text text-transparent"
                        : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Image second */}
                <div className="mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={240}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>

                {/* Description third */}
                <div>
                  <div className="text-gray-600 text-justify">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
