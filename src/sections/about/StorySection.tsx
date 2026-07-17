import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
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
        textRef.current,
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
    <section ref={sectionRef} className="section-padding bg-warm-white">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div ref={imageRef} className="opacity-0">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="./images/school-compound.jpg"
                alt="Redland Junior School compound"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div ref={textRef} className="opacity-0">
            <p className="section-label mb-4">Our Beginning</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[3.6rem] font-semibold text-deep-navy leading-[1.1] mb-6">
              From a Dream to Reality
            </h2>
            <div className="space-y-4 text-charcoal text-lg leading-relaxed">
              <p>
                In 2018, George and Jackline Okuta had a deep dream of helping orphans
                and needy children within Kolwa Central. They discovered that many children
                were missing out on school — left vulnerable, exposed, and facing heavy
                risks at a tender age.
              </p>
              <p>
                By the grace of God, they stepped in to build a safe haven. Since then,
                following devastating losses in their community due to the coronavirus
                pandemic, they have continually stood in the gap. Their mission is to make
                Redland Junior School a place where future leaders are built through quality
                education and God&apos;s Kingdom character.
              </p>
              <p>
                Today, Redland Junior School stands as a beacon of hope, serving over 120
                children with education, nutrition, healthcare, and love — nurturing not just
                minds, but hearts and souls.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 border-l-[3px] border-terracotta pl-6">
              <p className="font-cinzel text-xl text-terracotta italic tracking-wide">
                &ldquo;For with God nothing shall be impossible.&rdquo;
              </p>
              <p className="text-charcoal/70 text-sm mt-2">— Luke 1:37</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
