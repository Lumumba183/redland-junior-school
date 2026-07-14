import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:diamondvalleychurch28@gmail.com?subject=${encodeURIComponent(
      `[${formData.subject}] Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -30 },
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
        formRef.current,
        { opacity: 0, x: 30 },
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
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
          {/* Left - Image */}
          <div ref={imageRef} className="opacity-0">
            <div className="rounded-2xl overflow-hidden shadow-card h-full">
              <img
                src="./images/school-compound.jpg"
                alt="Redland Junior School"
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div ref={formRef} className="opacity-0">
            {submitted ? (
              <div className="bg-warm-white rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-forest-green/10 mb-6">
                  <Send className="w-8 h-8 text-forest-green" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-deep-navy mb-3">
                  Thank You!
                </h3>
                <p className="text-charcoal">
                  Your email client should open with your message. If it doesn&apos;t,
                  please email us directly at diamondvalleychurch28@gmail.com
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-warm-white rounded-2xl p-8 lg:p-10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-deep-navy font-medium text-sm mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-warm-white border border-border-light rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-deep-navy font-medium text-sm mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-warm-white border border-border-light rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-deep-navy font-medium text-sm mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-warm-white border border-border-light rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-deep-navy font-medium text-sm mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-warm-white border border-border-light rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Donations</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-deep-navy font-medium text-sm mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-warm-white border border-border-light rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
