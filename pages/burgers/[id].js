import Head from 'next/head';
import Burger from '../../components/Burger';

export async function getStaticPaths() {
  try {
    const res = await fetch('http://localhost:5000/burgers');
    const data = await res.json();
    const paths = data.map(el => {
      return { params: { id: el.id.toString() } };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticProps(ctx) {
  try {
    const { id } = ctx?.params;
    const res = await fetch(`http://localhost:5000/burgers/${id}`);
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return { props: { burger: data } };
  } catch (err) {
    console.log(err);
    return { props: { burger: null } };
  }
}

export default function DetailsBurger({ burger }) {
  const { name } = burger;
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name='title' content={name} />
      </Head>
      <Burger burger={burger} />
    </>
  );
}
