
import React from 'react';
import { AGENDA } from '../constants';
import Editable from './Editable';

const Agenda: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-32 reveal">
        <h2 className="font-display text-4xl gold-foil-textured tracking-[0.6em] uppercase font-black">Hành trình</h2>
        <p className="text-[11px] tracking-[0.4em] uppercase opacity-40 mt-6 font-bold">The Celebration Flow</p>
      </div>
      
      <div className="space-y-20">
        {AGENDA.map((item, idx) => (
          <div key={idx} className="reveal group flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0" style={{ transitionDelay: `${idx * 150}ms` }}>
            <div className="md:w-1/4">
              <span className="text-[11px] tracking-[0.4em] font-bold opacity-30 uppercase text-[#d4af37] group-hover:opacity-100 transition-opacity">{item.time}</span>
            </div>
            <div className="md:w-3/4 md:pl-20 border-l border-white/5 relative">
              <div className="absolute top-0 -left-[1.5px] w-[2px] h-full bg-gradient-to-b from-[#d4af37] via-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="space-y-4">
                <Editable 
                  id={`agenda_content_${idx}`} 
                  defaultText={item.content} 
                  tagName="h4" 
                  className="text-2xl md:text-3xl font-light tracking-wider group-hover:text-white transition-colors" 
                />
                {item.note && (
                  <Editable 
                    id={`agenda_note_${idx}`} 
                    defaultText={item.note} 
                    tagName="p" 
                    className="text-base italic opacity-40 font-light leading-relaxed" 
                  />
                )}
                {item.subContent && (
                  <ul className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {item.subContent.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-center text-[10px] tracking-[0.2em] uppercase opacity-50 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mr-5 opacity-40 group-hover:opacity-100 transition-opacity"></span>
                        <Editable id={`agenda_sub_${idx}_${sIdx}`} defaultText={sub} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
