import { MouseEventHandler } from 'react';
import { CardImage } from '../types';
import styles from './styles/Card.module.css';

interface CardProps  {
  card: CardImage;
  updatePick: () => void;
}

const Card = ({
  card,
  updatePick,
}: CardProps) => {

  const { src, isFaceDown } = card;

  let cardCls = styles.card;
  if (!isFaceDown) {
    cardCls += ` ${styles.flipped}`;
  }

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    updatePick();
  };

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
