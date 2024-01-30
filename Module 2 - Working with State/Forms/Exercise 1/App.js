import React from 'react';

import { COUNTRIES } from './data';

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
  }
*/

function App() {
  const [country, setCountry] = React.useState('');

  const countries = Object.entries(COUNTRIES);
  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        >
          <option value="">
            Select a country
          </option>
          {countries.map(([id, name]) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
      </fieldset>

      <p className="country-display">
        Selected country: {country}
      </p>

      <button>Submit</button>
    </form>
  );
}

export default App;