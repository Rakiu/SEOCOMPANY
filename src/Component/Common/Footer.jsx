import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#121212] text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO + DESC */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Zinka
              </h2>
            </div>

            <p className="leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">
              <SocialIcon bg="bg-blue-600"><Facebook size={16} /></SocialIcon>
              <SocialIcon bg="bg-sky-400"><Twitter size={16} /></SocialIcon>
              <SocialIcon bg="bg-pink-500"><Instagram size={16} /></SocialIcon>
              <SocialIcon bg="bg-red-600"><Youtube size={16} /></SocialIcon>
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <FooterTitle title="Resources" />
            <FooterLink text="Our Scientists" />
            <FooterLink text="Our Services" />
            <FooterLink text="Testimonials" />
            <FooterLink text="SaaS Solutions" />
            <FooterLink text="eCommerce" />
          </div>

          {/* COMPANY */}
          <div>
            <FooterTitle title="Company" />
            <FooterLink text="Home" />
            <FooterLink text="About" />
            <FooterLink text="Case Studies" />
            <FooterLink text="Our Blog" />
            <FooterLink text="Contact" />
          </div>

          {/* ADDRESS */}
          <div>
            <FooterTitle title="Address" />

            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-orange-500" size={18} />
              <span>+449 888 666 0000</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-orange-500" size={18} />
              <span>hello@zinka.com</span>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-orange-500 mt-1" size={18} />
              <span className="text-orange-500">
                855 road, brooklyn street new york 600
              </span>
            </div>

            <button className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

/* ================= REUSABLE ================= */

const FooterTitle = ({ title }) => (
  <h3 className="text-xl font-semibold mb-5 text-gray-900 dark:text-white">
    {title}
  </h3>
);

const FooterLink = ({ text }) => (
  <p className="mb-3 hover:text-orange-500 cursor-pointer transition">
    {text}
  </p>
);

const SocialIcon = ({ children, bg }) => (
  <div
    className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${bg} hover:scale-110 transition cursor-pointer`}
  >
    {children}
  </div>
);

export default Footer;
