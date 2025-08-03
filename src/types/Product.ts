export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: string[];
  colors: string[];
  description: string;
  isNew?: boolean;
  discount?: number;
  style: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}