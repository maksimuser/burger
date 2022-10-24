import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTimer } from 'react-timer-hook';
import Link from 'next/link';
import Head from 'next/head';

export default function NotFoundPage() {
  const router = useRouter();
  const [path, setPath] = useState('');

  const date = new Date();
  const expiryTimestamp = date.setSeconds(date.getSeconds() + 3);
  const { seconds } = useTimer({ expiryTimestamp });

  useEffect(() => {
    setPath('/');
    const timeId = setTimeout(() => {
      router.push(path);
    }, 3000);
    return () => {
      clearTimeout(timeId);
    };
  }, [router, path]);

  return (
    <>
      <Head>
        <title>Такой страницы нет | Ошибка!</title>
      </Head>
      <div className='not-found'>
        <h1>Ой...</h1>
        <h2>Такой страницы нет!</h2>
        <div className='not-found-timer'>
          <p>
            Перехожу на <Link href='/'>главную страницу</Link> через
          </p>
          <p>{seconds} сек...</p>
        </div>
      </div>
    </>
  );
}
