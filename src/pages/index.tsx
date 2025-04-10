import { type NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import * as gtag from '@/lib/gtag';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import TalentBanner from '@/components/TalentBanner';
import ProfessionalSearch from '@/components/ProfessionalSearch';
import PlatformFeatures from '@/components/PlatformFeatures';
import PricingPlans from '@/components/PricingPlans';
import WhyConsult from '@/components/WhyConsult';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  useEffect(() => {
    // Rastrear visualização da página inicial
    gtag.pageview('/');
  }, []);

  const trackCtaClick = (ctaName: string) => {
    gtag.event({
      action: 'click',
      category: 'CTA',
      label: ctaName,
    });
  };

  return (
    <>
      <Head>
        <title>Nandana | Plataforma para Terapeutas e Profissionais de Saúde</title>
        <meta 
          name="description" 
          content="Gerencie sua agenda, organize seus atendimentos e otimize seu tempo com a plataforma Nandana para terapeutas e profissionais de saúde." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nandana.com.br/" />
        <meta property="og:title" content="Nandana | Plataforma para Terapeutas e Profissionais de Saúde" />
        <meta property="og:description" content="Gerencie sua agenda, organize seus atendimentos e otimize seu tempo." />
        <meta property="og:image" content="https://www.nandana.com.br/images/og-image.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nandana.com.br/" />
        <meta property="twitter:title" content="Nandana | Plataforma para Terapeutas e Profissionais de Saúde" />
        <meta property="twitter:description" content="Gerencie sua agenda, organize seus atendimentos e otimize seu tempo." />
        <meta property="twitter:image" content="https://www.nandana.com.br/images/og-image.jpg" />
      </Head>

      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <main className="flex-grow" role="main">
          <div className="animate-fadeIn">
            <Hero onCtaClick={() => trackCtaClick('hero_cta')} />
          </div>
          
          <div className="animate-slideUp">
            <StatsSection />
          </div>
          
          <div className="animate-fadeIn">
            <AboutSection onCtaClick={() => trackCtaClick('about_cta')} />
          </div>
          
          <div className="animate-slideUp">
            <TalentBanner onCtaClick={() => trackCtaClick('talent_cta')} />
          </div>
          
          <div className="animate-fadeIn">
            <ProfessionalSearch onSearchClick={() => trackCtaClick('search_professional')} />
          </div>
          
          <div className="animate-slideUp">
            <PlatformFeatures />
          </div>
          
          <div className="animate-fadeIn">
            <PricingPlans onPlanClick={(plan) => trackCtaClick(`pricing_${plan}`)} />
          </div>
          
          <div className="animate-slideUp">
            <WhyConsult />
          </div>
          
          <div className="animate-fadeIn">
            <FaqSection />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home; 