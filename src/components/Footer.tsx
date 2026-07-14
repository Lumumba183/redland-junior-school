import { Link } from 'react-router-dom';
import { BookOpen, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/programs', label: 'Programs' },
  { path: '/shekinah', label: 'Shekinah' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-footer-dark text-warm-white">
      <div className="content-max px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-terracotta">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-cinzel text-sm font-semibold tracking-wider text-warm-white">
                REDLAND JUNIOR SCHOOL
              </span>
            </div>
            <p className="font-cinzel text-base text-golden-ochre tracking-[0.08em] mb-3">
              Raising the Leaders
            </p>
            <p className="text-warm-white/60 text-sm leading-relaxed">
              Nurturing excellence, faith, and compassion in the heart of Kisumu, Kenya since 2023.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-cormorant text-xl font-medium text-warm-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-warm-white/70 text-sm hover:text-terracotta transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-cormorant text-xl font-medium text-warm-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-terracotta mt-1 flex-shrink-0" />
                <span className="text-warm-white/70 text-sm">
                  P.O. Box 7922, Code 40100<br />
                  Kisumu, Kenya, East Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span className="text-warm-white/70 text-sm">+254-720-582-754</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span className="text-warm-white/70 text-sm break-all">
                  diamondvalleychurch28@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h4 className="font-cormorant text-xl font-medium text-warm-white mb-5">
              Connect
            </h4>
            <p className="text-warm-white/70 text-sm mb-4">
              Follow our journey and stay updated.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-warm-white/10 hover:bg-terracotta transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-warm-white" />
              </a>
              <a
                href="https://wa.me/254720582754"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-warm-white/10 hover:bg-[#25D366] transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 text-warm-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-warm-white/10 hover:bg-terracotta transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-warm-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-white/10 pt-6">
          <p className="text-warm-white/50 text-sm text-center">
            &copy; {new Date().getFullYear()} Redland Junior School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
