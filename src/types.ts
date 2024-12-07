export const initialCardImages: CardImage[] = [
  { src: '/img/bag-1.png', isFaceDown: true },
  { src: '/img/bank-1.png', isFaceDown: true },
  { src: '/img/horse-1.png', isFaceDown: true },
  { src: '/img/money-1.png', isFaceDown: true },
  { src: '/img/piggy-1.png', isFaceDown: true },
  { src: '/img/pound-1.png', isFaceDown: true },
];

export interface CardImage {
  id?: number;
  src: string;
  isFaceDown: boolean;
};
