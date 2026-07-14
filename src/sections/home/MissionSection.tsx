import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '120+', label: 'Students Enrolled' },
  { value: '15', label: 'Dedicated Teachers' },
  { value: '3', label: 'Core Programs' },
];

export default function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -40 },
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
        { opacity: 0, x: 40 },
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
        statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-warm-white">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div ref={contentRef} className="opacity-0">
            <p className="section-label mb-4">Our Mission</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-deep-navy leading-[1.1] mb-6">
              Building Tomorrow&apos;s Leaders Through Education &amp; Faith
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-10">
              Since 2023, Redland Junior School has been a beacon of hope in Kolwa Central.
              We believe every child deserves quality education rooted in strong values.
              Our holistic approach nurtures not just academic excellence, but character,
              compassion, and faith.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-cormorant text-3xl lg:text-[2.8rem] font-semibold text-terracotta leading-none">
                    {stat.value}
                  </p>
                  <p className="text-charcoal text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div ref={imageRef} className="opacity-0">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="./images/school-gate.png"
                alt="Redland Junior School entrance with a student"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
