import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from './buttons/IconButton';
import './Header.scss';
import { SearchBar } from './SearchBar';

export const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const ulClass = classNames('navlist', {
    'navlist-shown': isMobileMenuVisible,
  });

  return (
    <header className='header'>
      <div className='navAndSearchContainer'>
        <div className='titleAndButtonContainer'>
          <h2 className='brand-text'>Exclusive</h2>
          <IconButton
            iconName='burger'
            clickHandler={() => {
              setIsMobileMenuVisible(currentValue => !currentValue);
            }}
            shouldHideWhenDesktop
          />
        </div>
        <nav className='navigation'>
          <ul className={ulClass}>
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
        <SearchBar />
      </div>
      <div className='buttonsContainer'>
        <IconButton iconName='like' />
        <IconButton iconName='cart' />
      </div>
    </header>
  );
};
