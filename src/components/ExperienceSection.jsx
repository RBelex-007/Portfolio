import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-[#090d16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career & Research Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work & Research Experience
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on engineering across surgical computer vision research, game backend architecture, robotics mentorship, and industry simulations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-indigo-500/20 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#090d16] border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-cyan-300 transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-white/5 text-left">
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {exp.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                        {exp.badge}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-900/60 px-3 py-1 rounded-full border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-xs text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.location}</span>
                </div>

                {/* Role Description Overview */}
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900/80 border border-white/5 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
