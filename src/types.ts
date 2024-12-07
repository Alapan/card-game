export const initialCardImages: CardImage[] = [
  { src: '/img/bag-1.png', isFaceDown: true },
  { src: '/img/bone-1.png', isFaceDown: true },
  { src: '/img/car-1.png', isFaceDown: true },
  { src: '/img/coin-1.png', isFaceDown: true },
  { src: '/img/earth-1.png', isFaceDown: true },
  { src: '/img/sun-1.png', isFaceDown: true },
];

export interface CardImage {
  id?: number;
  src: string;
  isFaceDown: boolean;
};
