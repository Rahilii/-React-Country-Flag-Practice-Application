import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
