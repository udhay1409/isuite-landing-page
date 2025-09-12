"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";

interface Testimonial {
  name: string;
  handle: string;
  review: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  cardClassName?: string;
  avatarClassName?: string;
}

interface KineticTestimonialProps {
  testimonials?: Testimonial[];
  className?: string;
  cardClassName?: string;
  avatarClassName?: string;
  desktopColumns?: number;
  tabletColumns?: number;
  mobileColumns?: number;
  speed?: number;
  title?: string;
  subtitle?: string;
}

interface TestimonialWithId extends Testimonial {
  uniqueId: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = React.memo(
  ({ testimonial, index, cardClassName = "", avatarClassName = "" }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [imageError, setImageError] = useState<boolean>(false);

    const gradients = [
      "linear-gradient(135deg, #ec4899, #a855f7, #fb923c)",
      "linear-gradient(135deg, #3b82f6, #14b8a6, #22c55e)",
      "linear-gradient(135deg, #a855f7, #ec4899, #ef4444)",
      "linear-gradient(135deg, #6366f1, #3b82f6, #06b6d4)",
      "linear-gradient(135deg, #f97316, #ef4444, #ec4899)",
      "linear-gradient(135deg, #10b981, #3b82f6, #a855f7)",
      "linear-gradient(135deg, #f43f5e, #d946ef, #6366f1)",
      "linear-gradient(135deg, #f59e0b, #f97316, #ef4444)"
    ];

    const gradientStyle = gradients[index % gradients.length];

    const getInitials = (name: string) => {
      return name.split(" ").map(n => n[0]).join("").toUpperCase();
    };

    return (
      <div
        className="w-full mb-4 flex-shrink-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 ${
            isHovered ? "text-white shadow-2xl border-transparent" : "border-gray-200"
          } ${cardClassName}`}
          style={{
            minHeight: '120px'
          }}
        >
          {isHovered && (
            <div
              className="absolute inset-0 z-0"
              style={{
                background: gradientStyle,
                maskImage: "linear-gradient(to bottom, transparent 40%, black 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 100%)"
              }}
            />
          )}

          <div className="p-4 md:p-6 relative z-10">
            <p className="text-sm md:text-base mb-4 leading-relaxed transition-colors duration-300 text-gray-800">
              &quot;{testimonial.review}&quot;
            </p>

            <div className="flex items-center space-x-3">
              <div className={`w-8 md:w-10 h-8 md:h-10 rounded-full overflow-hidden flex-shrink-0 ${avatarClassName}`}>
                {!imageError ? (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div 
                    className="w-full h-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center"
                  >
                    {getInitials(testimonial.name)}
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`font-semibold text-xs md:text-sm transition-colors duration-300 ${
                    isHovered ? "text-white" : "text-gray-900"
                  }`}
                >
                  {testimonial.name}
                </p>
                <p
                  className={`text-xs transition-colors duration-300 ${
                    isHovered ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {testimonial.handle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

const KineticTestimonial: React.FC<KineticTestimonialProps> = ({
  testimonials = [],
  className = "",
  cardClassName = "",
  avatarClassName = "",
  desktopColumns = 4,
  tabletColumns = 3,
  mobileColumns = 1,
  speed = 1,
  title = "Customer Reviews",
  subtitle = "What our users think about our product"
}) => {
  // Default testimonials - always use these for demo
  const defaultTestimonials: Testimonial[] = [
    {
      name: "Ravi K",
      handle: "Chennai",
      review: "iSuite has completely transformed the way our team collaborates. Everything is organized, and our productivity has increased significantly",
      avatar: "/testimonials/1.png"
    },
    {
      name: "Anita S",
      handle: "Coimbatore", 
      review: "With iSuite, we can manage our clients, projects, and payments all in one place. It saves us hours every week.",
      avatar: "/testimonials/5.png"
    },
    {
      name: "Gokul R",
      handle: "Madurai",
      review: "The unlimited storage feature is a game-changer. We no longer worry about running out of space for our files.",
      avatar: "/testimonials/2.png"
    },
    {
      name: "Priya L", 
      handle: "Banglore",
      review: "iSuite’s is so intuitive. We can track tasks, projects, and team performance effortlessly.",
      avatar: "/testimonials/6.png"
    },
    {
      name: "Suresh P",
      handle: "Chengalpattu", 
      review: "Setting up iSuite was easy, and their support team helped us every step of the way. Highly recommend!",
      avatar: "/testimonials/3.png"
    },
    {
      name: "Neha M",
      handle: "Tirupattur",
      review: "Managing multiple clients was always a headache. With iSuite, everything is simple, clear, and automated.", 
      avatar: "/testimonials/7.png"
    },
    {
      name: "Akhil T",
      handle: "Karur",
      review: "The team collaboration features are excellent. We can assign tasks, track progress, and communicate seamlessly.",
      avatar: "/testimonials/4.png"
    },
    {
      name: "Rekha V",
      handle: "Chikkamagaluru",
      review: "iSuite allows us to scale our business without worrying about limitations. It's efficient, reliable, and user-friendly.",
      avatar: "/testimonials/8.png"
    }
  ];

  const activeTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const createColumns = useCallback(
    (numColumns: number) => {
      const columns: TestimonialWithId[][] = [];
      const testimonialsPerColumn = 6;

      for (let i = 0; i < numColumns; i++) {
        const columnTestimonials: TestimonialWithId[] = [];

        for (let j = 0; j < testimonialsPerColumn; j++) {
          const testimonialIndex = (i * 2 + j * 3) % activeTestimonials.length;
          columnTestimonials.push({
            ...activeTestimonials[testimonialIndex],
            uniqueId: `${i}-${j}-${testimonialIndex}-${Date.now()}`
          });
        }

        columns.push(columnTestimonials);
      }

      return columns;
    },
    [activeTestimonials]
  );

  const [currentColumns, setCurrentColumns] = useState(desktopColumns);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCurrentColumns(mobileColumns);
      } else if (width < 1024) {
        setCurrentColumns(tabletColumns);
      } else {
        setCurrentColumns(desktopColumns);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopColumns, tabletColumns, mobileColumns]);

  const columnsData = useMemo(() => {
    return createColumns(currentColumns);
  }, [createColumns, currentColumns]);

  const renderColumn = useCallback(
    (columnTestimonials: TestimonialWithId[], colIndex: number) => {
      const moveUp = colIndex % 2 === 0;
      const baseSpeed = 25;
      const speedVariation = colIndex * 2;
      const animationDuration = (baseSpeed + speedVariation) / speed;

      // Create duplicated items for seamless loop
      const duplicatedItems = [...columnTestimonials, ...columnTestimonials];

      // Approximate card height including margin
      const cardHeight = 140;
      const totalHeight = columnTestimonials.length * cardHeight;

      const animationId = `scroll${moveUp ? 'Up' : 'Down'}_${colIndex}`;

      const animationKeyframes = moveUp 
        ? `@keyframes ${animationId} {
             0% { transform: translateY(0px); }
             100% { transform: translateY(-${totalHeight}px); }
           }`
        : `@keyframes ${animationId} {
             0% { transform: translateY(-${totalHeight}px); }
             100% { transform: translateY(0px); }
           }`;

      return (
        <div key={`column-${colIndex}`} className="flex-1 relative overflow-hidden" style={{ height: '600px' }}>
          <style>{animationKeyframes}</style>
          <div
            className="flex flex-col"
            style={{
              animation: `${animationId} ${animationDuration}s linear infinite`,
              animationPlayState: 'running',
              willChange: 'transform'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running';
            }}
          >
            {duplicatedItems.map((testimonial, index) => (
              <TestimonialCard
                key={`card-${colIndex}-${testimonial.uniqueId}-${index}`}
                testimonial={testimonial}
                index={colIndex * 2 + index}
                cardClassName={cardClassName}
                avatarClassName={avatarClassName}
              />
            ))}
          </div>
        </div>
      );
    },
    [speed, cardClassName, avatarClassName]
  );

  return (
    <div className={`py-6 ${className}`}>
      <div className="relative w-full text-gray-900 py-8 md:py-16 flex flex-col items-center overflow-hidden px-4 md:px-6">
        <h2 
          className="text-2xl bg-gradient-to-r from-[#e63ca3] to-[#a91ac1] md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text"
        //   style={{
        //     backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)'
        //   }}
        >
          {title}
        </h2>
        <p className="text-gray-600 mb-8 md:mb-12 text-center w-full max-w-2xl px-4 text-sm">
          {subtitle}
        </p>

        <div className="flex gap-2 sm:gap-4 lg:gap-6 w-full max-w-6xl relative mx-2 sm:mx-4">
          {/* Top fade */}
          <div 
            className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #ffffff, transparent)'
            }}
          />
          {/* Bottom fade */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #ffffff, transparent)'
            }}
          />
          
          {columnsData.map((columnTestimonials, colIndex) => 
            renderColumn(columnTestimonials, colIndex)
          )}
        </div>
      </div>
    </div>
  );
};

export default KineticTestimonial;