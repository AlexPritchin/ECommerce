import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './ProductsCarousel.scss';
import { ProductsItem } from './ProductsItem';
import { useRef } from 'react';
import { ArrowButton } from '../buttons/ArrowButton';
import { productItems } from '../../data/products';

export const ProductsCarousel = () => {
  let sliderRef = useRef(null);

  let sliderSettings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 2,
  };
  return (
    <div className='products-carousel-main-container'>
      <div className='products-carousel-header-container'>
        <div className='products-carousel-header-category'>
          <div className='products-carousel-header-category-red-square' />
          <h4 className='products-carousel-header-category-title'>
            Our Products
          </h4>
        </div>
        <div className='products-carousel-header-title-container'>
          <h2 className='products-carousel-header-title'>
            Explore Our Products
          </h2>
          <div className='products-carousel-header-buttons'>
            <ArrowButton
              direction='left'
              clickHandler={() => {
                sliderRef.slickPrev();
              }}
            />
            <ArrowButton
              direction='right'
              clickHandler={() => {
                sliderRef.slickNext();
              }}
            />
          </div>
        </div>
      </div>
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...sliderSettings}
      >
        {productItems.map(product => (
          <ProductsItem item={product} />
        ))}
      </Slider>
    </div>
  );
};
