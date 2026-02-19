import { motion } from "framer-motion";
import AboutIllustration from "./AboutIllustration";

export default function About() {
  return (
    <section id="about" className="py-32 section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-center">
          {/* Illustration side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="clay-card-elevated p-8 rotate-[-2deg] bg-card/30 backdrop-blur-sm">
                <AboutIllustration />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full organic-blob animate-float-slow opacity-60 blur-xl" />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-primary font-heading font-medium text-sm tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">
              Passionate Learner,
              <br />
              Dedicated Developer
            </h2>
            <div className="space-y-5 text-foreground/80 font-body text-lg leading-relaxed">
              <p>
                I am a passionate learner and CSE student with a deep interest in building innovative projects that solve real-world problems.
                My journey in technology is driven by a constant desire to improve my skills and explore new horizons.
              </p>
              <p>
                I am dedicated to continuous growth, blending creativity with technical excellence to create impactful digital experiences.
                My goal is to build software that not only works but inspires, reflecting my commitment to excellence and my vision for the future of tech.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
