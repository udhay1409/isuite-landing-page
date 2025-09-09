
import {
  Rocket,
  FileSpreadsheet,
  Megaphone,
  Share2,
  CalendarDays,
  Users,
  MessageCircle,
  Mail,
  MessageSquare,
  DollarSign,
  Workflow,
  Users2,
  GraduationCap,
  CreditCard,
  FolderLock,
  UserPlus
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Unlock The Power Of iSuite Software",
      description: "Create a professional website in minutes with built-in templates and tools. Add your online shop to sell products or services directly, without needing any extra software.",
      icon: <Rocket className="h-6 w-6" />,
      path: "power-of-isuite"
    },
    {
      title: "Form Builder",
      description: "Create customizable forms to capture leads and collect customer information easily. Embed them on your website or share links to grow your database faster.",
      icon: <FileSpreadsheet className="h-6 w-6" />,
      path: "form-builder"
    },
    {
      title: "Al Ad Launcher",
      description: "Launch smart ads powered by Al that find the right audience for your business. Save time, reduce costs, and get better results with automated ad campaigns.",
      icon: <Megaphone className="h-6 w-6" />,
      path: "a-i-ad-launcher"
    },
    {
      title: "Social Media Page Manager",
      description: "Manage all your social media pages from one place. Schedule posts, track engagement, and grow your online presence without switching between multiple apps.",
      icon: <Share2 className="h-6 w-6" />,
      path: "social-media-page-manager"
    },
    {
      title: "1:1 Calendar Booking",
      description: "Let customers schedule appointments with you directly without back-and-forth calls. Automated reminders ensure you never miss a meeting.",
      icon: <CalendarDays className="h-6 w-6" />,
      path: "calendar-booking"
    },
    {
      title: "CRM",
      description: "Keep all customer details in one system to track conversations, follow-ups, and history. Build stronger relationships and never lose touch with your leads.",
      icon: <Users className="h-6 w-6" />,
      path: "crm"
    },
    {
      title: "WhatsApp & Bulk Marketing",
      description: "Send personalized messages, updates, or promotions directly to your customers on WhatsApp. Run bulk campaigns to reach more people instantly.",
      icon: <MessageCircle className="h-6 w-6" />,
      path: "whatsapp-bulk-marketing"
    },
    {
      title: "Email & Bulk Marketing",
      description: "Design, send, and track email campaigns with ease. Reach thousands of customers at once and measure open rates, clicks, and responses.",
      icon: <Mail className="h-6 w-6" />,
      path: "email-bulk-marketing"
    },
    {
      title: "SMS Portal",
      description: "Run bulk SMS campaigns to send offers, alerts, or reminders instantly. Reach your audience directly on their phones with high open rates.",
      icon: <MessageSquare className="h-6 w-6" />,
      path: "sms-portal"
    },
    {
      title: "Sales & Finance",
      description: "Track deals, invoices, and payments in one simple dashboard. Manage your revenue and expenses with clear, real-time insights.",
      icon: <DollarSign className="h-6 w-6" />,
      path: "booking-engine"
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks like follow-ups, reminders, or data entry. Save time and let iSuite handle the work while you focus on growth.",
      icon: <Workflow className="h-6 w-6" />,
      path: "workflow-automation"
    },
    {
      title: "Private Community",
      description: "Bring your members, students, or customers together in one secure space. Share updates, host discussions, and keep everyone engaged with chat groups, leaderboards, and more.",
      icon: <Users2 className="h-6 w-6" />,
      path: "private-community"
    },
    {
      title: "LMS",
      description: "Easily create and manage online courses with videos, lessons, and resources. Track student progress, award certificates, and make learning interactive with built-in tools.",
      icon: <GraduationCap className="h-6 w-6" />,
      path: "lms"
    },
    {
      title: "Payment Gateway Integration",
      description: "Accept payments easily with trusted providers like Razorpay, Stripe, Instamojo, Paytm, PayPal, and Cashfree. Secure, fast, and hassle-free transactions.",
      icon: <CreditCard className="h-6 w-6" />,
      path: "payment-gateway-integration"
    },
    {
      title: "Vault",
      description: "Unlimited storage for important business files, customer data, images, videos, audios, and documents - all secured in one place with safe and private access anytime.",
      icon: <FolderLock className="h-6 w-6" />,
      path: "vault"
    },
    {
      title: "Unlimited Staff",
      description: "Add unlimited team members to collaborate on one platform. Assign roles, share access, and manage everything without restrictions.",
      icon: <UserPlus className="h-6 w-6" />,
      path: "unlimited-staff"
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-6 gap-6">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} total={features.length} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,

}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  path: string;
  total: number;
}) => {
  return (
    <div
      className="flex flex-col p-6 relative group/feature rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-500 absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e63ca3]/5 to-[#a91ac1]/5 dark:from-[#e63ca3]/10 dark:to-[#a91ac1]/10 pointer-events-none" />
      
      <div className="mb-4 relative z-10 text-[#e63ca3] dark:text-[#e63ca3]/90">
        {icon}
      </div>
      
      <div className="text-lg font-bold mb-3 relative z-10">
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 h-6 group-hover/feature:h-12 w-1 rounded-r-full bg-[#e63ca3] group-hover/feature:bg-gradient-to-b from-[#e63ca3] to-[#a91ac1] transition-all duration-300" />
        <h3 className="group-hover/feature:translate-x-1 transition duration-300 text-neutral-800 dark:text-neutral-100 leading-tight">
          {title}
        </h3>
      </div>
      
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
};
