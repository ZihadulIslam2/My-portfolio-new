export type JournalEntry = {
    slug: string;
    title: string;
    date: string;
    time: string;
    image: string;
    excerpt: string;
    paragraphs: string[];
};

export const journalEntries: JournalEntry[] = [
    {
        slug: "getting-started-with-react-19",
        title: "Getting Started with React 19",
        date: "Dec 15, 2024",
        time: "5 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        excerpt: "A practical look at the React 19 changes that make day-to-day UI work faster and less noisy.",
        paragraphs: [
            "React 19 keeps pushing the framework toward cleaner data flow and less boilerplate around async UI. The biggest benefit in practice is not a flashy new API, but a smoother mental model for building interfaces that fetch, submit, and update without a pile of glue code.",
            "What matters most for production teams is adopting the new patterns gradually. Shared components, form-heavy surfaces, and loading states usually offer the quickest wins because they benefit immediately from simpler state transitions and clearer rendering behavior.",
        ],
    },
    {
        slug: "mastering-tailwind-css",
        title: "Mastering Tailwind CSS",
        date: "Nov 28, 2024",
        time: "4 min read",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
        excerpt: "How to keep Tailwind expressive without letting utility classes turn into visual noise.",
        paragraphs: [
            "Tailwind works best when it is treated as a design system delivery tool instead of a shortcut for random styling. Teams get the most value when spacing, typography, color, and layout decisions are repeated intentionally across the interface.",
            "The trick is to extract patterns before the markup becomes unmanageable. Reusable wrappers, semantic component APIs, and a few thoughtful CSS variables keep the codebase flexible while preserving the speed that makes Tailwind appealing in the first place.",
        ],
    },
    {
        slug: "the-future-of-web-development",
        title: "The Future of Web Development",
        date: "Oct 10, 2024",
        time: "6 min read",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
        excerpt: "A short reflection on where frontend and product engineering are heading next.",
        paragraphs: [
            "Modern web development is becoming less about choosing one perfect stack and more about assembling reliable systems that balance speed, accessibility, performance, and maintainability. Tooling is getting better, but product clarity still matters more than framework churn.",
            "The teams that stand out are the ones that treat engineering and design as one conversation. Fast feedback loops, thoughtful motion, resilient architecture, and strong content strategy are increasingly part of the same craft instead of separate disciplines.",
        ],
    },
];
