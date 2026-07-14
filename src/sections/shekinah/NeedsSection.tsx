import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UtensilsCrossed, Shirt, BookOpen, Stethoscope, Hammer, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const needs = [
  {
    icon: UtensilsCrossed,
    title: 'Food & Nutrition',
    description: 'Monthly food supplies to keep our feeding program running.',
  },
  {
    icon: Shirt,
    title: 'School Uniforms',
    description: 'New uniforms for 50+ children starting the new term.',
  },
  {
    icon: BookOpen,
    title: 'Books & Stationery',
    description: 'Textbooks, exercise books, pens, and learning materials.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Support',
    description: 'Funds for regular health check-ups and emergency medical care.',
  },
  {
    icon: Hammer,
    title: 'Building Repairs',
    description: 'Renovations to create safe, comfortable learning spaces.',
  },
  {
    icon: Users,
    title: 'Teacher Salaries',
    description: 'Support for our dedicated teachers and caregivers.',
  },
];

export default function NeedsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
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
    <section ref={sectionRef} className="section-padding bg-deep-navy">
      <div className="content-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-label-golden mb-4">How You Can Help</p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-warm-white leading-[1.1]">
            Current Needs
          </h2>
        </div>

        {/* Needs Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {needs.map((need) => (
            <div
              key={need.title}
              className="p-8 rounded-xl border border-golden-ochre/30 bg-deep-navy/50 opacity-0"
            >
              <need.icon
                className="w-10 h-10 text-golden-ochre mb-4"
                strokeWidth={1.5}
              />
              <h4 className="font-cormorant text-xl font-medium text-warm-white mb-2">
                {need.title}
              </h4>
              <p className="text-warm-white/70 text-sm leading-relaxed">
                {need.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
