import { CardImage } from './types';

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
  return cardsWithUniqueKeys;
};
