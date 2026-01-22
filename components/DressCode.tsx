
import React from 'react';

const DressCode: React.FC = () => {
  return (
    <section id="dresscode" className="py-56 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-40 reveal">
          <div className="space-y-8">
            <p className="text-[11px] tracking-[1em] uppercase opacity-40 font-bold">Dress Code</p>
            <h2 className="font-serif-luxury text-7xl md:text-[140px] gold-foil-textured font-black tracking-tighter leading-none italic luxury-glow">
              ELEGANCE
            </h2>
          </div>
          <div className="mt-16 md:mt-0 max-w-lg">
            <p className="text-lg opacity-60 leading-[1.8] font-light tracking-wide border-l border-[#d4af37]/30 pl-10">
              Mỗi vị khách là một mảnh ghép nghệ thuật. Hãy khoác lên mình những gam màu của sự xa hoa để cùng tỏa sáng trong không gian nghệ thuật của D16.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-40">
          {[
            { label: 'Royal Gold', hex: '#d4af37', desc: 'Ánh kim quý tộc' },
            { label: 'Velvet Red', hex: '#8b0000', desc: 'Sắc đỏ quyền lực' },
            { label: 'Pure Black', hex: '#000000', desc: 'Đen huyền bí' }
          ].map((color, i) => (
            <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="aspect-[3/4] overflow-hidden bg-black/40 backdrop-blur-xl mb-10 relative border border-white/10 group-hover:border-[#d4af37]/50 transition-all duration-1000 shadow-2xl">
                 <div 
                   className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-1000"
                   style={{ backgroundColor: color.hex }}
                 ></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                   <span className="font-display text-5xl opacity-5 group-hover:opacity-100 transition-all duration-1000 group-hover:tracking-[1em] uppercase font-black text-white">
                     {color.label.split(' ')[1]}
                   </span>
                 </div>
              </div>
              <p className="text-[12px] tracking-[0.6em] uppercase gold-foil-textured font-black">{color.label}</p>
              <p className="text-xs opacity-40 mt-4 tracking-[0.3em] font-bold">{color.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <div className="inline-block px-20 py-10 border border-[#d4af37]/20 rounded-full hover:border-[#d4af37]/60 transition-all duration-1000 cursor-default group backdrop-blur-md">
            <p className="font-serif-luxury italic text-2xl md:text-4xl opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all tracking-tight">
              Be the masterpiece of the night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
