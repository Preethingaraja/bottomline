import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSpreadsheet, Scale, ShieldCheck, Globe, Users, Wallet, Lightbulb,
  Briefcase, TrendingUp, PieChart, Target, Landmark, LineChart, 
  Calculator, Banknote, CheckCircle, Building2, HardHat, GraduationCap, 
  BadgePercent, ArrowRight
} from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer flex flex-col h-full"
    >
      {/* Animated Gradient Blob Background */}
      <div className={`absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl opacity-20 transition-all duration-700 ${isHovered ? 'scale-150' : 'scale-100'} ${service.gradientFrom || 'bg-primary'}`}></div>
      
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Icon Container */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-500 ${isHovered ? '-translate-y-2' : ''} ${service.iconBg || 'bg-green-50'}`}>
          <div className={`${service.iconColor || 'text-primary'}`}>
            {service.icon}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>

        {/* Explore Link */}
        <div className={`flex items-center text-sm font-bold uppercase tracking-wider mt-auto ${isHovered ? service.textColor || 'text-primary' : 'text-gray-400'} transition-colors duration-300`}>
          <span>Discover</span>
          <motion.div
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('value-added');

  const basicServices = [
    { 
      title: 'Accounting, Bookkeeping & Reporting', 
      description: 'Accurate and timely recording of financial transactions, ledger maintenance, and generation of insightful financial reports.',
      icon: <FileSpreadsheet size={28} />, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', gradientFrom: 'bg-emerald-400', textColor: 'text-emerald-600'
    },
    { 
      title: 'GST | VAT', 
      description: 'Comprehensive compliance services for Goods and Services Tax and Value Added Tax, ensuring timely filing and adherence to regulations.',
      icon: <Scale size={28} />, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', gradientFrom: 'bg-blue-400', textColor: 'text-blue-600'
    },
    { 
      title: 'Audit Preparation', 
      description: 'Thorough preparation and documentation assistance to ensure smooth internal and external audits.',
      icon: <ShieldCheck size={28} />, iconBg: 'bg-amber-100', iconColor: 'text-amber-600', gradientFrom: 'bg-amber-400', textColor: 'text-amber-600'
    },
    { 
      title: 'Import-Export & LC Documentation', 
      description: 'Expert handling of documentation for international trade, including Letters of Credit and customs compliance.',
      icon: <Globe size={28} />, iconBg: 'bg-purple-100', iconColor: 'text-purple-600', gradientFrom: 'bg-purple-400', textColor: 'text-purple-600'
    },
    { 
      title: 'Payroll Processing', 
      description: 'End-to-end payroll management ensuring accurate calculation of wages, tax deductions, and timely disbursements.',
      icon: <Users size={28} />, iconBg: 'bg-rose-100', iconColor: 'text-rose-600', gradientFrom: 'bg-rose-400', textColor: 'text-rose-600'
    },
    { 
      title: 'Accounts Receivable & Payable', 
      description: 'Efficient management of cash inflows and outflows to maintain optimal liquidity.',
      icon: <Wallet size={28} />, iconBg: 'bg-teal-100', iconColor: 'text-teal-600', gradientFrom: 'bg-teal-400', textColor: 'text-teal-600'
    },
    { 
      title: 'IT Advisory', 
      description: 'Strategic guidance on implementing financial software and IT systems to streamline business operations.',
      icon: <Lightbulb size={28} />, iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', gradientFrom: 'bg-indigo-400', textColor: 'text-indigo-600'
    },
  ];

  const valueAddedServices = [
    { 
      title: 'CFO & Non-Executive Director Services', 
      description: 'High-level financial leadership and strategic board-level advisory without the full-time cost.', 
      icon: <Briefcase size={28} />, iconBg: 'bg-violet-100', iconColor: 'text-violet-600', gradientFrom: 'bg-violet-400', textColor: 'text-violet-600'
    },
    { 
      title: 'Strategic Cost & Financial Management', 
      description: 'Aligning financial resources with corporate strategy to maximize ROI and business value.', 
      icon: <TrendingUp size={28} />, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', gradientFrom: 'bg-emerald-400', textColor: 'text-emerald-600'
    },
    { 
      title: 'Management Accounting & Reporting', 
      description: 'Providing management with actionable financial insights and KPIs for informed decision-making.', 
      icon: <PieChart size={28} />, iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600', gradientFrom: 'bg-cyan-400', textColor: 'text-cyan-600'
    },
    { 
      title: 'Financial Planning, Budgeting & Analysis', 
      description: 'Robust financial forecasting, variance analysis, and budget formulation.', 
      icon: <Target size={28} />, iconBg: 'bg-orange-100', iconColor: 'text-orange-600', gradientFrom: 'bg-orange-400', textColor: 'text-orange-600'
    },
    { 
      title: 'Cash Flow, Working Capital & Treasury', 
      description: 'Optimizing liquidity, managing financial risks, and ensuring operational stability.', 
      icon: <Landmark size={28} />, iconBg: 'bg-fuchsia-100', iconColor: 'text-fuchsia-600', gradientFrom: 'bg-fuchsia-400', textColor: 'text-fuchsia-600'
    },
    { 
      title: 'Value Creation & Growth', 
      description: 'Identifying new revenue streams and cost optimization opportunities to drive overall growth.',
      icon: <LineChart size={28} />, iconBg: 'bg-lime-100', iconColor: 'text-lime-600', gradientFrom: 'bg-lime-400', textColor: 'text-lime-600'
    },
    { 
      title: 'Cost Analysis, Control & Cost Audit', 
      description: 'Detailed scrutiny of cost structures to eliminate waste and improve operational efficiency.',
      icon: <Calculator size={28} />, iconBg: 'bg-sky-100', iconColor: 'text-sky-600', gradientFrom: 'bg-sky-400', textColor: 'text-sky-600'
    },
    { 
      title: 'Expenses Reduction & Improvement', 
      description: 'Targeted strategies to reduce overheads and enhance overall organizational performance.',
      icon: <Banknote size={28} />, iconBg: 'bg-pink-100', iconColor: 'text-pink-600', gradientFrom: 'bg-pink-400', textColor: 'text-pink-600'
    },
    { 
      title: 'Internal Control & Risk Management', 
      description: 'Designing and implementing robust frameworks to mitigate operational and financial risks.', 
      icon: <CheckCircle size={28} />, iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', gradientFrom: 'bg-yellow-400', textColor: 'text-yellow-600'
    },
    { 
      title: 'Company Formation & Legal Services', 
      description: 'End-to-end support in business setup, regulatory compliance, and corporate governance.',
      icon: <Building2 size={28} />, iconBg: 'bg-rose-100', iconColor: 'text-rose-600', gradientFrom: 'bg-rose-400', textColor: 'text-rose-600'
    },
    { 
      title: 'Corporate Finance & Banking', 
      description: 'Assistance in capital raising, debt restructuring, and managing banking relationships.',
      icon: <BadgePercent size={28} />, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', gradientFrom: 'bg-blue-400', textColor: 'text-blue-600'
    },
    { 
      title: 'Project Management', 
      description: 'Financial oversight and strategic management of major capital projects.',
      icon: <HardHat size={28} />, iconBg: 'bg-amber-100', iconColor: 'text-amber-600', gradientFrom: 'bg-amber-400', textColor: 'text-amber-600'
    },
    { 
      title: 'HR Development', 
      description: 'Financial training and development programs for non-finance executives and teams.',
      icon: <GraduationCap size={28} />, iconBg: 'bg-purple-100', iconColor: 'text-purple-600', gradientFrom: 'bg-purple-400', textColor: 'text-purple-600'
    },
    { 
      title: 'Private & NRI Wealth Management', 
      description: 'Bespoke wealth preservation, growth strategies, and compliance for Non-Resident Indians.',
      icon: <Briefcase size={28} />, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', gradientFrom: 'bg-emerald-400', textColor: 'text-emerald-600'
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Our Services | Bottomline Consultants</title>
        <meta name="description" content="Explore our comprehensive range of basic and value-added financial services, including CFO services, Strategic Cost Management, and NRI Wealth Management." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative py-40 mt-16 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920")' }}
      >
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[2px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
              What We Do
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              From essential accounting to high-level strategic CFO advisory, we engineer tailored financial solutions for every stage of your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Modern Pill Switcher */}
          <div className="flex justify-center mb-16 relative z-20">
            <div className="bg-white p-2 rounded-full shadow-lg border border-gray-100 flex flex-col sm:flex-row gap-2 relative">
              <button
                onClick={() => setActiveTab('value-added')}
                className={`relative px-8 py-4 rounded-full font-bold text-lg text-center transition-colors duration-300 z-10 ${
                  activeTab === 'value-added' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeTab === 'value-added' && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-primary rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                Value Added Services
              </button>
              <button
                onClick={() => setActiveTab('basic')}
                className={`relative px-8 py-4 rounded-full font-bold text-lg text-center transition-colors duration-300 z-10 ${
                  activeTab === 'basic' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeTab === 'basic' && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-primary rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                Basic Services
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {activeTab === 'value-added' && (
                <motion.div
                  key="value-added"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic & Value Added Services</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Advanced financial strategies and board-level advisory designed to catapult your business profitability and operational efficiency.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {valueAddedServices.map((service, idx) => (
                      <ServiceCard key={idx} service={service} index={idx} />
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'basic' && (
                <motion.div
                  key="basic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Financial Services</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Rock-solid essential accounting and compliance solutions ensuring your day-to-day operations remain flawless and audit-ready.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {basicServices.map((service, idx) => (
                      <ServiceCard key={idx} service={service} index={idx} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900 rounded-full filter blur-[100px] opacity-60 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
          >
            Ready to Optimize Your Financial Strategy?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-green-100 text-xl mb-12"
          >
            Let's discuss how our services can be tailored to meet your unique business challenges and goals.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 px-7 py-3 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Services;
