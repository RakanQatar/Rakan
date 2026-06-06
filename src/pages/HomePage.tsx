import { HeroSection }        from '../components/home/HeroSection';
import { HowItWorks }         from '../components/home/HowItWorks';
import { FemaleDriverSection } from '../components/home/FemaleDriverSection';
import { FixedPriceSection }  from '../components/home/FixedPriceSection';
import { FeaturesGrid }       from '../components/home/FeaturesGrid';
import { SocialProof }        from '../components/home/SocialProof';
import { DriverCTABanner }    from '../components/home/DriverCTABanner';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FemaleDriverSection />
      <FixedPriceSection />
      <FeaturesGrid />
      <SocialProof />
      <DriverCTABanner />
    </>
  );
}
