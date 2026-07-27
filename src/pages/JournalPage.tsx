import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { journalEntries } from "../data/journalEntries";

export const JournalPage: React.FC = () => {
    return (
        <div className="bg-bg min-h-screen pt-28">
            <Navbar />

            <section className="px-6 pb-24">
                <div className="max-w-[1100px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mb-16 text-center"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-8 h-px bg-stroke" />
                            <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
                            <div className="w-8 h-px bg-stroke" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display italic text-text-primary mb-6">
                            Recent <span className="italic">writing</span>
                        </h1>
                        <p className="text-muted max-w-2xl mx-auto">
                            Notes on product thinking, frontend craft, and building thoughtful digital experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {journalEntries.map((entry, index) => (
                            <motion.div
                                key={entry.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <Link
                                    to={`/journal/${entry.slug}`}
                                    className="group block h-full overflow-hidden rounded-3xl border border-stroke bg-surface"
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={entry.image}
                                            alt={entry.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-3 flex items-center gap-3 text-xs text-muted">
                                            <span>{entry.date}</span>
                                            <span>{entry.time}</span>
                                        </div>
                                        <h2 className="mb-3 text-2xl font-medium text-text-primary group-hover:text-accent transition-colors">
                                            {entry.title}
                                        </h2>
                                        <p className="text-sm text-muted">
                                            {entry.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
