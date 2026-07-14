import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    image: './images/children-eating.jpg',
    quote:
      'Before Shekinah, I used to walk to school without breakfast. Now I get a warm meal every day, and I can focus on my studies. I want to become a teacher when I grow up, just like the ones who help me here.',
    author: 'A Shekinah Child, Age 10',
  },
  {
    image: './images/children-learning.jpg',
    quote:
      'The people at Shekinah treat us like family. They gave me new books, a uniform, and most importantly, they gave me hope. I used to think I would never finish school, but now I believe I can do anything.',
    author: 'A Shekinah Child, Age 12',
  },
];

export default function ChildrenStories() {
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
          duration: 0.8,
          stagger: 0.2,
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
            Their Stories
          </h2>
        </div>

        {/* Story Cards */}
        <div ref={cardsRef} className="space-y-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`bg-warm-sand rounded-2xl overflow-hidden opacity-0 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={story.image}
                    alt={`Story from ${story.author}`}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>

                {/* Quote */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="font-cormorant text-5xl text-terracotta/30 leading-none mb-4">
                    &ldquo;
                  </span>
                  <p className="text-charcoal text-lg leading-relaxed italic mb-6">
                    {story.quote}
                  </p>
                  <p className="text-deep-navy text-sm font-medium">
                    — {story.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
