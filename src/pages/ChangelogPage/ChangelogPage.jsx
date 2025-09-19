import { Footer } from '../../components/Footer';
import { Accordion } from '../../components/Accordion';
import { Header } from '../../components/Header';

const historyList = [
  {
    version: 'Versão 2.0',
    date: '11 de Set de 2025',
    description:
      'Versão inicial do projeto, com apresentação de portfólio, currículo e habilidades técnicas. Desenvolvido com HTML, CSS e JavaScript. Responsivo e interativo.',
  },
  {
    version: 'Versão 1.0',
    date: '5 de Jun de 2025',
    description:
      'Versão inicial do projeto, com apresentação de portfólio, currículo e habilidades técnicas. Desenvolvido com HTML, CSS e JavaScript. Responsivo e interativo.',
  },
];

const ChangelogPage = () => {
  return (
    <>
      <Header />
      <Accordion historyList={historyList} />
      <Footer />
    </>
  );
};

export default ChangelogPage;
