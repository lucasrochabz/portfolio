import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { SocialMedia } from '@/components/SocialMedia';
import { Footer } from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Lucas Rocha é desenvolvedor Full Stack. Conheça seus projetos, experiências, estudos e conhecimentos em desenvolvimento web."
      />

      <Header />
      <main>
        <Hero />
        <Marquee />

        <FeaturedProjects />

        <SocialMedia />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
