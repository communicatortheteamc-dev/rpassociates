import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                RP
              </div>
              <div className="text-white font-bold text-lg">RP Enviro Associates</div>
            </div> */}
             <img src="/src/assets/Asset1.png" alt="RP Enviro Associates" className="h-12 w-auto" />
            <p className="text-sm leading-relaxed">
              Leading environmental consultants and laboratories providing comprehensive solutions for industries across India.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition">Services</Link></li>
              <li><Link to="/projects" className="hover:text-emerald-400 transition">Projects</Link></li>
              <li><Link to="/industries" className="hover:text-emerald-400 transition">Industries</Link></li>
              <li><Link to="/certifications" className="hover:text-emerald-400 transition">Certifications</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-emerald-400 transition">Environmental Monitoring</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition">Laboratory Testing</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition">EIA Studies</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition">Pollution Control</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition">Environmental Audits</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>6-22-198, L.B.Colony, Vishakapatnam - 530017</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-emerald-400 flex-shrink-0" />
                <a href="tel:+919609509999" className="hover:text-emerald-400 transition">+91 9609509999</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-emerald-400 flex-shrink-0" />
                <a href="mailto:rpeassociates@gmail.com" className="hover:text-emerald-400 transition">rpeassociates@gmail.com</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-emerald-400 transition"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} RP Enviro Associates Labs and Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
