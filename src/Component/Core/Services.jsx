import React from "react";

const services = [
  {
    title: "Consumer Analytics",
    icon: "📊",
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Marketing Analytics",
    icon: "📣",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Sales Analytics",
    icon: "🧺",
    color: "from-indigo-500 to-violet-400",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* GRADIENT BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-10 h-72 w-72 rounded-full bg-orange-500 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
      </div>

      {/* FLOATING BACKGROUND DOTS */}
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="absolute bottom-10 w-2 h-2 bg-orange-400 rounded-full svc-float-dot"
          style={{
            left: `${12 + i * 14}%`,
            animationDelay: `${i * 1.1}s`,
          }}
        />
      ))}

      {/* DECOR SHAPES */}
      <span className="absolute left-10 top-24 w-3 h-3 bg-orange-400 rounded-full svc-dot" />
      <span className="absolute left-16 top-32 w-10 h-10 rounded-full border border-orange-500/40" />
      <span className="absolute right-10 top-24 w-16 h-16 rounded-3xl border border-indigo-500/30 rotate-12" />

      {/* HEADER */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-orange-400">
          <span className="h-[1px] w-6 bg-orange-400/60" />
          Services
          <span className="h-[1px] w-6 bg-orange-400/60" />
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
          Our Implementation Mission <br className="hidden md:block" />
          is to <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            Serve You Best
          </span>
        </h2>

        <p className="mt-4 text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
          Data-driven strategies, delightful experiences, and measurable outcomes
          crafted for modern businesses.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="relative mt-16 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className={`
              group relative overflow-hidden rounded-2xl 
              border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02]
              backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.8)]
              hover:shadow-[0_22px_80px_rgba(8,47,73,0.9)]
              transition-all duration-500 hover:-translate-y-3 hover:-rotate-1
              svc-animate-fade-up svc-delay-${index + 1}
            `}
          >
            {/* GRADIENT BORDER HOVER RING */}
            <div className="pointer-events-none absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/6 via-white/0 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* TOP GRADIENT STRIP */}
            <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${item.color} mx-auto mt-6 mb-4 opacity-80`} />

            {/* CONTENT */}
            <div className="relative z-10 px-8 pb-8 pt-4">
              {/* ICON */}
              <div className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dashed border-white/15 svc-spin" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/80 shadow-[0_10px_40px_rgba(15,23,42,0.9)]">
                  <span className="text-3xl text-white">{item.icon}</span>
                </div>

                {/* ORBIT DOT */}
                <span className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-400 rounded-full svc-dot shadow-[0_0_12px_rgba(249,115,22,0.9)]" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-slate-400 leading-relaxed">
                Turn scattered data into clear stories, spot revenue
                opportunities faster, and unlock smarter, confident decisions.
              </p>

              {/* CTA */}
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-300 group-hover:text-orange-200 transition-colors">
                <span className="relative">
                  Learn more
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-amber-300 group-hover:w-full transition-all duration-300" />
                </span>
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-orange-400/70 text-xs transition-all duration-300 group-hover:bg-orange-400 group-hover:text-slate-950 group-hover:rotate-90">
                  +
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BUY NOW BUTTON */}
      <button className="fixed right-6 top-1/2 z-50 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-slate-950 font-semibold px-5 py-2.5 rounded-full shadow-[0_14px_45px_rgba(22,163,74,0.6)] transition-transform duration-300 hover:scale-105 hover:translate-x-1 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        Buy Now
      </button>
    </section>
  );
};

export default Services;
