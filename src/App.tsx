import { Hero } from './components/Hero';
import { WhyJoin } from './components/WhyJoin';
import { Benefits } from './components/Benefits';
import { WhoShouldJoin } from './components/WhoShouldJoin';
import { Management } from './components/Management';
import { RealOpportunity } from './components/RealOpportunity';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhyJoin />
      <Benefits />
      <WhoShouldJoin />
      <Management />
      <RealOpportunity />
      <RegistrationForm />
      <Footer />
    </div>
  );
}