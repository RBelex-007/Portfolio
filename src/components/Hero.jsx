import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, FileText, Sparkles, MapPin, Terminal, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Intro (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300">Belema Roberts</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-300 mb-4 flex items-center gap-2 flex-wrap">
              <span>Computer Science @ <span className="text-indigo-400 font-semibold">{personalInfo.university}</span></span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1 text-slate-400 text-sm font-normal">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.location}
              </span>
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              I engineer high-performance systems and real-time machine learning pipelines. 
              Currently researching surgical computer vision at the <span className="text-slate-200 font-medium">Tufts iBIT Lab</span>, 
              building low-level C++ streaming tools with Kafka & QuestDB, and developing secure full-stack applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-medium text-sm hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-slate-200 font-medium text-sm hover:text-white hover:border-indigo-400/50 hover:bg-slate-800/80 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Resume (Google Doc)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-slate-300 font-medium text-sm hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Social & Profiles */}
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 hover:text-white hover:bg-slate-800 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 hover:text-white hover:bg-slate-800 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Belema"
                className="p-2 rounded-lg bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 hover:text-white hover:bg-slate-800 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Picture & Interactive Highlight Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Glowing Aura Behind Avatar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 rounded-3xl blur-2xl transform scale-95" />

              {/* Main Avatar Card */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 flex items-center justify-center">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay on Bottom of Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />

                  {/* On-Image Bottom Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">{personalInfo.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">Tufts University CS</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-cyan-400">GPA {personalInfo.gpa}</div>
                      <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 justify-end">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Dean's List
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Top-Right */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-indigo-500/40 shadow-xl backdrop-blur-md flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-semibold text-slate-200">Hackathon Winner</span>
                </div>

                {/* Floating Badge Bottom-Left */}
                <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-200">C++ • PyTorch • Systems</span>
                </div>
              </div>

              {/* Developer Spec / Tech pill strip beneath image */}
              <div className="mt-6 p-3 rounded-2xl glass-panel border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-500">$ stack:</span>
                <span className="text-indigo-300">C++17</span>
                <span className="text-cyan-300">PyTorch</span>
                <span className="text-emerald-300">Kafka</span>
                <span className="text-amber-300">Node/React</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
