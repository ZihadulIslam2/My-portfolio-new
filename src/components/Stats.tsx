import React from "react";
import { motion } from "framer-motion";

const stats = [
    { label: "Year Experience", value: "1+" },
    { label: "Projects Done", value: "15+" },
    { label: "Satisfied Clients", value: "100%" },
];

export const Stats: React.FC = () => {
    return (
        <section className="bg-bg py-24 md:py-32 px-6 border-t border-stroke/50">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-6xl md:text-8xl font-display text-text-primary mb-4 tabular-nums italic">
                                {stat.value}
                            </div>
                            <div className="text-xs text-muted uppercase tracking-[0.3em]">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
