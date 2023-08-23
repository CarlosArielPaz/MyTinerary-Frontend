import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';

export default function index() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios('http://localhost:5000/api/cities' + (search ? '?search=' + search : ''))
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => console.log(error));
  }, [search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <h2 className="text-center w-100 text-primary">Cities</h2>
      <div className="mt-3 mb-4 d-flex justify-content-center">
        <input className="w-50 me-2 form-control" onInput={handleSearch} type="text" placeholder="Find my next destination..." aria-label="Search" spellcheck="false" id="searchID" />
      </div>
      <section className="row row-cols-2 row-cols-sm-4 row-cols-lg-6 d-flex flex-wrap gap-3 justify-content-center">{cities.length > 0 ? cities.map((city, key) => <Card key={key} city={city} />) : <h3>City not found...</h3>}</section>
    </>
  );
}
