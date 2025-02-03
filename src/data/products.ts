import product1 from '../assets/images/products/Product1.png';
import product2 from '../assets/images/products/Product2.png';
import product3 from '../assets/images/products/Product3.png';
import product4 from '../assets/images/products/Product4.png';
import product5 from '../assets/images/products/Product5.png';
import product6 from '../assets/images/products/Product6.png';
import product7 from '../assets/images/products/Product7.png';
import product8 from '../assets/images/products/Product8.png';

export type ProductItem = {
  id: number;
  imageLink: string;
  name: String;
  price: Number;
  rating: number;
  reviewsQuantity: Number;
};

export const productItems: ProductItem[] = [
  {
    id: 1,
    imageLink: product1,
    name: 'Breed Dry Dog Food',
    price: 100,
    rating: 3,
    reviewsQuantity: 35,
  },
  {
    id: 2,
    imageLink: product2,
    name: 'Kids Electric Car',
    price: 960,
    rating: 5,
    reviewsQuantity: 65,
  },
  {
    id: 3,
    imageLink: product3,
    name: 'CANON EOS DSLR Camera',
    price: 360,
    rating: 4,
    reviewsQuantity: 95,
  },
  {
    id: 4,
    imageLink: product4,
    name: 'Jr. Zoom Soccer Cleats',
    price: 1160,
    rating: 3.5,
    reviewsQuantity: 35,
  },
  {
    id: 5,
    imageLink: product5,
    name: 'ASUS FHD Gaming Laptop',
    price: 700,
    rating: 5,
    reviewsQuantity: 325,
  },
  {
    id: 6,
    imageLink: product6,
    name: 'GP11 Shooter USB Gamepad',
    price: 660,
    rating: 5,
    reviewsQuantity: 55,
  },
  {
    id: 7,
    imageLink: product7,
    name: 'Curology Product Set',
    price: 500,
    rating: 4,
    reviewsQuantity: 145,
  },
  {
    id: 8,
    imageLink: product8,
    name: 'Quilted Satin Jacket',
    price: 660,
    rating: 3.5,
    reviewsQuantity: 55,
  },
  {
    id: 9,
    imageLink: product1,
    name: 'Breed Dry Dog Food',
    price: 100,
    rating: 3,
    reviewsQuantity: 35,
  },
  {
    id: 10,
    imageLink: product2,
    name: 'Kids Electric Car',
    price: 960,
    rating: 5,
    reviewsQuantity: 65,
  },
  {
    id: 11,
    imageLink: product3,
    name: 'CANON EOS DSLR Camera',
    price: 360,
    rating: 4,
    reviewsQuantity: 95,
  },
  {
    id: 12,
    imageLink: product4,
    name: 'Jr. Zoom Soccer Cleats',
    price: 1160,
    rating: 3.5,
    reviewsQuantity: 35,
  },
  {
    id: 13,
    imageLink: product5,
    name: 'ASUS FHD Gaming Laptop',
    price: 700,
    rating: 5,
    reviewsQuantity: 325,
  },
  {
    id: 14,
    imageLink: product6,
    name: 'GP11 Shooter USB Gamepad',
    price: 660,
    rating: 5,
    reviewsQuantity: 55,
  },
  {
    id: 15,
    imageLink: product7,
    name: 'Curology Product Set',
    price: 500,
    rating: 4,
    reviewsQuantity: 145,
  },
  {
    id: 16,
    imageLink: product8,
    name: 'Quilted Satin Jacket',
    price: 660,
    rating: 3.5,
    reviewsQuantity: 55,
  },
];
