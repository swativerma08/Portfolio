import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "PROGRAMMING",
    skills: ["Python", "JavaScript"],
  },
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    skills: ["Django", "Node.js", "Supabase"],
  },
  {
    title: "MACHINE LEARNING",
    skills: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "TOOLS",
    skills: ["Git", "GitHub", "n8n"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 section-padding relative overflow-hidden bg-card/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-16">
          <p className="text-primary font-heading font-medium text-sm tracking-[0.2em] uppercase mb-3">
            SKILLS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary">
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clay-card-elevated p-8 bg-card/30 backdrop-blur-sm group"
            >
              <h3 className="text-primary font-heading font-bold text-xs tracking-widest uppercase mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground font-heading text-sm hover:border-primary/50 hover:bg-background transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
