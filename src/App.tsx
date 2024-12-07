import Card from './components/Card';
import { CardImage } from './types';
import styles from './App.module.css';

function App() {
  const cardImages: CardImage[] = [
    { src: '/img/bag-1.png', matched: false },
    { src: '/img/bank-1.png', matched: false },
    { src: '/img/horse-1.png', matched: false },
    { src: '/img/money-1.png', matched: false },
    { src: '/img/piggy-1.png', matched: false },
    { src: '/img/pound-1.png', matched: false },
  ];

  const shuffledCards = () => {
    const allCards = [ ...cardImages, ...cardImages ];
    let currentIndex = 11;
    while (currentIndex != -1) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      [allCards[randomIndex], allCards[currentIndex]] = [allCards[currentIndex], allCards[randomIndex]];
      currentIndex--;
    }
    return allCards;
  };

  return (
    <>
      <h2 className={styles.mainHeading}>Lloyd's memory game</h2>
      <div className={styles.cardGrid}>
        {shuffledCards().map((card: CardImage, i) => (
          <div className={styles.cardInner} key={`card.src-${i}`}>
            <Card {...card}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
