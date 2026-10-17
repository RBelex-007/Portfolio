import React, { useState, useMemo } from 'react';
import { 
  Terminal, 
  Github, 
  ExternalLink, 
  Award, 
  Layers, 
  Search, 
  ArrowUpRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = 
        selectedCategory === 'all' || 
        project.category.includes(selectedCategory);

      const matchesSearch = 
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative bg-[#090d16]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Technical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projects & Systems Engineering
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            From low-overhead POSIX profilers and C++ event-streaming pipelines to clinical computer vision models and hackathon-winning architectures.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/5 backdrop-blur-md">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl glass-panel glass-panel-hover p-6 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Status Strip */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  {project.award ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[220px]">{project.award}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-white/5 text-slate-400 text-[11px] font-mono">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span>{project.techStack[0]}</span>
                    </span>
                  )}

                  {/* External Links */}
                  <div className="flex items-center gap-2">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                        aria-label="GitHub link"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 hover:text-white hover:bg-indigo-600 transition-colors"
                        aria-label="Live Demo link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Key Metrics Strip if present */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-950/60 border border-white/5 mb-4 text-center">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-sans">{m.label}</span>
                        <span className="text-xs font-semibold text-cyan-400 font-mono mt-0.5">{m.val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1 shrink-0" />
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: Tech Stack & Detail Trigger */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/5 text-slate-300 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/5 text-slate-500 text-[10px] font-mono">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900/90 hover:bg-indigo-600/20 border border-white/5 hover:border-indigo-500/40 text-slate-300 hover:text-indigo-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200"
                >
                  <span>Architecture & Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when filtering */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl glass-panel">
            <p className="text-slate-400 text-sm">No projects found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-indigo-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>

      {/* Modal Popup */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
