import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919994886943"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-20 right-6 z-40 p-3 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebd5b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      {/* Optional: pulse animation ring */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"></span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
