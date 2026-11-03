"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useGSAP, gsap, isReducedMotion } from "@/lib/animation/gsap";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface HeroSlide {
  id: string;
  pillar: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  align: "left" | "center" | "right";
  overlayGradient: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

const slides: HeroSlide[] = [
  {
    id: "community-action",
    pillar: "Community Action",
    eyebrow: "Action for Better World Association · Nairobi",
    title: "Community action for a fairer world",
    subtitle: "Walking hand in hand with women, young people and children in Kenya.",
    description:
      "Since 2015, we have worked alongside local neighbourhoods to build sustainable responses to poverty, educational barriers and environmental challenges.",
    imageSrc: "/images/programs/community_development_social_support/6abwa (73).jpeg",
    imageAlt: "Community members, local women, elders and volunteers collaborating on community initiatives in Kenya",
    align: "left",
    overlayGradient: "bg-gradient-to-r from-black/85 via-black/60 to-black/35",
    primaryCta: {
      label: "Explore Our Programmes",
      href: "/programs",
    },
    secondaryCta: {
      label: "About ABWA",
      href: "/about",
    },
  },
  {
    id: "sustainable-agriculture",
    pillar: "Sustainable Farming",
    eyebrow: "Food Security & Resilient Farming",
    title: "Nourishing families through resilient soil",
    subtitle: "Equipping smallholder women farmers with climate smart practices.",
    description:
      "From organic compost timing to drought resistant indigenous crops, our kitchen garden networks help rural households produce dependable food and market income.",
    imageSrc: "/images/programs/women_empowerment_&_agriculture/6abwa (64).jpeg",
    imageAlt: "Smallholder women farmers and volunteers preparing organic vegetable beds in Kangundo Kenya",
    align: "center",
    overlayGradient: "bg-gradient-to-t from-black/85 via-black/55 to-black/45",
    primaryCta: {
      label: "Agricultural Initiatives",
      href: "/programs/womens-empowerment-sustainable-agriculture",
    },
    secondaryCta: {
      label: "Partner With Us",
      href: "/partner-with-us",
    },
  },
  {
    id: "education-child-wellbeing",
    pillar: "Education & Child Wellbeing",
    eyebrow: "Education & Child Wellbeing",
    title: "Dignified classrooms and foundational learning",
    subtitle: "Creating supportive spaces where every young mind can thrive.",
    description:
      "Partnering with community primary schools to provide essential desks, textbooks and classroom mentorship that keep children curious, nourished and learning every day.",
    imageSrc: "/images/programs/education_&_child_development/5abwa (83).jpeg",
    imageAlt: "Primary school students engaged in reading and classroom lessons supported by ABWA in Kenya",
    align: "right",
    overlayGradient: "bg-gradient-to-l from-black/85 via-black/60 to-black/35",
    primaryCta: {
      label: "Support Education",
      href: "/programs/education-child-wellbeing",
    },
    secondaryCta: {
      label: "Get Involved",
      href: "/get-involved",
    },
  },
  {
    id: "youth-creative-mentorship",
    pillar: "Youth Arts & Skills",
    eyebrow: "Youth Skills & Creative Mentorship",
    title: "Unlocking youth potential through creativity",
    subtitle: "Mentoring young talents in tailoring, mural arts and digital skills.",
    description:
      "Transforming neighbourhood spaces into dynamic creative hubs where young people acquire marketable vocational skills and mentor the next generation.",
    imageSrc: "/images/programs/arts_culture_&_creative_development/7abwa (7).jpeg",
    imageAlt: "Young creators and mentors collaborating on creative arts and community painting in Kenya",
    align: "left",
    overlayGradient: "bg-gradient-to-r from-black/85 via-black/60 to-black/35",
    primaryCta: {
      label: "Discover Youth Arts",
      href: "/programs/arts-culture-creative-development",
    },
    secondaryCta: {
      label: "Read Youth Stories",
      href: "/stories",
    },
  },
  {
    id: "environmental-action",
    pillar: "Conservation & Climate",
    eyebrow: "Climate Action & Tree Stewardship",
    title: "Restoring green landscapes for future generations",
    subtitle: "Community nurseries, tree planting and watershed protection.",
    description:
      "Mobilising volunteers, farmers and schools to plant indigenous trees, combat soil erosion and safeguard vital water sources across vulnerable rural ecosystems.",
    imageSrc: "/images/programs/environmental_conservation_&_climate/7abwa (24).jpeg",
    imageAlt: "Community tree nursery and reforestation volunteers in Kenya",
    align: "center",
    overlayGradient: "bg-gradient-to-t from-black/85 via-black/55 to-black/45",
    primaryCta: {
      label: "Conservation Work",
      href: "/programs/environmental-conservation",
    },
    secondaryCta: {
      label: "Explore Gallery",
      href: "/gallery",
    },
  },
  {
    id: "clean-water-sanitation",
    pillar: "Clean Water & WASH",
    eyebrow: "Water, Sanitation & Hygiene",
    title: "Clean water at school and in the village",
    subtitle: "Rainwater harvesting tanks, hygiene education and local dignity.",
    description:
      "Installing durable water harvesting systems and handwashing stations at local schools, reducing waterborne illness and giving children more hours to focus on their studies.",
    imageSrc: "/images/programs/water_sanitation_&_hygiene/1abwa (13).jpeg",
    imageAlt: "School rainwater harvesting tanks and verified handwashing infrastructure in Kenya",
    align: "right",
    overlayGradient: "bg-gradient-to-l from-black/85 via-black/60 to-black/35",
    primaryCta: {
      label: "See Water Impact",
      href: "/programs/water-sanitation-hygiene-wash",
    },
    secondaryCta: {
      label: "Contact Our Team",
      href: "/contact",
    },
  },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isTransitioningRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);

  // Transition handler with zero-dark-interval overlapping crossfade & parallax text stagger
  const goToSlide = useCallback((nextIndex: number) => {
    if (isTransitioningRef.current || nextIndex === current) return;
    isTransitioningRef.current = true;

    const prevIndex = current;
    const outgoingBg = bgRefs.current[prevIndex];
    const incomingBg = bgRefs.current[nextIndex];
    const outgoingContent = contentRefs.current[prevIndex];
    const incomingContent = contentRefs.current[nextIndex];

    const outgoingItems = outgoingContent?.querySelectorAll(".hero-parallax-item");
    const incomingItems = incomingContent?.querySelectorAll(".hero-parallax-item");

    if (isReducedMotion()) {
      // Gentle fade without aggressive motion if reduced motion preferred
      if (outgoingBg) gsap.set(outgoingBg, { autoAlpha: 0, zIndex: 0 });
      if (incomingBg) gsap.set(incomingBg, { autoAlpha: 1, zIndex: 1 });
      if (outgoingContent) gsap.set(outgoingContent, { autoAlpha: 0, zIndex: 0 });
      if (incomingContent) gsap.set(incomingContent, { autoAlpha: 1, zIndex: 10 });
      setCurrent(nextIndex);
      isTransitioningRef.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrent(nextIndex);
        isTransitioningRef.current = false;
        // Clean up outgoing layers
        if (outgoingBg) {
          gsap.set(outgoingBg, { autoAlpha: 0, zIndex: 0 });
        }
        if (outgoingContent) {
          gsap.set(outgoingContent, { autoAlpha: 0, zIndex: 0 });
        }
        if (incomingBg) {
          gsap.set(incomingBg, { zIndex: 1 });
        }
      },
    });

    // 1. Outgoing text items exit with upward parallax
    if (outgoingItems && outgoingItems.length > 0) {
      tl.to(
        outgoingItems,
        {
          y: -22,
          autoAlpha: 0,
          duration: 0.35,
          stagger: 0.03,
          ease: "power2.in",
        },
        0
      );
    }

    // 2. Incoming background crossfades on TOP of outgoing (zero black screen intervals)
    if (incomingBg && outgoingBg) {
      gsap.set(incomingBg, { zIndex: 2 });
      gsap.set(outgoingBg, { zIndex: 1 });

      tl.fromTo(
        incomingBg,
        { autoAlpha: 0, scale: 1.05 },
        {
          autoAlpha: 1,
          scale: 1.0,
          duration: 0.85,
          ease: "power2.out",
        },
        0.15
      );
    }

    // 3. Incoming text items enter from below with staggered parallax (maintain rendered size)
    if (incomingContent && incomingItems && incomingItems.length > 0) {
      gsap.set(incomingContent, { autoAlpha: 1, zIndex: 10 });
      tl.fromTo(
        incomingItems,
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          stagger: 0.07,
          ease: "power3.out",
        },
        0.35
      );
    }
  }, [current]);

  const handleNext = useCallback(() => {
    const nextIndex = (current + 1) % slides.length;
    goToSlide(nextIndex);
  }, [current, goToSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (current - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [current, goToSlide]);

  // Initial entrance animation on mount
  useGSAP(
    () => {
      // Ensure initial slide background and content are visible
      slides.forEach((_, idx) => {
        const bg = bgRefs.current[idx];
        const content = contentRefs.current[idx];
        if (idx === 0) {
          if (bg) gsap.set(bg, { autoAlpha: 1, zIndex: 1, scale: 1.0 });
          if (content) {
            gsap.set(content, { autoAlpha: 1, zIndex: 10 });
            const items = content.querySelectorAll(".hero-parallax-item");
            if (!isReducedMotion() && items.length > 0) {
              gsap.fromTo(
                items,
                { y: 28, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.7,
                  stagger: 0.08,
                  ease: "power3.out",
                }
              );
            }
          }
        } else {
          if (bg) gsap.set(bg, { autoAlpha: 0, zIndex: 0 });
          if (content) gsap.set(content, { autoAlpha: 0, zIndex: 0 });
        }
      });
    },
    { scope: heroRef }
  );

  // Auto-play timer (pauses only when isPaused or when hovering over pause icon)
  useEffect(() => {
    if (isPaused || isHoverPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, isHoverPaused, handleNext]);

  // Touch Swipe for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <header
      ref={heroRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Homepage Featured Highlights"
      className="relative h-[calc(100svh-5.75rem)] lg:h-[calc(100svh-7.25rem)] min-h-[480px] max-h-[760px] flex items-center bg-slate-950 text-white overflow-hidden select-none"
    >
      {/* 1. Layered Background Images (Crossfade without black gap) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            ref={(el) => {
              bgRefs.current[idx] = el;
            }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Slide-specific directional contrast scrim */}
            <div className={`absolute inset-0 ${slide.overlayGradient} z-10`} />
          </div>
        ))}
      </div>

      {/* 2. Slide Content Containers with Stable Sizing & Variable Alignments */}
      <Container className="relative z-20 w-full h-full flex items-center py-6 sm:py-8 lg:py-10 pb-16 sm:pb-20">
        <div className="relative w-full h-full">
          {slides.map((slide, idx) => {
            const isActive = idx === current;
            const isCenter = slide.align === "center";
            const isRight = slide.align === "right";

            return (
              <div
                key={slide.id}
                ref={(el) => {
                  contentRefs.current[idx] = el;
                }}
                aria-hidden={!isActive}
                className={`absolute inset-0 w-full h-full flex items-center ${
                  isActive ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <div
                  className={`space-y-3 sm:space-y-4 flex flex-col w-full ${
                    isCenter
                      ? "max-w-3xl mx-auto items-center text-center"
                      : isRight
                      ? "max-w-2xl ml-auto items-start lg:items-end text-left lg:text-right"
                      : "max-w-2xl items-start text-left"
                  }`}
                >
                  {/* Eyebrow / Pillar Badge */}
                  <div className="hero-parallax-item">
                    <span className="inline-block font-kaushan text-abwa-gold text-base sm:text-lg md:text-xl tracking-wide [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-md">
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Main Heading (H1) - Maintains balanced display scale */}
                  <h1 className="hero-parallax-item text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight [text-shadow:_0_3px_14px_rgba(0,0,0,0.95)] drop-shadow-lg">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="hero-parallax-item text-base sm:text-lg text-slate-100 font-medium leading-snug [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="hero-parallax-item text-xs sm:text-sm text-slate-200 leading-relaxed [text-shadow:_0_1px_6px_rgba(0,0,0,0.9)] drop-shadow-sm max-w-xl">
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div
                    className={`hero-parallax-item pt-2 flex flex-wrap items-center gap-3 sm:gap-4 ${
                      isCenter
                        ? "justify-center"
                        : isRight
                        ? "justify-start lg:justify-end"
                        : "justify-start"
                    }`}
                  >
                    <Button href={slide.primaryCta.href} variant="blue" size="md">
                      {slide.primaryCta.label}
                    </Button>
                    <Button
                      href={slide.secondaryCta.href}
                      variant="outline-white"
                      size="md"
                    >
                      {slide.secondaryCta.label}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* 3. Bottom Carousel Navigation, Clean Indicator Dots, and Scoped Play/Pause */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 pointer-events-auto">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/15">
            {/* Slide Index Counter & Pillar Title */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs sm:text-sm font-bold text-abwa-gold tracking-widest">
                0{current + 1} / 0{slides.length}
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-white/70 border-l border-white/20 pl-3">
                {slides[current].pillar}
              </span>
            </div>

            {/* Clean Indicator Dots without progressive fill bar */}
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Carousel navigation dots"
            >
              {slides.map((s, idx) => {
                const isSelected = idx === current;
                return (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(idx)}
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`Go to slide ${idx + 1}: ${s.pillar}`}
                    className={`h-2.5 rounded-full transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-abwa-gold cursor-pointer ${
                      isSelected
                        ? "w-8 bg-abwa-gold"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                );
              })}
            </div>

            {/* Controls: Prev, Next & Hover-Scoped Pause Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                onMouseEnter={() => setIsHoverPaused(true)}
                onMouseLeave={() => setIsHoverPaused(false)}
                aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
                title={isPaused ? "Resume slideshow" : "Pause slideshow"}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                )}
              </button>
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

