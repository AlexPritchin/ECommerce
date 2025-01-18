import classNames from 'classnames';
import './MainButton.scss';

interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSmall?: Boolean;
}

export const MainButton: React.FC<MainButtonProps> = ({
  title,
  onClick,
  isSmall,
}) => {
  const containerClass = classNames('main-button', {
    'main-button-small': isSmall,
  });

  return (
    <button className={containerClass} onClick={onClick}>
      <span className='main-button-title'>{title}</span>
    </button>
  );
};
