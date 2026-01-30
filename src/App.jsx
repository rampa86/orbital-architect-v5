import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Printer, Info, Briefcase, GraduationCap, 
  MapPin, Mail, Phone, Award, Layers, 
  Cpu, Leaf, Zap, Globe, FileText, ChevronRight, Download
} from 'lucide-react';

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' or 'reading'
  const [activeSection, setActiveSection] = useState('overview');

  // Automatic time-based mode switching
  useEffect(() => {
    const hour = new Date().getHours();
    setIsNightMode(hour < 6 || hour > 18);
  }, []);

  const profileData = {
    name: "Ramiro Rubén Calahorrano Paccha",
    title: "BSc. Biotechnology Engineer | MSc. Environmental Technology",
    contact: {
      email: "ramiro.calahorrano@gmail.com",
      phone: "+36 20 27 81374",
      location: "Debrecen, Hungary / Quito, Ecuador",
      linkedin: "linkedin.com/in/ruben-calahorrano"
    },
    summary: "Dedicated Biotechnology Engineer and Environmental Technology specialist with extensive experience in laboratory management, academic leadership, and sustainable consultancy. Expert in water/soil quality control and innovative agricultural solutions.",
    experience: [
      {
        role: "CEO & Founder",
        org: "BIOSZOLVENTA",
        period: "2021 - Present",
        desc: "Agricultural consultancy services, development of academic curricula, and accreditation management for educational programs.",
        skills: ["Strategy", "Curriculum Design", "Accreditation"]
      },
      {
        role: "Research Consultant",
        org: "MINCA Ventures",
        period: "2019 - 2021",
        desc: "Sustainable organic urban farming projects and environmental impact assessments.",
        skills: ["Sustainability", "Environmental Impact", "Urban Farming"]
      },
      {
        role: "Full Time Teacher / Career Coordinator",
        org: "IST 17 de Julio - Yachay",
        period: "2015 - 2017",
        desc: "Coordinated Biotechnology and Chemical Technology career redesigns. Managed academic planning and dual-training activities.",
        skills: ["Academic Leadership", "Research", "Cooperation"]
      },
      {
        role: "Laboratory Technical Responsible",
        org: "CICAM - EPN",
        period: "2013 - 2015",
        desc: "Directed environmental research center operations. Performed over 6000+ chemical analyses under ISO 17025 standards.",
        skills: ["ISO 17025", "Spectrophotometry", "Quality Control"]
      }
    ],
    education: [
      {
        degree: "MSc. Environmental Engineering Technology",
        school: "University of Debrecen",
        period: "2017 - 2019",
        focus: "Environmental Management in Agriculture"
      },
      {
        degree: "BSc. Biotechnology Engineering",
        school: "Universidad de las Fuerzas Armadas (ESPE)",
        period: "2004 - 2014",
        focus: "Water quality control and implementation of dissolved organic carbon methods."
      }
    ],
    skills: {
      technical: ["Spectrophotometry (HACH)", "IR Non-dispersive (TOC/IC/TC)", "ISO 17025 Auditing", "Bio-remediation", "Waste Management"],
      software: ["SPSS", "R Commander", "HYSYS Refinery", "VISIMIX", "MS Office Suite"],
      languages: ["Spanish (Native)", "English (Advanced)", "Hungarian (Basic)"]
    },
    achievements: [
      "100% Performance Evaluation success at CICAM & IST 17 de Julio",
      "Lead Auditor for ISO/IEC 17025 Quality Systems",
      "Published Researcher in Chemometrics and Environmental Monitoring"
    ]
  };

  // Enhanced Theme Configuration
  // Day: Clinic Emerald (Professional Lab look)
  // Night: Cosmic Indigo (Engaging Multispectral look)
  const theme = {
    bg: isNightMode ? "bg-zinc-950" : "bg-stone-50",
    text: isNightMode ? "text-indigo-100" : "text-emerald-950",
    accent: isNightMode ? "text-indigo-400" : "text-emerald-800",
    accentBg: isNightMode ? "bg-indigo-600" : "bg-emerald-800",
    card: isNightMode 
      ? "bg-zinc-900/60 border-indigo-500/20 shadow-2xl shadow-indigo-500/5" 
      : "bg-white border-emerald-100 shadow-sm",
    hover: isNightMode ? "hover:text-indigo-300" : "hover:text-emerald-600",
    glow: isNightMode ? "shadow-[0_0_30px_rgba(99,102,241,0.1)]" : "shadow-sm",
    navActive: isNightMode ? "bg-indigo-500 text-white" : "bg-emerald-800 text-white",
    navInactive: isNightMode 
      ? "bg-zinc-900 text-indigo-400/60 hover:text-indigo-300 hover:bg-zinc-800" 
      : "bg-white text-emerald-900/60 hover:bg-emerald-50 hover:text-emerald-800"
  };

  const SectionNav = () => (
    <div className="flex flex-wrap gap-2 mb-10 no-print">
      {['overview', 'experience', 'education', 'skills', 'achievements'].map((sec) => (
        <button
          key={sec}
          onClick={() => setActiveSection(sec)}
          className={`px-6 py-3 rounded-2xl text-xs font-black tracking-[0.1em] uppercase transition-all duration-300 ${
            activeSection === sec ? theme.navActive : theme.navInactive
          }`}
        >
          {sec}
        </button>
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-1000 font-sans selection:bg-indigo-500/30 ${theme.bg} ${theme.text}`}>
      
      {/* Dynamic Background Elements */}
      {isNightMode ? (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full" />
          {/* Subtle Star Particles */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-40" />
        </div>
      ) : (
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
           <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-50 to-transparent" />
        </div>
      )}

      {/* Floating Navigation UI */}
      <nav className="fixed top-8 right-8 flex gap-4 z-40 no-print">
        <button 
          onClick={() => window.print()}
          className={`group p-4 rounded-2xl border backdrop-blur-md transition-all ${theme.card} hover:scale-105 active:scale-95`}
          title="Print Optimized View"
        >
          <Printer size={20} className="group-hover:rotate-12 transition-transform" />
        </button>
        <button 
          onClick={() => setViewMode(viewMode === 'interactive' ? 'reading' : 'interactive')}
          className={`group p-4 rounded-2xl border backdrop-blur-md transition-all ${theme.card} hover:scale-105 active:scale-95`}
          title="Toggle Deep-Dive / Reading View"
        >
          {viewMode === 'interactive' ? <FileText size={20} /> : <Layers size={20} />}
        </button>
        <button 
          onClick={() => setIsNightMode(!isNightMode)}
          className={`group p-4 rounded-2xl border backdrop-blur-md transition-all ${theme.card} hover:scale-110 active:scale-95`}
          title="Switch Theme"
        >
          {isNightMode ? <Sun size={20} className="text-amber-300" /> : <Moon size={20} className="text-indigo-600" />}
        </button>
      </nav>

      {/* Hero Header Section */}
      <header className={`relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${viewMode === 'reading' ? 'border-b border-current opacity-20 mb-20' : ''}`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="space-y-6 max-w-2xl">
            {isNightMode && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Deep Space Lidar Analysis Active
              </div>
            )}
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
              {profileData.name.split(' ').slice(0, 2).join(' ')}
              <span className="block font-light opacity-50 text-4xl md:text-6xl mt-2">
                {profileData.name.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className={`text-2xl md:text-3xl font-bold tracking-tight ${theme.accent}`}>
              {profileData.title}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-sm font-bold tracking-tight">
            {[
              { icon: Mail, label: profileData.contact.email, href: `mailto:${profileData.contact.email}` },
              { icon: Phone, label: profileData.contact.phone },
              { icon: MapPin, label: profileData.contact.location },
              { icon: Globe, label: "LinkedIn Profile", href: "https://linkedin.com/in/ruben-calahorrano" }
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.href || "#"} 
                className="flex items-center gap-4 group cursor-default"
                onClick={!item.href ? (e) => e.preventDefault() : undefined}
              >
                <item.icon size={20} className={`${theme.accent} group-hover:scale-110 transition-transform`} />
                <span className={`${item.href ? 'hover:underline underline-offset-8 transition-all' : ''}`}>
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Content Canvas */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-40">
        {viewMode === 'interactive' && <SectionNav />}

        <div className={viewMode === 'interactive' ? "grid grid-cols-1 lg:grid-cols-12 gap-16" : "max-w-4xl mx-auto space-y-24"}>
          
          <div className={viewMode === 'interactive' ? "lg:col-span-8 space-y-12" : "space-y-20"}>
            
            {(activeSection === 'overview' || viewMode === 'reading') && (
              <section className={`p-12 rounded-[3rem] border backdrop-blur-xl ${theme.card} ${theme.glow}`}>
                <h2 className="text-4xl font-black mb-10 flex items-center gap-5">
                  <Info className={theme.accent} size={36} strokeWidth={2.5} /> 
                  Expertise Profile
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed opacity-90 font-light italic border-l-4 border-indigo-500/20 pl-8">
                  "{profileData.summary}"
                </p>
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
                  {[
                    { icon: Leaf, label: "Biotechnology" },
                    { icon: Globe, label: "Environment" },
                    { icon: Cpu, label: "Lab Science" },
                    { icon: Zap, label: "Sustainability" }
                  ].map((item, i) => (
                    <div key={i} className={`text-center p-8 rounded-[2rem] transition-all duration-500 ${isNightMode ? 'bg-indigo-500/5 border-indigo-500/10' : 'bg-emerald-500/5 border-emerald-500/10'} border hover:scale-105`}>
                      <item.icon className={`mx-auto mb-4 ${theme.accent}`} size={32} />
                      <span className="text-[10px] uppercase font-black tracking-[0.2em] opacity-40">{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {(activeSection === 'experience' || viewMode === 'reading') && (
              <section className="space-y-10">
                <h2 className="text-4xl font-black mb-12 flex items-center gap-5">
                  <Briefcase className={theme.accent} size={36} strokeWidth={2.5} /> 
                  Professional Timeline
                </h2>
                {profileData.experience.map((exp, idx) => (
                  <div key={idx} className={`p-12 rounded-[3rem] border backdrop-blur-xl ${theme.card} group transition-all duration-700 hover:shadow-2xl`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
                      <div className="space-y-2">
                        <h3 className="text-3xl font-black tracking-tight">{exp.role}</h3>
                        <p className={`text-xl font-bold ${theme.accent}`}>{exp.org}</p>
                      </div>
                      <span className="px-5 py-2 rounded-2xl bg-current bg-opacity-5 font-mono text-sm mt-4 sm:mt-0 opacity-60">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg opacity-80 mb-10 leading-relaxed font-medium">{exp.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map(skill => (
                        <span key={skill} className={`text-xs font-black px-5 py-2 rounded-xl transition-all ${isNightMode ? 'bg-indigo-500/10 text-indigo-300' : 'bg-emerald-500/10 text-emerald-800'} border border-current border-opacity-10 group-hover:scale-105`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}

            {(activeSection === 'education' || viewMode === 'reading') && (
              <section className="space-y-10">
                <h2 className="text-4xl font-black mb-12 flex items-center gap-5">
                  <GraduationCap className={theme.accent} size={36} strokeWidth={2.5} /> 
                  Credentials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {profileData.education.map((edu, idx) => (
                    <div key={idx} className={`p-10 rounded-[2.5rem] border backdrop-blur-xl ${theme.card} relative overflow-hidden group`}>
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-all duration-700 transform group-hover:rotate-12 group-hover:scale-125">
                        <GraduationCap size={80} />
                      </div>
                      <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em]">{edu.period}</span>
                      <h3 className="text-2xl font-black mt-4 mb-3 leading-[1.1]">{edu.degree}</h3>
                      <p className="text-lg font-bold opacity-70 mb-6">{edu.school}</p>
                      <div className="text-sm opacity-60 font-medium italic border-l-2 border-current border-opacity-20 pl-6 py-2">
                        {edu.focus}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className={viewMode === 'interactive' ? "lg:col-span-4 space-y-12" : "w-full pt-20 space-y-20"}>
            
            {(activeSection === 'skills' || viewMode === 'reading') && (
              <section className={`p-12 rounded-[3rem] border backdrop-blur-xl ${theme.card}`}>
                <h2 className="text-3xl font-black mb-10">Technical Toolkit</h2>
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30 mb-6">Scientific Methodology</h4>
                    <ul className="space-y-5">
                      {profileData.skills.technical.map(s => (
                        <li key={s} className="flex items-center gap-5 text-md font-bold group">
                          <div className={`h-2 w-2 rounded-full ${theme.accentBg} group-hover:scale-150 transition-transform shadow-lg`} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30 mb-6">Software Architecture</h4>
                    <div className="flex flex-wrap gap-3">
                      {profileData.skills.software.map(s => (
                        <span key={s} className={`px-5 py-2.5 rounded-2xl text-xs font-black tracking-tight ${isNightMode ? 'bg-zinc-800 text-indigo-100' : 'bg-emerald-900 text-white shadow-xl shadow-emerald-900/10'}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {(activeSection === 'achievements' || viewMode === 'reading') && (
              <section className={`p-12 rounded-[3rem] border backdrop-blur-xl ${theme.card}`}>
                <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
                  <Award className={theme.accent} size={32} /> 
                  Career Impact
                </h2>
                <ul className="space-y-8">
                  {profileData.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-6 group">
                      <div className={`mt-2 h-4 w-4 rounded-full flex-shrink-0 border-2 border-current border-opacity-20 ${isNightMode ? "bg-indigo-400" : "bg-emerald-700"} group-hover:scale-125 transition-transform`} />
                      <span className="text-lg font-bold leading-snug opacity-90">{ach}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Engaging Night Mode Visualization */}
            {isNightMode && viewMode === 'interactive' && (
              <section className={`p-10 rounded-[3rem] border ${theme.card} overflow-hidden relative group`}>
                <div className="text-[9px] font-mono mb-8 flex justify-between items-center opacity-40 font-bold">
                   <span>MULTISPECTRAL_VIEWER</span>
                   <span className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                     SYNCHRONIZING
                   </span>
                </div>
                <div className="h-40 flex items-end gap-2 px-2">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-t from-indigo-600 via-indigo-400 to-purple-400 w-full rounded-t-lg transition-all duration-1000 ease-in-out group-hover:opacity-100"
                      style={{ 
                        height: `${30 + Math.random() * 70}%`,
                        opacity: 0.3 + (Math.random() * 0.4),
                        animation: `pulse-bar ${2 + Math.random() * 2}s infinite alternate`
                      }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
              </section>
            )}

            <div className="pt-12 no-print">
               <button 
                 onClick={() => window.print()}
                 className={`w-full py-6 rounded-[2rem] font-black tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-5 transition-all transform hover:-translate-y-2 active:scale-95 shadow-2xl ${
                   isNightMode 
                    ? "bg-indigo-500 text-white shadow-indigo-500/20 hover:bg-indigo-400" 
                    : "bg-emerald-900 text-white shadow-emerald-900/30 hover:bg-emerald-800"
                 }`}
               >
                 <Download size={22} strokeWidth={3} /> Get Full Dossier
               </button>
            </div>
          </aside>

        </div>
      </main>

      {/* Footer System */}
      <footer className="relative z-10 border-t border-current border-opacity-5 py-24 px-6 no-print">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 text-[10px] font-black tracking-[0.3em] uppercase">
          <p>© 2026 RAMIRO CALAHORRANO • STRATEGIC BIOTECHNOLOGY</p>
          <div className="flex gap-12">
             <span>Debrecen</span>
             <span className="opacity-40">/</span>
             <span>Quito</span>
          </div>
        </div>
      </footer>

      {/* Advanced Stylings */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        
        body { 
          font-family: 'Plus Jakarta Sans', sans-serif; 
          overflow-x: hidden;
        }

        @keyframes pulse-bar {
          from { transform: scaleY(0.9); opacity: 0.4; }
          to { transform: scaleY(1.1); opacity: 0.8; }
        }

        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; font-size: 11pt; }
          .bg-zinc-950, .bg-stone-50 { background: white !important; }
          .text-indigo-100, .text-emerald-950 { color: black !important; }
          header { padding-top: 0 !important; border-bottom: 2px solid #065f46 !important; margin-bottom: 2rem !important; }
          section { break-inside: avoid; border: 1px solid #e2e8f0 !important; margin-bottom: 2rem !important; border-radius: 1rem !important; }
          h1 { font-size: 32pt !important; }
        }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { 
          background: ${isNightMode ? '#6366f133' : '#065f4655'}; 
          border-radius: 20px; 
          border: 2px solid transparent;
          background-clip: content-box;
        }
      `}} />
    </div>
  );
};

export default App;