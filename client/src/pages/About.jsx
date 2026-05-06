import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Shield, Users, CheckCircle2 } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>About Us | Bottomline Consultants</title>
        <meta name="description" content="Learn about Bottomline Consultants, our mission, vision, and the expertise of our Managing Director V.R. Shahjehan." />
      </Helmet>

      {/* Modern Hero Section with Parallax Effect */}
      <section 
        className="relative py-40 mt-16 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wide uppercase">Who We Are</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Shaping the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Finance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              A premier Strategic Cost & Financial Management Consulting firm dedicated to driving business excellence and sustainable growth globally.
            </p>
          </motion.div>
        </div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Philosophy - Bento Box Grid Design */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Mission */}
            <motion.div variants={fadeIn} whileHover={{ y: -10 }} className="bg-gradient-to-br from-green-50 to-white p-10 rounded-[2rem] shadow-sm border border-green-100 relative overflow-hidden group">
               <Target className="absolute -right-10 -bottom-10 w-64 h-64 text-green-100 opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out" />
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                   <Target className="text-primary group-hover:text-white w-8 h-8 transition-colors duration-300" />
                 </div>
                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   To provide innovative, practical, and top-quality strategic management solutions that empower our clients to achieve their business objectives and maximize shareholder value.
                 </p>
               </div>
            </motion.div>
            
            {/* Vision */}
            <motion.div variants={fadeIn} whileHover={{ y: -10 }} className="bg-gradient-to-br from-red-50 to-white p-10 rounded-[2rem] shadow-sm border border-red-100 relative overflow-hidden group">
               <Eye className="absolute -right-10 -bottom-10 w-64 h-64 text-red-100 opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out" />
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-300">
                   <Eye className="text-accent group-hover:text-white w-8 h-8 transition-colors duration-300" />
                 </div>
                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   To be the most trusted and globally recognized management consulting firm, setting the benchmark for excellence in cost and financial management.
                 </p>
               </div>
            </motion.div>
            
            {/* Values */}
            <motion.div variants={fadeIn} whileHover={{ y: -10 }} className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-[2rem] shadow-sm border border-blue-100 relative overflow-hidden group md:col-span-2 lg:col-span-1">
               <Shield className="absolute -right-10 -bottom-10 w-64 h-64 text-blue-100 opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out" />
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                   <Shield className="text-blue-600 group-hover:text-white w-8 h-8 transition-colors duration-300" />
                 </div>
                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   Integrity, Excellence, Client-Centricity, and Innovation form the core pillars of everything we do. We believe in building long-term, value-driven relationships based on trust.
                 </p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Director Profile Section */}
      <section className="py-32 relative overflow-hidden bg-gray-900">
        {/* Animated background blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-accent/20 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image / Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl group border border-white/10">
                 {/* Professional portrait placeholder */}
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="V.R. Shahjehan" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                 
                 <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10">
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl"
                   >
                     <h2 className="text-4xl font-bold text-white mb-2">V.R. Shahjehan</h2>
                     <p className="text-primary font-medium text-xl mb-6">Managing Director</p>
                     <div className="flex flex-wrap gap-3">
                       {['CMA', 'ACMA', 'CAIIB', 'M.Com'].map((cert) => (
                         <span key={cert} className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors text-white rounded-full text-sm font-semibold backdrop-blur-sm border border-white/10">
                           {cert}
                         </span>
                       ))}
                     </div>
                   </motion.div>
                 </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4 flex items-center gap-2">
                <Users className="w-4 h-4" /> Leadership & Expertise
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Driving Transformation <br/><span className="text-gray-500 font-light">Through Experience.</span>
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-8 font-light">
                With decades of profound experience in financial management, corporate finance, and strategic cost control, V.R. Shahjehan leads Bottomline with a vision to transform businesses. His extensive qualifications and international exposure enable the firm to deliver world-class advisory services.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Under his leadership, Bottomline has successfully navigated complex financial landscapes for numerous MSMEs, large corporates, and NRI businesses, establishing a legacy of trust and tangible results.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-800">
                <div className="flex flex-col">
                   <span className="text-5xl font-extrabold text-white mb-2">20<span className="text-primary">+</span></span>
                   <span className="text-gray-400 font-medium uppercase tracking-wider text-sm">Years Experience</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-5xl font-extrabold text-white mb-2">50<span className="text-accent">+</span></span>
                   <span className="text-gray-400 font-medium uppercase tracking-wider text-sm">Global Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications/Credentials with Hover effects */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Credentials</h2>
            <p className="text-gray-500 text-lg">Recognized standards that guarantee quality and trust.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              "Certified Management Accountants",
              "Global Standards Compliant",
              "20+ Years Industry Excellence"
            ].map((cred, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 bg-white px-8 py-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-green-50 p-3 rounded-full group-hover:bg-primary transition-colors">
                  <Award className="text-primary group-hover:text-white w-6 h-6 transition-colors" />
                </div>
                <span className="font-bold text-gray-800 text-lg">{cred}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
