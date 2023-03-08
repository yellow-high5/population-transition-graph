import styles from 'styles/index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        powerd by{' '}
        <a href="https://opendata.resas-portal.go.jp/" target="_blank">
          RESAS API
        </a>{' '}
        & created by{' '}
        <a href="https://github.com/yellow-high5" target="_blank">
          yellow-high5
        </a>
        . all rights reserved.
      </p>
      <p>
        <a href="https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d" target="_blank">
          @yumemi coding test
        </a>
      </p>
    </footer>
  );
};

export default Footer;
