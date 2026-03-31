import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Printer } from 'lucide-react';

const App = () => {
  // Classic M3 Color Palette
  const mLightBlue = "#00A1E4";
  const mDarkBlue = "#012169";
  const mRed = "#E32636";
  const bmwBlack = "#1C1C1C";

  return (
    <div className="min-h-screen bg-[#F4F4F4] py-10 font-sans text-gray-800 flex justify-center print:py-0 relative print:bg-white">
      
      {/* FLOATING PRINT BUTTON (Hidden on actual PDF) */}
      <button 
        onClick={() => window.print()}
        className="print:hidden fixed bottom-6 right-6 md:bottom-10 md:right-10 text-white rounded-full shadow-2xl p-4 flex items-center gap-3 transition-all duration-300 z-50 group hover:opacity-90"
        style={{ backgroundColor: mDarkBlue }}
        title="Print or Save as PDF"
      >
        <Printer size={24} />
        <span className="hidden md:block font-bold tracking-wider text-sm uppercase pr-2">Save PDF</span>
      </button>

      {/* A4 Document Container */}
      <div 
        className="w-full max-w-[1000px] bg-white shadow-2xl overflow-hidden relative print:shadow-none print:max-w-none print:w-full print:pt-4"
        style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}
      >
        
        {/* Top M-Stripe */}
        <div className="h-2 w-full flex">
          <div className="h-full flex-1" style={{ backgroundColor: mLightBlue }}></div>
          <div className="h-full flex-1" style={{ backgroundColor: mDarkBlue }}></div>
          <div className="h-full flex-1" style={{ backgroundColor: mRed }}></div>
        </div>

        {/* Header Area */}
        <header className="px-6 md:px-10 pt-12 pb-6 flex flex-col items-center text-center border-b border-gray-100 print:pt-8 print:px-10">
          <h1 className="text-3xl md:text-5xl font-light uppercase tracking-widest text-[#1C1C1C] mb-2">
            Ramiro Rubén <span className="font-bold">Calahorrano</span>
          </h1>
          <div 
            className="text-xs md:text-base font-bold uppercase tracking-[0.2em] mb-6"
            style={{ color: mDarkBlue }}
          >
            Measurement Room Team Leader / Quality Professional
          </div>

          {/* Contact Info Row */}
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-600 w-full max-w-4xl mx-auto border-t border-gray-100 pt-6">
            <li className="flex items-center gap-2">
              <Mail size={16} style={{ color: mLightBlue }} />
              <span>ramiro.calahorrano@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} style={{ color: mLightBlue }} />
              <span>+36-20-27-81374</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} style={{ color: mLightBlue }} />
              <span>Debrecen, Hungary</span>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} style={{ color: mLightBlue }} />
              <span>linkedin.com/in/ruben-calahorrano</span>
            </li>
          </ul>
        </header>

        {/* Main Letter Content */}
        <main className="px-6 md:px-12 py-10 print:py-8 print:px-12">
            
          {/* Letter Metadata */}
          <div className="mb-8 text-gray-700 space-y-2 text-sm md:text-base">
            <div className="flex items-start">
              <span className="w-16 md:w-20 font-bold uppercase tracking-wider text-xs mt-1" style={{ color: mDarkBlue }}>To:</span>
              <span className="font-semibold" style={{ color: bmwBlack }}>Hiring Manager, BMW Group Plant Debrecen</span>
            </div>
            <div className="flex items-start">
              <span className="w-16 md:w-20 font-bold uppercase tracking-wider text-xs mt-1" style={{ color: mDarkBlue }}>Date:</span>
              <span>March 31, 2026</span>
            </div>
          </div>

          {/* Subject Line (Styled as an accent block) */}
          <div className="bg-[#F9F9F9] border-l-4 p-4 mb-8 flex flex-col md:flex-row md:items-center gap-1 md:gap-0" style={{ borderLeftColor: mRed }}>
            <span className="w-20 font-bold uppercase tracking-wider text-xs shrink-0" style={{ color: mRed }}>Subject:</span>
            <span className="font-bold text-sm md:text-base uppercase tracking-wide" style={{ color: bmwBlack }}>Application: Measurement Room Team Leader</span>
          </div>

          {/* Letter Body */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify text-sm md:text-base">
            <p>Dear Hiring Manager,</p>

            <p>As a local Debrecen professional with a deep appreciation for BMW’s commitment to precision, I am writing to express my strong interest in the Measurement Room Team Leader position. With permanent EU work authorization and a background in leading technical laboratories, I would be thrilled to bring my dedication to quality to your new plant.</p>

            <p>Throughout my career, I have remained deeply committed to the idea that true quality comes from a supportive team and rigorous standards. While my academic background has provided a strong technical foundation, it is my hands-on laboratory experience that I believe aligns best with your needs for technical cleanliness and seamless operations:</p>

            {/* Punchy but Humble Bullet Points */}
            <ul className="space-y-4 my-6 ml-2 pl-4 list-none relative">
              <li className="before:content-['■'] before:absolute before:-ml-5 before:mt-1 before:text-[0.6rem]" style={{ '--tw-prose-bullets': mRed }}>
                <strong style={{ color: mDarkBlue }}>Team-Focused Leadership:</strong> As Acting Quality Director at CICAM, I coordinated a highly technical team, managing capacity planning and professional development. I strongly believe in fostering a collaborative and empathetic environment, which helped our unit achieve a 100% performance evaluation success rate.
              </li>
              <li className="before:content-['■'] before:absolute before:-ml-5 before:mt-1 before:text-[0.6rem]" style={{ '--tw-prose-bullets': mRed }}>
                <strong style={{ color: mDarkBlue }}>Rigorous Quality Assurance:</strong> I am highly familiar with navigating stringent international standards. I successfully guided our laboratory through 6 internal and external audits to maintain our ISO/IEC 17025 accreditation, supported by a strong practical understanding of ISO 9001, 14001, and 45001.
              </li>
              <li className="before:content-['■'] before:absolute before:-ml-5 before:mt-1 before:text-[0.6rem]" style={{ '--tw-prose-bullets': mRed }}>
                <strong style={{ color: mDarkBlue }}>Precision Metrology & Analytics:</strong> Having overseen over 6,000 physical-chemical analyses, I bring extensive experience in the strict calibration of sensitive measurement equipment and the use of statistical tools to steadily optimize processes.
              </li>
            </ul>

            <p>I consider myself a continuous learner, highly adaptable to new technologies such as 3D measuring systems, and fully prepared for shift-based operations to support your production goals. I would be genuinely grateful for the opportunity to bring my analytical background and team-first mindset to the heart of BMW's newest European hub.</p>

            <p>Thank you for your time, consideration, and for reviewing my application. I would welcome the opportunity to discuss how I can contribute to the success of your measurement room.</p>

            {/* Sign-off */}
            <div className="pt-6">
              <p className="mb-6">Sincerely,</p>
              <p className="font-bold text-lg md:text-xl" style={{ color: bmwBlack }}>Ramiro Rubén Calahorrano Paccha</p>
              <div className="h-[2px] w-16 mt-2" style={{ backgroundColor: mDarkBlue }}></div>
            </div>
          </div>

        </main>

        {/* Style injection for custom square list bullets */}
        <style dangerouslySetInnerHTML={{__html: `
          li::before { color: ${mRed} !important; }
        `}} />
      </div>
    </div>
  );
};

export default App;


