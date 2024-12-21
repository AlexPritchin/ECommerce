import ArrowRight from '../assets/icons/arrowRight.svg';
import ArrowUp from '../assets/icons/arrowUp.svg';
import { Carousel } from '../components/home/Carousel';
import {
  PreFooterItem,
  PreFooterItemProps,
} from '../components/home/PreFooterItem';
import './Home.scss';

const preFooterItemsData: PreFooterItemProps[] = [
  {
    image: 'Delivery',
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
  },
  {
    image: 'Service',
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
  },
  {
    image: 'Guarantee',
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
  },
];

export const Home = () => {
  return (
    <div className='mainDiv'>
      <div className='sidebarContainer'>
        <div className='sidebar'>
          <ul className='mainSidebarList'>
            <li>
              <a href='#'>
                <div className='sideBarLinkContainer'>
                  <span>Fashion</span>
                  <ArrowRight />
                </div>
              </a>
              <ul>
                <li>
                  <a href='#'>Shirts</a>
                </li>
                <li>
                  <a href='#'>Bras</a>
                </li>
                <li>
                  <a href='#'>Panties</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>
                <div className='sideBarLinkContainer'>
                  <span>Electronics</span>
                  <ArrowRight />
                </div>
              </a>
              <ul>
                <li>
                  <a href='#'>Smartphones</a>
                </li>
                <li>
                  <a href='#'>Laptops</a>
                </li>
                <li>
                  <a href='#'>TVs</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>Sports</a>
            </li>
            <li>
              <a href='#'>Toys</a>
            </li>
            <li>
              <a href='#'>Health</a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Pets</a>
            </li>
            <li>
              <a href='#'>Garden</a>
            </li>
            <li>
              <a href='#'>Active</a>
            </li>
          </ul>
        </div>
        <div className='carouselContainer'>
          <Carousel />
        </div>
      </div>
      <div className='preFooter'>
        {preFooterItemsData.map(item => (
          <PreFooterItem
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <a href='#' className='scroll-to-top'>
        <ArrowUp />
      </a>
    </div>
  );
};
