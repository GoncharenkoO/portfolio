import Navigation from 'components/Navigation';
import logo from '../../images/logo.png';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" aria-label="Logo">
        <img className={styles.headerImg} src={logo} alt="logo" />
      </a>
      <Navigation />
    </header>
  );
};

export default Header;
