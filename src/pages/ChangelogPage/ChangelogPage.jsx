import { Footer } from '../../components/Footer';
import { Accordion } from '../../components/Accordion';
import { Header } from '../../components/Header';
import { changelogData } from '../../data/changelogData';

const ChangelogPage = () => {
  return (
    <>
      <Header />
      <Accordion changelogData={changelogData} />
      <Footer />
    </>
  );
};

export default ChangelogPage;
