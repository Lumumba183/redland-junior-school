import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      'Redland has transformed my daughter. She now loves going to school and comes home excited about what she learned. The teachers truly care.',
    author: 'Parent of Grade 3 Student',
  },
  {
    quote:
      'The feeding program at Shekinah has been a blessing. My children no longer go to bed hungry, and their school performance has improved dramatically.',
    author: 'Guardian of Two Shekinah Children',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
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
          <p className="section-label mb-4">Voices From Our Community</p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-deep-navy leading-[1.1]">
            What Families Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-warm-sand rounded-2xl p-8 lg:p-12 opacity-0"
            >
              <span className="font-cormorant text-6xl text-terracotta/30 leading-none block mb-4">
                &ldquo;
              </span>
              <p className="text-charcoal text-lg leading-relaxed italic mb-6">
                {testimonial.quote}
              </p>
              <p className="text-deep-navy text-sm font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
