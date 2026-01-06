import React from "react";
import heroImg from "../../assets/HomeSectionImage.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b4db8]">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg-zoom opacity-90"
        style={{
          backgroundImage:
            "url('https://templates.hibootstrap.com/zinka/default/assets/img/counter/counter-bg.png')",
        }}
      />

      {/* FLOATING PARTICLES */}
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="absolute bottom-10 left-1/2 w-2 h-2 bg-white/40 rounded-full particle"
          style={{
            left: `${20 + i * 12}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      {/* BUY NOW */}
      <button className="fixed right-6 top-1/2 z-50 bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-full shadow-lg animate-pulse hover:scale-105 transition">
        Buy Now
      </button>

      {/* BOTTOM WAVE */}
      <img
        src="https://templates.hibootstrap.com/zinka/default/assets/img/home-two/home-two-shape3.png"
        alt="wave"
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-28 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-white/20 text-white animate-fade-up">
            Best for You
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-[56px] font-bold text-white leading-tight animate-fade-up animate-delay-1">
            We’re{" "}
            <span className="text-orange-500 animate-glow">
              Digital
            </span>{" "}
            AI <br />
            Startup Support
          </h1>

          <p className="mt-6 max-w-lg text-white/80 text-base leading-relaxed animate-fade-up animate-delay-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex items-center gap-6 animate-fade-up animate-delay-3">
            <button className="group relative overflow-hidden flex items-center gap-3 px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition hover:scale-105 shadow-xl">
              <span className="btn-shine absolute inset-0" />
              Learn More
              <span className="relative w-9 h-9 rounded-full bg-white text-orange-500 flex items-center justify-center font-bold transition group-hover:rotate-90">
                +
              </span>
            </button>

            <button className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition">
              Play Video
              <span className="text-lg">▶▶</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (3D HOVER) */}
        <div className="relative flex justify-center lg:justify-end animate-float">
          <img
            src={heroImg}
            alt="AI Dashboard Illustration"
            className="w-full max-w-[560px] drop-shadow-2xl transition-transform duration-500 hover:rotate-1 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
