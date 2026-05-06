import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Globe, MapPin, Building, GraduationCap, Handshake, ArrowRight, Earth, Plane, Navigation } from 'lucide-react';
import { useState } from 'react';

const GlobalReach = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const regions = [
    { name: 'Gulf Cooperation Council (GCC)', color: 'from-amber-400 to-orange-500', shadow: 'shadow-orange-500/20' },
    { name: 'United Kingdom (UK)', color: 'from-blue-400 to-blue-600', shadow: 'shadow-blue-500/20' },
    { name: 'United States (USA)', color: 'from-red-400 to-rose-600', shadow: 'shadow-rose-500/20' },
    { name: 'Southeast Asia', color: 'from-emerald-400 to-green-600', shadow: 'shadow-green-500/20' },
    { name: 'Europe', color: 'from-indigo-400 to-violet-600', shadow: 'shadow-indigo-500/20' },
    { name: 'Australia & New Zealand', color: 'from-cyan-400 to-blue-500', shadow: 'shadow-cyan-500/20' },
    { name: 'Africa', color: 'from-yellow-400 to-amber-600', shadow: 'shadow-yellow-500/20' },
    { name: 'Rest of the World', color: 'from-gray-600 to-gray-800', shadow: 'shadow-gray-500/20' },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Helmet>
        <title>Global Reach & Overseas Services | Bottomline Consultants</title>
        <meta name="description" content="Bottomline Consultants serves clients internationally, providing specialized financial and advisory services for NRIs, foreign corporates, and global businesses." />
      </Helmet>

      {/* Modern Hero Section with Rotating Globe Element */}
      <section 
        className="relative py-20 mt-16 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1920")' }}
      >
        <div className="absolute inset-0 bg-gray-900/85 backdrop-blur-sm"></div>
        
        {/* Animated geometric background grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <motion.svg 
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            width="200%" height="200%" className="absolute -top-1/2 -left-1/2" xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="hexGrid" width="60" height="103.923" patternUnits="userSpaceOnUse">
                <path d="M30 0 L60 17.321 L60 51.962 L30 69.282 L0 51.962 L0 17.321 Z" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexGrid)" />
          </motion.svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center mb-8 relative"
          >
            {/* Spinning Aura around Globe */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-2 border-primary border-dashed w-24 h-24 mx-auto opacity-50"
            />
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 relative z-10">
              <Earth className="w-12 h-12 text-primary" />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
              Beyond Borders
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Global Reach</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Delivering world-class strategic cost and financial management solutions across continents.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Animated Typography */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[-10%] w-96 h-96 bg-green-50 rounded-full blur-[100px] opacity-60 z-0"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
              Connecting Continents, <br/><span className="text-primary font-light">Driving Growth.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Bottomline, our expertise transcends geographical boundaries. We understand the complexities of international trade, cross-border investments, and global financial compliance. With our deep industry knowledge and adherence to international standards, we successfully partner with overseas entities, NRIs, and multinational corporations to safeguard their financial interests and optimize their operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regions Served - Premium Auto-Carousel */}
      <section className="py-32 relative overflow-hidden bg-[#0a110c]">
        {/* Dynamic Glowing Orbs */}
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary rounded-full blur-[200px] opacity-20 pointer-events-none"
        />
        <motion.div 
          animate={{ x: [50, -50, 50], y: [20, -20, 20] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-emerald-600 rounded-full blur-[150px] opacity-20 pointer-events-none"
        />
        
        {/* Subtle Dotted Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
              Global Presence
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Key Regions We Serve</h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">A truly international footprint, connecting businesses across diverse global markets.</p>
          </motion.div>
          
          <div className="relative w-full overflow-hidden flex py-4">
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0a110c] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0a110c] to-transparent z-10 pointer-events-none"></div>
            
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              className="flex gap-6 w-max pl-6"
            >
              {/* Render twice for seamless infinite loop */}
              {[...regions, ...regions].map((region, index) => (
                <div 
                  key={index} 
                  className={`relative bg-gray-800/60 backdrop-blur-md py-3 px-5 rounded-full border border-gray-700/60 shadow-lg flex items-center gap-3 cursor-pointer group hover:shadow-xl transition-all duration-300 min-w-max hover:-translate-y-1`}
                >
                  {/* Glowing Dot */}
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${region.color} flex items-center justify-center shadow-inner shrink-0`}>
                    <MapPin className="text-white w-3.5 h-3.5 group-hover:animate-bounce" />
                  </div>
                  <span className="font-semibold text-gray-200 text-sm tracking-wide group-hover:text-white transition-colors">{region.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Services - Modern Floating Cards */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Bespoke Advisory</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Specialized Global Services</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:-translate-y-2 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Foreign Corporates</h3>
                <ul className="space-y-4 text-gray-600 font-medium">
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> India entry strategy & subsidiary setup</li>
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> Due diligence & M&A advisory</li>
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> Regulatory compliance & tax planning</li>
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> Ongoing financial reporting & local directorships</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Card 2 (Highlighted) */}
            <motion.div variants={fadeInUp} className="group bg-gray-900 rounded-[2rem] p-10 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-gray-800 relative overflow-hidden transform md:-translate-y-8">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-bl-full group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
              
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-green-400 text-white px-6 py-1.5 rounded-b-xl text-xs font-bold tracking-widest uppercase shadow-md z-20">
                Most Requested
              </div>
              
              <div className="relative z-10 mt-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/30 group-hover:-translate-y-2 transition-transform duration-300">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">NRI Wealth & Business</h3>
                <ul className="space-y-4 text-gray-300 font-medium">
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Management of assets and businesses in India</li>
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Repatriation of funds & FEMA compliance</li>
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Tax planning & return filing (DTAA benefits)</li>
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Investment advisory & portfolio monitoring</li>
                </ul>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-100 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/30 group-hover:-translate-y-2 transition-transform duration-300">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Exporters & Importers</h3>
                <ul className="space-y-4 text-gray-600 font-medium">
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" /> Trade finance & LC documentation</li>
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" /> Foreign exchange risk management</li>
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" /> Supply chain cost analysis</li>
                  <li className="flex items-start gap-3"><Navigation className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" /> Customs & trade compliance</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 text-primary mb-8">
              <Globe className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Ready to expand your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">horizons?</span>
            </h2>
            <p className="text-xl text-gray-500 mb-10 font-light max-w-2xl mx-auto">
              No matter where you are located, our team is equipped to provide strategic financial support across time zones.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gray-900 text-white hover:bg-primary px-7 py-3 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default GlobalReach;
