import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ShekinahContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const mailtoLink = `mailto:diamondvalleychurch28@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
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
    <section
      id="contact-form"
      ref={sectionRef}
      className="section-padding bg-warm-sand"
    >
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div ref={infoRef} className="opacity-0">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-deep-navy leading-[1.1] mb-6">
              Get in Touch
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-8">
              We&apos;d love to hear from you. Whether you want to donate,
              volunteer, or simply learn more about Shekinah, reach out and
              we&apos;ll respond as soon as we can.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta/10">
                  <Phone className="w-5 h-5 text-terracotta" />
                </div>
                <span className="text-charcoal">+254-720-582-754</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta/10">
                  <Mail className="w-5 h-5 text-terracotta" />
                </div>
                <span className="text-charcoal break-all">
                  diamondvalleychurch28@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta/10 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-terracotta" />
                </div>
                <span className="text-charcoal">
                  P.O. Box 7922, Code 40100<br />
                  Kisumu, Kenya, East Africa
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/254720582754"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-inter font-semibold rounded-full transition-all duration-200 hover:bg-[#128C7E] hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right - Form */}
          <div ref={formRef} className="opacity-0">
            {submitted ? (
              <div className="bg-warm-white rounded-2xl p-10 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-forest-green/10 mb-6 mx-auto">
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
                className="bg-warm-white rounded-2xl p-8 lg:p-10 space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-deep-navy font-medium text-sm mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
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
                    htmlFor="email"
                    className="block text-deep-navy font-medium text-sm mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-warm-white border border-border-light rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-deep-navy font-medium text-sm mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-warm-white border border-border-light rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-deep-navy font-medium text-sm mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-warm-white border border-border-light rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition-colors resize-none"
                    placeholder="Tell us how you'd like to help or ask a question..."
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
