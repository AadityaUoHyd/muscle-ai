import { BicepsFlexed, FacebookIcon, LinkedinIcon, TwitterIcon, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm w-full mt-auto">
      {/* Top border glow full width */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* This is the centered content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <BicepsFlexed className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono text-primary hover:text-purple-500">
                Muscle-AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Muscle-AI. All rights reserved.
            </p>
          </div>

          {/* Main Page Links + Socials */}
          <div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="mt-4 flex justify-center gap-6 text-muted-foreground">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Status */}
          <div>
            <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
            </div>
            <p className="text-xs text-muted-foreground py-2">
              Developed by -{" "}
              <a
                href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-muted-foreground hover:text-primary transition-colors"
              >
                Aaditya B Chatterjee
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
