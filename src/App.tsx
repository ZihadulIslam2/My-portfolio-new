import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import { ProjectsPage } from "./pages/ProjectsPage";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

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
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
};

export default App;
