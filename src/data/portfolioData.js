export const personalInfo = {
  name: "Belema Roberts",
  title: "Software Engineer & AI Researcher",
  tagline: "Building high-throughput systems, low-level tooling, and real-time machine learning pipelines.",
  university: "Tufts University",
  degree: "B.S. in Computer Science",
  graduation: "Expected May 2028",
  gpa: "3.84 / 4.0",
  location: "Medford, MA • Boston Area",
  status: "Open to Summer 2026/2027 SWE & Research Roles",
  email: "Belema.Roberts@tufts.edu",
  secondaryEmail: "robertsbelema007@gmail.com",
  phone: "(857) 497-9447",
  github: "https://github.com/RBelex-007",
  linkedin: "https://www.linkedin.com/in/belema-roberts",
  resumeUrl: "https://docs.google.com/document/d/1d_RmdF3wJvYxS3OwlDVq66N1qiLetUvL1O5k7TiJkJY/edit?usp=sharing",
  avatar: "/Belema_pic.jpg",
  bio: "I'm a Computer Science student at Tufts University obsessed with engineering performant systems at the intersection of low-level software, scalable backends, and clinical AI. From engineering real-time surgical vision systems at Tufts iBIT Lab and C++ event-streaming pipelines with Kafka and QuestDB, to mentoring Nigerian robotics teams to a National Championship, I build software that solves hard technical problems with measurable real-world impact."
};

export const keyMetrics = [
  {
    value: "3.84",
    label: "Tufts CS GPA",
    subtext: "Dean's List All Semesters",
    icon: "GraduationCap"
  },
  {
    value: "5,000+",
    label: "Msgs / Sec Throughput",
    subtext: "C++17 Kafka & QuestDB Pipeline",
    icon: "Zap"
  },
  {
    value: "<2%",
    label: "Profiler Overhead",
    subtext: "Signal-Driven Linux Profiler",
    icon: "Cpu"
  },
  {
    value: "92%",
    label: "Diagnostic Error Reduction",
    subtext: "EMR-Integrated AI System",
    icon: "Activity"
  },
  {
    value: "1st Place",
    label: "National Champions",
    subtext: "FIRST Tech Challenge Nigeria",
    icon: "Trophy"
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "systems", label: "Systems & Low-Level" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "fullstack", label: "Full-Stack & Web" },
  { id: "hackathons", label: "Hackathon Winners" }
];

