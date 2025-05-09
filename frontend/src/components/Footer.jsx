
import React from 'react';
import { Users, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">TutorXpert</h3>
            <p className="text-sm">Empowering students with quality education, one session at a time.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Find a Tutor</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Become a Tutor</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@tutorxpert.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-fuchsia-400"><MessageSquare size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-fuchsia-400"><Users size={20}/></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TutorXpert. All rights reserved.</p>
          <p>Powered by Hostinger Horizons. Current Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  