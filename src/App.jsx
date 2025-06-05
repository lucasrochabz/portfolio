import { Header } from './components/Header';
import { About } from './components/About';
import { Stacks } from './components/Stacks';
import { ProjectList } from './components/ProjectList';
import { Footer } from './components/Footer';
import './App.css';

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Stacks />
      <ProjectList />
      <Footer />
    </>
  );
};
