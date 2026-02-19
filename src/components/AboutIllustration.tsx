import { motion } from "framer-motion";

export default function AboutIllustration() {
    return (
        <div className="relative w-full aspect-[4/5] flex items-center justify-center">
            <motion.svg
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full max-w-[320px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Background Decorative Circle */}
                <motion.circle
                    cx="200"
                    cy="250"
                    r="150"
                    fill="currentColor"
                    className="text-primary/5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                />

                {/* Floating Code Icons */}
                <motion.g
                    initial={{ y: 0 }}
                    animate={{ y: -10 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                    <path
                        d="M80 150L60 170L80 190"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="text-primary"
                    />
                    <path
                        d="M100 150L120 170L100 190"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="text-primary"
                    />
                </motion.g>

                <motion.g
                    initial={{ y: 0 }}
                    animate={{ y: 10 }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                >
                    <circle cx="320" cy="180" r="15" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                    <path d="M310 180H330" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                </motion.g>

                {/* Character / Person */}
                <g className="text-primary">
                    {/* Body */}
                    <path
                        d="M140 380C140 350 160 330 200 330C240 330 260 350 260 380V450H140V380Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    {/* Head */}
                    <circle cx="200" cy="280" r="40" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                    {/* Laptop */}
                    <motion.path
                        d="M160 380H240L250 420H150L160 380Z"
                        fill="black"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ rotateX: 90 }}
                        animate={{ rotateX: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    />
                    {/* Screen glow */}
                    <rect x="175" y="390" width="50" height="20" rx="2" fill="currentColor" className="opacity-20 animate-pulse" />
                </g>

                {/* Desk Line */}
                <line x1="100" y1="450" x2="300" y2="450" stroke="currentColor" strokeWidth="2" className="text-primary/20" />
            </motion.svg>

            {/* Modern Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
        </div>
    );
}
