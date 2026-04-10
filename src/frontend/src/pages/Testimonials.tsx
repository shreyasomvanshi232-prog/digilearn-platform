import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Digital Marketing Manager @ TechNova",
    initials: "AR",
    rating: 5,
    review:
      "DigiLearn's AI recommendations were spot-on. I went from knowing basic SEO to running full-funnel campaigns in under 3 months. The chatbot support saved me hours of searching.",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "Sarah Mitchell",
    role: "Freelance Content Strategist",
    initials: "SM",
    rating: 5,
    review:
      "The video-based learning format is incredibly engaging. I loved how the platform knew exactly which course to push next. Got my first client within 6 weeks of completing the social media module.",
    color: "bg-accent/20 text-accent",
  },
  {
    name: "Ben Lee",
    role: "Marketing Associate @ GrowthBase",
    initials: "BL",
    rating: 5,
    review:
      "I tried several platforms before DigiLearn. The difference is the AI — it actually adapts to how fast you learn. The email reminders kept me accountable without feeling pushy.",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "Priya Sharma",
    role: "E-commerce Entrepreneur",
    initials: "PS",
    rating: 4,
    review:
      "As someone running my own store, the PPC and email marketing courses were exactly what I needed. The real-world campaign exercises translated directly into revenue for my business.",
    color: "bg-accent/20 text-accent",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${i}-of-${count}`}
          size={15}
          className={
            i < count
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground/40"
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.95 0.02 230) 0%, oklch(0.98 0.008 230) 100%)",
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
            Student Success Stories
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Loved by Thousands of Learners
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real students. Real results. See what our community says about
            learning digital marketing with AI.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover-lift flex flex-col gap-4"
              data-ocid={`testimonial-card-${i}`}
            >
              <StarRating count={t.rating} />

              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                "{t.review}"
              </blockquote>

              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stat */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-base">
            Join over{" "}
            <span className="font-semibold text-foreground">
              50,000+ students
            </span>{" "}
            already transforming their digital marketing careers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
