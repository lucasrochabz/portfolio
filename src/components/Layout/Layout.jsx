import PropTypes from 'prop-types';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// fix: add Page Layout para páginas fora a home
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
