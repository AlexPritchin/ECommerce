import { useLocation } from 'react-router-dom';
import { ProductRating } from '../components/ProductRating';
import { MainButton } from '../components/buttons/MainButton';
import DeliveryFree from '../assets/icons/deliveryFree.svg';
import DeliveryReturn from '../assets/icons/deliveryReturn.svg';
import './Product.scss';

export const Product = () => {
  let location = useLocation();
  let product = location.state.product;

  return (
    <div className='product-main-container'>
      <div className='product-image-container'>
        <img className='product-image' src={product.imageLink} />
      </div>
      <div className='product-details-container'>
        <h2 className='product-details-title'>{product.name}</h2>
        <div className='product-details-rating-and-reviews-container'>
          <ProductRating rating={product.rating} />
          <span className='product-details-reviews-quantity'>
            ({product.reviewsQuantity.toString()} Reviews)
          </span>
        </div>
        <span className='product-details-price'>
          ${product.price.toString()}.00
        </span>
        <p className='product-details-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consectetur, est non posuere tempus, augue sapien ullamcorper enim,
          eget porttitor metus massa sed purus. Sed nulla tortor, lobortis id
          euismod sed, luctus a arcu. Sed vel tincidunt quam. Curabitur quis
          massa vitae metus varius vulputate. Duis nec massa ac neque pretium
          posuere sed sed leo. Proin erat nisi, dignissim a aliquam quis,
          vehicula eu magna. Maecenas non blandit tellus.
        </p>
        <div className='product-details-separator' />
        <MainButton title='Buy Now' isSmall />
        <div className='product-details-delivery-container'>
          <div className='product-details-delivery-item-container container-with-separator'>
            <DeliveryFree />
            <div className='product-details-delivery-description-container'>
              <h4 className='product-details-delivery-description-title'>
                Free Delivery
              </h4>
              <p className='product-details-delivery-description-text text-underlined'>
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className='product-details-delivery-item-container'>
            <DeliveryReturn />
            <div className='product-details-delivery-description-container'>
              <h4 className='product-details-delivery-description-title'>
                Return Delivery
              </h4>
              <p className='product-details-delivery-description-text'>
                Free 30 Days Delivery Returns.{' '}
                <span className='text-underlined'>Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>Product id = {location.state.product.name}</div>
  );
};
