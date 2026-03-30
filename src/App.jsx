import React from 'react';
import { Mail, Phone, MapPin, Linkedin, CheckCircle2, BookOpen, GraduationCap, Award } from 'lucide-react';

const App = () => {
  // Classic M3 Color Palette
  const mLightBlue = "#00A1E4";
  const mDarkBlue = "#012169";
  const mRed = "#E32636";
  const bmwBlack = "#1C1C1C";

  return (
    <div className="min-h-screen bg-[#F4F4F4] py-10 font-sans print:py-0 print:bg-white text-gray-800">
      
      {/* A4 Container 
        Optimized for screen viewing and exact PDF printing.
        Removes shadow and margins specifically on print.
      */}
      <div 
        className="max-w-[1000px] mx-auto bg-white shadow-2xl overflow-hidden relative print:shadow-none print:max-w-none print:w-full"
        style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}
      >
        {/* Top M-Stripe */}
        <div className="h-2 w-full flex">
          <div className="h-full flex-1" style={{ backgroundColor: mLightBlue }}></div>
          <div className="h-full flex-1" style={{ backgroundColor: mDarkBlue }}></div>
          <div className="h-full flex-1" style={{ backgroundColor: mRed }}></div>
        </div>

        {/* Header Area */}
        <header className="px-10 pt-12 pb-8 flex flex-col items-center text-center border-b border-gray-100 print:px-6 print:pt-8 print:pb-4">
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest text-[#1C1C1C] mb-2">
            Ramiro Rubén <span className="font-bold">Calahorrano</span>
          </h1>
          <div 
            className="text-sm md:text-base font-bold uppercase tracking-[0.2em]"
            style={{ color: mDarkBlue }}
          >
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
