import { PreFooterItem, PreFooterItemProps } from './PreFooterItem';
import './PreFooter.scss';

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

export const PreFooter = () => {
  return (
    <div className='pre-footer'>
      {preFooterItemsData.map(item => (
        <PreFooterItem
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
