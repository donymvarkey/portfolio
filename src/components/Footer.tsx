import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Instagram,
} from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/donymvarkey", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/donymvarkey/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/donymvarkey", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dony_varkey/",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "donyvarkey@gmail.com",
      href: "mailto:donyvarkey@gmail.com",
    },
    // { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    // {
    //   icon: MapPin,
    //   text: "San Francisco, CA",
    //   href: "https://maps.google.com",
    // },
  ];

  const quickLinks = [
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Logo className="mb-4" />
            <p className="text-slate-300 font-inter">
              Crafting digital experiences that combine innovation with
              elegance. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -5 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-full text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-space-grotesk">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map(({ text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group font-space-grotesk"
                  >
                    {text}
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="font-space-grotesk">
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Stay Updated
            </h3>
            <p className="text-slate-300 mb-4">
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm font-space-grotesk">
              © {currentYear} Dony M Varkey. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
