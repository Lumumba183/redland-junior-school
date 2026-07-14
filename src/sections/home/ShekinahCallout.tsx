import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ShekinahCallout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-deep-navy py-20 lg:py-24">
      <div className="content-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div ref={textRef} className="opacity-0">
            <p className="section-label-golden mb-4">
              Shekinah Precious Children Centre
            </p>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-warm-white leading-[1.1] mb-6">
              Giving Hope to African Children
            </h2>
            <p className="text-warm-white/80 text-lg leading-relaxed mb-8">
              Shekinah is our heart of compassion — reaching out to vulnerable children
              in our community with education, healthcare, nutrition, and love. Every
              child deserves a chance to dream.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/shekinah" className="btn-golden">
                Donate Now
              </Link>
              <Link
                to="/shekinah"
                className="text-golden-ochre font-inter font-medium hover:underline"
              >
                Learn About Shekinah &rarr;
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div ref={imageRef} className="opacity-0">
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src="./images/shekinah-children.png"
                alt="Children at Shekinah Precious Children Centre"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
