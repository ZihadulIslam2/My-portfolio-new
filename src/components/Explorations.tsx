import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const explorations = [
    { id: 1, image: "/images/automotive_motion_project_1781351413236.png", rotate: "-6deg" },
    { id: 2, image: "/images/urban_architecture_project_1781351425622.png", rotate: "4deg" },
    { id: 3, image: "/images/human_perspective_project_1781351436816.png", rotate: "-2deg" },
    { id: 4, image: "/images/brand_identity_project_1781351448225.png", rotate: "8deg" },
    { id: 5, image: "/images/journal_entry_1_1781351497509.png", rotate: "-4deg" },
    { id: 6, image: "/images/journal_entry_2_1781351509389.png", rotate: "5deg" },
];

export const Explorations: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin center content
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: contentRef.current,
                pinSpacing: false,
            });

            // Parallax for columns
            gsap.to(leftColRef.current, {
                y: -200,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.to(rightColRef.current, {
                y: 200,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
            {/* Layer 1: Pinned Center */}
            <div
                ref={contentRef}
                className="h-screen w-full flex flex-col items-center justify-center text-center px-6 z-10"
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-px bg-stroke" />
                    <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display text-text-primary mb-6">
                    Visual <span className="italic">playground</span>
                </h2>
                <p className="text-muted max-w-sm mb-8">
                    A deep dive into experimental projects and creative fragments.
                </p>
                <button className="group relative rounded-full px-8 py-3 bg-surface border border-stroke text-sm text-text-primary transition-all hover:border-transparent">
                    <span className="absolute inset-0 rounded-full p-[1px] hidden group-hover:block accent-gradient -z-10" />
                    View on Dribbble
                </button>
            </div>

            {/* Layer 2: Parallax Columns */}
            <div className="absolute inset-0 pt-[20vh] pointer-events-none">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-12 md:gap-40 px-6">
                    <div ref={leftColRef} className="flex flex-col gap-12 md:gap-24 items-end">
                        {explorations.slice(0, 3).map((item) => (
                            <div
                                key={item.id}
                                className="w-full max-w-[320px] aspect-square bg-surface border border-stroke rounded-2xl overflow-hidden pointer-events-auto cursor-pointer"
                                style={{ transform: `rotate(${item.rotate})` }}
                            >
                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div ref={rightColRef} className="flex flex-col gap-12 md:gap-24 items-start translate-y-40">
                        {explorations.slice(3, 6).map((item) => (
                            <div
                                key={item.id}
                                className="w-full max-w-[320px] aspect-square bg-surface border border-stroke rounded-2xl overflow-hidden pointer-events-auto cursor-pointer"
                                style={{ transform: `rotate(${item.rotate})` }}
                            >
                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
