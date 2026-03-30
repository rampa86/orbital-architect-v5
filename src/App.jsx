import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  FileText, 
  Users, 
  Calendar, 
  DollarSign, 
  ArrowRight,
  Menu,
  X,
  BookOpen,
  Award
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para el navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const NavLink = ({ to, children }) => (
    <button 
      onClick={() => scrollToSection(to)}
      className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200"
    >
      {children}
    </button>
  );

  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-emerald-900">
            <Leaf className="text-emerald-500" />
            <span>TuBionegocio</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLink to="resumen">Propuesta</NavLink>
            <NavLink to="diferenciadores">Innovación</NavLink>
            <NavLink to="normativa">Normativa</NavLink>
            <NavLink to="cronograma">100 Días</NavLink>
            <NavLink to="presupuesto">Inversión</NavLink>
            <button onClick={() => scrollToSection('contacto')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-emerald-200">
              Contactar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-emerald-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t">
            <NavLink to="resumen">Propuesta</NavLink>
            <NavLink to="diferenciadores">Innovación</NavLink>
            <NavLink to="normativa">Normativa</NavLink>
            <NavLink to="cronograma">Cronograma</NavLink>
            <button onClick={() => scrollToSection('contacto')} className="bg-emerald-600 text-white px-4 py-2 rounded w-full">Contactar</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Paisaje Andino Ecuador" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Fundación Heifer Ecuador
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Entorno propicio para <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Bionegocios Sostenibles</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Consultoría para la actualización y elaboración de guías metodológicas. No solo redactamos manuales; construimos un ecosistema digital inteligente para el biocomercio en Ecuador.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button onClick={() => scrollToSection('resumen')} className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-emerald-500/30">
                  Ver Propuesta
                  <ArrowRight size={20} />
                </button>
                <button onClick={() => scrollToSection('diferenciadores')} className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3 rounded-lg font-semibold transition-all">
                  Nuestra Diferencia
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative z-10">
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs text-slate-400">tubionegocio.ec</span>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="mx-auto text-emerald-600 mb-2" size={32} />
                      <span className="text-sm font-medium text-emerald-800">Hub Web Interactivo</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center mb-2">
                        <FileText size={16} className="text-blue-600"/>
                      </div>
                      <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 w-10 bg-slate-200 rounded"></div>
                    </div>
                    <div className="h-24 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center mb-2">
                        <Cpu size={16} className="text-purple-600"/>
                      </div>
                      <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 w-10 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decorative blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-200/20 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Resumen & Differentiators */}
      <section id="resumen" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Más que documentos, herramientas vivas</h2>
            <p className="text-slate-600">
              Entendemos que el objetivo superior no es la simple redacción de manuales, sino la construcción de un entorno que armonice la conservación ambiental con la rentabilidad comercial.
            </p>
          </div>

          <div id="diferenciadores" className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rutas Críticas & Checklists</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Abandonamos el texto denso. Entregamos infografías de flujo y checklists interactivos para que el emprendedor sepa exactamente qué paso dar en ARCSA o SUIA.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Co-creación Multiactor</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Talleres de validación real con la Autoridad Ambiental, gremios y academia para evitar la obsolescencia y resolver cuellos de botella reales.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Plataforma Web & AI</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ejecución remota desde Hungría asistida por Inteligencia Artificial, destinando los recursos ahorrados al desarrollo del hub <strong>TuBionegocio</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Normativa Section */}
      <section id="normativa" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Dominio del Escenario Normativo (2023-2026)</h2>
              <p className="text-slate-300 mb-8">
                Para ganar la confianza del comité evaluador (MAATE, CAF, GEF), nuestra propuesta decodifica los vectores críticos de cambio actuales.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Acuerdo Ministerial 054 (Agosto 2025)", desc: "Lineamientos para el fomento al biocomercio y operatividad del Registro Nacional." },
                  { title: "Simplificación ARCSA", desc: "Diferenciación clara entre Notificación Sanitaria (NSO) y procesos simplificados para la EPS." },
                  { title: "Interoperabilidad SUIA", desc: "Gestión precisa de coordenadas UTM y catálogos CIIU para evitar retrasos en Registros Ambientales." },
                  { title: "Trazabilidad VUE", desc: "Integración con sistema GUIA de Agrocalidad para certificados de exportación." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-colors">
                    <BookOpen className="shrink-0 text-emerald-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-emerald-100">{item.title}</h4>
                      <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-600 opacity-20 blur-xl rounded-full"></div>
               <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                 <h3 className="text-xl font-bold mb-4 text-center">Transformación Digital</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-slate-700/50 p-3 rounded">
                        <span className="text-red-400 font-mono text-sm line-through">Documento PDF estático</span>
                        <ArrowRight className="text-slate-500" size={16} />
                        <span className="text-emerald-400 font-mono text-sm font-bold">Web Interactiva</span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-700/50 p-3 rounded">
                        <span className="text-red-400 font-mono text-sm line-through">Lectura legal densa</span>
                        <ArrowRight className="text-slate-500" size={16} />
                        <span className="text-emerald-400 font-mono text-sm font-bold">Legal Design & Flujogramas</span>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                        <p className="text-sm text-slate-400 mb-2">Desarrollado desde Hungría con:</p>
                        <div className="flex justify-center gap-2">
                            <span className="px-2 py-1 bg-slate-700 rounded text-xs">AI Co-pilot</span>
                            <span className="px-2 py-1 bg-slate-700 rounded text-xs">RAG Systems</span>
                            <span className="px-2 py-1 bg-slate-700 rounded text-xs">Cloud Based</span>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="cronograma" className="py-20 bg-emerald-50/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Plan de Acción: 100 Días</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-emerald-200 -translate-x-1/2"></div>
            
            {/* Phase 1 */}
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-12 mb-4 md:mb-0 pl-16 md:pl-0">
                  <h3 className="text-xl font-bold text-emerald-800">Fase 1: Inmersión</h3>
                  <p className="text-slate-600 text-sm">Kick-off virtual y despliegue de infraestructura web inicial.</p>
                  <span className="inline-block mt-2 text-xs font-semibold bg-white border border-emerald-200 px-2 py-1 rounded text-emerald-600">Días 1-10</span>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-emerald-500 border-4 border-white shadow-lg -translate-x-1/2 flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="md:w-5/12 pl-16 md:pl-12">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                    <p className="font-medium text-slate-800">Producto 1</p>
                    <p className="text-sm text-slate-500">Plan de Trabajo y Cronograma Final.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row-reverse items-center md:justify-between">
                <div className="md:w-5/12 text-left pl-16 md:pl-12 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-emerald-800">Fase 2: Ejecución Paralela</h3>
                  <p className="text-slate-600 text-sm">Actualización Guía 2023 + Desarrollo de 4 nuevos sectores (Bioinsumos, Fibras, Bioconstrucción, Ecoturismo).</p>
                  <span className="inline-block mt-2 text-xs font-semibold bg-white border border-emerald-200 px-2 py-1 rounded text-emerald-600">Días 11-70</span>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-emerald-500 border-4 border-white shadow-lg -translate-x-1/2 flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="md:w-5/12 pl-16 md:pr-12 md:pl-0 text-left md:text-right">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                    <p className="font-medium text-slate-800">Producto 2</p>
                    <p className="text-sm text-slate-500">Talleres de Co-creación y Borradores Web.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-12 mb-4 md:mb-0 pl-16 md:pl-0">
                  <h3 className="text-xl font-bold text-emerald-800">Fase 3: Lanzamiento</h3>
                  <p className="text-slate-600 text-sm">Migración final al Hub, socialización y transferencia.</p>
                  <span className="inline-block mt-2 text-xs font-semibold bg-white border border-emerald-200 px-2 py-1 rounded text-emerald-600">Días 71-100</span>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-emerald-500 border-4 border-white shadow-lg -translate-x-1/2 flex items-center justify-center text-white font-bold text-sm">3</div>
                <div className="md:w-5/12 pl-16 md:pl-12">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                    <p className="font-medium text-slate-800">Producto 3</p>
                    <p className="text-sm text-slate-500">Lanzamiento TuBionegocio y entrega final.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section id="presupuesto" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Estrategia Económica Competitiva</h2>
            <p className="text-slate-600 mt-2">
              Optimizamos costos logísticos mediante IA y trabajo remoto para maximizar la inversión tecnológica.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Oferta Económica Total</h3>
                <p className="text-emerald-100 text-sm opacity-90">Incluye todos los impuestos de ley (IVA)</p>
              </div>
              <div className="text-3xl font-bold">$ 5.500,00</div>
            </div>
            
            <div className="p-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-slate-500 uppercase border-b border-slate-200">
                    <th className="px-4 py-3">Entregable</th>
                    <th className="px-4 py-3 w-24 text-center">% Pago</th>
                    <th className="px-4 py-3 w-32 text-right">Monto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-4">
                      <p className="font-medium text-slate-700">Producto 1: Plan Metodológico</p>
                      <p className="text-xs text-slate-500">Cronograma detallado y arranque remoto.</p>
                    </td>
                    <td className="px-4 py-4 text-center text-slate-600">8%</td>
                    <td className="px-4 py-4 text-right font-medium">$ 440,00</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-4">
                      <p className="font-medium text-slate-700">Producto 2: Guía 2023 + Sistematización</p>
                      <p className="text-xs text-slate-500">Borrador Web y Taller 1.</p>
                    </td>
                    <td className="px-4 py-4 text-center text-slate-600">30%</td>
                    <td className="px-4 py-4 text-right font-medium">$ 1.650,00</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-4">
                      <p className="font-medium text-slate-700">Producto 3: Nuevos Sectores + Hub Web</p>
                      <p className="text-xs text-slate-500">Entrega final y plataforma operativa.</p>
                    </td>
                    <td className="px-4 py-4 text-center text-slate-600">62%</td>
                    <td className="px-4 py-4 text-right font-medium">$ 3.410,00</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100 text-sm text-emerald-800">
                <span className="font-bold">Nota:</span> Costos de licencias, software IA y hosting inicial cubiertos por la consultoría. Precio debajo del techo referencial ($6.000).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultant Profile */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-200 overflow-hidden shrink-0 border-4 border-white shadow-lg">
               {/* Placeholder for Profile Image */}
               <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
                  <Users size={48}/>
               </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Rubén Calahorrano</h2>
              <p className="text-emerald-600 font-medium mb-4">Consultor Líder | Bioszolventa</p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Experto en traducción técnico-legal e innovación tecnológica. Con base operativa en Hungría, ofrece una visión global con ejecución local.
              </p>
              <div className="flex gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-emerald-500"/>
                  <span>+5 Años Experiencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-emerald-500"/>
                  <span>RUC Ecuatoriano Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-2xl tracking-tight mb-8">
            <Leaf className="text-emerald-500" />
            <span>TuBionegocio</span>
          </div>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Propuesta técnica presentada para el proyecto "Desarrollo de un entorno propicio para negocios sostenibles basados en la biodiversidad nativa del Ecuador".
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Email</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Web</a>
          </div>
          <p className="text-slate-600 text-sm">
            © 2026 Rubén Calahorrano. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;          >
            Measurement Room Team Leader / Quality Professional
          </div>
        </header>

        {/* Main Grid Layout - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] print:grid-cols-[1fr_2.2fr]">
          
          {/* LEFT SIDEBAR */}
          <aside className="bg-gray-50 p-10 print:p-6 border-r border-gray-100">
            
            {/* Contact Section */}
            <section className="mb-8">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase border-b-2 border-gray-200 pb-2 mb-4 text-[#1C1C1C] relative">
                Contact
                <span className="absolute bottom-[-2px] left-0 w-8 h-[2px]" style={{ backgroundColor: mRed }}></span>
              </h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-3">
                  <Mail size={16} style={{ color: mLightBlue }} />
                  <span>ramiro.calahorrano@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} style={{ color: mLightBlue }} />
                  <span>+36-20-27-81374</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} style={{ color: mLightBlue }} />
                  <span>Debrecen, Hungary</span>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin size={16} style={{ color: mLightBlue }} />
                  <span>linkedin.com/in/ruben-calahorrano</span>
                </li>
              </ul>
            </section>

            {/* Work Authorization */}
            <section className="mb-8">
              <div 
                className="p-4 text-sm text-white"
                style={{ backgroundColor: bmwBlack, borderLeft: `4px solid ${mRed}` }}
              >
                Permanent settlement status allows full <strong style={{ color: mLightBlue }} className="uppercase tracking-wider block mt-1">ready-to-work authorization</strong> in the EU.
              </div>
            </section>

            {/* Languages */}
            <section className="mb-8">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase border-b-2 border-gray-200 pb-2 mb-4 text-[#1C1C1C] relative">
                Languages
                <span className="absolute bottom-[-2px] left-0 w-8 h-[2px]" style={{ backgroundColor: mRed }}></span>
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between items-center"><strong>Spanish</strong> <span>Native</span></li>
                <li className="flex justify-between items-center"><strong>English</strong> <span>Adv. C1</span></li>
                <li className="flex justify-between items-center"><strong>Hungarian</strong> <span>Int. B1/B2</span></li>
                <li className="flex justify-between items-center"><strong>Portuguese</strong> <span>Basic</span></li>
              </ul>
            </section>

            {/* Core Competencies */}
            <section className="mb-8">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase border-b-2 border-gray-200 pb-2 mb-4 text-[#1C1C1C] relative">
                Core Competencies
                <span className="absolute bottom-[-2px] left-0 w-8 h-[2px]" style={{ backgroundColor: mRed }}></span>
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5" style={{ color: mDarkBlue }} /> Laboratory Mgmt & Leadership</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5" style={{ color: mDarkBlue }} /> Quality Assurance (ISO 17025)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5" style={{ color: mDarkBlue }} /> Tech Cleanliness & Metrology</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5" style={{ color: mDarkBlue }} /> Process Optimization (Chemometrics)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5" style={{ color: mDarkBlue }} /> Logistics Coordination</li>
              </ul>
            </section>

            {/* Published Books */}
            <section>
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase border-b-2 border-gray-200 pb-2 mb-4 text-[#1C1C1C] relative">
                Published Books
                <span className="absolute bottom-[-2px] left-0 w-8 h-[2px]" style={{ backgroundColor: mRed }}></span>
              </h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="leading-tight">
                  <strong className="text-gray-900 block">Tomates Urbanos Sostenibles</strong>
                  <span className="text-xs italic">(Sustainable Urban Tomatoes) – 2024</span>
                </li>
                <li className="leading-tight">
                  <strong className="text-gray-900 block">Agricultura Urbana</strong>
                  <span className="text-xs italic">(Urban Agriculture) – 2023</span>
                </li>
                <li className="leading-tight">
                  <strong className="text-gray-900 block">Manejo ambiental Agrícola</strong>
                  <span className="text-xs italic">(Agri. Environmental Mgmt) – 2023</span>
                </li>
              </ul>
            </section>

          </aside>

          {/* RIGHT MAIN CONTENT */}
          <main className="p-10 print:p-6 bg-white">
            
            {/* Profile Summary */}
            <section className="mb-8">
              <div 
                className="p-5 text-sm md:text-base text-gray-700 text-justify leading-relaxed bg-[#F9F9F9]"
                style={{ borderLeft: `4px solid ${mDarkBlue}` }}
              >
                Empathetic, highly adaptable, and incredibly precise professional with a robust academic and technical background. Offers extensive experience leading high-standard laboratories, managing quality control systems (ISO/IEC 17025), and coordinating highly accurate analytical testing processes. Proven track record of 100% performance evaluation success, team leadership, and statistical process optimization. Fully prepared for continuous shift-based operations and eager to leverage cultural adaptability, analytical scrutiny, and precision to drive quality and innovation at the <strong>BMW Group Plant Debrecen</strong>.
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-8">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase border-b-2 border-gray-200 pb-2 mb-6 text-[#1C1C1C] relative flex items-center gap-2">
                <Award size={18} style={{ color: mDarkBlue }} />
                Professional Experience
                <span className="absolute bottom-[-2px] left-0 w-12 h-[2px]" style={{ backgroundColor: mRed }}></span>
              </h2>

              <div className="space-y-6">
                {/* Job 1 */}
                <div className="print:break-inside-avoid">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h3 className="text-base font-bold" style={{ color: mDarkBlue }}>Scientific Peer Reviewer</h3>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">2019 – Present</span>
                  </div>
                  <div className="text-sm font-bold text-[#1C1C1C] mb-2 uppercase tracking-wide">Scientific Magazine - University of Oradea, Romania</div>
                  <ul className="text-sm text-gray-600 space-y-1 pl-4 list-none relative">
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]" style={{ '--tw-prose-bullets': mRed }}>
                      Apply rigorous quality control, analytical scrutiny, and statistical verification to scientific manuscripts to ensure exact compliance with academic and publication standards.
                    </li>
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]" style={{ '--tw-prose-bullets': mRed }}>
                      Review complex datasets and methodologies, providing detailed evaluations and optimization feedback for highly technical processes.
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="print:break-inside-avoid">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h3 className="text-base font-bold" style={{ color: mDarkBlue }}>CEO & Research Consultant</h3>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">2017 – Present</span>
                  </div>
                  <div className="text-sm font-bold text-[#1C1C1C] mb-2 uppercase tracking-wide">Bioszolventa / MINCA Ventures</div>
                  <ul className="text-sm text-gray-600 space-y-1 pl-4 list-none relative">
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Manage comprehensive inbound communications with international stakeholders, ensuring project goals are perfectly aligned.
                    </li>
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Oversee the implementation of compliance, quality standards, and accreditation for technical programs.
                    </li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div className="print:break-inside-avoid">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h3 className="text-base font-bold" style={{ color: mDarkBlue }}>Full-Time Lecturer, Researcher & Career Coordinator</h3>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">2015 – 2017</span>
                  </div>
                  <div className="text-sm font-bold text-[#1C1C1C] mb-2 uppercase tracking-wide">IST 17 de Julio - Yachay</div>
                  <ul className="text-sm text-gray-600 space-y-1 pl-4 list-none relative">
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Coordinated academic departments and inter-institutional projects, driving team inspiration and professional growth.
                    </li>
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Demonstrated exceptional leadership and process management, ensuring a 100% performance evaluation success rate.
                    </li>
                  </ul>
                </div>

                {/* Job 4 */}
                <div className="print:break-inside-avoid">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h3 className="text-base font-bold" style={{ color: mDarkBlue }}>Technical Responsible / Acting Quality Director</h3>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">2013 – 2015</span>
                  </div>
                  <div className="text-sm font-bold text-[#1C1C1C] mb-2 uppercase tracking-wide">Centro de Investigaciones y Control Ambiental (CICAM) – EPN</div>
                  <ul className="text-sm text-gray-600 space-y-1 pl-4 list-none relative">
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Led and coordinated a highly technical laboratory team, overseeing capacity planning, recruitment, and professional development.
                    </li>
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Accountable for strict quality requirements, participating in 6 internal and external audits to maintain ISO/IEC 17025 accreditation.
                    </li>
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Conducted and supervised over 6,000 high-precision physical-chemical analyses, utilizing statistical tools to verify compliance.
                    </li>
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Directly managed the calibration and maintenance of sensitive measurement equipment (Balances, TOC Analyzers, pH meters).
                    </li>
                  </ul>
                </div>

                {/* Job 5 */}
                <div className="print:break-inside-avoid">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h3 className="text-base font-bold" style={{ color: mDarkBlue }}>Quality Control Analyst</h3>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">2011</span>
                  </div>
                  <div className="text-sm font-bold text-[#1C1C1C] mb-2 uppercase tracking-wide">Pasteurizadora Quito</div>
                  <ul className="text-sm text-gray-600 space-y-1 pl-4 list-none relative">
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Supervised technical cleanliness requirements through rigorous microbiological assays and physicochemical controls.
                    </li>
                    <li className="before:content-['■'] before:absolute before:-ml-4 before:text-[0.6rem]">
                      Monitored production processes ensuring exact compliance with sanitary and quality standards.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6 print:break-inside-avoid">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase border-b-2 border-gray-200 pb-2 mb-6 text-[#1C1C1C] relative flex items-center gap-2">
                <GraduationCap size={18} style={{ color: mDarkBlue }} />
                Education
                <span className="absolute bottom-[-2px] left-0 w-12 h-[2px]" style={{ backgroundColor: mRed }}></span>
              </h2>

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <div>
                    <h3 className="text-sm font-bold" style={{ color: mDarkBlue }}>MSc, Agricultural Environmental Management Engineering</h3>
                    <div className="text-sm text-[#1C1C1C]">University of Debrecen, Hungary</div>
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1 md:mt-0">2017 – 2019</span>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <div>
                    <h3 className="text-sm font-bold" style={{ color: mDarkBlue }}>BSc, Biotechnology Engineering</h3>
                    <div className="text-sm text-[#1C1C1C]">Universidad de las Fuerzas Armadas "ESPE", Ecuador</div>
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1 md:mt-0">2004 – 2014</span>
                </div>
              </div>
            </section>

          </main>
        </div>

        {/* Footer Quote */}
        <div className="text-center pb-8 pt-4 px-10 border-t border-gray-100 bg-white print:pb-4 print:pt-2">
          <p className="italic text-sm md:text-base font-medium tracking-wide" style={{ color: mDarkBlue }}>
            "Driven by precision, inspired by teamwork, and fully ready to shape the future of mobility in Europe."
          </p>
        </div>

        {/* Style injection to force styling of the custom square list bullets */}
        <style dangerouslySetInnerHTML={{__html: `
          li::before { color: ${mRed} !important; }
        `}} />
      </div>
    </div>
  );
};
