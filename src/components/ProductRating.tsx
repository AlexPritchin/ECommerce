import StarEmpty from '../assets/icons/starEmpty.svg';
import StarFull from '../assets/icons/starFull.svg';
import StarHalf from '../assets/icons/starHalf.svg';
import './ProductRating.scss';

export interface ProductRatingProps {
  rating: number;
}

export const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
  const starTemplateArray = new Array(5).fill(undefined);
  return (
    <div className='product-rating-main-container'>
      {starTemplateArray.map((item, index) => {
        if (index + 1 - rating <= 0) {
          return <StarFull />;
        } else if (index + 1 - rating < 1) {
          return <StarHalf />;
        } else {
          return <StarEmpty />;
        }
      })}
    </div>
  );
};
