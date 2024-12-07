import { CardImage } from './types';
import { v6 as uuidv6 } from 'uuid';

export const shuffleCards = (cardImages: CardImage[]) => {
  const allCards = [ ...cardImages, ...cardImages ];
  let currentIndex = 11;
  while (currentIndex != -1) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    [allCards[randomIndex], allCards[currentIndex]] = [allCards[currentIndex], allCards[randomIndex]];
    currentIndex--;
  }

  const cardsWithUniqueKeys = allCards.map((card) => {
    const updatedCard = {...card};
    updatedCard.id = Math.random();
    return updatedCard;

  })
  //cardsWithUniqueKeys.map(((card, i) => console.log('Card ' + i, card.id)))
  return cardsWithUniqueKeys;
};
