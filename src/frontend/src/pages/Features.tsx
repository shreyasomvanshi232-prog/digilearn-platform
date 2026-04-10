import { Brain, Mail, MessageSquare, PlayCircle } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Course Recommendations",
    description:
      "Our AI engine analyzes your interests, learning pace, and career goals to suggest the most relevant digital marketing courses — so you always learn what matters most.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: MessageSquare,
    title: "Smart Chatbot Assistance",
    description:
      "Get 24/7 answers to your questions through our intelligent chatbot. Whether you need course guidance or concept explanations, help is always one message away.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: PlayCircle,
    title: "Video-Based Learning Ads",
    description:
      "Discover new topics through engaging short video previews. Watch expert instructors in action before enrolling, so you know exactly what you're signing up for.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Stay on track with automated course reminders, weekly digests, and personalized learning updates. Our email system keeps you motivated without the noise.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why DigiLearn
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intelligent recommendations to always-on support, DigiLearn
            equips every student with the tools for real-world digital marketing
            success.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 hover-lift shadow-card"
                data-ocid={`feature-card-${i}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} ${feature.color} mb-5 group-hover:scale-110 transition-smooth`}
                >
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
