import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Population Transition Graph in Japan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;<code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            By{' '}
            <Image
              src="/small-logo.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={32}
              height={32}
              priority
            />
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Next.js Logo"
            width={360}
            height={120}
            priority
          />
        </div>
      </main>
    </>
  );
}
