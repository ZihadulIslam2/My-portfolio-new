import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectsData from "../data/projects_v2.json";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const ProjectsPage: React.FC = () => {
    return (
        <div className="bg-bg min-h-screen pt-28">
            <Navbar />

            <section className="px-6 pb-24">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mb-16 text-center"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-8 h-px bg-stroke" />
                            <span className="text-xs text-muted uppercase tracking-[0.3em]">Full Portfolio</span>
                            <div className="w-8 h-px bg-stroke" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display italic text-text-primary mb-6">
                            All <span className="italic">projects</span>
                        </h1>
                        <p className="text-muted max-w-2xl mx-auto">
                            A comprehensive collection of my professional work, ranging from large-scale booking platforms to specialized e-commerce solutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="group relative bg-surface border border-stroke rounded-3xl overflow-hidden"
                            >
                                <Link to={`/projects/${encodeURIComponent(project.title)}`} className="block">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={project.webImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="halftone-overlay absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" />
                                    </div>

                                    <div className="p-6 bg-surface/80 backdrop-blur-md relative">
                                        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted text-sm line-clamp-2 mb-4">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.features?.slice(0, 3).map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-md bg-bg text-muted border border-stroke"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="inline-flex items-center text-accent text-sm font-medium">
                                            <span>View details</span>
                                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/10 rounded-3xl pointer-events-none transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