export const projects = [
  {
    id: "vault",
    title: "Vault — Secure Identity & Safety Protocol",
    award: "Winner — CODE2040 Tech for Resistance Hackathon '26 🏆",
    category: ["systems", "fullstack", "hackathons"],
    featured: true,
    summary: "Architected a secure document vault in a Turborepo monorepo with automated Gemini OCR extraction (<2s latency) and PIN-gated Lockdown Mode dispatching emergency location beacons.",
    techStack: ["Node.js", "Express", "Turborepo", "Google Gemini OCR", "Firebase", "REST APIs"],
    links: {
      github: "https://github.com/RBelex-007",
      demo: "https://github.com/RBelex-007"
    },
    metrics: [
      { label: "OCR Latency", val: "< 2s" },
      { label: "Architecture", val: "Turborepo Monorepo" },
      { label: "Award", val: "1st Place Winner" }
    ],
    highlights: [
      "Architected a Node.js and Express backend within a modern Turborepo monorepo to safely encrypt and manage sensitive identity documents (Passports, I-20 forms).",
      "Integrated Google Gemini for an automated OCR pipeline, extracting structured data fields from high-resolution document scans in under 2 seconds.",
      "Engineered Lockdown Mode and safety triggers using PIN-protected states in Firebase to prevent unauthorized device access while automatically dispatching location beacons to emergency contacts."
    ],
    deepDive: "Built during the CODE2040 Tech for Resistance Hackathon, Vault solves the urgent dilemma faced by international and immigrant students carrying sensitive legal papers. By decoupling authentication from client storage and establishing a zero-trust beacon protocol, Vault provides instant document safety during critical interactions."
  },
  {
    id: "sentline",
    title: "Sentline — Real-Time Quantitative Sentiment Pipeline",
    award: "High-Throughput Financial Stream",
    category: ["systems"],
    featured: true,
    summary: "High-throughput, decoupled C++17 event-streaming backend processing mock financial feeds, sustaining over 5,000 msgs/sec with sub-2ms write latency via Kafka and QuestDB.",
    techStack: ["C++17", "Apache Kafka", "librdkafka", "QuestDB", "CMake", "Multi-Threading"],
    links: {
      github: "https://github.com/RBelex-007"
    },
    metrics: [
      { label: "Throughput", val: "> 5,000 msgs/sec" },
      { label: "Write Latency", val: "< 2ms" },
      { label: "Language", val: "C++17" }
    ],
    highlights: [
      "Built a decoupled C++17 event-streaming backend to ingest and score mock financial text feeds in real-time.",
      "Leveraged librdkafka for multi-threaded asynchronous message ingestion and QuestDB for time-series persistence, sustaining over 5,000 messages/second with sub-2ms write latency.",
      "Designed a low-overhead terminal dashboard to monitor live data ingestion throughput, internal ring-buffer health, and rolling risk signals."
    ],
    deepDive: "Sentline demonstrates modern high-performance C++ systems architecture: avoiding heap reallocations on the critical path, lock-free queue primitives for thread handoffs, and direct binary ingestion protocols into time-series columnar storage."
  },
  {
    id: "profiler",
    title: "Low-Overhead Sampling Profiler",
    award: "Systems Software",
    category: ["systems"],
    featured: true,
    summary: "Signal-driven statistical profiler capturing high-frequency Linux call stacks at 100Hz with <2% runtime overhead, DWARF symbol resolution, and Flame Graph generation.",
    techStack: ["C++", "Linux", "SIGPROF", "ptrace", "DWARF", "Flame Graphs"],
    links: {
      github: "https://github.com/RBelex-007"
    },
    metrics: [
      { label: "Runtime Overhead", val: "< 2%" },
      { label: "Sample Rate", val: "100 Hz" },
      { label: "Output", val: "Flame Graphs" }
    ],
    highlights: [
      "Engineered a statistical profiler utilizing SIGPROF POSIX signal handling and ptrace to capture high-frequency call stacks (100Hz) with <2% runtime overhead.",
      "Implemented manual stack frame unwinding and DWARF symbol resolution to map raw instruction pointers directly to demangled C++ function names.",
      "Built an automated visualization pipeline to generate Flame Graphs, immediately isolating latency spikes and cache-unfriendly routines in performance-critical code."
    ],
    deepDive: "Traditional profilers introduce invasive overhead that perturbs cache lines and runtime behavior. This profiler implements minimal asynchronous-signal-safe bookkeeping in memory before offline symbol resolution."
  },
  {
    id: "pokemon-tcg",
    title: "Pokémon TCG AI Agent — Kaggle PTCG AI Battle",
    award: "Kaggle Ladder Competitor",
    category: ["ai", "systems"],
    featured: true,
    summary: "Reinforcement learning and search agent competing on the live Kaggle ladder across a 1,267-card action space, reverse-engineering C++ game engine internals via ctypes.",
    techStack: ["Python", "C++", "ctypes", "Monte Carlo Search", "Game Theory", "Reinforcement Learning"],
    links: {
      github: "https://github.com/RBelex-007"
    },
    metrics: [
      { label: "Action Space", val: "1,267 Cards" },
      { label: "Engine", val: "C++ via ctypes" },
      { label: "Search", val: "PIMC Sampling" }
    ],
    highlights: [
      "Shipped a heuristic policy agent to the live Kaggle ladder navigating a combinatorial 1,267-card state and action space.",
      "Reverse-engineered the compiled C++ rules engine's search and RNG internals, interfacing via Python's ctypes to construct an ultra-fast legal move validation layer.",
      "Engineered a Perfect Information Monte Carlo (PIMC) search using determinization sampling over hidden opponent hands, weighting guesses by observed turn-by-turn play patterns."
    ],
    deepDive: "Imperfect information games require addressing hidden state spaces. By decoupling determinization sampling in Python and delegating simulation rollouts to native C++, the agent achieves competitive rollout volume per turn."
  },
  {
    id: "othello-engine",
    title: "Othello Engine — Bitboard Game-Tree Search",
    award: "Endgame Solver (~700K nodes/sec)",
    category: ["systems"],
    featured: true,
    summary: "Dependency-free OCaml engine with 64-bit bitboard move generation, alpha-beta search, Zobrist transposition table, and exact endgame solver validated over 123K positions.",
    techStack: ["OCaml", "Bitboard Operations", "Alpha-Beta Minimax", "Zobrist Hashing", "Iterative Deepening"],
    links: {
      github: "https://github.com/RBelex-007"
    },
    metrics: [
      { label: "Search Speed", val: "~700K nodes/s" },
      { label: "Search Depth", val: "10–12 Plies" },
      { label: "Verification", val: "123K Positions" }
    ],
    highlights: [
      "Built a dependency-free engine featuring 64-bit bitboard move generation, alpha-beta minimax search, and an exact endgame solver in OCaml.",
      "Integrated iterative deepening over a Zobrist hash transposition table, evaluating 10–12 plies deep at ~700,000 nodes/sec.",
      "Wrote a 249-check test suite cross-checking two independent move generators over 123K positions, verifying accuracy against published perft counts to depth 10.",
      "Diagnosed a subtle two's-complement arithmetic overflow that silently truncated the search tree, systematically isolating its impact through automated A/B match play."
    ],
    deepDive: "Functional languages bring strong typing and immutability guarantees. By representing the 8x8 board as integer bitboards, bitwise shifts replace nested loops, achieving raw C-like throughput in idiomatic OCaml."
  },
  {
    id: "tbtector",
    title: "TBtector — Deep Learning TB Screening",
    award: "AI/ML Medical Diagnostic",
    category: ["ai"],
    featured: false,
    summary: "Trained a PyTorch CNN to detect tuberculosis on Kaggle chest radiographs with >95% accuracy, featuring automated normalization for clinical screening.",
    techStack: ["PyTorch", "Python", "Convolutional Neural Networks", "Computer Vision", "NumPy"],
    links: {
      github: "https://github.com/RBelex-007"
    },
    metrics: [
      { label: "Accuracy", val: "> 95%" },
      { label: "Framework", val: "PyTorch" },
      { label: "Domain", val: "Medical Imaging" }
    ],
    highlights: [
      "Trained a deep learning CNN model in PyTorch for tuberculosis binary classification (TB vs. normal) from Kaggle's chest radiograph dataset.",
      "Constructed an automated preprocessing pipeline with contrast normalization and adaptive resizing to eliminate scanner-dependent artifacts.",
      "Tuned hyperparameters and tracked precision/recall trade-offs to evaluate deployability in low-cost, underserved clinical clinics."
    ],
    deepDive: "Developed as part of healthcare AI initiatives to explore how lightweight deep architectures can bring rapid triage capability to resource-constrained diagnostic settings."
  },
  {
    id: "finmax",
    title: "Finmax — AI Financial Co-Pilot",
    award: "HackHarvard '25 Project 🌟",
    category: ["fullstack", "ai", "hackathons"],
    featured: false,
    summary: "Full-stack AI financial advisor with Google Gemini API providing personalized scenario simulation and financial aid discovery for international students.",
    techStack: ["React", "Node.js", "Google Gemini AI", "REST APIs", "Tailwind CSS"],
    links: {
      github: "https://github.com/RBelex-007"
    },
    metrics: [
      { label: "AI Engine", val: "Google Gemini" },
      { label: "Hackathon", val: "HackHarvard '25" },
      { label: "Target", val: "International Students" }
    ],
    highlights: [
      "Built an AI-powered financial co-pilot delivering personalized budgeting forecasts, living cost modeling, and grant/aid discovery for students.",
      "Designed and deployed a full-stack web application with Gemini AI, REST APIs, and a custom responsive user interface.",
      "Engineered tailored financial decision models specifically addressing the unique constraints of international and underrepresented scholars."
    ]
  },
  {
    id: "missdiagnosis",
    title: "MissDiagnosis AI — Clinical EMR Assistant",
    award: "Notion Hackathon '24 🏆",
    category: ["ai", "hackathons"],
    featured: false,
    summary: "AI chatbot backend combining GPT-4, VGG19, and hospital EMR integration, achieving a 92% reduction in simulated diagnostic error rates.",
    techStack: ["Python", "Flask", "GPT-4", "VGG19", "OpenCV", "MySQL", "REST APIs"],
    links: {
      github: "https://github.com/IMINABO1/MissDiagnosis"
    },
    metrics: [
      { label: "Error Reduction", val: "92%" },
      { label: "Models", val: "GPT-4 + VGG19" },
      { label: "Hackathon", val: "Notion Hackathon '24" }
    ],
    highlights: [
      "Engineered an AI diagnostic chatbot backend integrated with hospital Electronic Medical Records (EMR) for real-time physician second-opinions.",
      "Combined reinforcement learning, clinical NLP, and real-time medical literature streaming to dramatically boost diagnostic accuracy.",
      "Integrated VGG19 radiographic feature extraction with patient chart data, achieving a 92% reduction in diagnostic oversight rates in validation scenarios."
    ]
  },
  {
    id: "lecturizer",
    title: "Lecturizer — AI Lecture Transcriber & Summarizer",
    award: "WHACK '24 Project 🎙️",
    category: ["fullstack", "ai", "hackathons"],
    featured: false,
    summary: "AI platform with Flask and Whisper for lecture audio transcription, featuring US location-based consent checks for state wiretapping compliance.",
    techStack: ["Python", "Flask", "OpenAI Whisper", "JavaScript", "HTML5/CSS3", "JSON"],
    links: {
      github: "https://github.com/gwang1224/lecturizer"
    },
    metrics: [
      { label: "Audio Model", val: "Whisper AI" },
      { label: "Compliance", val: "US State Consent" },
      { label: "Hackathon", val: "WHACK '24" }
    ],
    highlights: [
      "Developed an AI platform utilizing Flask and OpenAI Whisper to transcribe, segment, and summarize multi-hour collegiate lecture recordings.",
      "Implemented US location-based consent verification in JS to ensure compliance with one-party vs. two-party state audio recording laws.",
      "Designed an intuitive responsive UI supporting direct microphone capture, file uploads, and keyword-indexed study guide export."
    ]
  },
  {
    id: "recycler",
    title: "Recycler — Intelligent Trash Classification",
    award: "Sustainability & AI App",
    category: ["ai", "fullstack"],
    featured: false,
    summary: "Smart waste management platform combining a React frontend, TensorFlow classification model, and Google Maps API for localized recycling instructions.",
    techStack: ["React.js", "Python", "Flask", "TensorFlow", "Google Maps API", "LLMs"],
    links: {
      github: "https://github.com/IMINABO1/Recycler"
    },
    metrics: [
      { label: "Frontend", val: "React.js" },
      { label: "Classifier", val: "TensorFlow" },
      { label: "Geo-Service", val: "Google Maps" }
    ],
    highlights: [
      "Developed a responsive React web app paired with a TensorFlow computer vision model to identify and categorize recyclable vs. landfill waste.",
      "Integrated the Google Maps API with open-source LLMs to query and provide municipality-specific recycling regulations and nearby drop-off points.",
      "Engineered real-time feedback loops via REST APIs for rapid classification under variable lighting conditions."
    ]
  },
  {
    id: "dna-seq",
    title: "DNA Seq — Bioinformatics Analysis & Visualization",
    award: "Bioinformatics Pipeline",
    category: ["ai", "systems"],
    featured: false,
    summary: "Python tool for DNA sequence transcription, translation into amino acid polypeptides, and OpenCV-assisted codon color visualization.",
    techStack: ["Python", "OpenCV", "Bioinformatics", "Data Visualization"],
    links: {
      github: "https://github.com/RBelex-007/Mini-DNA-Analyzer"
    },
    metrics: [
      { label: "Processing", val: "Real-time FASTA" },
      { label: "Vision", val: "OpenCV" },
      { label: "Domain", val: "Genomics" }
    ],
    highlights: [
      "Built a Python bioinformatics pipeline for parsing genomic sequences, executing transcription, and translating into polypeptide chains.",
      "Enhanced codon representation with OpenCV for real-time nucleotide color identification and visual mutation highlighting.",
      "Designed an intuitive terminal and graphical dashboard to analyze open reading frames and codon frequencies."
    ]
  },
  {
    id: "sushi-go",
    title: "Sushi Go! — 3-Player Interactive Game Engine",
    award: "C++ Object-Oriented Architecture",
    category: ["systems"],
    featured: false,
    summary: "3-player card game engine in C++ featuring multi-round rotation logic, 100% memory efficiency with RAII, and terminal rendering.",
    techStack: ["C++", "OOP Architecture", "Memory Management", "Terminal UI"],
    links: {
      github: "https://github.com/RBelex-007"
    },
    metrics: [
      { label: "Memory Efficiency", val: "100% Leak-Free" },
      { label: "Players", val: "3 Players" },
      { label: "Card Types", val: "8 Rulesets" }
    ],
    highlights: [
      "Engineered a 3-player variant of Sushi Go! in C++, managing complex card-drafting, round-robin hand rotation, and scoring rules across 8 distinct card types.",
      "Architected clean object-oriented class hierarchies from scratch to model game states, turn lifecycles, and scoring mechanics.",
      "Implemented manual memory management with RAII guarantees, ensuring zero memory leaks across intensive multi-round game sessions."
    ]
  },
  {
    id: "diabetes-convex",
    title: "Diabetes Risk Prediction Using Convex Hulls",
    award: "Tufts EN47 Computational Geometry",
    category: ["systems", "ai"],
    featured: false,
    summary: "C++ computational geometry predictive model using 2D/3D convex hull boundaries on clinical health data to detect early diabetes risk clusters.",
    techStack: ["C++", "Computational Geometry", "Convex Hull Algorithms", "Data Science"],
    links: {
      github: "https://github.com/RBelex-007"
    },
    metrics: [
      { label: "Algorithm", val: "Convex Hull" },
      { label: "Language", val: "C++" },
      { label: "Dataset", val: "Clinical Biometrics" }
    ],
    highlights: [
      "Designed a C++ algorithm leveraging convex hulls to isolate geometric clusters separating diabetic, pre-diabetic, and healthy patient cohorts.",
      "Applied geometric spatial analysis to detect early risk indicators in non-diabetic patient biometric metrics.",
      "Validated predictions against clinical datasets to evaluate geometric modeling as an interpretable diagnostic aid."
    ]
  }
];

