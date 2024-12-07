import { MouseEventHandler, useState } from 'react';
import styles from './styles/Card.module.css';

interface CardProps  {
  src: string;
}

const Card = ({ src }: CardProps) => {
  const [ isFlipped, setIsFlipped ] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsFlipped(!isFlipped);
  };

  let cardCls = styles.card;

  if (isFlipped) {
    cardCls += ` ${styles.flipped}`;
  }

  return (
    <div className={cardCls} onClick={handleClick}>
      <div className={styles.back}>
        <img
          src='/img/cover.png'
          height={100}
          width={100}
        />
      </div>
      <div className={styles.front}>
        <img
          src={src}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default Card;
