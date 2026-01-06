import React from "react";

const stats = [
  { value: "10 Years", label: "Glorious Years" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "70+", label: "Team Members" },
  { value: "25+", label: "Senior Scientist" },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b4db8] py-20">

      {/* 🔹 TOP BACKGROUND IMAGE */}
      <div
        className="absolute top-0 left-0 w-full h-[180px] bg-no-repeat bg-cover opacity-100"
        style={{
          backgroundImage:
            "url('https://templates.hibootstrap.com/zinka/default/assets/img/counter/counter-bg.png')",
        }}
      />

      {/* 🔹 BOTTOM BACKGROUND IMAGE */}
      <div
        className="absolute bottom-0 left-0 w-full h-[220px] bg-no-repeat bg-cover opacity-100"
        style={{
          backgroundImage:
            "url('https://templates.hibootstrap.com/zinka/default/assets/img/counter/counter-shape.png')",
        }}
      />

    

      {/* 🔹 CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center"
            >
              <h3 className="text-4xl font-bold text-white md:text-5xl">
                {item.value}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-wide text-white/80">
                {item.label}
              </p>

              {/* 🔹 DOTTED DIVIDER (DESKTOP ONLY) */}
              {index !== stats.length - 1 && (
                <span className="hidden lg:block absolute -right-5 top-1/2 h-12 -translate-y-1/2 border-r border-dotted border-white/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
