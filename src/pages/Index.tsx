
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { 
  DocsSection, 
  ResourcesSection, 
  ReleaseNotesSection, 
  CompanySection, 
  ContactSection 
} from '@/components/sections/AdditionalSections';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="saasflow-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          <HeroSection />
          <ProductSection />
          <SolutionsSection />
          <DocsSection />
          <ResourcesSection />
          <ReleaseNotesSection />
          <PricingSection />
          <CompanySection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
