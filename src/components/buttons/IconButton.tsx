import BurgerIcon from '../../assets/icons/burger.svg';
import './IconButton.scss';

interface IconButtonProps {
  clickHandler: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ clickHandler }) => {
  return (
    <button className='mainButton' onClick={() => clickHandler()}>
      <BurgerIcon />
    </button>
  );
};
