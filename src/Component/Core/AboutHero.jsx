import React from "react";

const features = [
  "Retail Solutions",
  "Data Management",
  "Data Visualization",
  "Business Geist",
  "Data Analysis",
  "Data Warehousing",
];

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 -bottom-24 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 xl:gap-24">
        {/* LEFT IMAGE */}
        <div className="group relative flex justify-center animate-slide-left">
          <div className="relative">
            <img
              src="https://templates.hibootstrap.com/zinka/default/assets/img/about/about-img2.png"
              alt="About illustration"
              className="w-full max-w-[520px] transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 lg:hover:scale-[1.05]"
            />
            {/* Image glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/20 via-blue-400/20 to-orange-400/20 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8 animate-slide-right">
          {/* Tag */}
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-orange-400 to-orange-500" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              About Us
            </span>
            <span className="h-px w-12 bg-gradient-to-r from-orange-400 to-orange-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl xl:text-5xl">
            Grow Your Business 
            <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              With Our Agency
            </span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-slate-600 md:text-lg">
            <p>
              We have 30 years of experience. Our strategy includes consistently
              evolving to ensure we're producing exceptional SEO for business.
            </p>
            <p className="text-sm text-slate-500 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* FEATURES – Staggered Premium Pills */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((item, i) => (
              <div
                key={i}
                className="feature-pill group relative flex cursor-pointer items-center gap-3 rounded-2xl bg-gradient-to-r from-[#ff5a00] to-[#ff6b00] px-6 py-5 text-white shadow-[0_15px_45px_rgba(255,90,0,0.4)] backdrop-blur-sm transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_25px_65px_rgba(255,90,0,0.6)] hover:rotate-[1deg]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* LEFT BLUE CHECK CIRCLE */}
                <div className="absolute -left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#1e40af] to-[#1d4ed8] shadow-[0_10px_30px_rgba(30,64,175,0.7)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* NUMBER */}
                <span className="text-lg font-black text-yellow-100 opacity-95 drop-shadow-sm group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* TEXT */}
                <span className="text-base font-semibold leading-tight tracking-wide group-hover:tracking-[0.02em]">
                  {item}
                </span>

                {/* Hover glow overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300/40 to-orange-300/40 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
