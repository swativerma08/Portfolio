export default function Footer() {
  return (
    <footer className="py-12 section-padding border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-foreground/80 font-heading text-sm font-medium">
          © 2026 Swati Verma. Built with care.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/swativerma08"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/swati-verma-53b949285/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/swati.verma__10/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
