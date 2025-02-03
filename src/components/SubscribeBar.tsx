import SendIcon from '../assets/icons/send.svg';
import './SubscribeBar.scss';

export const SubscribeBar = () => {
  return (
    <div className='mainSubscribeContainer'>
      <input
        className='subscribeInput'
        type='text'
        name='sendEmail'
        placeholder='Enter your email'
      />
      <SendIcon />
    </div>
  );
};
