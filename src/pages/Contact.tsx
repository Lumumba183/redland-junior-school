import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ContactInfo from '../sections/contact/ContactInfo';
import ContactForm from '../sections/contact/ContactForm';

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <div
        ref={heroRef}
        className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: 'rgba(199, 91, 42, 0.1)' }}
      >
        <div
          className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto"
          ref={contentRef}
        >
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-[4.8rem] font-semibold text-deep-navy leading-[1.05] mb-4 opacity-0">
            Get in Touch
          </h1>
          <p className="text-charcoal text-lg sm:text-xl opacity-0">
            We&apos;d love to hear from you. Reach out to learn more about Redland Junior School.
          </p>
        </div>
      </div>

      <ContactInfo />
      <ContactForm />

      {/* Map Section */}
      <section className="py-16 bg-warm-white">
        <div className="content-max px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-card" style={{ height: 400 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19880388705!2d34.55607755!3d-0.07598944999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa437ad4ac81d%3A0x2012a439d6248dd2!2sKisumu%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Redland Junior School Location - Kisumu, Kenya"
            />
          </div>
        </div>
      </section>
    </>
  );
}
