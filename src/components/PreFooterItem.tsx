import Delivery from '../assets/icons/delivery.svg';
import Service from '../assets/icons/service.svg';
import Guarantee from '../assets/icons/guarantee.svg';
import './PreFooterItem.scss';

type PreFooterImage = 'Delivery' | 'Service' | 'Guarantee';

export interface PreFooterItemProps {
  image: PreFooterImage;
  title: String;
  description: String;
}

const Images = {
  Delivery: <Delivery />,
  Service: <Service />,
  Guarantee: <Guarantee />,
};

Object.freeze(Images);

export const PreFooterItem: React.FC<PreFooterItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className='main-pre-footer-item-container'>
      {Images[image]}
      <h3 className='title'>{title}</h3>
      <p className='description'>{description}</p>
    </div>
  );
};
