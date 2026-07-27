import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { journalEntries } from "../data/journalEntries";

export const Journal: React.FC = () => {
    return (
        <section className="bg-bg py-24 md:py-32 px-6" id="journal">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-px bg-stroke" />
                            <span className="text-xs text-muted uppercase tracking-[0.3em]">Recent thoughts</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary">
                            The <span className="italic">journal</span>
                        </h2>
                        <p className="text-muted mt-4 max-w-md">
                            A collection of insights and reflections on design and technology.
                        </p>
                    </div>

                    <Link
                        to="/journal"
                        className="hidden md:inline-flex items-center gap-2 rounded-full px-6 py-3 border border-stroke text-sm group hover:border-transparent transition-all relative"
                    >
                        <span className="absolute inset-0 rounded-full p-[1px] hidden group-hover:block accent-gradient -z-10" />
                        View all <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {journalEntries.map((entry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={`/journal/${entry.slug}`}
                                className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-all duration-300 cursor-pointer group"
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                                    <img src={entry.image} alt={entry.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                <div className="flex-grow min-w-0">
                                    <h3 className="text-sm sm:text-lg font-medium text-text-primary line-clamp-1 group-hover:text-accent transition-colors">
                                        {entry.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4 sm:gap-8 flex-shrink-0">
                                    <span className="text-xs text-muted hidden md:block">{entry.time}</span>
                                    <span className="text-xs text-muted pr-4 sm:pr-8">{entry.date}</span>
                                    <div className="hidden sm:flex w-10 h-10 rounded-full border border-stroke items-center justify-center group-hover:bg-text-primary group-hover:text-bg transition-colors">
                                        ↗
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
