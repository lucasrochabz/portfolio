import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ProjectList } from './components/ProjectList/ProjectList';

export const App = () => {
  return (
    <>
      <Header />
      <ProjectList />
      <Footer />
    </>
  );
};
