import { MouseEventHandler, useState } from 'react';
import styles from './styles/Card.module.css';

interface CardProps {
  image: string; 
}

const Card = ({ image }: CardProps) => {
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
        <img src='/img/cover.png'/>
      </div>
      <div className={styles.front}>
        <img src={`/img/${image}`} />
      </div>
    </div>
  );
};

export default Card;
