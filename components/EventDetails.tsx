
import React from 'react';
import { VENUE } from '../constants';

const EventDetails: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-black bg-opacity-40 border-t border-[#d1b464] border-opacity-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Venue Information - Centered and Focused */}
        <div className="space-y-12 flex flex-col items-center reveal">
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-5xl font-monument gold-text tracking-widest">{VENUE.name}</h3>
            
            <div className="flex flex-col items-center space-y-6">
              <p className="text-gray-200 flex items-center justify-center max-w-2xl text-xl sm:text-2xl font-light italic leading-relaxed">
                <span className="mr-4">
                  <svg className="w-8 h-8 text-[#d1b464]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                {VENUE.address}
              </p>
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#d1b464] to-transparent opacity-40"></div>
              <p className="text-[#f7ef8a] font-monument text-2xl sm:text-3xl tracking-[0.4em] uppercase opacity-90 drop-shadow-lg">{VENUE.room}</p>
            </div>
          </div>

          <a 
            href={VENUE.mapLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-block px-14 py-5 overflow-hidden border border-[#d1b464] transition-all duration-700 shadow-[0_0_20px_rgba(209,180,100,0.2)]"
          >
            <span className="relative z-10 gold-text group-hover:text-black transition-colors duration-500 tracking-[0.4em] text-base uppercase font-bold">
              Xem Bản Đồ
            </span>
            <div className="absolute inset-0 bg-[#d1b464] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
