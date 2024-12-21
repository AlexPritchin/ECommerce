import { SubscribeBar } from './SubscribeBar';
import './Footer.scss';
import { FooterList } from './FooterList';
import QrCode from '../assets/images/QrCode.svg';
import GetItGoogle from '../assets/images/GetItGoogle.svg';
import GetItApple from '../assets/images/GetItApple.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import XSocialIcon from '../assets/icons/xSocial.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

const supportListLinks = [
  '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
  'exclusive@gmail.com',
  '+88015-88888-9999',
];

const accountListLinks = [
  'My Account',
  'Login / Register',
  'Cart',
  'Wishlist',
  'Shop',
];

const quickLinkListLinks = ['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'];

export const Footer = () => {
  return (
    <div className='mainFooterContainer'>
      <div className='brandContainer'>
        <h2 className='brand-text-footer'>Exclusive</h2>
        <h3 className='sub-header sub-header-subscribe'>Subscribe</h3>
        <p className='general-text'>Get 10% off your first order</p>
        <SubscribeBar />
      </div>
      <FooterList title='Support' listData={supportListLinks} width='175px' />
      <FooterList title='Account' listData={accountListLinks} />
      <FooterList title='Quick Link' listData={quickLinkListLinks} />
      <div className='downloadContainer'>
        <h2 className='brand-text-footer'>Download App</h2>
        <p className='adv-text'>Save 3$ with App New User Only</p>
        <div className='download-images-container'>
          <QrCode />
          <div className='get-it-container'>
            <GetItGoogle />
            <GetItApple />
          </div>
        </div>
        <div className='social-images-container'>
          <FacebookIcon />
          <XSocialIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};
