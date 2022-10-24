import Link from 'next/link';
import { SiBurgerking } from 'react-icons/si';

export default function Header() {
  return (
    <header>
      <SiBurgerking />
      <nav>
        <Link href={'/'}>Домой</Link>
        <Link href={'/about'}>О нас</Link>
        <Link href={'/reviews'}>Отзывы</Link>
        <Link href={'/burgers'}>Бургеры</Link>
      </nav>
    </header>
  );
}
