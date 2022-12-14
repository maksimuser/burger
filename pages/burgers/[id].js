import Head from 'next/head';
import Burger from '../../components/Burger';

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/burgers`);
  const data = await res.json();

  const paths = data.map(el => {
    return { params: { id: el.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { id } = ctx?.params;

  const res = await fetch(`${process.env.API_URL}/burgers/${id}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { burger: data } };
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
