import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Baby,
  BookOpen,
  Cross,
  Apple,
  HeartPulse,
  Trophy,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    icon: Baby,
    iconColor: 'text-sunset-orange',
    title: 'Early Childhood Education',
    description:
      'Foundational learning for ages 3-6, focusing on cognitive, social, and motor skills development through play-based education.',
  },
  {
    icon: BookOpen,
    iconColor: 'text-terracotta',
    title: 'Primary Education',
    description:
      'Comprehensive primary curriculum (Grades 1-8) following the Kenyan Competency-Based Curriculum, building strong academic foundations.',
  },
  {
    icon: Cross,
    iconColor: 'text-forest-green',
    title: 'Biblical Studies',
    description:
      'Daily devotions, Bible lessons, and character-building programs that instill faith and moral values.',
  },
  {
    icon: Apple,
    iconColor: 'text-golden-ochre',
    title: 'Feeding Program',
    description:
      'Nutritious daily meals ensuring no child learns on an empty stomach. A healthy body supports a healthy mind.',
  },
  {
    icon: HeartPulse,
    iconColor: 'text-terracotta',
    title: 'Health & Wellness',
    description:
      'Regular health check-ups, hygiene education, and medical support to keep every child healthy and in school.',
  },
  {
    icon: Trophy,
    iconColor: 'text-deep-navy',
    title: 'Extracurricular Activities',
    description:
      'Sports, music, arts, and debate clubs that develop teamwork, creativity, and confidence beyond the classroom.',
  },
];

export default function ProgramsGrid() {
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
    <section ref={sectionRef} className="section-padding bg-warm-white">
      <div className="content-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">Our Programs</p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-deep-navy leading-[1.1]">
            Comprehensive Education for Mind, Body, and Spirit
          </h2>
        </div>

        {/* Programs Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-base opacity-0"
            >
              <program.icon
                className={`w-12 h-12 ${program.iconColor} mb-5`}
                strokeWidth={1.5}
              />
              <h4 className="font-cormorant text-xl lg:text-[1.8rem] font-medium text-deep-navy mb-3">
                {program.title}
              </h4>
              <p className="text-charcoal text-base leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
