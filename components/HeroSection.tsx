import React, { useState } from 'react';
import { Plane, Train, Bus, MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from './ui/Button';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flight' | 'train' | 'bus'>('flight');

  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=10" 
          alt="Himalayas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center gap-12">
        
        {/* Hero Text */}
        <div className="text-center text-white space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight drop-shadow-lg">
            Rediscover the Extraordinary
          </h1>
          <p className="text-lg md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
            Curated journeys through India's most breathtaking landscapes, crafted for the discerning traveler.
          </p>
        </div>

        {/* Glassmorphism Booking Widget */}
        <div className="w-full max-w-4xl glass-panel rounded-lg p-6 md:p-8 shadow-2xl transition-transform hover:scale-[1.01] duration-500">
          
          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-gray-200/30 pb-4">
            <button 
              onClick={() => setActiveTab('flight')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeTab === 'flight' ? 'bg-firo-navy text-white' : 'text-firo-navy hover:bg-white/50'}`}
            >
              <Plane size={18} /> <span>Flights</span>
            </button>
            <button 
              onClick={() => setActiveTab('train')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeTab === 'train' ? 'bg-firo-navy text-white' : 'text-firo-navy hover:bg-white/50'}`}
            >
              <Train size={18} /> <span>Trains</span>
            </button>
            <button 
              onClick={() => setActiveTab('bus')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeTab === 'bus' ? 'bg-firo-navy text-white' : 'text-firo-navy hover:bg-white/50'}`}
            >
              <Bus size={18} /> <span>Buses</span>
            </button>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3 bg-white/60 p-3 rounded-md border border-white/40 focus-within:ring-2 focus-within:ring-firo-gold transition-all">
              <label className="block text-xs font-bold text-firo-charcoal uppercase tracking-wider mb-1">Origin</label>
              <div className="flex items-center gap-2 text-firo-navy">
                <MapPin size={16} className="text-firo-gold" />
                <input type="text" placeholder="From where?" className="bg-transparent w-full outline-none font-sans" />
              </div>
            </div>

            <div className="md:col-span-3 bg-white/60 p-3 rounded-md border border-white/40 focus-within:ring-2 focus-within:ring-firo-gold transition-all">
              <label className="block text-xs font-bold text-firo-charcoal uppercase tracking-wider mb-1">Destination</label>
              <div className="flex items-center gap-2 text-firo-navy">
                <MapPin size={16} className="text-firo-gold" />
                <input type="text" placeholder="To where?" className="bg-transparent w-full outline-none font-sans" />
              </div>
            </div>

            <div className="md:col-span-2 bg-white/60 p-3 rounded-md border border-white/40 focus-within:ring-2 focus-within:ring-firo-gold transition-all">
              <label className="block text-xs font-bold text-firo-charcoal uppercase tracking-wider mb-1">Dates</label>
              <div className="flex items-center gap-2 text-firo-navy">
                <Calendar size={16} className="text-firo-gold" />
                <input type="date" className="bg-transparent w-full outline-none font-sans text-sm" />
              </div>
            </div>

            <div className="md:col-span-2 bg-white/60 p-3 rounded-md border border-white/40 focus-within:ring-2 focus-within:ring-firo-gold transition-all">
              <label className="block text-xs font-bold text-firo-charcoal uppercase tracking-wider mb-1">Travelers</label>
              <div className="flex items-center gap-2 text-firo-navy">
                <Users size={16} className="text-firo-gold" />
                <select className="bg-transparent w-full outline-none font-sans">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3+ Passengers</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2 flex items-stretch">
               <Button variant="primary" fullWidth className="h-full text-lg shadow-xl" onClick={() => window.location.hash = "#/grid"}>
                  Search
               </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
