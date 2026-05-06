import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, LineChart, ShieldCheck, Target, ArrowRight, Building2, TrendingUp, ChevronDown, Globe, Wallet, Lock, FileText } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

/* ── Animated Floating Finance Particles ── */
const FinanceParticles = () => {
  const symbols = ['₹', '$', '€', '£', '↑', '↗', '▲', '✦', '◆'];
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    symbol: symbols[i % symbols.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.6 + 1.0,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.14 + 0.08,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute font-bold text-primary select-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, fontSize: `${p.size}rem`, opacity: p.opacity }}
          animate={{ y: [0, -40, 0], rotate: [0, 15, -15, 0], opacity: [p.opacity, p.opacity * 2.5, p.opacity] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        >
          {p.symbol}
        </motion.span>
      ))}
    </div>
  );
};

/* ── Animated Candlestick Chart ── */
const CandleChart = () => {
  const candles = [
    { h: 60, body: 30, up: true, open: 20 },
    { h: 80, body: 45, up: false, open: 10 },
    { h: 50, body: 25, up: true, open: 15 },
    { h: 90, body: 50, up: true, open: 25 },
    { h: 70, body: 38, up: false, open: 18 },
    { h: 100, body: 55, up: true, open: 30 },
    { h: 75, body: 40, up: true, open: 22 },
  ];
  return (
    <div className="flex items-end gap-3 h-32">
      {candles.map((c, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: i * 0.15 + 0.5, duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center"
          style={{ transformOrigin: 'bottom' }}
        >
          <div className={`w-0.5 ${c.up ? 'bg-emerald-400' : 'bg-red-400'}`} style={{ height: `${(c.h - c.body) / 2}px` }} />
          <div className={`w-5 rounded-sm ${c.up ? 'bg-emerald-400' : 'bg-red-400'}`} style={{ height: `${c.body}px` }} />
          <div className={`w-0.5 ${c.up ? 'bg-emerald-400' : 'bg-red-400'}`} style={{ height: `${(c.h - c.body) / 2}px` }} />
        </motion.div>
      ))}
    </div>
  );
};

