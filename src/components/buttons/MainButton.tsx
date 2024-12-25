import './MainButton.scss';

export const MainButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ title, onClick }) => {
  return (
    <button className='main-button' onClick={onClick}>
      <span className='main-button-title'>{title}</span>
    </button>
  );
};
