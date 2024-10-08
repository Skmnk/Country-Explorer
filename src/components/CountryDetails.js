import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/CountryDetails.css'
const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(response => setCountry(response.data[0]))
      .catch(error => console.error('Error fetching country details', error));
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Details-Container'>
      <h1 className='Details-header'>{country.name.common}</h1>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      <p><strong>Currency:</strong> {Object.values(country.currencies).map(curr => curr.name).join(', ')}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <button onClick={() => navigate(-1)} className='back-button'>Back</button>
    </div>
  );
};

export default CountryDetails;
