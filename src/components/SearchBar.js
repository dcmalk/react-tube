import { useState } from 'react';

const SearchBar = ({ onTermChange }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (term) => {
    setTerm(term);
    onTermChange(term);
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Search"
        value={term}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
