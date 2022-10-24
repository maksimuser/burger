import Head from 'next/head';

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { reviews: data },
  };
}

export default function Reviews({ reviews }) {
  return (
    <>
      <Head>
        <title>Отзывы клиентов</title>
        <meta name='title' content='Отзывы клиентов' />
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <ul className='reviews'>
          {reviews.slice(0, 20).map(({ id, name }) => {
            return (
              <li key={id} className='review'>
                {`${id})`} {name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
