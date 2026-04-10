import { Navbar } from "@/components/Navbar";
import { EmailSubscription } from "@/pages/EmailSubscription";
import { Features } from "@/pages/Features";
import { Footer } from "@/pages/Footer";
import { Hero } from "@/pages/Hero";
import { HowItWorks } from "@/pages/HowItWorks";
import { Testimonials } from "@/pages/Testimonials";
import { VideoAd } from "@/pages/VideoAd";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <VideoAd />
        <Testimonials />
        <EmailSubscription />
      </main>
      <Footer />
    </div>
  );
}
