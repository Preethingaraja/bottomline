import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-primary tracking-tight">
                bottomline
              </span>
              <span className="text-xs text-accent font-medium mt-[-2px]">
                where your success begins!
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Strategic Cost & Financial Management Consulting Company providing comprehensive solutions for domestic and overseas clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors">Industries We Serve</Link></li>
              <li><Link to="/global" className="text-gray-400 hover:text-white transition-colors">Global Reach</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Key Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Strategic Cost Management</li>
              <li className="text-gray-400 text-sm">CFO Services</li>
              <li className="text-gray-400 text-sm">Audit Preparation</li>
              <li className="text-gray-400 text-sm">Private & NRI Wealth Management</li>
              <li className="text-gray-400 text-sm">Corporate Finance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm">India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="tel:+919994886943" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91 99948 86943
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <a href="mailto:rkshah2018@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  rkshah2018@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Bottomline SCF Management Consultants. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