export const experiences = [
  {
    role: "AI Research Assistant (RAKT Team)",
    company: "Tufts University iBIT Lab & ClAIrVuEx",
    period: "Jun 2026 – Jul 2026",
    location: "Medford, MA",
    badge: "Surgical Computer Vision",
    description: "Conducted cutting-edge surgical vision research focused on autonomous hemorrhage detection and boundary segmentation in active operative environments.",
    bullets: [
      "Built a real-time surgical vision system using YOLOv8 and tracking heuristics to identify and localize active intraoperative hemorrhages.",
      "Engineered an automated PyTorch data loader to parse and normalize nested multi-session surgical video datasets across diverse clinical procedures.",
      "Evaluated and benchmarked semantic segmentation architectures to optimize automated bleeding boundary detection accuracy under occlusions and variable lighting."
    ],
    technologies: ["PyTorch", "YOLOv8", "Computer Vision", "Semantic Segmentation", "Python"]
  },
  {
    role: "Software Engineering Simulation",
    company: "Electronic Arts (EA)",
    period: "May 2025 – Jun 2025",
    location: "Orlando, FL / Remote",
    badge: "EA Sports College Football",
    description: "Contributed to high-concurrency backend services and core C++ data structures for EA Sports College Football.",
    bullets: [
      "Patched a critical bugfix and optimized the EA Sports College Football codebase by implementing an improved data structure that reduced memory overhead.",
      "Architected and implemented core C++ class structures for upcoming features, defining clean interfaces and relational boundaries to support scalable backend workflows.",
      "Proposed and authored a comprehensive technical specification for an engagement-driving gameplay feature."
    ],
    technologies: ["C++", "Object-Oriented Design", "Backend Systems", "Data Structures", "Game Architecture"]
  },
  {
    role: "Technology Support Intern",
    company: "Nigerian Maritime Administration and Safety Agency (NIMASA)",
    period: "Aug 2023 – Sep 2023",
    location: "Lagos, Nigeria",
    badge: "Enterprise IT Security",
    description: "Maintained critical digital infrastructure and endpoint security for enterprise maritime operations.",
    bullets: [
      "Installed security patches, strengthened endpoint firewalls, and maximized IT uptime across enterprise network environments.",
      "Streamlined computer and mobile systems for 10+ operational users, doubling device operational efficiency.",
      "Diagnosed and resolved hardware, software, and networking faults across 10+ workstations and 15+ enterprise applications with zero operational interruptions."
    ],
    technologies: ["Network Security", "Endpoint Protection", "Hardware Diagnostics", "IT Operations"]
  },
  {
    role: "Software Engineering Simulations",
    company: "Y Combinator & Quantium (Forage)",
    period: "Nov 2025 – Dec 2025",
    location: "Remote",
    badge: "Simulated Engineering",
    description: "Hands-on engineering challenges simulating rapid startup development and quantitative client data products.",
    bullets: [
      "Y Combinator Simulation: Engineered a Kanban task system with a Node.js backend persisting draggable workflow updates across sessions; analyzed user metrics in SQL to propose engagement features.",
      "Quantium Simulation: Built an interactive Dash & pandas application enabling clients to model price-elasticity impacts on sales and profit, accompanied by automated bash test suites."
    ],
    technologies: ["Node.js", "SQL", "Dash", "Plotly", "Pandas", "Python", "Bash"]
  },
  {
    role: "Non-Profit Consulting Extern",
    company: "PwC (PricewaterhouseCoopers)",
    period: "Apr 2025 – Jun 2025",
    location: "Remote",
    badge: "Strategic Analytics",
    description: "Delivered data-driven strategic consulting for non-profit enterprise initiatives.",
    bullets: [
      "Analyzed SFMade's fundraising initiative dataset to uncover donor retention patterns and actionable growth opportunities.",
      "Crafted and delivered an executive presentation for SFMade and PwC leadership utilizing data-informed storytelling.",
      "Collaborated in a distributed remote team to formulate strategic recommendations under rigorous deadlines."
    ],
    technologies: ["Data Analytics", "Financial Storytelling", "Executive Presentations", "Strategic Planning"]
  },
  {
    role: "Robotics Engineering Intern & Lead Mentor",
    company: "The Contechs X UNILAG AIRLAB",
    period: "Sep 2023 – Aug 2024",
    location: "Lagos, Nigeria",
    badge: "National Champions 🥇",
    description: "Engineered competitive robotics platforms and mentored 10+ students to win the FIRST Tech Challenge Nigeria National Championship.",
    bullets: [
      "Led the mechanical and software development of 3 competitive robotics projects, integrating sensors, microcontrollers, and custom drive systems.",
      "Mentored Nigerian FIRST Robotics students in embedded design, Android Studio, FTC SDK, and OnShape CAD, culminating in the National Championship and Think Award (2024).",
      "Enhanced robot mobility by 75% by developing custom Java control solutions on FTC SDK with an Ubuntu Raspberry Pi for onboard compute.",
      "Engineered custom drivetrains and optimized intake/scoring mechanisms for competitive high-velocity matches."
    ],
    technologies: ["Java", "FTC SDK", "Android Studio", "Raspberry Pi", "Ubuntu", "OnShape CAD", "Embedded Systems"]
  }
];

