import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
    { name: "Twitter", url: "#" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/zihadulislam2/", icon: <FaLinkedin /> },
    { name: "GitHub", url: "https://github.com/ZihadulIslam2", icon: <FaGithub /> },
];

export const Footer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(hlsUrl);
            hls.attachMedia(video);
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = hlsUrl;
        }
    }, []);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        gsap.to(marquee, {
            xPercent: -50,
            duration: 40,
            ease: "none",
            repeat: -1,
        });
    }, []);

    return (
        <footer className="relative pt-24 md:pt-32 pb-8 md:pb-12 bg-bg overflow-hidden">
            {/* Background Video (Flipped) */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10">
                {/* Marquee */}
                <div className="w-full whitespace-nowrap overflow-hidden border-y border-stroke/50 py-8 mb-24">
                    <div ref={marqueeRef} className="inline-block text-6xl md:text-8xl lg:text-9xl font-display italic text-text-primary/20 uppercase tracking-tighter">
                        {Array(10).fill("Building the Future • ").join("")}
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-[1200px] mx-auto px-6 text-center mb-24">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-text-primary mb-8">
                        Let's create something <span className="italic">extraordinary</span>
                    </h2>
                    <a
                        href="mailto:zihadul708@gmail.com"
                        className="group relative inline-flex items-center gap-2 rounded-full px-12 py-5 bg-text-primary text-bg text-lg font-medium transition-all hover:scale-105 hover:bg-bg hover:text-text-primary"
                    >
                        <span className="absolute inset-0 rounded-full p-[1px] hidden group-hover:block accent-gradient -z-10" />
                        zihadul708@gmail.com
                    </a>
                </div>

                {/* Footer Bar */}
                <div className="max-w-[1200px] mx-auto px-6 pt-12 border-t border-stroke/50 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-muted hover:text-text-primary uppercase tracking-[0.2em] transition-colors flex items-center gap-2"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs text-muted uppercase tracking-[0.2em]">Available for projects</span>
                    </div>

                    <div className="text-[10px] text-muted/50 uppercase tracking-[0.1em]">
                        © 2026 Zihadul Islam. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
