import React from "react";
import Footer from "../Component/Common/Footer";
import Navbar from "../Component/Common/Navbar";


const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      
      {/* HEADER */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MainLayout;
