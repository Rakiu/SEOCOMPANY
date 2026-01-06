import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-150 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="relative">
        {/* Outer soft glow */}
        <div className="w-8 h-8 rounded-full bg-orange-400/20 blur-md -translate-x-1/2 -translate-y-1/2" />
        {/* Main dot */}
        <div className="cursor-dot-main" />
      </div>
    </div>
  );
};

export default CustomCursor;
