"use client";

import Image from "next/image";
import { JSX, useEffect, useState } from "react";
import BookDemo from "../ui/bookDemo";

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
        <p className="mb-4 text-md">
          Your Business, Online in Minutes No more coding, no more waiting weeks
          for a developer. With iSuite’s Website Builder & Shop, you can set up
          your business website + online store in just a few clicks. It’s as
          simple as filling out a form - and your digital shop is ready to go
          live!
        </p>

        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>
        <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
          <li>
            <b>Zero Tech Skills Needed : </b> Anyone can build a professional
            website. Just add your business details, upload your logo, and
            you’re live.
          </li>
          <li>
            <b>One Link for Everything : </b> Get a unique shop link and QR code
            instantly. Share it on WhatsApp, social media, or anywhere your
            customers are.
          </li>
          <li>
            <b>Showcase Your Products : </b> Add products, prices, images, and
            descriptions with ease. From one product to a full catalog your shop
            grows as you grow.
          </li>
          <li>
            <b>Sell Without Boundaries : </b> Whether you’re a local store,
            service provider, or startup, your online shop is open 24/7.
            Customers can browse, inquire, and buy anytime.
          </li>
          <li>
            <b>Made for Mobile : </b> Your website and shop are 100%
            mobile-friendly, so customers get a smooth shopping experience on
            any device.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite Website Builder & Shop, you don’t just get a website, you
          get a sales-ready digital storefront that’s fast, simple, and built
          for growth.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>

        {/* <h3 className="text-lg font-semibold mb-2">Imagine This</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>
            You’re a boutique owner → Launch your online catalog in minutes and
            share the shop link with your WhatsApp groups.
          </li>
          <li>
            You’re a service provider → Create a sleek webpage, highlight your
            services, and let clients contact you instantly.
          </li>
          <li>
            You’re a startup → Build your digital presence without spending
            thousands on web developers.
          </li>
        </ul>

        <p className="mb-4">
          Whatever your business - retail, services, or startups, iSuite makes
          going digital simple and fast.
        </p>
        <p className="mb-4">
          With iSuite Website Builder & Shop, you don’t just get a website, you
          get a sales-ready digital storefront that’s fast, simple, and built
          for growth.
        </p> */}
      </>
    ),
    image: "/features/website-builder-shop.png",
  },
  {
    title: "Form Builder",
    description: (
      <>
        <p className="mb-4 text-md">
          No tech headaches. With iSuite’s Form Builder, you can create custom
          enquiry forms in just a few clicks. Add them to your website, share
          the link, and every lead will flow directly into your CRM or iSuite
          CRM, so you never miss an opportunity.
        </p>
        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>

        <ul className="list-disc text-sm pl-6 space-y-2 text-gray-700">
          <li>
            <b>Build Forms in Minutes : </b>Drag, drop, and customize. Add name,
            email, phone, and more fields to collect exactly what you need.
          </li>
          <li>
            <b>Your Brand, Your Style : </b>Match form colors, button styles,
            and text to your brand - no boring default forms here.
          </li>
          <li>
            <b>Instant Preview : </b>See exactly how your form looks before
            publishing. What you design is what your customers see.
          </li>
          <li>
            <b>Direct to CRM : </b>Every enquiry captured goes straight into
            iSuite CRM leads pipeline. No copy-paste, no missed data.
          </li>
          <li>
            <b>Works Anywhere : </b>Embed on your website, share the link, or
            connect to landing pages, your form is ready to capture leads
            wherever your customers are.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite Form Builder + CRM, you don’t just collect leads, you
          manage and convert them, all in one place.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/form-builder.png",
  },
  {
    title: "AI Ad Launcher",
    description: (
      <>
        <p className="mb-4 text-md">
          Forget long hours of writing copy, designing creatives, and guessing
          what works. With iSuite’s AI Ad Launcher, you can create, launch, and
          manage ads on Facebook, Instagram and more social media in just a few
          clicks - all powered by AI.
        </p>

        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>
        <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
          <li>
            <b>Ad Copy in Seconds : </b> Type your goal (e.g., “Book Demo”) and
            our AI writes catchy ad copy in multiple versions. No writer’s block
            ever again.
          </li>
          <li>
            <b>Image & Video Ready : </b> Upload your creatives, or let AI
            generate ad visuals instantly.
          </li>
          <li>
            <b>Multi-Format Made Easy : </b> Choose single image, video, or
            carousel ads- publish across Facebook, Instagram, LinkedIn and so
            on, with one click.
          </li>
          <li>
            <b>Data-Driven Suggestions : </b> AI helps you select the best ad
            combinations, so your money is spent wisely.
          </li>
          <li>
            <b>All-in-One Dashboard : </b> No need to jump between platforms.
            Create, preview, and launch your ads directly from iSuite.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With AI Ad Launcher, you get an always-ready digital marketing team
          inside iSuite - quick, simple, and powerful.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/AI-Ad-Launcher.png",
  },
  {
    title: "Social Media Manager",
    description: (
      <>
        <p className="mb-4 text-md">
          No more juggling between apps, tabs, and logins. With iSuite’s Social
          Media Manager, you control your entire online presence from one place.
          Schedule posts, track engagement, and measure results- effortlessly.
        </p>
        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>

        <ul className="list-disc text-sm pl-6 space-y-2 text-gray-700">
          <li>
            <b>All-in-One Access : </b>Manage Facebook, Instagram, LinkedIn,
            WhatsApp, YouTube, and more - from a single dashboard.
          </li>
          <li>
            <b>Smart Scheduling : </b> Plan and schedule posts in advance, so
            your brand stays active even when you’re busy.
          </li>
          <li>
            <b>Engagement Tracking : </b>Monitor likes, comments, shares, and
            messages in real-time. Never miss an interaction.
          </li>
          <li>
            <b>Growth Analytics : </b>Track performance and audience growth with
            easy-to-read reports that guide your strategy.
          </li>
          <li>
            <b>Boost Productivity & Brand Consistency : </b>Save hours every
            week by managing everything in one place. Your content stays
            on-brand, updates are timely, and your social media strategy finally
            feels effortless.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite Social Media Manager, your brand stays visible, active,
          and professional, all with half the effort.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/socail-media-page-manager.png",
  },
  {
    title: "1:1 Calendar Booking",
    description: (
      <>
        <p className="mb-4 text-md">
          Tired of endless back-and-forth messages to fix a meeting time? With
          iSuite’s 1:1 Calendar Booking, your clients can book time with you
          instantly, no confusion, no double bookings, just smooth scheduling.
        </p>

        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>
        <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
          <li>
            <b>Instant Booking Links : </b> Share a single link, and clients
            pick a slot that works for them- directly synced with your
            availability.
          </li>
          <li>
            <b>No More Double Bookings : </b> Smart calendar sync ensures you’re
            never overbooked or missing appointments.
          </li>
          <li>
            <b>Branded Booking Pages : </b> Customize with your logo, services,
            and availability - your booking page looks professional and
            trustworthy.
          </li>
          <li>
            <b>Automatic Reminders : </b> Reduce no-shows with timely email/SMS
            reminders for you and your clients.
          </li>
          <li>
            <b>Perfect for Any Industry : </b> Consultants, coaches, salons,
            healthcare professionals, freelancers - anyone who needs 1:1 time
            can use it.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite’s 1:1 Calendar Booking, scheduling becomes effortless,
          giving you more time to focus on building relationships and growing
          your business.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/1_1-Calendar-Booking.png",
  },
  {
    title: "CRM System",
    description: (
      <>
        <p className="mb-4 text-md">
          Stop juggling spreadsheets, sticky notes, and scattered data. With
          iSuite’s CRM System, every customer interaction, conversation, and
          detail is stored in one organized place- so you never miss a beat.
        </p>
        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>

        <ul className="list-disc text-sm pl-6 space-y-2 text-gray-700">
          <li>
            <b>One Place for Everything : </b>All your customer data, from
            contact info to deal history, is neatly stored in a single system.
          </li>
          <li>
            <b>Track Every Interaction : </b> See call logs, emails, chats, and
            notes at a glance - no more lost conversations.
          </li>
          <li>
            <b>Stronger Relationships : </b>Stay on top of follow-ups,
            birthdays, renewals, and client needs with smart reminders.
          </li>
          <li>
            <b>Boost Sales Efficiency : </b>Identify hot leads, manage your
            pipeline, and close deals faster with clear insights.
          </li>
          <li>
            <b>Zero Data Loss : </b>Even if a team member leaves, your customer
            history and relationships stay safe with you.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite’s CRM System, you don’t just store data - you build
          relationships that last and grow your revenue with confidence.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/CRM.png",
  },
  {
    title: "WhatsApp Marketing",
    description: (
      <>
        <p className="mb-4 text-md">
          Everyone checks WhatsApp daily - why not use it to grow your business?
          With iSuite’s WhatsApp Marketing, you can send promotions, updates,
          reminders, and offers directly to your customers’ phones.
        </p>

        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>
        <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
          <li>
            <b>Direct & Personal : </b> Reach your audience instantly with
            messages that feel like a friendly chat, not an ad.
          </li>
          <li>
            <b>Bulk Messaging Made Easy : </b> Send personalized offers, product
            updates, or announcements to thousands of contacts in just one
            click.
          </li>
          <li>
            <b>Interactive Communication : </b> Use buttons, quick replies, and
            links so customers can engage without leaving WhatsApp.
          </li>
          <li>
            <b>Track Performance : </b> See who read, clicked, or responded -
            measure what’s working in real time.
          </li>
          <li>
            <b>Seamless CRM Integration : </b> All leads and responses can be
            automatically stored in your iSuite CRM, so you never lose a
            prospect.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite’s WhatsApp Marketing, your messages aren’t just seen -
          they’re read, responded to, and converted into sales.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/WhatsApp-Bulk-Marketing_.png",
  },
  {
    title: "Email Marketing",
    description: (
      <>
        <p className="mb-4 text-md">
          Emails are still one of the most powerful tools to grow and engage
          your audience. With iSuite’s Email Marketing, you can create stunning
          email campaigns that grab attention and drive results — no design or
          coding skills needed.
        </p>
        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>

        <ul className="list-disc text-sm pl-6 space-y-2 text-gray-700">
          <li>
            <b>Beautiful Templates : </b> Choose from ready-to-use templates or
            customize your own to match your brand.
          </li>
          <li>
            <b>Bulk Campaigns Made Easy : </b>Send newsletters, offers, and
            updates to thousands of customers in just a click.
          </li>
          <li>
            <b>Real-Time Tracking : </b>Know exactly who opened your emails,
            clicked links, and engaged with your content.
          </li>
          <li>
            <b>Automation Ready : </b>Schedule campaigns and set up automated
            follow-ups to keep your audience engaged.
          </li>
          <li>
            <b>CRM Integration : </b> All email interactions are synced with
            iSuite’s CRM, so you never lose track of leads or customers.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite’s Email Marketing, every email you send is not just a
          message - it’s a business opportunity delivered straight to the inbox.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/Email-Bulk-Marketing.png",
  },
  {
    title: "SMS Portal",
    description: (
      <>
        <p className="mb-4 text-md">
          Even in the digital age, SMS remains the fastest and most reliable way
          to reach your customers instantly. With iSuite’s SMS Portal, you can
          send bulk messages, reminders, and promotions directly to their phones
          — no internet needed.
        </p>

        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>
        <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
          <li>
            <b>Instant Reach : </b> Send updates, offers, and alerts to
            thousands of customers in seconds.
          </li>
          <li>
            <b>Bulk Campaigns Made Simple : </b> Create, schedule, and manage
            all SMS campaigns from one easy dashboard.
          </li>
          <li>
            <b>Perfect for Reminders : </b> Automate appointment alerts, payment
            due notices, and delivery updates.
          </li>
          <li>
            <b>High Open Rates : </b> Unlike emails, SMS is read within minutes
            — ensuring maximum visibility.
          </li>
          <li>
            <b>CRM Synced : </b> All campaigns and customer replies are logged
            into iSuite CRM for follow-ups.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          Set up your first campaign in minutes - import contacts, pick a
          template, and send. Or schedule a demo and we’ll show you how SMS +
          CRM automation turns messages into customers.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/SMS-Portal.png",
  },
  {
    title: "Sales & Finance",
    description: (
      <>
        <p className="mb-4 text-md">
          Running a business is more than just making sales, it’s about keeping
          track of every deal, invoice, and payment. With iSuite’s Sales &
          Finance, you can manage everything from one simple dashboard and
          always stay on top of your numbers.
        </p>
        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>

        <ul className="list-disc text-sm pl-6 space-y-2 text-gray-700">
          <li>
            <b>Track Every Sale : </b>Easily monitor all your deals, payments,
            and customer transactions in one place. No more messy spreadsheets-
            everything is organized and updated automatically.
          </li>
          <li>
            <b>Hassle-Free Invoicing : </b>Create professional invoices in just
            a few clicks and send them instantly. Keep track of paid, pending,
            and overdue invoices without the stress.
          </li>
          <li>
            <b>Real-Time Insights : </b>Get a clear picture of your revenue,
            expenses, and profits as they happen.
          </li>
          <li>
            <b>Smarter Decisions : </b>Use detailed sales and finance reports to
            understand business performance.
          </li>
          <li>
            <b>All-in-One Dashboard : </b>No need to switch between tools or
            apps to manage sales and finances. Plan growth strategies with
            confidence backed by accurate financial insights.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite’s Sales & Finance, you don’t just manage numbers, you gain
          control, clarity, and confidence to grow your business.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/Sales-Finance.png",
  },
  {
    title: "Workflow Automation",
    description: (
      <>
        <p className="mb-4 text-md">
          Stop wasting hours on repetitive tasks like sending reminders,
          updating records, or following up with leads. With iSuite’s Workflow
          Automation, you can put these tasks on autopilot - giving you more
          time to focus on growing your business.
        </p>

        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>
        <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
          <li>
            <b>Automate Repetitive Tasks : </b> Set up workflows for follow-ups,
            reminders, and data entry. Your tasks get done automatically without
            you lifting a finger.
          </li>
          <li>
            <b>Smart Task Scheduling : </b> Set triggers for tasks like invoice
            reminders, service updates, or renewal alerts - all managed in the
            background.
          </li>
          <li>
            <b>Seamless Data Entry : </b> New customer details, orders, or leads
            are logged directly into your CRM without manual effort.
          </li>
          <li>
            <b>Approval Workflows : </b> Speed up internal processes with
            automated approval chains for quotes, invoices, or leave requests.
          </li>
          <li>
            <b>Multi-Channel Notifications : </b> Send instant updates to
            customers or team members via email, SMS, or WhatsApp, triggered
            automatically at the right time. any device.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite Workflow Automation, your business runs on autopilot,
          giving you efficiency, accuracy, and more time to focus on growth
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/Workflow-Automation.png",
  },
  {
    title: "Private Community",
    description: (
      <>
        <p className="mb-4 text-md">
          Stop wasting hours on repetitive tasks like sending reminders,
          updating records, or following up with leads. With iSuite’s Workflow
          Automation, you can put these tasks on autopilot - giving you more
          time to focus on growing your business.
        </p>
        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>

        <ul className="list-disc text-sm pl-6 space-y-2 text-gray-700">
          <li>
            <b>Branded Online Space : </b>Create a secure, personalized
            community under your business identity where members feel connected
            and valued.
          </li>
          <li>
            <b>Group Discussions & Forums : </b>Encourage conversations, share
            knowledge, and build loyalty through interactive discussions.
          </li>
          <li>
            <b>Exclusive Content Sharing : </b>Share resources, tutorials, or
            special offers only with your members to increase engagement.
          </li>
          <li>
            <b>Direct Customer Feedback : </b>Collect insights, ideas, and
            reviews directly from your audience-no third-party platforms needed.
          </li>
          <li>
            <b>Integrated with CRM : </b> Every member interaction is logged
            into iSuite CRM, giving you a complete view of customer activity.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite Community, you don’t just build customers, you build a
          family around your brand.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/Private-community.png",
  },
  {
    title: "Learning Management",
    description: (
      <>
        <p className="mb-4 text-md">
          iSuite’s LMS (Learning Management System) makes it easy to create,
          share, and manage online courses for your team, customers, or
          students. From training programs to skill development, everything is
          centralized in one simple platform.
        </p>

        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>
        <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
          <li>
            <b> Course Builder with Multimedia Support : </b> Easily create
            courses by adding videos, PDFs, and audio, making learning more
            engaging and interactive.
          </li>
          <li>
            <b>User Roles & Access Control : </b> Assign roles like Admin,
            Instructor, and Learner, ensuring secure and role-based access to
            courses and materials.
          </li>
          <li>
            <b>Progress Tracking & Certificates : </b> Track learner progress in
            real time and automatically generate completion certificates to
            validate achievements.
          </li>
          <li>
            <b>CRM & Payment Integration : </b> Sell courses online with
            integrated payments and sync learner data with CRM for nurturing
            leads and follow-ups.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite LMS, you don’t just deliver courses - you create a
          structured learning ecosystem that drives engagement, skill-building,
          and growth.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/LMS.png",
  },
  {
    title: "Payment Integration",
    description: (
      <>
        <p className="mb-4 text-md">
          Accept payments directly inside iSuite with all major payment gateways
          like Razorpay, Stripe, Instamojo, Paytm, PayPal, and Cashfree. Every
          transaction is secure, fast, and reliable, so you can focus on growing
          your business while we handle the payments.
        </p>
        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>

        <ul className="list-disc text-sm pl-6 space-y-2 text-gray-700">
          <li>
            <b>Multiple Payment Gateways : </b>Offer customers flexibility with
            top providers like Razorpay, Stripe, PayPal, and more, all connected
            in one place.
          </li>
          <li>
            <b>One-Click Checkout Experience : </b>Simplify purchases with
            quick, seamless checkouts, reducing drop-offs and boosting
            conversions.
          </li>
          <li>
            <b> Global & Local Payments : </b> Accept payments in multiple
            currencies and local wallets like Paytm and UPI for maximum reach.
          </li>
          <li>
            <b>Automated Invoices & Receipts : </b>Every payment generates an
            instant invoice/receipt, keeping your records accurate and
            professional.
          </li>
          <li>
            <b>Secure & Compliant Transactions : </b>All transactions are
            encrypted and PCI-DSS compliant, ensuring customer trust and payment
            safety.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite Payment Integration, you get a ready-to-use, secure, and
          global payment system that works smoothly for both you and your
          customers.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/Payment-Gateway.png",
  },
  {
    title: "Secure Vault",
    description: (
      <>
        <p className="mb-4 text-md">
          Keep all your important business files, customer data, images, videos,
          audio, and documents safe in one centralized digital vault. With
          unlimited storage and advanced security, you’ll never lose access to
          critical information again.
        </p>

        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>
        <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
          <li>
            <b>Unlimited Cloud Storage : </b> Store everything from documents to
            media files without worrying about running out of space.
          </li>
          <li>
            <b> Bank-Grade Security : </b> Your files are encrypted with
            enterprise-level security, ensuring only authorized access.
          </li>
          <li>
            <b>Easy Access Anytime, Anywhere : </b>Log in from web or mobile to
            access your files instantly, whether you’re at the office or on the
            go.
          </li>
          <li>
            <b> Organized & Searchable : </b> Sort files by category, tags, or
            keywords to quickly find what you need without wasting time.
          </li>
          <li>
            <b>Safe Sharing & Permissions : </b> Share files with your team
            securely and control who can view, edit, or download.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite Secure Vault, you don’t just get storage- you get a
          reliable, private, and organized digital space where your business
          data stays safe, accessible, and under your control.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
      </>
    ),
    image: "/features/vault.png",
  },
  {
    title: "Unlimited Resources",
    description: (
      <>
        <p className="mb-4 text-md">
          Grow your business without restrictions. With iSuite’s Unlimited
          Resources, you can keep adding team members, storing data, and
          expanding operations, all without extra charges or limitations.
        </p>
        <h4 className="text-lg font-semibold mb-2">Why You’ll Love It</h4>

        <ul className="list-disc text-sm pl-6 space-y-2 text-gray-700">
          <li>
            <b>Add Unlimited Team Members : </b>Bring your entire workforce onboard, no caps on staff accounts, ensuring smooth collaboration at every level.
          </li>
          <li>
            <b>Unlimited Storage Space : </b>Store all business documents, media, and files securely without worrying about space limits.
          </li>
          <li>
            <b>Seamless Collaboration : </b>Every team member can access the tools, data, and workflows they need without bottlenecks.
          </li>
          <li>
            <b>No Hidden Costs : </b>Enjoy true scalability without worrying about surprise fees or additional charges as you grow.
          </li>
          <li>
            <b>Future-Ready Flexibility : </b>Whether your team doubles or your data triples, iSuite adapts instantly to your business needs.
          </li>
        </ul>

        <p className="mb-4 text-md mt-3">
          With iSuite Unlimited Resources, your growth is never held back by system limits. Scale freely, collaborate better, and expand confidently, all under one platform.
        </p>
        <div className="col-span-full mt-5 flex justify-center items-center">
          <BookDemo />
        </div>
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
