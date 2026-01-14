import React, { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className={`text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-firo-navy' : 'text-white'}`}>
          FIRO.
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-sans text-sm tracking-widest font-bold ${isScrolled ? 'text-firo-navy' : 'text-white'}`}>
          <Link to="/" className="hover:text-firo-gold transition-colors">DESTINATIONS</Link>
          <a href="#" className="hover:text-firo-gold transition-colors">HOTELS</a>
          <a href="#" className="hover:text-firo-gold transition-colors">EXPERIENCES</a>
          <a href="#" className="hover:text-firo-gold transition-colors">JOURNAL</a>
          <button className={`flex items-center gap-2 border px-4 py-2 rounded-sm transition-all ${isScrolled ? 'border-firo-navy hover:bg-firo-navy hover:text-white' : 'border-white hover:bg-white hover:text-firo-navy'}`}>
             <User size={16} /> ACCOUNT
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-firo-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-firo-navy' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden animate-fade-in text-center">
            <Link to="/" className="text-firo-navy font-bold hover:text-firo-gold py-2" onClick={() => setMobileMenuOpen(false)}>DESTINATIONS</Link>
            <a href="#" className="text-firo-navy font-bold hover:text-firo-gold py-2">HOTELS</a>
            <a href="#" className="text-firo-navy font-bold hover:text-firo-gold py-2">EXPERIENCES</a>
            <hr />
            <a href="#" className="text-firo-navy font-bold hover:text-firo-gold py-2">MY ACCOUNT</a>
        </div>
      )}
    </nav>
  );
};
