import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mottoRef = useRef<HTMLParagraphElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        mottoRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          title1Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.15
        )
        .fromTo(
          title2Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.3
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.45
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.6
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          0.8
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/hero-bg.png"
          alt="Kenyan landscape at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p
          ref={mottoRef}
          className="font-cinzel text-sm sm:text-base tracking-[0.15em] text-golden-ochre uppercase mb-6 opacity-0"
        >
          Raising the Leaders
        </p>

        <h1 className="mb-4">
          <span
            ref={title1Ref}
            className="block font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-semibold text-warm-white leading-[1.05] tracking-tight opacity-0"
          >
            Redland Junior
          </span>
          <span
            ref={title2Ref}
            className="block font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-semibold text-warm-white leading-[1.05] tracking-tight opacity-0"
          >
            School
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="font-inter text-lg sm:text-xl text-warm-white/90 mb-10 max-w-2xl mx-auto opacity-0"
        >
          Nurturing excellence, faith &amp; compassion in the heart of Kisumu, Kenya
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <Link to="/programs" className="btn-primary w-[220px]">
            Explore Our Programs
          </Link>
          <Link to="/shekinah" className="btn-secondary w-[220px]">
            Support Shekinah
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0"
      >
        <div className="animate-bounce-gentle">
          <ChevronDown className="w-8 h-8 text-warm-white/70" />
        </div>
      </div>
    </section>
  );
}
