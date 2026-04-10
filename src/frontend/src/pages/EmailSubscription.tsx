import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function EmailSubscription() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("You're subscribed! Check your inbox for a welcome email.");
  };

  return (
    <section id="subscribe" className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border shadow-elevated overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.88 0.07 240 / 0.3) 0%, oklch(0.94 0.04 220 / 0.4) 50%, oklch(0.96 0.03 170 / 0.2) 100%)",
          }}
        >
          <div className="p-8 sm:p-12 text-center space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 text-primary mx-auto">
              <Mail size={28} strokeWidth={1.8} />
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
                Ready to Transform Your{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.42 0.14 240), oklch(0.6 0.15 170))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Digital Marketing Skills?
                </span>
              </h2>
              <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
                Subscribe to get free course updates, weekly marketing tips, and
                exclusive early access to new modules — delivered straight to
                your inbox.
              </p>
            </div>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                noValidate
              >
                <Input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-card border-border h-11"
                  aria-label="Email address"
                  data-ocid="subscribe-email-input"
                  required
                />
                <Button
                  type="submit"
                  size="default"
                  className="h-11 px-6 whitespace-nowrap shadow-card hover-lift"
                  data-ocid="subscribe-submit"
                >
                  Get Free Course Updates
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center gap-3 text-accent font-medium"
                data-ocid="subscribe-success"
              >
                <CheckCircle2 size={22} />
                <span>You're subscribed! Welcome to DigiLearn.</span>
              </motion.div>
            )}

            <p className="text-xs text-muted-foreground">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
