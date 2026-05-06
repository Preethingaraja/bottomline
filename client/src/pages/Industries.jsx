import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, ShoppingCart, Briefcase, Rocket, Globe, Building, Plane, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // High-quality imagery and specific theme colors for each sector
  const industriesList = [
    { 
      name: 'Manufacturing', 
      icon: <Factory size={28} />, 
      desc: 'Cost optimization, capacity planning, and supply chain financial management for industrial setups.',
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=1920',
      color: 'bg-orange-500',
      textColor: 'text-orange-500'
    },
    { 
      name: 'Trading & Retail', 
      icon: <ShoppingCart size={28} />, 
      desc: 'Working capital management, inventory control, and retail margin analysis strategies.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920',
      color: 'bg-blue-500',
      textColor: 'text-blue-500'
    },
    { 
      name: 'MSME', 
      icon: <Briefcase size={28} />, 
      desc: 'Scalable financial structures, compliance, and growth funding strategies for medium and small enterprises.',
      image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=1920',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500'
    },
    { 
      name: 'Startups', 
      icon: <Rocket size={28} />, 
      desc: 'Financial modeling, valuation, seed funding advisory, and setup of initial accounting processes.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920',
      color: 'bg-violet-500',
      textColor: 'text-violet-500'
    },
    { 
      name: 'NRI Businesses', 
      icon: <Globe size={28} />, 
      desc: 'Cross-border taxation, investment compliance, and local business representation in India.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920',
      color: 'bg-cyan-500',
      textColor: 'text-cyan-500'
    },
    { 
      name: 'Corporates', 
      icon: <Building size={28} />, 
      desc: 'Strategic CFO services, M&A advisory, risk management, and corporate governance.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920',
      color: 'bg-rose-500',
      textColor: 'text-rose-500'
    },
    { 
      name: 'Exporters / Importers', 
      icon: <Plane size={28} />, 
      desc: 'Forex management, LC documentation, export incentives, and international trade compliance.',
      image: 'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?auto=format&fit=crop&q=80&w=1920',
      color: 'bg-amber-500',
      textColor: 'text-amber-500'
    },
  ];

  // Optional: Auto-cycle through industries if user hasn't hovered recently
  // This adds a dynamic feel to the page
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industriesList.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [isHovering, industriesList.length]);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Industries We Serve | Bottomline Consultants</title>
        <meta name="description" content="Bottomline Consultants serves a diverse range of industries including Manufacturing, MSME, Startups, and NRI Businesses." />
      </Helmet>

      {/* Minimalist Hero Section */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Sectors We <span className="text-primary">Elevate.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
              We replace generic advice with deep, domain-specific financial engineering. Explore the industries we specialize in transforming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Split-Screen Display Pattern */}
      <section 
        className="pb-32 bg-white"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[700px]">
            
            {/* Left Sidebar Menu */}
            <div className="lg:w-1/3 flex flex-col justify-center space-y-3 z-10">
               {industriesList.map((ind, idx) => (
                 <button 
                   key={idx}
                   onMouseEnter={() => setActiveIndex(idx)}
                   onClick={() => setActiveIndex(idx)}
                   className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center gap-5 border border-transparent focus:outline-none ${
                     activeIndex === idx 
                       ? 'bg-gray-900 text-white shadow-xl lg:scale-105 border-gray-800 z-20' 
                       : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                   }`}
                 >
                    <div className={`${activeIndex === idx ? ind.textColor : 'text-gray-400'} transition-colors duration-300`}>
                      {ind.icon}
                    </div>
                    <span className="text-xl font-bold tracking-tight">{ind.name}</span>
                 </button>
               ))}
            </div>
            
            {/* Right Interactive Display Area */}
            <div className="lg:w-2/3 relative rounded-[2rem] overflow-hidden shadow-2xl bg-gray-900 group min-h-[500px] lg:min-h-full mt-8 lg:mt-0">
               
               {/* Background Images (Rendered all for preloading & smooth crossfade) */}
               {industriesList.map((ind, idx) => (
                 <img 
                   key={`img-${idx}`}
                   src={ind.image} 
                   alt={ind.name} 
                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeIndex === idx ? 'opacity-50' : 'opacity-0 z-[-1]'}`} 
                 />
               ))}
               
               {/* Gradient Overlay for Text Readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none"></div>
               
               {/* Dynamic Content */}
               <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end z-10 pointer-events-none">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activeIndex}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="pointer-events-auto"
                   >
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${industriesList[activeIndex].color} text-white shadow-lg backdrop-blur-md`}>
                        {industriesList[activeIndex].icon}
                     </div>
                     
                     <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
                       {industriesList[activeIndex].name}
                     </h2>
                     
                     <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light mb-10">
                       {industriesList[activeIndex].desc}
                     </p>
                     
                     <a 
                       href="/contact" 
                       className="inline-flex items-center gap-2 text-white font-bold tracking-widest uppercase border-b-2 border-primary pb-2 hover:text-primary transition-colors group/btn"
                     >
                        Consult with our experts 
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5 group-hover/btn:text-primary" />
                        </motion.span>
                     </a>
                   </motion.div>
                 </AnimatePresence>
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Clean Minimalist CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Don't see your sector listed?
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-light">
              Our strategic management frameworks are highly adaptable. We engineer bespoke financial solutions tailored to highly niche business models.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gray-900 text-white hover:bg-primary px-7 py-3 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Let's Talk Business <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
