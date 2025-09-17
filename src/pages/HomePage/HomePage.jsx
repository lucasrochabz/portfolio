import { Header } from '../../components/Header';
import { About } from '../../components/About';
import { Marquee } from '../../components/Marquee';
import { ProjectList } from '../../components/ProjectList';
import { Footer } from '../../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Marquee />
      <ProjectList />
      <Footer />
    </>
  );
};

export default HomePage;
