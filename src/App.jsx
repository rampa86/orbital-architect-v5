import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Globe, Activity, Layers, Terminal, ExternalLink, Cpu, Database, Wind } from 'lucide-react';

// --- VISUAL CONSTANTS ---
const COLORS = {
  bg: '#050505',      // Midnight Obsidian
  card: '#0a0a0a',    // Slightly lighter for depth
  border: '#1F2937',  // Carbon Grid
  textMain: '#F3F4F6',
  textMuted: '#9CA3AF',
  accent: '#FF4500',  // Spectral Magma
  accentGlow: 'rgba(255, 69, 0, 0.4)',
  sensor: '#374151',  // Sensor Grey
};

// --- MOCK DATA (Based on biotech_cv schema) ---
const PROFILE = {
  name: "Dr. Alex S.",
  title: "Environmental Engineer & Data Scientist",
  bio: "Fusing orbital remote sensing with ground-truth environmental engineering. Building planetary observation interfaces for the next generation of eco-stewardship.",
  coords: "51.5074° N, 0.1278° W",
  status: "ORBITAL_SCAN_ACTIVE"
};

const SKILLS = [
  { name: "Lidar Processing", level: 95, category: "Remote Sensing" },
  { name: "React / Three.js", level: 88, category: "Dev" },
  { name: "Python / GDAL", level: 92, category: "Data" },
  { name: "NDVI Analysis", level: 85, category: "Agri" },
];

const EXPERIENCE = [
  {
    role: "Senior Geospatial Analyst",
    company: "TerraScope Labs",
    period: "2023 - Present",
    desc: "Leading thermal mapping initiatives using satellite telemetry.",
    stack: ["Python", "QGIS", "AWS"]
  },
  {
    role: "Full Stack Engineer",
    company: "EcoGrid Systems",
    period: "2021 - 2023",
    desc: "Developed the core frontend for a precision agriculture dashboard.",
    stack: ["React", "Node.js", "PostGIS"]
  }
];

// --- COMPONENTS ---

