import React from 'react';
import { GraduationCap, Zap, Cpu, Activity, Trophy } from 'lucide-react';
import { keyMetrics } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Zap: Zap,
  Cpu: Cpu,
  Activity: Activity,
  Trophy: Trophy
};

export default function MetricsStrip() {
  return (
    <section className="relative py-10 border-y border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {keyMetrics.map((metric, idx) => {
            const Icon = iconMap[metric.icon] || Zap;
            return (
              <div 
                key={idx}
                className="group relative p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col items-start"
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200 group-hover:from-indigo-300 group-hover:to-cyan-200 transition-colors">
                    {metric.value}
                  </span>
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-cyan-300 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs font-semibold text-slate-200 tracking-tight">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
