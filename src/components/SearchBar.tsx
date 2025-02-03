import SearchIcon from '../assets/icons/search.svg';
import './SearchBar.scss';

export const SearchBar = () => {
  return (
    <div className='mainContainer'>
      <input
        className='searchInput'
        type='text'
        name='searchPhrase'
        placeholder='What are you looking for?'
      />
      <SearchIcon />
    </div>
  );
};