// 1. LIDAR HERO COMPONENT (Canvas Simulation)
const LidarHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let rotation = 0;

    // Set canvas size
    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Generate Point Cloud (Sphere representation)
    const points = [];
    const numPoints = 600;
    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.sqrt(numPoints * Math.PI) * phi_golden(i);
      const r = 120; // Radius
      points.push({
        x: r * Math.sin(theta) * Math.cos(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(theta),
        baseColor: COLORS.sensor,
        activeColor: COLORS.accent,
        heat: 0
      });
    }

    function phi_golden(k) {
      return Math.PI * (3 - Math.sqrt(5)) * k;
    }

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left - canvas.width / 2;
      mouseY = e.clientY - rect.top - canvas.height / 2;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const render = () => {
      ctx.fillStyle = COLORS.card;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      rotation += 0.002;

      points.forEach(p => {
        // Rotate around Y
        let x = p.x * Math.cos(rotation) - p.z * Math.sin(rotation);
        let z = p.x * Math.sin(rotation) + p.z * Math.cos(rotation);
        let y = p.y;

        // 3D Projection
        const scale = 300 / (300 + z);
        const x2d = x * scale + cx;
        const y2d = y * scale + cy;
        const size = Math.max(1, 2 * scale);

        // Heat calculation based on mouse proximity (2D plane)
        const dx = x2d - (mouseX + cx);
        const dy = y2d - (mouseY + cy);
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Decay heat slowly, add heat quickly
        if (dist < 50) {
          p.heat = Math.min(p.heat + 0.1, 1);
        } else {
          p.heat = Math.max(p.heat - 0.02, 0);
        }

        // Draw
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        
        // Color interpolation
        if (p.heat > 0.1) {
           ctx.fillStyle = `rgba(255, 69, 0, ${0.5 + p.heat * 0.5})`; // Spectral Magma
           // Add a slight glow for hot points
           ctx.shadowBlur = 5;
           ctx.shadowColor = COLORS.accent;
        } else {
           ctx.fillStyle = `rgba(55, 65, 81, ${0.4 + (z/200)})`; // Depth-based grey
           ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full cursor-crosshair rounded-2xl" />;
};

// 2. DATA CARD
const BentoCard = ({ title, children, className = "", icon: Icon }) => (
  <div className={`relative bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-orange-900/50 transition-colors duration-500 group ${className}`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-gray-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
        {Icon && <Icon size={14} className="text-orange-500" />}
        {title}
      </h3>
      <div className="w-1 h-1 bg-gray-800 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></div>
    </div>
    <div className="relative z-10">
      {children}
    </div>
    {/* Grid Background Effect */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(31,41,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(31,41,55,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
  </div>
);

// 3. SKILL BAR
const SkillBar = ({ name, level }) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs font-mono mb-1">
      <span className="text-gray-300">{name}</span>
      <span className="text-orange-500">{level}%</span>
    </div>
    <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-orange-900 to-orange-500" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-orange-500/30">
      
      {/* HEADER / HUD */}
      <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-sm tracking-widest text-gray-400">ORBITAL_ARCHITECT_V5</span>
          </div>
          <div className="font-mono text-xs text-orange-500/80 flex items-center gap-4">
             <span className="hidden md:inline">SYS.STATUS: NOMINAL</span>
             <span className="border px-2 py-0.5 border-orange-900 rounded bg-orange-950/20">LIVE</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT GRID */}
      <main className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        
        {/* HERO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 h-auto md:h-[500px]">
          
          {/* TILE 1: PROFILE (Left Column) */}
          <BentoCard title="Operator Identity" icon={Terminal} className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border border-gray-700 mb-6 flex items-center justify-center">
                 <span className="font-mono text-xl text-orange-500">AS</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">{PROFILE.name}</h1>
              <p className="text-orange-500 font-mono text-xs mb-4">{PROFILE.title}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {PROFILE.bio}
              </p>
            </div>
            <div className="border-t border-gray-800 pt-4 mt-auto">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <MapPin size={12} />
                {PROFILE.coords}
              </div>
            </div>
          </BentoCard>

          {/* TILE 2: LIDAR VISUALIZER (Main Hero) */}
          <BentoCard title="Spectral Scanner // Lidar View" icon={Globe} className="md:col-span-8 relative p-0 overflow-hidden">
            <div className="absolute top-4 left-6 z-20 pointer-events-none">
              <div className="text-[10px] font-mono text-orange-500 bg-black/50 px-2 py-1 rounded border border-orange-900/30">
                INTERACTION: HOVER TO SCAN
              </div>
            </div>
            {/* The Canvas Component */}
            <div className="w-full h-full min-h-[300px]">
              <LidarHero />
            </div>
             {/* Overlay UI elements for the 'Scanner' look */}
            <div className="absolute bottom-6 right-6 z-20 font-mono text-[10px] text-gray-600 text-right pointer-events-none">
              <p>DATA_STREAM: CONNECTED</p>
              <p>RENDER: POINTS_CLOUD</p>
              <p>FPS: 60</p>
            </div>
          </BentoCard>
        </div>

        {/* SECONDARY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto">
          
          {/* TILE 3: TECH STACK / SKILLS */}
          <BentoCard title="System Capabilities" icon={Cpu} className="md:col-span-4">
             <div className="space-y-4 mt-2">
                {SKILLS.map((skill, i) => (
                  <SkillBar key={i} {...skill} />
                ))}
             </div>
             <div className="mt-6 flex flex-wrap gap-2">
                {['MySQL', 'PHP Bridge', 'GLSL', 'Vite'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono border border-gray-800 px-2 py-1 rounded text-gray-500">
                    {tag}
                  </span>
                ))}
             </div>
          </BentoCard>

          {/* TILE 4: EXPERIENCE TIMELINE */}
          <BentoCard title="Mission Log" icon={Activity} className="md:col-span-5">
            <div className="space-y-6 mt-2">
              {EXPERIENCE.map((job, i) => (
                <div key={i} className="relative pl-4 border-l border-gray-800 hover:border-orange-900 transition-colors">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-900 border border-gray-700"></div>
                  <h4 className="text-sm font-bold text-gray-200">{job.role}</h4>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-orange-400">{job.company}</span>
                    <span className="text-[10px] font-mono text-gray-600">{job.period}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {job.desc}
                  </p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* TILE 5: STATS / EXTRA */}
          <BentoCard title="Network" icon={Database} className="md:col-span-3 flex flex-col justify-center">
             <div className="grid grid-cols-1 gap-3">
                <button className="flex items-center justify-between p-3 rounded bg-gray-900/50 hover:bg-gray-800 transition-all border border-transparent hover:border-gray-700 group">
                   <span className="text-xs font-mono text-gray-400">GITHUB_REPO</span>
                   <ExternalLink size={14} className="text-gray-600 group-hover:text-white" />
                </button>
                <button className="flex items-center justify-between p-3 rounded bg-gray-900/50 hover:bg-gray-800 transition-all border border-transparent hover:border-gray-700 group">
                   <span className="text-xs font-mono text-gray-400">LINKEDIN_SIGNAL</span>
                   <ExternalLink size={14} className="text-gray-600 group-hover:text-white" />
                </button>
                <button className="flex items-center justify-between p-3 rounded bg-gray-900/50 hover:bg-gray-800 transition-all border border-transparent hover:border-gray-700 group">
                   <span className="text-xs font-mono text-gray-400">ENCRYPTED_MAIL</span>
                   <ExternalLink size={14} className="text-gray-600 group-hover:text-white" />
                </button>
             </div>
             <div className="mt-auto pt-6 text-center">
                <p className="text-[10px] text-gray-700 font-mono">
                  SECURE CONNECTION ESTABLISHED
                </p>
             </div>
          </BentoCard>
        </div>
      </main>
    </div>
  );
}