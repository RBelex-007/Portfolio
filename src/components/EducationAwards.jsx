import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationAwards() {
  return (
    <section id="education" className="py-24 relative bg-[#090d16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & Honors
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous foundations in computer science theory, systems architecture, and mathematical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: University & Coursework (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/5 text-left">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {educationData.institution}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {educationData.location}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono">
                    GPA {educationData.gpa}
                  </span>
                </div>
              </div>

              <div className="text-base font-semibold text-cyan-300 mb-2">
                {educationData.degree}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-6">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{educationData.graduation}</span>
              </div>

              {/* Coursework */}
              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Relevant Engineering Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-900/80 border border-white/5 text-slate-300 text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Honors & Awards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/5 text-left h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-base font-bold text-white mb-6">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span>Honors & Distinctions</span>
                </div>

                <div className="space-y-4">
                  {educationData.honors.map((honor, index) => (
                    <div 
                      key={index}
                      className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-amber-500/30 transition-all text-left"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="text-xs font-bold text-slate-200">
                          {honor.title}
                        </div>
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full shrink-0">
                          {honor.year}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {honor.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono text-center">
                Continuous academic excellence and hackathon recognition
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
