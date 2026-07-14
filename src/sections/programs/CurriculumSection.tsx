import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CurriculumSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-warm-sand">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div ref={textRef} className="opacity-0">
            <p className="section-label mb-4">Our Approach</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-deep-navy leading-[1.1] mb-6">
              The Redland Learning Experience
            </h2>
            <div className="space-y-4 text-charcoal text-lg leading-relaxed">
              <p>
                At Redland Junior School, we follow the Kenyan Competency-Based Curriculum (CBC),
                which focuses on developing skills and competencies rather than just memorizing facts.
                Our approach emphasizes critical thinking, creativity, collaboration, and communication.
              </p>
              <p>
                Our classrooms are interactive learning environments where students engage with
                hands-on activities, group projects, and real-world problem solving. We believe that
                every child learns differently, and our teachers adapt their methods to meet each
                student&apos;s unique needs.
              </p>
              <p>
                Assessment at Redland goes beyond exams. We use continuous assessment methods
                that track progress over time, celebrating growth and identifying areas for support.
                Our goal is to build confident, capable learners who are prepared for the challenges
                of tomorrow.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div ref={imageRef} className="opacity-0">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="./images/classroom.jpg"
                alt="Bright classroom at Redland Junior School"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
