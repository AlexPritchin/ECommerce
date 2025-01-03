import { ProductRating } from '../ProductRating';
import './ProductsItem.scss';

export type ProductItem = {
  id: number;
  imageLink: string;
  name: String;
  price: Number;
  rating: number;
  reviewsQuantity: Number;
};

export interface ProductsItemProps {
  item: ProductItem;
}

export const ProductsItem: React.FC<ProductsItemProps> = ({ item }) => {
  return (
    <div className='products-item-container'>
      <div className='products-item-image-container'>
        <img src={item.imageLink} />
      </div>
      <h3 className='products-item-name'>{item.name}</h3>
      <div className='products-item-info-container'>
        <span className='products-item-info-price'>
          ${item.price.toString()}
        </span>
        <ProductRating rating={item.rating} />
        <span className='products-item-info-reviews-quantity'>
          ({item.reviewsQuantity.toString()})
        </span>
      </div>
    </div>
  );
};
