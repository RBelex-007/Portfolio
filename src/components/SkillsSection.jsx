import React, { useState } from 'react';
import { Code, Brain, Server, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'languages', title: 'Languages', icon: Code, items: skillsData.languages, color: 'indigo' },
    { id: 'mlAndAi', title: 'Machine Learning & AI', icon: Brain, items: skillsData.mlAndAi, color: 'cyan' },
    { id: 'systemsAndBackend', title: 'Systems & Backend', icon: Server, items: skillsData.systemsAndBackend, color: 'emerald' },
    { id: 'toolsAndDevOps', title: 'Developer Tools & Infra', icon: Wrench, items: skillsData.toolsAndDevOps, color: 'amber' }
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#090d16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & Technical Tooling
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Languages, frameworks, and low-level tools I leverage to build scalable software and deploy robust machine learning models.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-white/5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {cat.items.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-2.5 rounded-xl border transition-all text-left flex flex-col justify-between ${
                          skill.highlight
                            ? 'bg-indigo-950/40 border-indigo-500/30 hover:border-indigo-400/50'
                            : 'bg-slate-900/60 border-white/5 hover:border-white/10'
                        }`}
                      >
                        <div className="text-xs font-semibold text-slate-200 truncate flex items-center justify-between">
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" title="Core Strength" />
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-1">
                          {skill.level}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer hint */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{cat.items.length} tools</span>
                  <span className="flex items-center gap-1 text-cyan-400/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                    Core focus areas
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
