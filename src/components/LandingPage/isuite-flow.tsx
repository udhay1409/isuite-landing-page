import { Topic, RadialFlow } from "@/components/ui/radialflow";

const demoTopics: Topic[] = [
  {
    id: "power-of-isuite",
    name: "iSuite Software",
    position: { x: 20, y: 16.66 },
    color: "#e63ca3",
    highlighted: true,
  },
  {
    id: "form-builder",
    name: "Form Builder",
    position: { x: 20, y: 33.33 },
    color: "#e63ca3",
    highlighted: true,
  },
  {
    id: "a-i-ad-launcher",
    name: "AI Ad Launcher",
    position: { x: 20, y: 50 },
    color: "#e63ca3",
    highlighted: true,
  },
  {
    id: "social-media",
    name: "Social Media",
    position: { x: 20, y: 66.66 },
    color: "#e63ca3",
    highlighted: true,
  },
  {
    id: "crm",
    name: "CRM",
    position: { x: 20, y: 83.33 },
    color: "#e63ca3",
    highlighted: true,
  },
  {
    id: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    position: { x: 20, y: 100 },
    color: "#e63ca3",
    highlighted: true,
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    position: { x: 80, y: 16.66 },
    color: "#a91ac1",
    highlighted: true,
  },
  {
    id: "sms-portal",
    name: "SMS Portal",
    position: { x: 80, y: 33.33 },
    color: "#a91ac1",
    highlighted: true,
  },
  {
    id: "sales-finance",
    name: "Sales & Finance",
    position: { x: 80, y: 50 },
    color: "#a91ac1",
    highlighted: true,
  },
  {
    id: "workflow",
    name: "Workflow",
    position: { x: 80, y: 66.66 },
    color: "#a91ac1",
    highlighted: true,
  },
  {
    id: "lms",
    name: "LMS",
    position: { x: 80, y: 83.33 },
    color: "#a91ac1",
    highlighted: true,
  },
  {
    id: "payments",
    name: "Payment Gateway",
    position: { x: 80, y: 100 },
    color: "#a91ac1",
    highlighted: true,
  }
];

import Image from 'next/image';

export default function RadialFlowDemo() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      <RadialFlow
        topics={demoTopics}
        badgeName=""
        centralDotColor="transparent"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="bg-[#1e1b4b] rounded-full p-2 sm:p-3 md:p-4 shadow-lg shadow-purple-500/20">
          <Image
            src="/isuite-org.png"
            alt="iSuite Logo"
            width={60}
            height={60}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
