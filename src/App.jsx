import { Header } from './components/Header';
import { About } from './components/About';
import { Tools } from './components/Tools/Tools';
import { ProjectList } from './components/ProjectList';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Tools />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  );
};
