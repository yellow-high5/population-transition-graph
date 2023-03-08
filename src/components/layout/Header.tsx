import Image from 'next/image';
import styles from 'styles/index.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/small-logo.png"
        alt="Logo"
        className={styles.logo}
        width={32}
        height={32}
        priority
      />{' '}
      <h1>Population Transition Graph</h1>
    </header>
  );
};

export default Header;
