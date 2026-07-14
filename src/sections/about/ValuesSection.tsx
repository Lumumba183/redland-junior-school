import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Heart, BookOpen, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    iconColor: 'text-terracotta',
    title: 'Excellence',
    description:
      'We pursue the highest standards in education and character development, inspiring every child to reach their full potential.',
  },
  {
    icon: Heart,
    iconColor: 'text-sunset-orange',
    title: 'Compassion',
    description:
      'We serve our community with love, especially the most vulnerable, embodying Christ-like care in all we do.',
  },
  {
    icon: BookOpen,
    iconColor: 'text-forest-green',
    title: 'Faith',
    description:
      'We root all we do in Biblical principles and trust in God\'s guidance, nurturing spiritual growth alongside academics.',
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-golden-ochre',
    title: 'Integrity',
    description:
      'We operate with transparency and accountability in all our affairs, building trust with our community.',
  },
];

export default function ValuesSection() {
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
    <section ref={sectionRef} className="section-padding bg-warm-sand">
      <div className="content-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-deep-navy leading-[1.1]">
            Our Core Values
          </h2>
        </div>

        {/* Values Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-warm-white rounded-xl p-8 opacity-0"
            >
              <value.icon
                className={`w-12 h-12 ${value.iconColor} mb-4`}
                strokeWidth={1.5}
              />
              <h4 className="font-cormorant text-xl lg:text-[1.8rem] font-medium text-deep-navy mb-3">
                {value.title}
              </h4>
              <p className="text-charcoal text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
