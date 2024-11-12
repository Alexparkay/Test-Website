import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 group">
              <Waves className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                Wave Digital
              </span>
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Elevating surf culture through innovative digital strategies and authentic storytelling.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink href="https://instagram.com" icon={<Instagram />} />
              <SocialLink href="https://twitter.com" icon={<Twitter />} />
              <SocialLink href="https://facebook.com" icon={<Facebook />} />
              <SocialLink href="https://youtube.com" icon={<Youtube />} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <FooterLinks
              links={[
                { to: '/services#social', text: 'Social Media Management' },
                { to: '/services#brand', text: 'Brand Development' },
                { to: '/services#influencer', text: 'Influencer Partnerships' },
                { to: '/services#content', text: 'Content Creation' },
              ]}
            />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <FooterLinks
              links={[
                { to: '/about', text: 'About Us' },
                { to: '/careers', text: 'Careers' },
                { to: '/contact', text: 'Contact' },
                { to: '/blog', text: 'Blog' },
              ]}
            />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <FooterLinks
              links={[
                { to: '/case-studies', text: 'Case Studies' },
                { to: '/testimonials', text: 'Testimonials' },
                { to: '/privacy', text: 'Privacy Policy' },
                { to: '/terms', text: 'Terms of Service' },
              ]}
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wave Digital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

const FooterLinks = ({ links }: { links: { to: string; text: string }[] }) => (
  <ul className="space-y-3">
    {links.map((link) => (
      <li key={link.to}>
        <Link
          to={link.to}
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default Footer;