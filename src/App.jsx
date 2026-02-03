import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Printer, Info, Briefcase, GraduationCap, 
  MapPin, Mail, Phone, Award, Layers, 
  Cpu, Leaf, Zap, Globe, FileText, Download, 
  CheckCircle, Users, Beaker, BookOpen, Microscope,
  Loader2 // Imported Loader icon
} from 'lucide-react';

const App = () => {
  // FIX 1: Added Loading State
  // This prevents the "White Screen of Death" by showing an animation while assets load
  const [isLoading, setIsLoading] = useState(true);
  const [isNightMode, setIsNightMode] = useState(false);
  const [viewMode, setViewMode] = useState('interactive'); 
  const [activeSection, setActiveSection] = useState('overview');

  // FIX 2: Optimized Font Loading & Initialization
  useEffect(() => {
    // 1. Theme Detection
    const hour = new Date().getHours();
    setIsNightMode(hour < 6 || hour > 18);

    // 2. Preload Fonts Programmatically (Better than @import in body)
    // We inject the link tag into the head to start downloading ASAP
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // 3. Remove Loader after a brief delay to ensure fonts are ready
    // This gives a smoother experience than the jarring jump
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5s delay to allow layout to settle

    return () => clearTimeout(timer);
  }, []);

  const profileData = {
    name: "Ramiro Rubén Calahorrano Paccha",
    title: "Biotechnology Engineer | MS. Environmental Technology",
    contact: {
      email: "ramiro.calahorrano@gmail.com",
      secondaryEmails: "rampa86@gmail.com / pichiocp_rr@hotmail.com",
      phone: "+36 20 278 1374",
      location: "Tölgyfa út 3, Bocskaikert, HU 4241",
      id: "100230810-2"
    },
    summary: "Dedicated Biotechnology Engineer and Environmental Technology specialist with extensive experience in laboratory management, academic leadership, and sustainable consultancy. Proven expertise in ISO 17025 compliance, water/soil quality control, and innovative agricultural solutions.",
    experience: [
      {
        role: "CEO",
        org: "BIOSZOLVENTA",
        period: "2021 - Present",
        desc: "Leading strategic operations and development for environmental solutions.",
        tags: ["Leadership", "Strategy"]
      },
      {
        role: "Research Consultant",
        org: "MINCA Ventures",
        period: "2019 - 2021",
        desc: "Specialized in Sustainable Organic Urban Farming and Environmental Impact Assessments.",
        tags: ["Urban Farming", "Impact Assessment", "Sustainability"]
      },
      {
        role: "Full-time Teacher / Career Coordinator",
        org: "SENESCYT IST 17 de Julio",
        period: "2015 - 2019",
        desc: "Coordinated academic careers and managed educational methodologies.",
        tags: ["Education", "Coordination", "Curriculum"]
      },
      {
        role: "Technical Responsible / Head of Research",
        org: "CICAM EPN",
        period: "2013 - 2015",
        desc: "Managed laboratory operations ensuring ISO 17025 compliance. Oversaw 6000+ analyses.",
        tags: ["ISO 17025", "Research", "Lab Management"]
      },
      {
        role: "Laboratory Analyst",
        org: "Agrocalidad",
        period: "2010",
        desc: "Conducted soil and foliar analysis and pesticide research.",
        tags: ["Analysis", "Pesticides", "Soil Science"]
      },
      {
        role: "Intern (Chemical Analysis)",
        org: "IANCEM S.A.",
        period: "2001",
        desc: "Quality control and chemical analysis support.",
        tags: ["Quality Control", "Chemistry"]
      }
    ],
    education: [
      {
        degree: "MS in Environmental Engineering Technology",
        school: "University of Debrecen",
        period: "2017 - 2019",
        focus: "Environmental Management in Agriculture Engineering."
      },
      {
        degree: "Biotechnology Engineer",
        school: "Universidad de las Fuerzas Armadas (ESPE)",
        period: "2014",
        focus: "Specialization in Biotechnology applications."
      }
    ],
    training: {
      standards: [
        { title: "Integrated Security Systems: ISO 17025; ISO 9001; ISO 14001; ISO 45001", org: "ESPE", year: "2016 (4h)" },
        { title: "Norma ISO/IEC 17024:2012 Evaluation of Conformity", org: "SAE", year: "2016 (24h)" },
        { title: "Norma NTE INEN ISO/IEC 17025:2006", org: "SAE", year: "2014 (24h)" }
      ],
      technical: [
        { title: "Emissions Monitoring in Fixed Combustion Sources", org: "Bedón & Guerra", year: "48h" },
        { title: "Raw and Treated Water Course", org: "EPN-CICAM", year: "32h" },
        { title: "Particulate Matter Determination", org: "Raescal Business", year: "2014 (24h)" },
        { title: "Water and Soil Monitoring Techniques", org: "EPN", year: "2014 (10h)" },
        { title: "Chemical Risk and Safety Management", org: "AEPIQ-EPN", year: "2013 (12h)" },
        { title: "Introduction to Chemometrics", org: "EPN-CICAM", year: "16h" },
        { title: "Wetlands Forum of Ecuador", org: "MAE", year: "2013 (5h)" }
      ],
      academic: [
        { title: "Microcurricular Design Workshop", org: "SENESCYT", year: "20h" },
        { title: "Evidence Organization for Evaluation", org: "SENESCYT", year: "40h" },
        { title: "VI Science and Technology Congress", org: "ESPE", year: "2011 (24h)" },
        { title: "2nd Biotech Symposium", org: "USFQ", year: "2012 (16h)" }
      ],
      management: [
        { title: "Process Management", org: "EPN-CICAM", year: "24h" },
        { title: "Social and Sustainable Entrepreneurship", org: "USFQ", year: "2012 (3h)" }
      ]
    },
    inferredSkills: [
      "ISO 17025 / 9001 / 14001", "Environmental Impact Assessment", 
      "Water & Soil Analysis", "Chemometrics", "Academic Management", 
      "Sustainable Agriculture", "Emissions Monitoring", "Biotechnology"
    ]
  };

  const theme = {
    bg: isNightMode ? "bg-slate-950" : "bg-emerald-50/50",
    text: isNightMode ? "text-slate-100" : "text-emerald-950",
    secondaryText: isNightMode ? "text-slate-300" : "text-emerald-800/80",
    accent: isNightMode ? "text-teal-400" : "text-emerald-700",
    accentBg: isNightMode ? "bg-teal-500/20" : "bg-emerald-600/10",
    border: isNightMode ? "border-slate-700" : "border-emerald-200",
    card: isNightMode 
      ? "bg-slate-900 border-slate-700 shadow-2xl shadow-black/40" 
      : "bg-white/90 border-emerald-100 shadow-lg shadow-emerald-100/50",
    navActive: isNightMode ? "bg-teal-600 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)]" : "bg-emerald-800 text-white shadow-lg shadow-emerald-900/20",
    navInactive: isNightMode 
      ? "text-slate-300 bg-slate-800 hover:bg-slate-700"
      : "text-emerald-900 bg-white hover:bg-emerald-50 border border-emerald-100",
    tagStyle: isNightMode 
      ? "bg-slate-800 border-slate-600 text-teal-100" 
      : "bg-white border-emerald-200 text-emerald-900 shadow-sm"
  };

  // Section Navigation Component
  const SectionNav = () => (
    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12 no-print">
      {['overview', 'experience', 'education', 'training'].map((sec) => (
        <button
          key={sec}
          onClick={() => setActiveSection(sec)}
          className={`px-6 py-3 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
            activeSection === sec ? theme.navActive : theme.navInactive
          }`}
        >
          {sec}
        </button>
      ))}
    </div>
  );

  // FIX 3: The Loading Screen UI
  // This renders while the app is preparing, preventing the blank page
  if (isLoading) {
    return (
      <div className={`h-screen w-full flex flex-col items-center justify-center transition-colors duration-700 ${isNightMode ? "bg-slate-950 text-teal-400" : "bg-emerald-50 text-emerald-700"}`}>
        <div className="relative">
          {/* Pulsing rings */}
          <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isNightMode ? "bg-teal-500" : "bg-emerald-500"}`}></div>
          <div className={`absolute inset-[-12px] rounded-full animate-pulse opacity-10 ${isNightMode ? "bg-teal-400" : "bg-emerald-400"}`}></div>
          {/* Center Icon */}
          <Leaf size={48} className="animate-bounce" />
        </div>
        <div className="mt-8 text-xs font-bold tracking-[0.3em] uppercase opacity-70 animate-pulse">
          Bioszolventa
        </div>
        <div className="mt-2 text-[10px] tracking-widest opacity-50">
          Loading Portfolio...
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans selection:bg-teal-500/30 ${theme.bg} ${theme.text} animate-in fade-in duration-700`}>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {isNightMode ? (
          <>
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-teal-900/10 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[100px] rounded-full mix-blend-screen" />
          </>
        ) : (
          <>
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-200/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-teal-200/20 blur-[120px] rounded-full" />
          </>
        )}
      </div>

      {/* Floating Controls */}
      <nav className="fixed top-6 right-6 flex gap-3 z-50 no-print">
        <button 
          onClick={() => window.print()} 
          title="Print CV"
          className={`p-3 rounded-xl border ${theme.card} hover:scale-105 active:scale-95 transition-all`}
        >
          <Printer size={18} />
        </button>
        <button 
          onClick={() => setViewMode(viewMode === 'interactive' ? 'reading' : 'interactive')} 
          title="Toggle View Mode"
          className={`p-3 rounded-xl border ${theme.card} hover:scale-105 transition-all`}
        >
          {viewMode === 'interactive' ? <FileText size={18} /> : <Layers size={18} />}
        </button>
        <button 
          onClick={() => setIsNightMode(!isNightMode)} 
          title="Toggle Theme"
          className={`p-3 rounded-xl border ${theme.card} hover:scale-105 transition-all`}
        >
          {isNightMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-emerald-800" />}
        </button>
      </nav>

      {/* Header / Hero */}
      <header className={`relative z-10 pt-32 pb-16 px-6 max-w-6xl mx-auto transition-all duration-700`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="space-y-6 max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.border} ${isNightMode ? 'bg-slate-900 text-teal-300' : 'bg-white text-emerald-800'} text-[10px] font-bold uppercase tracking-widest`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isNightMode ? "bg-teal-400 animate-pulse" : "bg-emerald-600"}`} />
              Available for Hire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Ramiro Rubén <br/>
              <span className={`opacity-60 font-light`}>Calahorrano Paccha</span>
            </h1>
            
            <div className={`h-1 w-24 ${isNightMode ? 'bg-teal-500' : 'bg-emerald-600'} rounded-full`} />

            <p className={`text-xl md:text-2xl font-bold tracking-tight max-w-xl ${theme.accent}`}>
              {profileData.title}
            </p>

            <div className={`flex flex-wrap gap-6 text-sm font-medium ${theme.secondaryText}`}>
              <span className="flex items-center gap-2"><Mail size={16} className={theme.accent}/> {profileData.contact.email}</span>
              <span className="flex items-center gap-2"><Phone size={16} className={theme.accent}/> {profileData.contact.phone}</span>
              <span className="flex items-center gap-2"><MapPin size={16} className={theme.accent}/> Quito, Ecuador</span>
            </div>
          </div>

          <div className="hidden lg:block text-right space-y-2 opacity-80 text-xs font-mono">
            <p>ID: {profileData.contact.id}</p>
            <p>Last Updated: 2026</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        
        {viewMode === 'interactive' && <SectionNav />}

        <div className={viewMode === 'interactive' ? "grid grid-cols-1 lg:grid-cols-12 gap-12" : "max-w-4xl mx-auto space-y-24"}>
          
          {/* Left Column (Main) */}
          <div className={viewMode === 'interactive' ? "lg:col-span-8 space-y-12" : "space-y-24"}>
            
            {/* Overview Section */}
            {(activeSection === 'overview' || viewMode === 'reading') && (
              <section className={`p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-xl ${theme.card}`}>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <Info className={theme.accent} size={32} /> Professional Profile
                </h2>
                <p className="text-lg md:text-xl leading-relaxed font-light border-l-4 border-current pl-6 opacity-90">
                  {profileData.summary}
                </p>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Microscope, label: "Lab R&D" }, 
                    { icon: Leaf, label: "Sustainability" }, 
                    { icon: CheckCircle, label: "ISO Audit" }, 
                    { icon: Users, label: "Leadership" }
                  ].map((item, i) => (
                    <div key={i} className={`flex flex-col items-center justify-center gap-3 p-6 rounded-3xl border ${theme.border} ${isNightMode ? 'bg-slate-800' : 'bg-white'}`}>
                      <item.icon className={theme.accent} size={24} />
                      <span className="text-[10px] uppercase font-bold tracking-widest opacity-70 text-center">{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Experience Section */}
            {(activeSection === 'experience' || viewMode === 'reading') && (
              <section className="space-y-8">
                 <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 px-4">
                  <Briefcase className={theme.accent} size={32} /> Professional History
                </h2>
                {profileData.experience.map((exp, idx) => (
                  <div key={idx} className={`p-8 md:p-10 rounded-[2rem] border backdrop-blur-md ${theme.card} group transition-all duration-500`}>
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                      <div>
                        <h3 className={`text-2xl font-bold ${isNightMode ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                        <div className={`text-lg font-bold mt-1 ${theme.accent}`}>{exp.org}</div>
                      </div>
                      <span className={`px-4 py-2 rounded-xl text-xs font-bold font-mono border ${theme.border} ${theme.tagStyle}`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className={`text-lg mb-8 leading-relaxed ${theme.secondaryText}`}>{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide border ${theme.tagStyle}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* Education Section */}
            {(activeSection === 'education' || viewMode === 'reading') && (
              <section className="space-y-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 px-4">
                  <GraduationCap className={theme.accent} size={32} /> Education
                </h2>
                <div className="grid gap-6">
                  {profileData.education.map((edu, idx) => (
                    <div key={idx} className={`p-8 rounded-[2rem] border backdrop-blur-md ${theme.card} relative overflow-hidden`}>
                      <div className={`absolute top-0 right-0 p-8 opacity-5`}>
                         <BookOpen size={100} />
                      </div>
                      <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest block mb-4">{edu.period}</span>
                      <h3 className="text-2xl font-bold leading-tight mb-2">{edu.degree}</h3>
                      <p className={`text-lg font-medium mb-4 ${theme.accent}`}>{edu.school}</p>
                      <p className={`text-sm opacity-90 italic max-w-lg`}>{edu.focus}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

             {/* Training Section (Detailed) */}
             {(activeSection === 'training' || viewMode === 'reading') && (
              <section className="space-y-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 px-4">
                  <Award className={theme.accent} size={32} /> Training & Certifications
                </h2>
                
                <div className={`p-8 rounded-[2rem] border backdrop-blur-md ${theme.card}`}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><CheckCircle size={20} className={theme.accent}/> ISO & Standards</h3>
                  <div className="space-y-4">
                    {profileData.training.standards.map((t, i) => (
                      <div key={i} className={`pb-4 border-b ${theme.border} last:border-0 last:pb-0`}>
                        <div className="font-bold text-sm md:text-base">{t.title}</div>
                        <div className={`text-xs mt-1 ${theme.secondaryText}`}>{t.org} • {t.year}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-8 rounded-[2rem] border backdrop-blur-md ${theme.card}`}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Beaker size={20} className={theme.accent}/> Technical Specialization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {profileData.training.technical.map((t, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="font-bold text-sm">{t.title}</div>
                        <div className={`text-xs mt-1 ${theme.secondaryText}`}>{t.org} • {t.year}</div>
                      </div>
                    ))}
                  </div>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`p-8 rounded-[2rem] border backdrop-blur-md ${theme.card}`}>
                      <h3 className="text-xl font-bold mb-6">Academic</h3>
                      <div className="space-y-4">
                        {profileData.training.academic.map((t, i) => (
                          <div key={i}>
                            <div className="font-bold text-xs leading-tight">{t.title}</div>
                            <div className={`text-[10px] mt-1 opacity-80`}>{t.org}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`p-8 rounded-[2rem] border backdrop-blur-md ${theme.card}`}>
                      <h3 className="text-xl font-bold mb-6">Management</h3>
                      <div className="space-y-4">
                        {profileData.training.management.map((t, i) => (
                          <div key={i}>
                            <div className="font-bold text-xs leading-tight">{t.title}</div>
                            <div className={`text-[10px] mt-1 opacity-80`}>{t.org}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>
              </section>
            )}
          </div>

          {/* Right Column (Sidebar) */}
          <aside className={viewMode === 'interactive' ? "lg:col-span-4 space-y-8" : "w-full pt-12 grid grid-cols-1 md:grid-cols-2 gap-8"}>
            
            {/* Skills Widget */}
            <div className={`p-8 rounded-[2.5rem] border backdrop-blur-xl ${theme.card}`}>
              <h3 className="text-sm font-black uppercase tracking-widest opacity-60 mb-8">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.inferredSkills.map((skill, i) => (
                  <span key={i} className={`px-4 py-2 rounded-xl text-[11px] font-bold border ${theme.tagStyle}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Widget */}
            <div className={`p-8 rounded-[2.5rem] border backdrop-blur-xl ${theme.card}`}>
              <h3 className="text-sm font-black uppercase tracking-widest opacity-60 mb-8">Direct Contact</h3>
              <div className="space-y-4 text-sm font-medium">
                <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-4 hover:opacity-70 transition-opacity">
                  <div className={`p-2 rounded-full ${theme.accentBg}`}><Mail size={16} className={theme.accent}/></div>
                  <div className="truncate w-full">
                    <div className="text-[10px] opacity-70 uppercase">Primary Email</div>
                    <span className="block truncate">{profileData.contact.email}</span>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${theme.accentBg}`}><Layers size={16} className={theme.accent}/></div>
                  <div className="truncate w-full">
                    <div className="text-[10px] opacity-70 uppercase">Secondary Emails</div>
                    <div className="truncate text-xs">{profileData.contact.secondaryEmails.split('/')[0]}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${theme.accentBg}`}><Phone size={16} className={theme.accent}/></div>
                  <div>
                    <div className="text-[10px] opacity-70 uppercase">Phone</div>
                    {profileData.contact.phone}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="no-print">
               <button onClick={() => window.print()} className={`w-full py-6 rounded-3xl font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl ${isNightMode ? "bg-teal-600 hover:bg-teal-500 shadow-teal-900/50 text-white" : "bg-emerald-800 hover:bg-emerald-700 shadow-emerald-900/20 text-white"}`}>
                 <Download size={16} /> Save as PDF
               </button>
            </div>

          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-current border-opacity-10 py-24 px-6 mt-12 no-print">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center opacity-60">
          <Globe size={32} className="mb-6 opacity-50" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2">Ramiro Rubén Calahorrano Paccha</p>
          <p className="text-[10px]">Biotech & Environmental Engineering Portfolio • 2026</p>
        </div>
      </footer>

      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: currentColor; opacity: 0.1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { opacity: 0.3; }
        
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; font-size: 10pt; }
          .backdrop-blur-xl, .backdrop-blur-md { backdrop-filter: none !important; }
          section { break-inside: avoid; border: 1px solid #ddd !important; padding: 1.5rem !important; margin-bottom: 1.5rem !important; page-break-inside: avoid; }
          h1 { font-size: 24pt !important; color: black !important; }
          a { text-decoration: none !important; color: black !important; }
          .text-slate-100, .text-emerald-950 { color: black !important; }
        }
      `}} />
    </div>
  );
};

export default App;

