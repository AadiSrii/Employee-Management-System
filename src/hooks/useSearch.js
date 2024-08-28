import { useState } from 'react';

export const useSearch = (data, key) => {
  const [query, setQuery] = useState('');

  const filteredData = data.filter(item =>
    item[key].toLowerCase().includes(query.toLowerCase())
  );

  return { query, setQuery, filteredData };
};