export const skillsData = {
  languages: [
    { name: "Python", level: "Expert", highlight: true },
    { name: "C++ (C++17)", level: "Advanced", highlight: true },
    { name: "JavaScript / TypeScript", level: "Advanced", highlight: true },
    { name: "Java", level: "Advanced", highlight: false },
    { name: "OCaml", level: "Proficient", highlight: true },
    { name: "SQL (PostgreSQL)", level: "Proficient", highlight: false },
    { name: "Rust", level: "Familiar", highlight: false },
    { name: "C# / .NET", level: "Familiar", highlight: false },
    { name: "HTML5 & CSS3", level: "Expert", highlight: false }
  ],
  mlAndAi: [
    { name: "PyTorch", level: "Advanced", highlight: true },
    { name: "TensorFlow", level: "Advanced", highlight: false },
    { name: "YOLOv8 & Object Tracking", level: "Advanced", highlight: true },
    { name: "OpenCV", level: "Advanced", highlight: false },
    { name: "Semantic Segmentation", level: "Advanced", highlight: true },
    { name: "Convolutional Neural Networks", level: "Expert", highlight: false },
    { name: "Reinforcement Learning", level: "Proficient", highlight: true },
    { name: "Google Gemini API & GPT-4", level: "Advanced", highlight: false }
  ],
  systemsAndBackend: [
    { name: "Node.js & Express", level: "Advanced", highlight: true },
    { name: "Apache Kafka (librdkafka)", level: "Proficient", highlight: true },
    { name: "QuestDB (Time-Series)", level: "Proficient", highlight: true },
    { name: "Flask & FastAPI", level: "Advanced", highlight: false },
    { name: "Turborepo & Monorepos", level: "Proficient", highlight: false },
    { name: "Firebase (Auth, Firestore)", level: "Advanced", highlight: false },
    { name: "REST APIs & Microservices", level: "Advanced", highlight: false },
    { name: "Linux / POSIX (Signals, ptrace)", level: "Advanced", highlight: true }
  ],
  toolsAndDevOps: [
    { name: "Git & GitHub", level: "Advanced", highlight: true },
    { name: "CMake", level: "Proficient", highlight: false },
    { name: "Docker", level: "Proficient", highlight: false },
    { name: "DWARF & Flame Graphs", level: "Proficient", highlight: true },
    { name: "NumPy & Pandas", level: "Advanced", highlight: false },
    { name: "OnShape CAD", level: "Advanced", highlight: false },
    { name: "Tailwind CSS", level: "Advanced", highlight: false },
    { name: "LaTeX", level: "Proficient", highlight: false }
  ]
};

