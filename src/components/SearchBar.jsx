import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search by name"
    />
  );
};

export default SearchBar;
