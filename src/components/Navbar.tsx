import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Waves, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Waves className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Wave Digital
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/about" current={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/services" current={location.pathname === '/services'}>Services</NavLink>
            <NavLink to="/clients" current={location.pathname === '/clients'}>Clients</NavLink>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'h-64 opacity-100' : 'h-0 opacity-0'
      } overflow-hidden bg-white/90 backdrop-blur-md`}>
        <div className="px-4 py-2 space-y-4">
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
          <MobileNavLink to="/clients" onClick={() => setIsOpen(false)}>Clients</MobileNavLink>
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, current }: { to: string; children: React.ReactNode; current: boolean }) => (
  <Link
    to={to}
    className={`text-gray-600 hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:transition-transform ${
      current ? 'after:scale-x-100' : 'after:scale-x-0'
    } hover:after:scale-x-100`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
  >
    {children}
  </Link>
);

export default Navbar;