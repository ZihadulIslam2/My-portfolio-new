import React from "react";
import { Hero } from "../components/Hero";
import { SelectedWorks } from "../components/SelectedWorks";
import { Journal } from "../components/Journal";
import { Explorations } from "../components/Explorations";
import { Stats } from "../components/Stats";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { SkillsSection } from "../components/SkillsSection";
import { About } from "../components/About";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";

export const Home: React.FC = () => {
    return (
        <main className="relative">
            <Hero />
            <About />
            <Education />
            <Experience />
            <SelectedWorks />
            <SkillsSection />
            <Journal />
            <Explorations />
            <Stats />
            <ContactForm />
            <Footer />
        </main>
    );
};
