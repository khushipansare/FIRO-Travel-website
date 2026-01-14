import React from 'react';
import { DESTINATIONS } from '../constants';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DestinationGrid: React.FC = () => {
  const navigate = useNavigate();

  const handleBookNow = (id: string) => {
    navigate(`/payment/${id}`);
  };

  return (
    <section className="py-20 px-6 bg-firo-cream" id="grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-firo-navy mb-4">Curated Indian Escapes</h2>
          <div className="w-24 h-1 bg-firo-gold mx-auto rounded-full"></div>
          <p className="mt-6 text-firo-charcoal max-w-2xl mx-auto font-light">
            Handpicked destinations that promise exclusivity, serenity, and the unmatched hospitality of India.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {DESTINATIONS.map((destination) => (
            <div 
              key={destination.id} 
              className="group relative rounded-xl overflow-hidden break-inside-avoid shadow-lg cursor-pointer transform transition-transform hover:-translate-y-2 duration-500"
            >
              {/* Card Image */}
              <div className="relative w-full overflow-hidden">
                <img 
                  src={destination.imageUrl} 
                  alt={destination.name} 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Card Content - Always Visible Summary */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-32">
                <h3 className="text-2xl font-serif font-bold mb-1">{destination.name}</h3>
                <p className="text-sm font-sans opacity-90 mb-2 flex items-center gap-1">
                  <MapPin size={14} className="text-firo-gold" /> {destination.region}
                </p>
                <div className="inline-block bg-firo-gold/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  From ₹{destination.priceStart.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Reveal Content - On Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0 h-48 border-t-4 border-firo-gold">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-firo-navy font-serif font-bold text-lg mb-3">Premium Experiences</h4>
                    
                    <div className="mb-2">
                        <span className="text-xs font-bold text-firo-charcoal uppercase">Top Hotels</span>
                        <p className="text-sm text-firo-navy truncate">
                          {destination.hotels.map(h => h.name).join(', ')}
                        </p>
                    </div>

                    <div>
                        <span className="text-xs font-bold text-firo-charcoal uppercase">Must See</span>
                        <p className="text-sm text-firo-navy truncate">
                          {destination.touristPoints.map(p => p.name).join(', ')}
                        </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookNow(destination.id);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-firo-navy text-white py-2 rounded-sm text-sm uppercase tracking-widest hover:bg-firo-gold transition-colors"
                  >
                    Start Journey <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
