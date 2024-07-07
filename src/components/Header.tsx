import { Link } from 'react-router-dom';
import './Header.scss';
import BurgerIcon from '../assets/burgerIcon.svg';
import { useState } from 'react';

export const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  return (
    <header>
      <div id='titleAndButtonContainer'>
        <h2>Exclusive</h2>
        <button
          onClick={() => setIsMobileMenuVisible(currentValue => !currentValue)}
        >
          <img src={BurgerIcon} />
        </button>
      </div>
      <nav>
        <ul
          className={`navlist-horizontal navlist-vertical ${
            isMobileMenuVisible ? 'navlist-shown' : ''
          }`}
        >
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/sign-up`}>SignUp</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
