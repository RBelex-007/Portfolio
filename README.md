# Belema Roberts — Engineering Portfolio

A modern, high-performance portfolio website built with **React**, **Vite**, and **Tailwind CSS**, showcasing systems engineering, clinical computer vision research, and full-stack software development.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom dark tech palette, glassmorphism, and responsive layouts
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & JetBrains Mono

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   └── Belema_pic.jpg             # Profile avatar photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Floating glassmorphic navigation with scroll tracking
│   │   ├── Hero.jsx               # Headline, live status, avatar showcase, and quick CTAs
│   │   ├── MetricsStrip.jsx       # Key achievements & technical impact ticker
│   │   ├── ProjectsSection.jsx    # Filterable project portfolio with search & category tags
│   │   ├── ProjectModal.jsx       # Architecture deep dive & technical breakdown modal
│   │   ├── ExperienceSection.jsx  # Interactive career and research timeline
│   │   ├── SkillsSection.jsx      # Categorized skills matrix with proficiency levels
│   │   ├── EducationAwards.jsx    # Tufts CS degree, coursework, and awards showcase
│   │   ├── LeadershipSection.jsx  # Campus affiliations and community leadership
│   │   ├── ContactSection.jsx     # Copy-to-clipboard email, direct links & email composer
│   │   └── Footer.jsx             # Back-to-top, copyright, and social links
│   ├── data/
│   │   └── portfolioData.js       # Centralized single source of truth for all content
│   ├── App.jsx                    # Root component
│   ├── index.css                  # Tailwind styles & glassmorphic classes
│   └── main.jsx                   # React DOM entry point
├── index.html                     # Vite HTML entry template
├── package.json                   # Dependencies and build scripts
├── tailwind.config.js             # Tailwind CSS theme configuration
└── vite.config.js                 # Vite build settings
```

---

## ✏️ Updating Portfolio Information

All portfolio text, experiences, projects, awards, and links are cleanly separated in:
`src/data/portfolioData.js`

To update:
- **Projects**: Add or edit objects in the `projects` array.
- **Experience**: Add new internships or research roles in the `experiences` array.
- **Skills**: Add or modify skills in `skillsData`.
- **Contact Info & Resume**: Update `personalInfo` at the top of `portfolioData.js`.
