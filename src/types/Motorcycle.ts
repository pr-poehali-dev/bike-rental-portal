
export interface Motorcycle {
  id: number;
  name: string;
  category: string;
  type: string;
  price: number;
  power: number;
  volume: number;
  image: string;
  description?: string;
  features?: string[];
  inStock?: boolean;
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}
