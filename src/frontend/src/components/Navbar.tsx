import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "features" },
  { label: "How It Works", href: "how-it-works" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Subscribe", href: "subscribe" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-ocid="navbar"
      className={`sticky top-0 z-50 w-full transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-elevated"
          : "bg-card/90 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-smooth cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollTo("subscribe")}
              data-ocid="navbar-cta-secondary"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={() => scrollTo("features")}
              data-ocid="navbar-cta-primary"
            >
              Get Started Free
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            data-ocid="navbar-mobile-toggle"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-card border-t border-border px-4 py-3 space-y-1 shadow-elevated"
          data-ocid="navbar-mobile-menu"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => {
                scrollTo(link.href);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-smooth"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 pb-1 flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                scrollTo("subscribe");
                setIsOpen(false);
              }}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="w-full"
              onClick={() => {
                scrollTo("features");
                setIsOpen(false);
              }}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