/* ── Animated Line Graph ── */
const LineGraph = () => {
  const points = [70, 50, 65, 40, 55, 30, 20, 35, 15, 25, 10];
  const w = 220, h = 80;
  const maxY = Math.max(...points);
  const coords = points.map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / maxY) * h}`).join(' ');

  return (
    <svg width={w} height={h} className="opacity-80">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e7d32" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2e7d32" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={coords}
        fill="none"
        stroke="#2e7d32"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
      />
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={(i / (points.length - 1)) * w}
          cy={h - (p / maxY) * h}
          r="3"
          fill="#2e7d32"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 + (i / points.length) * 2 + 0.5, duration: 0.3 }}
        />
      ))}
    </svg>
  );
};

/* ── Counting Number (re-triggers every time it enters viewport) ── */
const CountUp = ({ end, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Reset and restart every time
        setCount(0);
        clearInterval(timerRef.current);
        let start = 0;
        const step = end / 50;
        timerRef.current = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timerRef.current); }
          else setCount(Math.floor(start));
        }, 30);
      } else {
        // Reset when out of view so it re-animates next time
        clearInterval(timerRef.current);
        setCount(0);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); clearInterval(timerRef.current); };
  }, [end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const Home = () => {
  const services = [
    { title: 'Accounting & Bookkeeping', description: 'Comprehensive financial record keeping and reporting.', icon: <Briefcase className="w-8 h-8 text-primary" />, link: '/services' },
    { title: 'CFO Services', description: 'Expert financial leadership and strategic guidance.', icon: <TrendingUp className="w-8 h-8 text-primary" />, link: '/services' },
    { title: 'Audit Preparation', description: 'Ensuring your business is audit-ready at all times.', icon: <ShieldCheck className="w-8 h-8 text-primary" />, link: '/services' },
    { title: 'Strategic Cost Management', description: 'Optimizing costs and improving profitability.', icon: <LineChart className="w-8 h-8 text-primary" />, link: '/services' },
    { title: 'Corporate Finance', description: 'Capital structuring, fundraising and financial advisory.', icon: <Building2 className="w-8 h-8 text-primary" />, link: '/services' },
    { title: 'NRI Wealth Management', description: 'Specialized wealth management for Non-Resident Indians.', icon: <Target className="w-8 h-8 text-primary" />, link: '/services' },
  ];

  return (
    <>
      <Helmet>
        <title>Bottomline - Strategic Cost & Financial Management Consultants</title>
        <meta name="description" content="One Stop Solutions for All Your Accounting, Financial and Operational Needs. Based in India serving global clients." />
      </Helmet>

      {/* ── HERO SECTION ── */}
      <section className="relative bg-gradient-to-br from-[#f0faf0] via-white to-[#e8f5e9] pt-24 pb-10 lg:pt-32 lg:pb-20 overflow-hidden min-h-screen flex items-center">
        
        {/* Finance Symbol Particles */}
        <FinanceParticles />

        {/* Animated background blobs */}
        <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[-15%] right-[-10%] w-[50%] h-[70%] bg-primary/5 rounded-full blur-[80px] z-0" />
        <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[-15%] left-[-10%] w-[45%] h-[60%] bg-accent/5 rounded-full blur-[80px] z-0" />

        {/* Dotted grid */}
        <div className="absolute inset-0 opacity-[0.035] z-0" style={{ backgroundImage: 'radial-gradient(circle, #2e7d32 1px, transparent 0)', backgroundSize: '28px 28px' }} />

        {/* Live Financial Chart Widgets (decorative) */}
        <div className="absolute bottom-12 right-8 hidden lg:block z-10">
          <motion.div
            initial={{ opacity: 0, x: 60, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 shadow-xl border border-green-100"
          >
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3">Portfolio Performance</p>
            <LineGraph />
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-emerald-600 font-bold">+18.4% YoY Growth</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-28 left-8 hidden xl:block z-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 shadow-xl border border-green-100"
          >
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3">Market Activity</p>
            <CandleChart />
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs text-primary font-bold">Real-time Advisory</span>
            </div>
          </motion.div>
        </div>

        {/* Floating stat pill (top right) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute top-36 right-8 hidden lg:flex xl:hidden items-center gap-2 bg-white/80 backdrop-blur-lg px-4 py-2.5 rounded-full shadow-lg border border-green-100 z-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-sm font-bold text-gray-700">50+ Global Clients</span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Strategic Cost & Financial Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]"
          >
            One Stop Solutions for <br className="hidden md:block" />
            <span className="text-primary">All Your Financial</span>
            <br className="hidden md:block" /> &amp; <span className="text-accent">Operational Needs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto mb-10 font-light leading-relaxed"
          >
            Where your success begins - trusted by businesses across India and the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="group bg-primary hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all shadow-lg shadow-green-200 hover:shadow-green-300 flex items-center justify-center gap-2">
              Get a Free Consultation
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
            <Link to="/services" className="bg-white text-gray-800 border border-gray-200 hover:border-primary hover:text-primary px-6 py-3 rounded-xl font-semibold text-base transition-all shadow-sm">
              Explore Our Services
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex flex-col items-center text-gray-400"
          >
            <span className="text-xs uppercase tracking-widest font-semibold mb-2">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── Financial Terms */}
      <div className="bg-gray-900 py-4 overflow-hidden border-y border-gray-800">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
          className="flex gap-12 w-max text-sm font-semibold whitespace-nowrap"
        >
          {[
            { icon: <LineChart className="w-4 h-4" />, label: 'Strategic Cost Management', color: 'text-primary' },
            { icon: <Briefcase className="w-4 h-4" />, label: 'CFO Advisory', color: 'text-emerald-400' },
            { icon: <Globe className="w-4 h-4" />, label: 'NRI Wealth Planning', color: 'text-gray-400' },
            { icon: <TrendingUp className="w-4 h-4" />, label: 'Financial Analysis', color: 'text-primary' },
            { icon: <Building2 className="w-4 h-4" />, label: 'Corporate Finance', color: 'text-emerald-400' },
            { icon: <ShieldCheck className="w-4 h-4" />, label: 'Audit Preparation', color: 'text-gray-400' },
            { icon: <Wallet className="w-4 h-4" />, label: 'Cash Flow Optimization', color: 'text-primary' },
            { icon: <Lock className="w-4 h-4" />, label: 'Risk Management', color: 'text-emerald-400' },
            { icon: <FileText className="w-4 h-4" />, label: 'GST | VAT Compliance', color: 'text-gray-400' },
            { icon: <LineChart className="w-4 h-4" />, label: 'Strategic Cost Management', color: 'text-primary' },
            { icon: <Briefcase className="w-4 h-4" />, label: 'CFO Advisory', color: 'text-emerald-400' },
            { icon: <Globe className="w-4 h-4" />, label: 'NRI Wealth Planning', color: 'text-gray-400' },
            { icon: <TrendingUp className="w-4 h-4" />, label: 'Financial Analysis', color: 'text-primary' },
            { icon: <Building2 className="w-4 h-4" />, label: 'Corporate Finance', color: 'text-emerald-400' },
            { icon: <ShieldCheck className="w-4 h-4" />, label: 'Audit Preparation', color: 'text-gray-400' },
            { icon: <Wallet className="w-4 h-4" />, label: 'Cash Flow Optimization', color: 'text-primary' },
            { icon: <Lock className="w-4 h-4" />, label: 'Risk Management', color: 'text-emerald-400' },
            { icon: <FileText className="w-4 h-4" />, label: 'GST | VAT Compliance', color: 'text-gray-400' },
          ].map((item, i) => (
            <span key={i} className={`flex items-center gap-2 ${item.color}`}>
              {item.icon}
              {item.label}
              <span className="text-gray-700 ml-4">◆</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">About Bottomline</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Empowering Your <span className="text-primary">Business Growth</span></h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bottomline is a premier Strategic Cost & Financial Management Consulting Company based in India. We cater to domestic and overseas clients, providing tailored solutions to optimize costs, enhance profitability, and ensure regulatory compliance.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary font-semibold hover:text-green-800 transition-colors gap-2">
                Read our full story <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 mt-12 lg:mt-0"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: 20, suffix: '+', label: 'Years Experience', color: 'from-green-50 to-emerald-50', border: 'border-green-100', text: 'text-primary' },
                  { value: 50, suffix: '+', label: 'Global Clients', color: 'from-blue-50 to-cyan-50', border: 'border-blue-100', text: 'text-blue-600' },
                  { value: 100, suffix: '%', label: 'Commitment', color: 'from-violet-50 to-purple-50', border: 'border-violet-100', text: 'text-violet-600' },
                  { value: 15, suffix: '+', label: 'Expert Services', color: 'from-orange-50 to-amber-50', border: 'border-orange-100', text: 'text-orange-500' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 border ${stat.border} text-center shadow-sm hover:shadow-md transition-all`}
                  >
                    <h3 className={`text-5xl font-extrabold ${stat.text} mb-2`}>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES HIGHLIGHTS ── */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2e7d32 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">What We Offer</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-500 font-light">Comprehensive financial and management solutions tailored to your unique business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(46,125,50,0.1)' }}
                className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-gray-100 transition-all group cursor-pointer"
              >
                <div className="bg-green-50 group-hover:bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <div className="group-hover:[&>*]:text-white transition-colors duration-300">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <Link to={service.link} className="text-primary font-semibold flex items-center gap-1 hover:text-green-800 transition-colors group/link">
                  Learn more
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 bg-white text-primary border border-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-all shadow-sm hover:shadow-lg">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-28 bg-gray-900 relative overflow-hidden">
        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full filter blur-[100px]" />
        <motion.div animate={{ scale: [1, 1.4, 1], x: [0, -30, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/50 rounded-full filter blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Let's Grow Together
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Business Begins with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Value Creation,</span>
              <br />Grows with Bottomline.
            </h2>
            <p className="text-gray-400 text-xl mb-10 font-light">
              Partner with us to streamline your finances, optimize your costs, and accelerate your growth.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-green-700 text-white px-7 py-3 rounded-xl font-bold text-base transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1">
              Let's Talk Business <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
