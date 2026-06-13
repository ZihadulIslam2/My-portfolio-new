import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
    onComplete: () => void;
}

const words = ["Design", "Create", "Inspire"];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [count, setCount] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const startTimeRef = useRef<number | null>(null);
    const duration = 2700;

    useEffect(() => {
        const animate = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const progress = timestamp - startTimeRef.current;
            const nextCount = Math.min(Math.floor((progress / duration) * 100), 100);

            setCount(nextCount);

            if (nextCount < 100) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    onComplete();
                }, 400);
            }
        };

        requestAnimationFrame(animate);
    }, [onComplete]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 900);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12 overflow-hidden"
        >
            <div className="flex justify-between items-start">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-xs text-muted uppercase tracking-[0.3em]"
                >
                    Portfolio
                </motion.div>
            </div>

            <div className="flex justify-center items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={words[wordIndex]}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
                    >
                        {words[wordIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex flex-col items-end gap-4">
                <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
                    {String(count).padStart(3, "0")}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
                <motion.div
                    className="h-full accent-gradient"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: count / 100 }}
                    style={{ originX: 0, boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)" }}
                />
            </div>
        </motion.div>
    );
};
