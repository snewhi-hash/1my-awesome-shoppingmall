import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { CollectionSection } from "@/components/collection-section"
import { TeamSection } from "@/components/team-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <CollectionSection />
      <TeamSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
