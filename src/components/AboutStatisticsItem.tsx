import classNames from 'classnames';
import Store from '../assets/icons/aboutStore.svg';
import Dollar from '../assets/icons/aboutDollar.svg';
import Bag from '../assets/icons/aboutBag.svg';
import BagOfDollar from '../assets/icons/aboutBagOfDollar.svg';
import './AboutStatisticsItem.scss';

type AboutStatisticsImage = 'Store' | 'Dollar' | 'Bag' | 'BagOfDollar';

export interface AboutStatisticsItemProps {
  image: AboutStatisticsImage;
  title: String;
  description: String;
  isRed?: Boolean;
}

const Images = {
  Store: <Store />,
  Dollar: <Dollar />,
  Bag: <Bag />,
  BagOfDollar: <BagOfDollar />,
};

Object.freeze(Images);

export const AboutStatisticsItem: React.FC<AboutStatisticsItemProps> = ({
  image,
  title,
  description,
  isRed,
}) => {
  const containerClass = classNames('about-statistics-item-container', {
    'about-statistics-item-container-red': isRed,
  });
  const titleClass = classNames('about-statistics-title', {
    'about-statistics-title-red': isRed,
  });
  const descriptionClass = classNames('about-statistics-description', {
    'about-statistics-description-red': isRed,
  });

  return (
    <div className={containerClass}>
      {Images[image]}
      <h3 className={titleClass}>{title}</h3>
      <p className={descriptionClass}>{description}</p>
    </div>
  );
};