export const educationData = {
  institution: "Tufts University",
  location: "Medford, MA",
  degree: "Bachelor of Science in Computer Science",
  graduation: "Expected Graduation: May 2028",
  gpa: "3.84 / 4.0",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Structure & Assembly Language",
    "Software Engineering",
    "Object-Oriented Programming (OOP)",
    "Discrete Mathematics",
    "Linear Algebra",
    "Probability & Statistics",
    "Calculus III",
    "Game Design",
    "CodePath: Intro to Web Development"
  ],
  honors: [
    {
      title: "CODE2040 Tech for Resistance Hackathon Winner",
      year: "2026",
      desc: "1st Place for architecting Vault, a secure OCR identity vault with emergency lockdown beacons."
    },
    {
      title: "National Champions & Think Award",
      year: "2024",
      desc: "FIRST Tech Challenge Nigeria — Led and mentored the team to the national robotics title."
    },
    {
      title: "Tufts Dean's List",
      year: "All Semesters",
      desc: "Awarded continuous academic honor for maintaining top GPA in the School of Engineering."
    },
    {
      title: "International Youth Math Challenge (IYMC)",
      year: "Silver Honor",
      desc: "Silver distinction in international mathematical problem-solving competition."
    },
    {
      title: "Lagos Mathematics Olympiad",
      year: "Honorable Mention",
      desc: "Recognized for top performance in high-level regional mathematics olympiad."
    }
  ]
};

