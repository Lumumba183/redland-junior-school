import { useEffect, useRef } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import gsap from 'gsap';

export default function ShekinahHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] flex items-center justify-center bg-deep-navy overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A03D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div ref={contentRef} className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="font-cinzel text-sm sm:text-base tracking-[0.12em] text-golden-ochre uppercase mb-6 opacity-0">
          Shekinah Precious Children Centre
        </p>
        <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-[4rem] font-semibold text-warm-white leading-[1.05] mb-6 opacity-0">
          Giving Hope to African Children
        </h1>
        <p className="font-inter text-xl sm:text-2xl text-warm-white/70 mb-10 opacity-0">
          Education. Nutrition. Healthcare. Love.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <a
            href="https://www.paypal.com/paypalme/diamondvalleychurch28"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-golden inline-flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Donate via PayPal
          </a>
          <a
            href="https://wa.me/254720582754"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-inter font-semibold text-lg rounded-full transition-all duration-200 hover:bg-[#128C7E] hover:scale-[1.02] hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
