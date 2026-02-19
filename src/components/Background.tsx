import { motion } from "framer-motion";

export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
            {/* Primary Glow Blob */}
            <motion.div
                animate={{
                    x: [0, 100, 0, -100, 0],
                    y: [0, -50, 50, -50, 0],
                    scale: [1, 1.2, 0.8, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"
            />

            {/* Secondary Glow Blob */}
            <motion.div
                animate={{
                    x: [0, -120, 0, 120, 0],
                    y: [0, 80, -80, 80, 0],
                    scale: [1, 0.9, 1.2, 0.7, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[140px]"
            />

            {/* Subtle Accent Blob */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]"
            />

            {/* Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] opacity-50" />
        </div>
    );
}
