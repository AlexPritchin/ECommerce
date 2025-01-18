import {
  AboutStatisticsItem,
  AboutStatisticsItemProps,
} from './AboutStatisticsItem';
import './AboutStatistics.scss';

const aboutStatisticsItemsData: AboutStatisticsItemProps[] = [
  {
    image: 'Store',
    title: '10.5k',
    description: 'Sellers active on our site',
  },
  {
    image: 'Dollar',
    title: '33k',
    description: 'Monthly Product Sale',
    isRed: true,
  },
  {
    image: 'Bag',
    title: '45.5k',
    description: 'Customers active on our site',
  },
  {
    image: 'BagOfDollar',
    title: '25k',
    description: 'Annual gross sale on our site',
  },
];

export const AboutStatistics = () => {
  return (
    <div className='about-statistics'>
      {aboutStatisticsItemsData.map(item => (
        <AboutStatisticsItem
          image={item.image}
          title={item.title}
          description={item.description}
          isRed={item.isRed}
        />
      ))}
    </div>
  );
};
