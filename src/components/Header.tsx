import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from './buttons/IconButton';
import './Header.scss';

export const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const ulClass = classNames('navlist-horizontal', 'navlist-vertical', {
    'navlist-shown': isMobileMenuVisible,
  });

  return (
    <header className='header'>
      <div className='titleAndButtonContainer'>
        <h2 className='brand-text'>Exclusive</h2>
        <IconButton
          clickHandler={() => {
            setIsMobileMenuVisible(currentValue => !currentValue);
          }}
        />
      </div>
      <nav className='navigation'>
        <ul
          // className={`navlist-horizontal navlist-vertical ${
          //   isMobileMenuVisible ? 'navlist-shown' : ''
          // }`}
          className={ulClass}
        >
          <li className='navlist-item'>
            <Link to={`/`}>Home</Link>
          </li>
          <li className='navlist-item'>
            <Link to={`/contact`}>Contact</Link>
          </li>
          <li className='navlist-item'>
            <Link to={`/about`}>About</Link>
          </li>
          <li className='navlist-item'>
            <Link to={`/sign-up`}>SignUp</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
