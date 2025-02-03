import ArrowLeftCircleIcon from '../../assets/icons/arrowLeftCircle.svg';
import ArrowRightCircleIcon from '../../assets/icons/arrowRightCircle.svg';
import './ArrowButton.scss';

type ArrowDirection = 'left' | 'right';

interface ArrowButtonProps {
  direction: ArrowDirection;
  clickHandler?: () => void;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  clickHandler = () => {},
}) => {
  let iconComponent;
  switch (direction) {
    case 'left':
      iconComponent = <ArrowLeftCircleIcon />;
      break;
    case 'right':
      iconComponent = <ArrowRightCircleIcon />;
      break;
  }

  return (
    <button className='arrow-button' onClick={() => clickHandler()}>
      {iconComponent}
    </button>
  );
};