export const leadershipData = [
  {
    org: "African Intercollegiate Conference",
    role: "Core Planning Committee (Marketing & Web Ops)",
    year: "2025 – Present",
    desc: "Collaborating across a multi-university committee to architect the web infrastructure and execute high-reach digital marketing campaigns for the inaugural undergraduate African conference hosted at Harvard."
  },
  {
    org: "Engineers Without Borders — Tufts Chapter",
    role: "Project Engineer / Data Analytics",
    year: "2024 – Present",
    desc: "Contributed to the mechanical design and reliability data modeling of a low-cost, durable hand pump engineered to expand clean water access in rural communities in Malawi."
  },
  {
    org: "Brilliant Black Minds (Karat Program)",
    role: "Technical Fellow & Mentee",
    year: "2024 – Present",
    desc: "Selected for Karat's selective engineering program; completing rigorous mock algorithmic interviews, code reviews, and technical coaching with principal engineers."
  },
  {
    org: "AI4ALL Ignite",
    role: "Ignite Changemakers Fellow",
    year: "2024 – 2025",
    desc: "Collaborated with industry mentors to develop PyTorch computer vision classification models on medical chest radiographs, exploring AI accessibility in underserved clinics."
  },
  {
    org: "National Society of Black Engineers (NSBE)",
    role: "Active Tufts Chapter Member",
    year: "2024 – Present",
    desc: "Participating in technical workshops, collegiate hackathons, and community mentorship initiatives fostering engineering excellence across disciplines."
  }
];
