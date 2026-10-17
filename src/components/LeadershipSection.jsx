import React from 'react';
import { Users, Sparkles, Globe, HeartHandshake } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 relative bg-[#090d16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
            <span>Community & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Leadership & Campus Involvement
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineering for social good, advancing African undergraduate leadership, and building inclusive technical communities.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/5 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                    {item.year}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800 text-slate-400">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {item.org}
                </h3>
                <div className="text-xs font-medium text-indigo-300 mb-3">
                  {item.role}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>Collegiate Initiative</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
