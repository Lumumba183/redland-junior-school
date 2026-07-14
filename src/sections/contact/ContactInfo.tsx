import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['P.O. Box 7922, Code 40100', 'Kisumu, Kenya', 'East Africa'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+254-720-582-754', '+254-788-305-228'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['diamondvalleychurch28@gmail.com'],
  },
];

export default function ContactInfo() {
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
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="bg-warm-sand rounded-2xl p-8 lg:p-10 text-center opacity-0"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-terracotta/10 mx-auto mb-5">
                <contact.icon className="w-7 h-7 text-terracotta" />
              </div>
              <h4 className="font-cormorant text-xl font-medium text-deep-navy mb-4">
                {contact.title}
              </h4>
              <div className="space-y-1">
                {contact.details.map((detail, i) => (
                  <p key={i} className="text-charcoal text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
