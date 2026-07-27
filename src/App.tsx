import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import { ProjectsPage } from "./pages/ProjectsPage";
import { JournalPage } from "./pages/JournalPage";
import { JournalDetailsPage } from "./pages/JournalDetailsPage";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const sectionId = location.hash.replace("#", "");

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const scrollToSection = () => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const frameId = window.requestAnimationFrame(scrollToSection);
    return () => window.cancelAnimationFrame(frameId);
  }, [isLoading, location.pathname, location.hash]);

  return (
    <div className="bg-bg text-text-primary selection:bg-accent/30 selection:text-white min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/journal/:slug" element={<JournalDetailsPage />} />
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
};

export default App;
