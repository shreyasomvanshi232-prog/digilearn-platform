import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "50K+", label: "Active Students" },
  { value: "200+", label: "Expert Courses" },
  {
    value: "4.9",
    label: "Average Rating",
    icon: <Star size={14} className="fill-current text-yellow-500" />,
  },
  { value: "95%", label: "Career Success" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.90 0.06 240) 0%, oklch(0.96 0.025 220) 40%, oklch(0.99 0 0) 100%)",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.14 240), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-24 w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.15 170), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Zap size={14} strokeWidth={2.5} />
              AI-Powered Learning Platform
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
              Master Digital Marketing with{" "}
              <span
                className="relative"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.42 0.14 240), oklch(0.6 0.15 170))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI-Powered Learning
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Personalized courses, smart recommendations, and career-focused
              training — designed for the modern digital marketer.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="text-base px-7 gap-2 shadow-elevated hover:shadow-card hover-lift"
                onClick={() => {
                  const el = document.getElementById("features");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="hero-cta-primary"
              >
                Explore Courses <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-7"
                onClick={() => {
                  const el = document.getElementById("how-it-works");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="hero-cta-secondary"
              >
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="flex items-center gap-1 font-display font-bold text-2xl text-foreground">
                    {stat.value}
                    {stat.icon}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.7 0.12 240), oklch(0.65 0.14 170))",
                }}
                aria-hidden="true"
              />
              <img
                src="/assets/generated/hero-digital-marketing.dim_600x480.png"
                alt="Student learning digital marketing with AI-powered tools"
                className="relative rounded-3xl shadow-elevated w-full max-w-lg object-cover"
                loading="eager"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl px-4 py-2.5 shadow-elevated border border-border flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-foreground">
                  AI is personalizing your path
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Zap({ size, strokeWidth }: { size: number; strokeWidth: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>Lightning bolt icon</title>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
