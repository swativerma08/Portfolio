import { motion } from "framer-motion";

const certifications = [
    {
        date: "July 2025",
        title: "Artificial Intelligence & Machine Learning",
        issuer: "Infynas Learning Solutions",
        description: "Professional training on core AI/ML concepts, neural networks, and practical machine learning implementation.",
    },
    {
        date: "March 2024",
        title: "PYTHON WITH DJANGO",
        issuer: "RAYS IT",
        description: "Comprehensive certification in backend development specializing in Python and the Django framework.",
    },
    {
        date: "March 2024",
        title: "GIT AND GITHUB",
        issuer: "CODENESTERS",
        description: "Hands-on certification for version control, collaborative development, and workflow management using Git and GitHub.",
    },
    {
        date: "September 2024",
        title: "IEEE ICECCT Conference",
        issuer: "Sixth IEEE International Conference",
        description: "Participated and presented project work at the IEEE International Conference on Electrical, Computer and Communication Technologies.",
    },
    {
        date: "December 2024",
        title: "Business Analytics Workshop",
        issuer: "Techfest, IIT Bombay & BSE Institute",
        description: "Intensive workshop covering data analysis techniques, critical thinking, and business problem-solving architectures.",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-32 section-padding relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <div className="mb-16 text-center md:text-left">
                    <p className="text-primary font-heading font-medium text-sm tracking-widest uppercase mb-3">
                        Credentials
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                        Professional Certifications
                    </h2>
                </div>

                <div className="relative">
                    {/* Organic vertical line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border/50" />

                    <div className="space-y-12">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative pl-16 md:pl-20 group"
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300" />

                                <div className="clay-card-elevated p-6 bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/40 transition-all duration-500">
                                    <p className="text-sm text-foreground/80 font-heading mb-1">{cert.date}</p>
                                    <h3 className="text-xl font-heading font-semibold text-primary">{cert.title}</h3>
                                    <p className="text-primary font-heading font-medium mb-2">{cert.issuer}</p>
                                    <p className="text-foreground/80 font-body leading-relaxed">{cert.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
