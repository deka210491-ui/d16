
import React, { useEffect, useState, useRef } from 'react';
import Countdown from './components/Countdown';
import Agenda from './components/Agenda';
import DressCode from './components/DressCode';
import VideoTrailer from './components/VideoTrailer';
import Editable from './components/Editable';
import { HIGHLIGHTS } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const lastDustPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('active');
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.hero-text-container')) {
        const dist = Math.hypot(e.clientX - lastDustPos.current.x, e.clientY - lastDustPos.current.y);
        
        if (dist > 8) {
          for(let i = 0; i < 3; i++) {
            createDust(e.clientX, e.clientY);
          }
          lastDustPos.current = { x: e.clientX, y: e.clientY };
        }
      }
    };

    const createDust = (x: number, y: number) => {
      const dust = document.createElement('div');
      const isTwinkly = Math.random() > 0.5;
      dust.className = `gold-dust ${isTwinkly ? 'dust-twinkle' : ''}`;
      
      const size = Math.random() * 4 + 1.5;
      dust.style.width = `${size}px`;
      dust.style.height = `${size}px`;
      dust.style.left = `${x}px`;
      dust.style.top = `${y}px`;
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 50 + 25;
      const destinationX = (Math.cos(angle) * velocity);
      const destinationY = (Math.sin(angle) * velocity) + 70;
      
      document.body.appendChild(dust);
      
      const duration = 1200 + Math.random() * 800;
      const animation = dust.animate([
        { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
        { transform: `translate(${destinationX}px, ${destinationY}px) scale(0) rotate(${Math.random() * 720}deg)`, opacity: 0 }
      ], {
        duration: duration,
        easing: 'cubic-bezier(0.1, 0.4, 0.3, 1)'
      });

      animation.onfinish = () => dust.remove();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#d4af37] selection:text-black relative z-20">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 py-6 px-10 md:px-20 flex justify-between items-center ${isScrolled ? 'bg-black/40 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : ''}`}>
        <div className="font-display text-xl tracking-[0.6em] gold-foil-textured font-black">D16 MEDIA</div>
        <div className="hidden md:flex space-x-16 text-[10px] tracking-[0.5em] uppercase font-bold opacity-60">
          <a href="#about" className="hover:opacity-100 transition-opacity">Giới thiệu</a>
          <a href="#agenda" className="hover:opacity-100 transition-opacity">Lịch trình</a>
          <a href="#dresscode" className="hover:opacity-100 transition-opacity">Trang phục</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[105vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1516997121675-4c2d04fe1301?q=80&w=2000&auto=format&fit=crop" 
            alt="luxury background" 
            className="w-full h-full object-cover scale-100 brightness-[0.25] saturate-[0.5]"
          />
        </div>

        <div className="relative z-20 space-y-8 max-w-6xl w-full hero-text-container">
          <p className="text-[11px] tracking-[1.2em] uppercase opacity-40 font-bold reveal mb-6">Year End Party 2025</p>
          
          <div className="flex flex-col items-center reveal" style={{ transitionDelay: '300ms' }}>
            <h1 className="font-serif-luxury text-7xl md:text-[180px] leading-[0.8] gold-foil-textured tracking-tighter italic font-black shimmer-beyond transition-all duration-700 cursor-default select-none">
              BEYOND
            </h1>
            <h2 className="font-serif-luxury text-5xl md:text-[110px] leading-[0.8] gold-foil-textured tracking-tighter md:mt-6 font-black uppercase luxury-glow cursor-default select-none">
              THE FRAME
            </h2>
          </div>

          <div className="pt-20 reveal" style={{ transitionDelay: '600ms' }}>
            <Countdown />
          </div>
          
          <div className="pt-16 reveal" style={{ transitionDelay: '900ms' }}>
             <p className="text-[10px] tracking-[1em] uppercase opacity-40 font-bold">KHỞI ĐẦU CHO NHỮNG ĐIỀU PHI THƯỜNG</p>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20">
          <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Invitation Section */}
      <section id="about" className="py-56 px-6 flex flex-col items-center text-center relative overflow-hidden bg-black/20">
        <div className="max-w-4xl space-y-20 reveal relative z-10">
          <div className="space-y-8">
            <h3 className="font-serif-luxury italic text-5xl text-[#d4af37] opacity-80">Thư Ngỏ</h3>
            <div className="w-24 h-[1px] bg-[#d4af37] mx-auto opacity-30"></div>
          </div>
          
          <div className="space-y-16 text-xl md:text-3xl font-light leading-[1.8] opacity-80">
            <Editable id="inv_p1" defaultText="D16 Media trân trọng kính mời quý khách đến với đêm tiệc vinh danh," tagName="p" className="tracking-wide" />
            <Editable id="inv_p2" defaultText="một hành trình 'Beyond the Frame' đầy cảm hứng và tuyệt tác." tagName="p" className="font-serif-luxury italic text-[#d4af37] text-3xl md:text-5xl" />
            <Editable id="inv_p3" defaultText="Sự hiện diện của bạn là linh hồn cho đêm tiệc của chúng tôi." tagName="p" className="tracking-wide" />
          </div>

          <div className="pt-24 flex flex-col items-center space-y-8">
            <p className="text-[11px] tracking-[0.8em] uppercase opacity-40 font-bold">Lễ hội bắt đầu</p>
            <div className="space-y-3">
              <p className="text-5xl tracking-[0.1em] font-light">19:00 — 10.02.2026</p>
              <p className="text-xs tracking-[0.6em] opacity-50 uppercase font-bold text-[#d4af37]">D16 PRIVATE LOUNGE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-48 border-y border-white/5 backdrop-blur-sm bg-black/5">
        <Agenda />
      </section>

      {/* Highlights Section */}
      <section className="py-56 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-36 reveal">
            <h2 className="font-display text-4xl gold-foil-textured tracking-[0.6em] uppercase font-black">Tuyệt Tác Đêm Tiệc</h2>
            <p className="text-[11px] tracking-[0.5em] uppercase opacity-40 mt-8 font-bold">THE PEAK OF LUXURY</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-28">
            {HIGHLIGHTS.map((item, i) => (
              <div key={i} className="reveal group flex space-x-12 items-start" style={{ transitionDelay: `${i * 150}ms` }}>
                <span className="font-serif-luxury text-4xl gold-foil-textured opacity-20 group-hover:opacity-100 transition-all duration-1000 italic font-black">0{i + 1}</span>
                <div className="space-y-6 border-l border-white/10 pl-12 group-hover:border-[#d4af37]/50 transition-all">
                  <Editable id={`hl_${i}`} defaultText={item} tagName="p" className="text-xl md:text-2xl font-light leading-relaxed group-hover:text-white transition-colors tracking-wide" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-56 p-20 border border-white/10 rounded-lg bg-white/[0.02] backdrop-blur-xl text-center reveal">
            <h4 className="font-display text-[10px] gold-foil-textured tracking-[1em] mb-12 uppercase font-black">Quy tắc riêng tư</h4>
            <p className="text-lg opacity-40 leading-loose max-w-2xl mx-auto italic font-light tracking-wide">
              "Vì một đêm tiệc trọn vẹn và đẳng cấp nhất, chúng tôi khuyến nghị quý khách hạn chế sử dụng thiết bị ghi hình để cùng tận hưởng từng khoảnh khắc nghệ thuật chân thực."
            </p>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section id="dresscode" className="backdrop-blur-sm bg-black/5">
        <DressCode />
      </section>

      {/* Video Trailer Section */}
      <VideoTrailer />

      {/* Footer */}
      <footer className="py-40 border-t border-white/5 text-center relative overflow-hidden bg-black/30">
        <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
          <div className="font-display text-4xl tracking-[1.5em] gold-foil-textured opacity-90 font-black ml-[1.5em]">D16</div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-24 text-[10px] tracking-[0.6em] uppercase opacity-40 font-bold">
            <span>© 2026 D16 Media Group</span>
            <span className="hidden md:inline text-[#d4af37] opacity-30">•</span>
            <span>Beyond The Frame</span>
            <span className="hidden md:inline text-[#d4af37] opacity-30">•</span>
            <span>Premium Experience</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
