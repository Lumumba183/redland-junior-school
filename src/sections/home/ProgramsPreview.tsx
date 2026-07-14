import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Heart, UtensilsCrossed, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    icon: GraduationCap,
    iconColor: 'text-terracotta',
    title: 'Academic Excellence',
    description:
      'Rigorous curriculum aligned with the Ministry of Education, taught by passionate educators who inspire a love for learning.',
  },
  {
    icon: Heart,
    iconColor: 'text-forest-green',
    title: 'Character & Faith',
    description:
      'Building strong moral foundations through Biblical teachings, daily devotions, and values-based character development.',
  },
  {
    icon: UtensilsCrossed,
    iconColor: 'text-sunset-orange',
    title: 'Health & Nutrition',
    description:
      'Nutritious daily meals ensuring every child has the energy and nutrition needed to thrive in the classroom and beyond.',
  },
];

export default function ProgramsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
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
    <section ref={sectionRef} className="section-padding bg-warm-sand">
      <div className="content-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">What We Offer</p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-deep-navy leading-[1.1]">
            Programs Designed for Holistic Growth
          </h2>
        </div>

        {/* Program Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-base group cursor-pointer opacity-0"
            >
              <program.icon
                className={`w-12 h-12 ${program.iconColor} mb-5`}
                strokeWidth={1.5}
              />
              <h4 className="font-cormorant text-xl lg:text-[1.8rem] font-medium text-deep-navy mb-3">
                {program.title}
              </h4>
              <p className="text-charcoal text-base leading-relaxed mb-5">
                {program.description}
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-terracotta font-inter font-medium text-sm hover:underline"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
