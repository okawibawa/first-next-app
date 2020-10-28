import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="favicon" href="../public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This is the about page.</h1>
      </main>
    </div>
  );
}
