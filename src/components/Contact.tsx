import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = {
    email: "iamswativerma10@gmail.com",
    github: "swativerma08",
    linkedin: "swati-verma-53b949285",
    location: "Raipur, Chhattisgarh",
    available: true,
  };

  return (
    <section id="contact" className="py-32 section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-medium text-sm tracking-widest uppercase mb-3">
            Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Get In Touch
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Terminal UI */}
          <div className="clay-card-elevated overflow-hidden border border-border/50 shadow-2xl bg-card/40 backdrop-blur-md">
            {/* Terminal Header */}
            <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs font-mono text-muted-foreground">contact.terminal</div>
              <div className="w-12" />
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 space-y-6 text-sm md:text-base leading-relaxed font-mono">
              <div className="flex gap-3">
                <span className="text-primary font-bold">$</span>
                <p className="text-foreground/90">
                  <span className="text-primary">cat</span> contact_info.json
                </p>
              </div>

              <div className="pl-6 text-foreground/80 space-y-1">
                <p>{"{"}</p>
                <p className="pl-4"><span className="text-primary">"name"</span>: "Swati Verma",</p>
                <p className="pl-4"><span className="text-primary">"role"</span>: "Full Stack Developer",</p>
                <p className="pl-4"><span className="text-primary">"email"</span>: <a href="mailto:iamswativerma10@gmail.com" className="text-secondary hover:underline">"{contactInfo.email}"</a>,</p>
                <p className="pl-4"><span className="text-primary">"github"</span>: <a href="https://github.com/swativerma08" target="_blank" className="text-secondary hover:underline">"{contactInfo.github}"</a>,</p>
                <p className="pl-4"><span className="text-primary">"linkedin"</span>: <a href="https://www.linkedin.com/in/swati-verma-53b949285/" target="_blank" className="text-secondary hover:underline">"{contactInfo.linkedin}"</a>,</p>
                <p className="pl-4"><span className="text-primary">"location"</span>: "{contactInfo.location}"</p>
                <p>{"}"}</p>
              </div>

              <div className="flex gap-3 pt-4">
                <span className="text-primary font-bold">$</span>
                <p className="text-foreground/90 flex gap-2">
                  <span className="text-primary">echo</span>
                  <span className="text-secondary">"Let's build intelligent software together."</span>
                </p>
              </div>

              <div className="flex gap-1 animate-pulse">
                <span className="text-primary font-bold">$</span>
                <span className="w-2 h-5 bg-primary/60" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-8 mt-12 pb-4">
            {["Email", "GitHub", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href={platform === "Email" ? `mailto:${contactInfo.email}` : platform === "GitHub" ? "https://github.com/swativerma08" : "https://www.linkedin.com/in/swati-verma-53b949285/"}
                target={platform !== "Email" ? "_blank" : undefined}
                className="group relative flex flex-col items-center"
              >
                <span className="text-sm font-heading font-medium text-foreground/60 group-hover:text-primary transition-colors">
                  {platform}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
