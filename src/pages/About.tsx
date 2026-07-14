import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import StorySection from '../sections/about/StorySection';
import ValuesSection from '../sections/about/ValuesSection';
import TeamSection from '../sections/about/TeamSection';

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <div
        ref={heroRef}
        className="relative w-full min-h-[50vh] flex items-center justify-center bg-warm-sand overflow-hidden"
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E2A4A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div
          ref={contentRef}
          className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto"
        >
          <p className="text-terracotta text-sm mb-3 opacity-0">Home / About</p>
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-[4.8rem] font-semibold text-deep-navy leading-[1.05] mb-4 opacity-0">
            Our Story
          </h1>
          <p className="text-charcoal text-lg sm:text-xl opacity-0">
            A journey of faith, compassion, and commitment to education in Kenya.
          </p>
        </div>
      </div>

      <StorySection />
      <ValuesSection />
      <TeamSection />
    </>
  );
}
