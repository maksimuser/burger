import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Burgers.module.css';

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:5000/burgers');
    const data = await res.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return { props: { burgers: data } };
  } catch (err) {
    return { props: { burgers: null } };
  }
}

export default function Burgers({ burgers }) {
  return (
    <>
      <Head>
        <title>Наши Бургеры</title>
        <meta name='title' content='Наши Бургеры' />
      </Head>
      <h1>Наши Бургеры</h1>
      <ul>
        {burgers.map(({ id, name, desc, image }) => {
          return (
            <li key={id}>
              <Link href={`/burgers/${id}`}>
                <a className={styles.burgerCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={`${image}`}
                      alt={`${name}`}
                      width={'100%'}
                      height={'100%'}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                  <div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
