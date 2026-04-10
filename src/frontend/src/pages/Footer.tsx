import { Linkedin, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const footerLinks = {
  Platform: [
    { label: "Courses", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#subscribe" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#subscribe" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

type SocialItem =
  | { type: "lucide"; Icon: LucideIcon; href: string; label: string }
  | { type: "react-icons"; Icon: IconType; href: string; label: string };

const socials: SocialItem[] = [
  { type: "lucide", Icon: Linkedin, href: "#", label: "LinkedIn" },
  { type: "react-icons", Icon: SiX, href: "#", label: "X (Twitter)" },
  { type: "react-icons", Icon: SiFacebook, href: "#", label: "Facebook" },
  { type: "react-icons", Icon: SiInstagram, href: "#", label: "Instagram" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    window.location.hostname,
  )}`;

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 font-display font-bold text-xl text-foreground hover:text-primary transition-colors"
              aria-label="DigiLearn home"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                <Zap size={16} strokeWidth={2.5} />
              </span>
              DigiLearn
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered digital marketing education for the next generation of
              marketers. Learn smarter, grow faster.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map((social) => {
                const { Icon, href, label } = social;
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() =>
                        link.href.startsWith("#")
                          ? scrollToId(link.href)
                          : undefined
                      }
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {year}. Built with love using{" "}
            <a
              href={utmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-center">
            Empowering students and professionals to master digital marketing
            worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
