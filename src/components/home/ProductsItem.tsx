import { ProductRating } from '../ProductRating';
import { ProductItem } from '../../data/products';
import './ProductsItem.scss';
import { NavLink } from 'react-router-dom';

export interface ProductsItemProps {
  item: ProductItem;
}

export const ProductsItem: React.FC<ProductsItemProps> = ({ item }) => {
  return (
    <NavLink
      className='products-item-container'
      to={`/product`}
      state={{ product: item }}
    >
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
    </NavLink>
  );
};
