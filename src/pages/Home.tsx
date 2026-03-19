import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import StorySection from '../components/StorySection';
import HowItWorks from '../components/HowItWorks';
import SubscriptionPlans from '../components/SubscriptionPlans';
import RealImpact from '../components/RealImpact';
import ProductShowcase from '../components/ProductShowcase';
import Testimonials from '../components/Testimonials';
import Differentiator from '../components/Differentiator';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <TrustBar />
      <StorySection />
      <HowItWorks />
      <SubscriptionPlans />
      <RealImpact />
      <ProductShowcase />
      <Testimonials />
      <Differentiator />
      <FinalCTA />
    </div>
  );
}
