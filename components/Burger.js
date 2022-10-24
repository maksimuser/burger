import Image from 'next/image';
import styles from '../styles/Burgers.module.css';

export default function Burger({ burger }) {
  const { name, desc, image, price } = burger;
  return (
    <div className={styles.singleBurger}>
      <h1>{name}</h1>
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
        <p>Цена: {price} у.е.</p>
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
