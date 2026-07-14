import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 120, suffix: '+', label: 'Children Supported' },
  { target: 3, suffix: '', label: 'Years of Service' },
  { target: 15, suffix: '', label: 'Caregivers & Teachers' },
  { target: 500, suffix: '+', label: 'Meals Served Monthly' },
];

function RollingNumber({ target, suffix }: { target: number; suffix: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2.4,
          ease: 'power3.out',
          onUpdate: () => {
            setDisplayValue(Math.round(obj.value));
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [target]);

  return (
    <div ref={containerRef}>
      <span className="font-cormorant text-4xl lg:text-[3.2rem] font-semibold text-terracotta">
        {displayValue}{suffix}
      </span>
    </div>
  );
}

export default function ImpactStats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-warm-sand">
      <div className="content-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <RollingNumber target={stat.target} suffix={stat.suffix} />
              <p className="text-charcoal text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
