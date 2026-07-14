import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, MessageCircle, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function DonationCards() {
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
            Make a Difference Today
          </h2>
        </div>

        {/* Donation Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PayPal Card */}
          <div className="bg-light-terracotta rounded-2xl p-8 border-2 border-terracotta opacity-0 flex flex-col">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-terracotta/10 mb-6 mx-auto">
              <Heart className="w-8 h-8 text-terracotta" />
            </div>
            <h3 className="font-cormorant text-2xl lg:text-[2.2rem] font-medium text-deep-navy text-center mb-4">
              Donate via PayPal
            </h3>
            <p className="text-charcoal text-base leading-relaxed text-center mb-8 flex-1">
              Your secure donation goes directly to supporting our children.
              Every contribution makes a difference in their lives.
            </p>
            <a
              href="https://www.paypal.com/paypalme/diamondvalleychurch28"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Donate Now
            </a>
          </div>

          {/* WhatsApp Card */}
          <div
            className="rounded-2xl p-8 border-2 opacity-0 flex flex-col"
            style={{
              borderColor: '#25D366',
              backgroundColor: 'rgba(37, 211, 102, 0.1)',
            }}
          >
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto"
              style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)' }}
            >
              <MessageCircle className="w-8 h-8" style={{ color: '#25D366' }} />
            </div>
            <h3 className="font-cormorant text-2xl lg:text-[2.2rem] font-medium text-deep-navy text-center mb-4">
              Contact via WhatsApp
            </h3>
            <p className="text-charcoal text-base leading-relaxed text-center mb-8 flex-1">
              Have questions or want to get involved? Message us directly
              on WhatsApp for a quick response.
            </p>
            <a
              href="https://wa.me/254720582754"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-inter font-semibold text-lg rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg w-full"
              style={{ backgroundColor: '#25D366' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#128C7E')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form Card */}
          <div
            className="rounded-2xl p-8 border-2 border-golden-ochre opacity-0 flex flex-col"
            style={{ backgroundColor: 'rgba(212, 160, 61, 0.1)' }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-golden-ochre/10 mb-6 mx-auto">
              <Mail className="w-8 h-8 text-golden-ochre" />
            </div>
            <h3 className="font-cormorant text-2xl lg:text-[2.2rem] font-medium text-deep-navy text-center mb-4">
              Send a Message
            </h3>
            <p className="text-charcoal text-base leading-relaxed text-center mb-8 flex-1">
              Fill out our contact form and we&apos;ll get back to you as soon
              as possible.
            </p>
            <a
              href="#contact-form"
              className="btn-golden w-full text-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
