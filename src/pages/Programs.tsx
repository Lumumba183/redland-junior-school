import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProgramsGrid from '../sections/programs/ProgramsGrid';
import CurriculumSection from '../sections/programs/CurriculumSection';

export default function Programs() {
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
        className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: 'rgba(61, 107, 79, 0.15)' }}
      >
        <div
          className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto"
          ref={contentRef}
        >
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-[4.8rem] font-semibold text-deep-navy leading-[1.05] mb-4 opacity-0">
            Our Programs
          </h1>
          <p className="text-charcoal text-lg sm:text-xl opacity-0">
            Comprehensive education for mind, body, and spirit.
          </p>
        </div>
      </div>

      <ProgramsGrid />
      <CurriculumSection />
    </>
  );
}
