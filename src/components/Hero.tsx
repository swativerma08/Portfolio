import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const FloatingScene = lazy(() => import("./FloatingScene"));

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden section-padding flex items-center">
      {/* 3D Scene */}
      <div className="absolute inset-0 top-0 right-0 w-full h-full pointer-events-none">
        <Suspense fallback={null}>
          <FloatingScene />
        </Suspense>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto relative z-10"
      >
        {/* Content */}
        <div className="max-w-2xl pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/80 font-body text-lg mb-4 tracking-wide"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6 text-primary"
          >
            Swati
            <br />
            <span className="text-primary">Verma</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-foreground/80 font-body font-light leading-relaxed mb-10 max-w-lg"
          >
            Python & Full-Stack Developer
            <br />
            <span className="block mt-4 text-lg md:text-xl">
              "I build intelligent web systems and cross-platform mobile experiences that solve real-world problems."
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#projects" className="clay-button inline-block">
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block rounded-full px-8 py-3 font-heading font-medium border border-border bg-card/50 backdrop-blur-sm text-foreground hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
