import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Marquee } from '../../components/Marquee';
import { ProjectList } from '../../components/ProjectList';
import { Footer } from '../../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <ProjectList />
      <Footer />
    </>
  );
};

export default HomePage;
