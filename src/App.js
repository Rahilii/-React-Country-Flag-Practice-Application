
import React, { useState, useEffect } from 'react';
import CountryList from './components/CountryList';
import './App.css';
const App = () => {
  const [selectedContinent, setSelectedContinent] = useState('africa');
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/region/${selectedContinent}`);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [selectedContinent]);

  return (
    <div>
      <h1>Country Explorer</h1>
      <label>
        Select Continent:
        <select
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
        >
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
        </select>
      </label>
      <h2>Countries:</h2>
      <CountryList countries={countries} />
    </div>
  );
};

export default App;
