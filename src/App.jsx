import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Sun, 
  Flame, 
  MapPin, 
  Mail, 
  Linkedin, 
  Award, 
  ShieldCheck, 
  Zap, 
  Beaker, 
  Cpu, 
  Globe,
  Binary,
  Layers,
  Activity
} from 'lucide-react';

// --- 2D Generative Visual Engine ---
const BiosphereCanvas = ({ isNightMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      if (!isNightMode) {
        // DAY MODE: Elevation Forest Satellite Profiling (Topographic Lines)
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 0.5;
        const spacing = 40;
        const rows = Math.ceil(canvas.height / spacing) + 4;
        const cols = Math.ceil(canvas.width / spacing) + 4;

        for (let i = 0; i < rows; i++) {
          ctx.beginPath();
          for (let j = 0; j < cols; j++) {
            const x = j * spacing;
            const y = i * spacing;
            
            // Generate pseudo-elevation using sine waves
            const elevation = Math.sin(x * 0.002 + time) * Math.cos(y * 0.002 + time) * 30;
            const distToCenter = Math.sqrt((x - centerX)**2 + (y - centerY)**2);
            const focus = Math.max(0, 1 - distToCenter / (canvas.width * 0.6));
            
            if (j === 0) ctx.moveTo(x, y + elevation * focus);
            else ctx.lineTo(x, y + elevation * focus);
          }
          ctx.globalAlpha = 0.15;
          ctx.stroke();
        }
      } else {
        // NIGHT MODE: Thermal Globe Scale (Radial Infrared Energy)
        const rings = 8;
        for (let i = 0; i < rings; i++) {
          const radius = (i * 100 + (time * 50) % 100);
          const alpha = Math.max(0, 1 - radius / 600);
          
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.strokeStyle = '#FF4500';
          ctx.lineWidth = 2;
          ctx.globalAlpha = alpha * 0.2;
          ctx.stroke();

          // Energy "Particles" on the rings
          const particleCount = 12;
          for (let p = 0; p < particleCount; p++) {
            const angle = (p / particleCount) * Math.PI * 2 + (time * (i % 2 === 0 ? 1 : -1));
            const px = centerX + Math.cos(angle) * radius;
            const py = centerY + Math.sin(angle) * radius;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#FF8800';
            ctx.globalAlpha = alpha;
            ctx.fill();
          }
        }
        
        // Grid overlay for "Lidar" feel
        ctx.strokeStyle = '#FF4500';
        ctx.lineWidth = 0.2;
        ctx.globalAlpha = 0.05;
        for(let x = 0; x < canvas.width; x += 50) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }
        for(let y = 0; y < canvas.height; y += 50) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [isNightMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />;
};

export default function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const theme = {
    bg: isNightMode ? 'bg-[#050505]' : 'bg-[#F9FAFB]',
    card: isNightMode ? 'bg-black/60 border-[#1F2937] text-[#9CA3AF]' : 'bg-white/60 border-[#E5E7EB] text-[#022C22]',
    accent: isNightMode ? 'text-[#FF4500]' : 'text-[#10B981]',
    accentBg: isNightMode ? 'bg-[#FF4500]' : 'bg-[#10B981]',
    title: isNightMode ? 'text-white' : 'text-[#022C22]',
    border: isNightMode ? 'border-[#FF4500]/20' : 'border-[#10B981]/20',
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${theme.bg} selection:bg-emerald-500/30 overflow-x-hidden`}>
      <BiosphereCanvas isNightMode={isNightMode} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${theme.accentBg} rounded flex items-center justify-center font-black text-white`}>R</div>
            <span className={`text-xs font-bold tracking-[0.3em] uppercase ${theme.title}`}>Biosphere Interface v6</span>
          </div>
          
          <button 
            onClick={() => setIsNightMode(!isNightMode)}
            className={`px-4 py-2 rounded-full border flex items-center gap-3 transition-all hover:scale-105 active:scale-95 ${theme.card}`}
          >
            {isNightMode ? <Flame size={14} className="text-[#FF4500]" /> : <Sun size={14} className="text-[#10B981]" />}
            <span className="text-[10px] font-black tracking-widest">{isNightMode ? 'THERMAL ON' : 'BIOLOGY ON'}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.border} mb-6`}>
             <Activity size={12} className={theme.accent} />
             <span className={`text-[10px] font-bold tracking-widest ${theme.accent}`}>SYSTEMS OPERATIONAL</span>
          </div>
          <h1 className={`text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-[0.85] ${theme.title}`}>
            RAMIRO <br /> 
            <span className={theme.accent}>RUBÉN</span>
          </h1>
          <p className={`text-lg md:text-xl font-medium max-w-xl ${isNightMode ? 'text-gray-400' : 'text-gray-600'}`}>
            MSc Agricultural Environmental Management Engineer. 
            Synthesizing Biotechnology & Sustainable Systems through 
            <span className={theme.accent}> {isNightMode ? 'Thermal Energy Mapping' : 'Satellite Bio-Profiling'}</span>.
          </p>
        </div>
      </header>

      {/* Bento Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* CEO Executive Card */}
        <div className={`md:col-span-3 md:row-span-2 p-10 rounded-[2rem] border backdrop-blur-xl transition-all hover:border-current ${theme.card} group`}>
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <span className={`text-xs font-black tracking-widest uppercase py-1 px-3 rounded-md ${theme.accentBg} text-white`}>Active Leadership</span>
                <Cpu size={32} className={`${theme.accent} opacity-40 group-hover:opacity-100 transition-opacity`} />
              </div>
              <h2 className={`text-4xl md:text-5xl font-black mb-4 ${theme.title}`}>CEO @ BIOSZOLVENTA</h2>
              <p className="text-lg leading-relaxed max-w-2xl">
                Strategic leadership in Biotechnology and Environmental Engineering. 
                Implementing sustainable systems across Hungary and Ecuador, 
                focusing on resource allocation and long-term ecological scalability.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {['Executive Leadership', 'Strategic Planning', 'Agro-Food Systems', 'Global Logistics'].map(tag => (
                <div key={tag} className={`text-[10px] font-bold tracking-widest uppercase border p-2 rounded-lg ${theme.border}`}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Credentials / ISO Card */}
        <div className={`p-8 rounded-[2rem] border backdrop-blur-xl ${theme.card}`}>
          <ShieldCheck className={`mb-4 ${theme.accent}`} />
          <h3 className={`text-sm font-black tracking-widest uppercase mb-4 ${theme.title}`}>Compliance</h3>
          <ul className="space-y-2 text-xs font-bold">
            <li className="flex justify-between"><span>ISO 17025</span> <span className={theme.accent}>LABS</span></li>
            <li className="flex justify-between"><span>ISO 17024</span> <span className={theme.accent}>PERSONNEL</span></li>
            <li className="flex justify-between opacity-50"><span>ISO 9001</span> <span>SGC</span></li>
            <li className="flex justify-between opacity-50"><span>ISO 14001</span> <span>ENV</span></li>
          </ul>
        </div>

        {/* Education Highlight */}
        <div className={`p-8 rounded-[2rem] border backdrop-blur-xl ${theme.card}`}>
          <Award className={`mb-4 ${theme.accent}`} />
          <h3 className={`text-sm font-black tracking-widest uppercase mb-4 ${theme.title}`}>Academic</h3>
          <div className="space-y-4">
            <div>
              <p className={`text-[10px] font-black ${theme.accent}`}>MSC • DEBRECEN</p>
              <p className="text-xs font-bold leading-tight">Agri-Environmental Eng.</p>
            </div>
            <div>
              <p className={`text-[10px] font-black ${theme.accent}`}>BSC • ESPE</p>
              <p className="text-xs font-bold leading-tight">Biotechnology Engineer</p>
            </div>
          </div>
        </div>

        {/* Digital Stack */}
        <div className={`md:col-span-2 p-8 rounded-[2rem] border backdrop-blur-xl flex flex-col justify-between ${theme.card}`}>
          <div className="flex items-center gap-4 mb-6">
            <Binary className={theme.accent} size={20} />
            <h3 className={`text-xs font-black tracking-widest uppercase ${theme.title}`}>Digital Architecture</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-tighter block mb-2 opacity-50">Core Logic</span>
              <p className="text-sm font-bold">Python, R-Studio, SPSS, HYSYS</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-tighter block mb-2 opacity-50">Interfaces</span>
              <p className="text-sm font-bold">React, Tailwind, Node.js, GIS</p>
            </div>
          </div>
        </div>

        {/* Global Impact / Locations */}
        <div className={`md:col-span-1 p-8 rounded-[2rem] border backdrop-blur-xl ${theme.card}`}>
          <Globe className={`mb-4 ${theme.accent}`} />
          <h3 className={`text-xs font-black tracking-widest uppercase mb-2 ${theme.title}`}>Nodes</h3>
          <p className="text-xs font-bold opacity-70 mb-4">Global operational presence across three key regions.</p>
          <div className="flex flex-col gap-2">
            {['Ecuador', 'Hungary', 'United Kingdom'].map(loc => (
              <div key={loc} className="flex items-center gap-2">
                <div className={`w-1 h-1 rounded-full ${theme.accentBg}`} />
                <span className="text-[10px] font-black">{loc.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Mastery / Counter */}
        <div className={`md:col-span-1 p-8 rounded-[2rem] border backdrop-blur-xl flex flex-col items-center justify-center text-center ${theme.card}`}>
          <span className={`text-4xl font-black ${theme.accent}`}>6000+</span>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase mt-2">Laboratory Analyses</span>
          <div className={`w-full h-1 mt-4 rounded-full bg-current opacity-10`} />
          <span className="text-[9px] font-bold opacity-50 mt-2 italic">100% Excellence Rating (EPN)</span>
        </div>

        {/* Creative Core */}
        <div className={`md:col-span-2 p-8 rounded-[2rem] border backdrop-blur-xl flex justify-between ${theme.card}`}>
           <div className="max-w-[60%]">
              <Layers className={`mb-4 ${theme.accent}`} />
              <h3 className={`text-xs font-black tracking-widest uppercase mb-2 ${theme.title}`}>The Human Layer</h3>
              <p className="text-xs leading-relaxed opacity-70">Synthesizing science with Oil Painting, Sculpture, and High-Altitude Mountaineering.</p>
           </div>
           <div className="flex flex-col justify-end">
              <span className={`text-[10px] font-black border ${theme.border} px-2 py-1 rounded`}>ART + BIO</span>
           </div>
        </div>

        {/* Contact Strip */}
        <div className={`md:col-span-2 p-8 rounded-[2rem] border backdrop-blur-xl flex items-center justify-around ${theme.card}`}>
           <a href="mailto:ramiro.calahorrano@gmail.com" className="hover:scale-110 transition-transform"><Mail className={theme.accent} /></a>
           <a href="#" className="hover:scale-110 transition-transform"><Linkedin className={theme.accent} /></a>
           <a href="#" className="hover:scale-110 transition-transform"><MapPin className={theme.accent} /></a>
        </div>

      </main>

      {/* Footer System Status */}
      <footer className={`p-10 border-t ${isNightMode ? 'border-white/5' : 'border-black/5'} opacity-40`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-black tracking-[0.4em] uppercase">R. CALAHORRANO PACCHA // BIOSPHERE IDENTITY</p>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${theme.accentBg}`} />
                <span className="text-[9px] font-bold">CORE_OPERATIONAL</span>
             </div>
             <span className="text-[9px] font-bold italic underline">v6.0_STABLE_RELEASE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
