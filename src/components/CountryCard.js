import React, { useState } from 'react';
const CountryCard = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="country-card">
      <img
        src={country.flags.png}
        alt={`${country.name.common}'s Flag`}
       onClick={toggleDetails}
      />
      <h3>{country.name.common}</h3>
      {showDetails && (
        <div>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
        </div>
      )}
    </div>
  );
};

export default CountryCard;
