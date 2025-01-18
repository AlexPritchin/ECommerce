import classNames from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from './buttons/IconButton';
import './Header.scss';
import { SearchBar } from './SearchBar';

export const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const ulClass = classNames('navlist', {
    'navlist-shown': isMobileMenuVisible,
  });

  const activeLinkClassNameFunc = ({ isActive }: { isActive: boolean }) => {
    return `link ${isActive ? 'link-active' : 'link-not-active'}`;
  };

  return (
    <header className='header'>
      <div className='navAndSearchContainer'>
        <div className='titleAndButtonContainer'>
          <h2 className='brand-text' id='brand-text-element'>
            Exclusive
          </h2>
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
              <NavLink className={activeLinkClassNameFunc} to={`/`}>
                Home
              </NavLink>
            </li>
            <li className='navlist-item'>
              <NavLink className={activeLinkClassNameFunc} to={`/contact`}>
                Contact
              </NavLink>
            </li>
            <li className='navlist-item'>
              <NavLink className={activeLinkClassNameFunc} to={`/about`}>
                About
              </NavLink>
            </li>
            <li className='navlist-item'>
              <NavLink className={activeLinkClassNameFunc} to={`/sign-up`}>
                SignUp
              </NavLink>
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
