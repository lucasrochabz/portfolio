import './App.css';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { ProjectList } from './components/ProjectList/ProjectList';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  );
};
