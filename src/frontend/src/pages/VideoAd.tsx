import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { motion } from "motion/react";

export function VideoAd() {
  return (
    <section id="video" className="py-20 lg:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Expert Video Modules
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            See DigiLearn in Action
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Preview our expert-led video modules for Digital Marketing strategy,
            influencer marketing, and data analytics.
          </p>
        </motion.div>

        {/* Video Embed Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-elevated border border-border bg-card aspect-video"
          data-ocid="video-player-container"
        >
          <iframe
            src="https://www.youtube.com/embed/bixR-KIJKYM?rel=0&modestbranding=1"
            title="DigiLearn — Master Digital Marketing with AI-Powered Learning"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </motion.div>

        {/* Caption + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 space-y-4"
        >
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Watch how students transform their careers with personalized
            AI-driven course paths — from total beginners to certified digital
            marketing professionals.
          </p>
          <Button
            size="lg"
            className="gap-2 shadow-card hover-lift"
            onClick={() => {
              const el = document.getElementById("subscribe");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            data-ocid="video-cta"
          >
            <PlayCircle size={20} />
            Start Learning Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
