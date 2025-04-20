import React from "react";
import { Routes, Route } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"; 
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage"; 
import CareerPage from "./pages/CareerPage"; 

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            <div className="text-xl font-bold">HP</div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </main>
      <footer className="bg-background/90 backdrop-blur-sm border-t border-border py-4">
        <div className="container mx-auto px-4 sm:px-6 text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HPParam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;