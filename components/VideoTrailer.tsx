
import React from 'react';
import Editable from './Editable';

const VideoTrailer: React.FC = () => {
  return (
    <section className="py-48 px-6 relative overflow-hidden bg-black/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 reveal">
          <p className="text-[11px] tracking-[1em] uppercase opacity-40 mb-6 font-bold">The Cinema Experience</p>
          <h2 className="font-display text-4xl gold-foil-textured tracking-[0.6em] uppercase font-black">Official Trailer</h2>
          <div className="mt-12 max-w-2xl mx-auto">
             <Editable 
               id="trailer_desc" 
               defaultText="Hé lộ những khoảnh khắc đầu tiên của hành trình nghệ thuật Beyond The Frame." 
               tagName="p" 
               className="text-lg opacity-60 font-light tracking-wide italic" 
             />
          </div>
        </div>

        {/* Video Container with Elegant Frame */}
        <div className="relative group reveal" style={{ transitionDelay: '300ms' }}>
          {/* Gold Glowing Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/20 via-[#fcf1d1]/30 to-[#9a7b2c]/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/8v_Gv_N3LpI?autoplay=0&controls=1&rel=0&modestbranding=1" 
              title="Beyond The Frame Official Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#d4af37]/50 -translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#d4af37]/50 translate-x-2 translate-y-2"></div>
        </div>

        <div className="mt-24 text-center reveal" style={{ transitionDelay: '600ms' }}>
           <p className="text-[10px] tracking-[0.5em] uppercase opacity-30 font-bold">4K CINEMATIC EXPERIENCE — D16 MEDIA PRESENTS</p>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#d4af37_0,transparent_70%)]"></div>
      </div>
    </section>
  );
};

export default VideoTrailer;
