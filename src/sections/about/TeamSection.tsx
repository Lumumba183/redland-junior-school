import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'George Okuta',
    role: 'Founder & Director',
    image: './images/director-george.png',
  },
  {
    name: 'Jackline Okuta',
    role: 'Co-Founder & Administrator',
    image: './images/principal-jackline.png',
  },
  {
    name: 'Head Teacher',
    role: 'Academic Leadership',
    image: './images/children-learning.jpg',
  },
];

export default function TeamSection() {
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
    <section ref={sectionRef} className="section-padding bg-warm-white">
      <div className="content-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-deep-navy leading-[1.1]">
            Our Leadership
          </h2>
        </div>

        {/* Team Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {team.map((member) => (
            <div key={member.name} className="text-center opacity-0">
              <div className="w-32 h-32 lg:w-36 lg:h-36 mx-auto mb-5 rounded-full overflow-hidden border-[3px] border-terracotta">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-cormorant text-xl lg:text-[1.8rem] font-medium text-deep-navy">
                {member.name}
              </h4>
              <p className="text-terracotta text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
