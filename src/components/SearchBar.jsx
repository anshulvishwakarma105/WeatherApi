import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
    
  };



  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input type="text"
        placeholder='Search the City...'
        value={city}
        onChange={(e) => setCity(e.target.value)}

      />
      <button type='submit'>Search</button>

    </form>
  )
}
