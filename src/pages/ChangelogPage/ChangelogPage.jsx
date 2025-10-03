import { Footer } from '../../components/Footer';
import { Accordion } from '../../components/Accordion';
import { Header } from '../../components/Header';
import { historyList } from '../../data/portfolioData';

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
