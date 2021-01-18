import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className='font-bold text-2xl lg:text-6xl mb-10 text-center'>
        This Project is a collection of React UIs,
        <br /> beautifully designed by yours truly.
      </h1>
      <p className='text-lg text-center lg:text-xl '>
        Check out the individual projects via their links below:
      </p>
      <a className='bg-black text-white px-5 py-3 mt-3' href='/witpage'>
        WIT Page
      </a>
    </div>
  );
}
