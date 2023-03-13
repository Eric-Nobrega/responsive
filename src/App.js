import "./index.css";
import { Navbar } from "./UI Components/Navbar";
import { Footer } from "./UI Components/Footer";
import { HeroSection } from "./Sections/HeroSection";
import { USPSection } from "./Sections/USPSection";

export const App = () => {
  return (
    <div className="bg-slate-800 text-white">
      {/*Outer Div ^ - Contain All Constant Components */}
      {/*Navigatation Bar*/}
      <Navbar />
      <div className="min-h-screen">
        {/*Hero Section*/}
        <HeroSection />
        {/*USP Section*/}
        <USPSection />
      </div>
      {/*Footer*/}
      <Footer />
    </div>
  );
};
