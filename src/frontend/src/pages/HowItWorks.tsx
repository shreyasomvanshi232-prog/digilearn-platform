import { BookOpen, HeadphonesIcon, Sparkles, UserPlus } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Sign Up & Set Preferences",
    description:
      "Create your free account and tell us about your goals — whether you're a beginner or a seasoned marketer looking to specialize in SEO, PPC, social media, or analytics.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Get AI-Based Course Suggestions",
    description:
      "Our AI engine maps your profile to a personalized learning roadmap, surfacing the exact courses and modules that align with your career trajectory.",
  },
  {
    step: "03",
    icon: BookOpen,
    title: "Learn with Videos & Interactive Content",
    description:
      "Dive into bite-sized video lessons, real-world campaign projects, quizzes, and case studies. Learn at your own pace — on any device, anywhere.",
  },
  {
    step: "04",
    icon: HeadphonesIcon,
    title: "Get Support via Chatbot & Email",
    description:
      "Our AI chatbot is available 24/7 for guidance, and our email system sends timely nudges and weekly learning recaps to keep you on track.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.018 230) 0%, oklch(0.99 0 0) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From signing up to landing your dream role — four simple steps to
            transform your digital marketing career.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.42 0.14 240 / 0.2), oklch(0.6 0.15 170 / 0.2))",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-card border border-border rounded-2xl p-6 shadow-card text-center group hover-lift"
                data-ocid={`step-card-${i}`}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold font-display">
                  {step.step}
                </div>

                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth mt-2">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
