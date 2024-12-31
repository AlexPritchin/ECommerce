import { BreadcrumbsView } from '../components/BreadcrumbsView';
import { PreFooter } from '../components/PreFooter';
import aboutSideImage from '../assets/images/AboutSideImage.png';
import './About.scss';
import { AboutStatistics } from '../components/AboutStatistics';
import { AboutOurTeam } from '../components/AboutOurTeam';

export const About = () => {
  return (
    <div className='about-main-container'>
      <BreadcrumbsView
        links={[
          {
            href: '/',
            title: 'Home',
          },
        ]}
        typographyTitle='About'
      />
      <article className='our-story-container'>
        <div className='our-story-text'>
          <h2 className='our-story-title'>Our Story</h2>
          <p className='our-story-description'>
            Launched in 2015, Exclusive in South Asia’s premier online shopping
            marketplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 salers and 300 brands and serves 3 millions customers
            across the region.
          </p>
          <p className='our-story-description'>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={aboutSideImage} />
      </article>
      <AboutStatistics />
      <AboutOurTeam />
      <PreFooter />
    </div>
  );
};
