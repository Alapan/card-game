import { useCallback, useEffect, useState } from 'react';
import Card from './components/Card';
import { CardImage, initialCardImages } from './types';
import { shuffleCards } from './utils';
import styles from './App.module.css';

function App() {
  const [ numberOfMoves, setNumberOfMoves ] = useState(0);
  const [ pickOne, setPickOne ] = useState<CardImage | null>(null);
  const [ pickTwo, setPickTwo ] = useState<CardImage | null>(null);
  const [ cards, setCards ] = useState<CardImage[]>([]);

  useEffect(() => {
    setCards(shuffleCards(initialCardImages));
  }, []);

  const updatePick = useCallback((card: CardImage) => {
    pickOne ? setPickTwo(card) : setPickOne(card);
  }, [ pickOne ]);

  const flipCardOver = () => {
    setCards((prevCards) => {
      const currentCard = pickTwo ?? pickOne;
      if (!currentCard) return prevCards;

      const newCards = prevCards.map((card) => {
        if (card.id === currentCard.id) {
          return {
            ...currentCard,
            isFaceDown: false
          }
        }
        return card;
      })
      return newCards;
    });
  };

  const flipCardsBack = () => {
    setTimeout(() => {
      setCards((prevCards) => {
        const newCards = prevCards.map((card) => {
          if (card.id === pickOne?.id) {
            return {
              ...card,
              isFaceDown: true
            }
          } else if (card.id === pickTwo?.id){
            return {
              ...card,
              isFaceDown: true
            }
          }
          return card;
        });
        return newCards;
      });
    }, 500);
  };

  useEffect(() => {
    if (pickOne || pickTwo) {
      flipCardOver();
    }

    if (pickOne && pickTwo) {
      setNumberOfMoves((prev) => prev+1);
      if (pickOne.src !== pickTwo.src) {
        flipCardsBack();
      }
      setPickOne(null);
      setPickTwo(null);
    }
  }, [ pickOne, pickTwo ]);

  return (
    <>
      <h2 className={styles.mainHeading}>My memory game</h2>
      <h4 className={styles.subHeading}>Number of moves: {numberOfMoves}</h4>
      <div className={styles.cardGrid}>
        {cards.map((card: CardImage) => (
          <div className={styles.cardInner} key={card.id}>
            <Card
              card={card}
              updatePick={() => updatePick(card)}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
