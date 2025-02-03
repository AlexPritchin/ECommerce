import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import adBanner1 from '../../assets/images/AdBanner1.png';
import adBanner2 from '../../assets/images/AdBanner2.jpg';
import adBanner3 from '../../assets/images/AdBanner3.jpg';
import './Carousel.scss';

export const Carousel = () => {
  let sliderSettings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
  };
  return (
    <Slider {...sliderSettings}>
      <img src={adBanner1} />
      <img src={adBanner2} />
      <img src={adBanner3} />
    </Slider>
  );
};
