import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import './css/SearchComponent.css'
const SearchComponent = () => {
    const [query, setQuery] = useState(localStorage.getItem('query') || '');
    const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (query.length > 0) {
      axios
        .get(`https://restcountries.com/v3.1/name/${query}`)
        .then(response => setCountries(response.data))
        .catch(error => console.error('Error fetching countries', error));
    }
  }, [query]);

  useEffect(() => {
    localStorage.setItem('query', query);
  }, [query]);

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h1>Country Explorer</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />    
    <button onClick={clearLocalStorage} disabled={query.trim() === ''}>Clear</button>

      <div className="country-grid">
        {countries.map(country => (
          <Link to={`/country/${country.name.common}`} key={country.name.common}>
            <CountryCard country={country} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
