import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0A0E1A] pt-[90px] pb-[60px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[60px] mb-[90px]">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center font-bold text-white">
                S
              </div>
              <span className="font-bold text-xl tracking-tight text-white">SaaSify</span>
            </div>
            <p className="text-[#AAB1C3] leading-relaxed text-sm">
              Empowering developers to build, deploy, and scale applications faster than ever before with AI-driven tools.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-[#AAB1C3] hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#AAB1C3] hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-[#AAB1C3] hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="flex flex-col gap-4">
              {['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#AAB1C3] hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Partners'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#AAB1C3] hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#AAB1C3] hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-white opacity-60">
            © {new Date().getFullYear()} SaaSify Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#406a30]" />
              <span className="text-[14px] text-white opacity-60">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
