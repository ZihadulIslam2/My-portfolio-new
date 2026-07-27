import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { journalEntries } from "../data/journalEntries";

export const JournalDetailsPage: React.FC = () => {
    const { slug } = useParams();
    const entry = journalEntries.find((item) => item.slug === slug);

    if (!entry) {
        return <Navigate to="/journal" replace />;
    }

    return (
        <div className="bg-bg min-h-screen pt-28">
            <Navbar />

            <article className="px-6 pb-24">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <Link
                            to="/journal"
                            className="inline-flex items-center gap-2 text-sm text-muted hover:text-text-primary transition-colors mb-8"
                        >
                            <span>←</span>
                            <span>Back to journal</span>
                        </Link>

                        <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                            <span>{entry.date}</span>
                            <span>{entry.time}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-display italic text-text-primary mb-6">
                            {entry.title}
                        </h1>

                        <p className="text-lg text-muted mb-10">
                            {entry.excerpt}
                        </p>

                        <div className="overflow-hidden rounded-[32px] border border-stroke mb-10">
                            <img src={entry.image} alt={entry.title} className="w-full h-auto object-cover" />
                        </div>

                        <div className="space-y-6 text-base leading-8 text-text-primary/90">
                            {entry.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </article>

            <Footer />
        </div>
    );
};
