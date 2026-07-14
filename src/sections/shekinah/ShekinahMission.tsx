import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ShekinahMission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
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
    <section ref={sectionRef} className="section-padding bg-warm-white">
      <div className="content-max">
        <div ref={contentRef} className="text-center max-w-3xl mx-auto opacity-0">
          <p className="section-label mb-4">Our Mission</p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-deep-navy leading-[1.1] mb-6">
            Every Child Deserves a Future
          </h2>
          <p className="text-charcoal text-lg leading-relaxed">
            Shekinah Precious Children Centre exists to transform the lives of vulnerable
            children in Kisumu, Kenya. We provide education, healthcare, nutrition, and a
            loving environment where every child can thrive. Founded alongside Redland Junior
            School, Shekinah extends our reach to those who need it most — orphans, children
            from broken homes, and those facing poverty that would otherwise deny them the
            chance to learn and grow.
          </p>
        </div>
      </div>
    </section>
  );
}
