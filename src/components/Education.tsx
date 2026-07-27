import React from "react";
import { motion } from "framer-motion";

const educationData = [
    {
        institution: "Shanto-Mariam University of Creative Technology",
        location: "Dhaka, Bangladesh",
        degree: "Bachelor of Science in Computer Science and Engineering",
        period: "2022 — 2026",
        highlights: [
            {
                title: "Champion — Software Lab Project Show",
                subtitle: "University CSE Dept",
                period: "Fall 2024",
                description:
                    "Awarded 1st place for outstanding software development project among all departmental entries.",
            },
            {
                title: "4th Place — Datathon at SMUCT CSE Fest V3.0",
                subtitle: "Dept of CSE & CSIT, Shanto-Mariam University",
                period: "",
                description:
                    "Secured 4th place in a competitive datathon, strengthening skills in machine learning, data preprocessing, feature engineering, model building, and teamwork under time constraints.",
            },
        ],
    },
];

const certificationsData = [
    {
        title: "Certified Backend Developer",
        issuer: "freeCodeCamp",
        period: "",
        description:
            'Earned certification in "Back End Development and APIs," demonstrating proficiency in Node.js, Express, and MongoDB.',
    },
    {
        title: "Practical Prompt Engineering",
        issuer: "Master.dev (Formerly Frontend Masters)",
        period: "Mar 2026",
        description:
            "Completed course on prompt engineering techniques for effectively working with LLMs and AI models.",
    },
];

export const Education: React.FC = () => {
    return (
        <section className="bg-bg py-24 px-6 relative overflow-hidden" id="education">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-8 h-px bg-stroke" />
                        <span className="text-xs text-muted uppercase tracking-[0.3em]">Background</span>
                        <div className="w-8 h-px bg-stroke" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display italic text-text-primary mb-6">
                        Education & <span className="italic">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-display italic text-text-primary mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            Education
                        </h3>

                        {educationData.map((edu) => (
                            <div
                                key={edu.institution}
                                className="bg-surface border border-stroke rounded-[2rem] p-8 hover:border-accent/20 transition-all duration-500"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h4 className="text-xl font-display italic text-text-primary">
                                            {edu.institution}
                                        </h4>
                                        <p className="text-sm text-muted mt-1">{edu.location}</p>
                                    </div>
                                    <span className="px-4 py-1.5 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-xl whitespace-nowrap">
                                        {edu.period}
                                    </span>
                                </div>

                                <p className="text-text-primary font-medium mb-6">{edu.degree}</p>

                                {edu.highlights.map((h) => (
                                    <div
                                        key={h.title}
                                        className="bg-bg border border-stroke rounded-2xl p-5 mt-4"
                                    >
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className="text-sm font-display italic text-accent">
                                                {h.title}
                                            </span>
                                            {h.period && (
                                                <span className="text-xs text-muted">| {h.period}</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted">{h.description}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-display italic text-text-primary mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            Certifications
                        </h3>

                        {certificationsData.map((cert) => (
                            <div
                                key={cert.title}
                                className="bg-surface border border-stroke rounded-[2rem] p-8 hover:border-accent/20 transition-all duration-500"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h4 className="text-xl font-display italic text-text-primary">
                                            {cert.title}
                                        </h4>
                                        <p className="text-sm text-muted mt-1">{cert.issuer}</p>
                                    </div>
                                    {cert.period && (
                                        <span className="px-4 py-1.5 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-xl whitespace-nowrap">
                                            {cert.period}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-muted leading-relaxed">{cert.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
