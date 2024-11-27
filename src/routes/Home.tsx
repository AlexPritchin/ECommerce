import ArrowRight from '../assets/icons/arrowRight.svg';
import { Carousel } from '../components/home/Carousel';
import './Home.scss';

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
    </div>
  );
};
