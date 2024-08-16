import BurgerIcon from '../../assets/icons/burger.svg';
import CartIcon from '../../assets/icons/cart.svg';
import LikeIcon from '../../assets/icons/like.svg';
import './IconButton.scss';

type IconType = 'burger' | 'cart' | 'like';

interface IconButtonProps {
  iconName: IconType;
  clickHandler?: () => void;
  shouldHideWhenDesktop?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  clickHandler = () => {},
  shouldHideWhenDesktop,
}) => {
  const buttonClassName = shouldHideWhenDesktop
    ? 'mainButton-hideable'
    : 'mainButton';

  let iconComponent;
  switch (iconName) {
    case 'burger':
      iconComponent = <BurgerIcon />;
      break;
    case 'cart':
      iconComponent = <CartIcon />;
      break;
    case 'like':
      iconComponent = <LikeIcon />;
      break;
  }

  return (
    <button className={buttonClassName} onClick={() => clickHandler()}>
      {iconComponent}
    </button>
  );
};
