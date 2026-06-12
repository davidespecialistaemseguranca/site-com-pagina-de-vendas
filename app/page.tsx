'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { FrameworkSection } from '@/components/framework-section';
import { ExecutiveProfileSection } from '@/components/executive-profile-section';
import { PublicationsSection } from '@/components/publications-section';
import { AuthorityAssetsSection } from '@/components/authority-assets-section';
import { ConsultingSection } from '@/components/consulting-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FrameworkSection />
      <ExecutiveProfileSection />
      <PublicationsSection />
      <AuthorityAssetsSection />
      <ConsultingSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
