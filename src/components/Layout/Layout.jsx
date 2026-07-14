import PropTypes from 'prop-types';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layout.module.css';

// fix: add Page Layout para páginas fora a home
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
