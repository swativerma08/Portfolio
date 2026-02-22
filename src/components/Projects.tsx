import { motion } from "framer-motion";

const projects = [
  {
    title: "Food Ordering System",
    description: "A comprehensive full-stack platform for managing food orders, user profiles, and delivery tracking.",
    tags: ["Python", "Django", "React", "PostgreSQL"],
    color: "bg-sage-light",
    emoji: "🍕",
  },
  {
    title: "Scriptsetu",
    description: "Cross-platform mobile app featuring camera-based translation and real-time vision features.",
    tags: ["React Native", "Expo", "AI Vision"],
    color: "bg-coral-light",
    emoji: "📸",
  },
  {
    title: "Code Arena",
    description: "Competitive programming environment with real-time diagnostics and coding challenges.",
    tags: ["React", "Node.js", "Supabase"],
    color: "bg-sky-light",
    emoji: "⚔️",
  },
  {
    title: "Crop Advisory",
    description: "Offline-first mobile tool for farmers to diagnose crop diseases and access advisory services.",
    tags: ["React", "PWA", "Machine Learning"],
    color: "bg-secondary",
    emoji: "🌾",
  },
  {
    title: "College Management System",
    description: "An industrial-grade web application to digitalize institutional academic and administrative operations with role-based modules.",
    tags: ["Python", "Modular Architecture", "Automation"],
    color: "bg-indigo-light",
    emoji: "🎓",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-heading font-medium text-sm tracking-widest uppercase mb-3">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Things I've built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`clay-card group cursor-pointer overflow-hidden ${i === 0 ? "md:translate-y-8" : ""} ${i === 3 ? "md:-translate-y-8" : ""}`}
            >
              <div className={`${project.color} p-12 flex items-center justify-center`}>
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                  {project.emoji}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-heading font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
