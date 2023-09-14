import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../../../redux/actions/cities';
import axios from 'axios';
import Card from '../Card';

export default function index() {
  let citiesStore = useSelector((store) => store.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    axios('http://localhost:5000/api/cities')
      .then((response) => {
        if (citiesStore.citiesAll.length === 0) {
          // Redux
          dispatch(citiesActions.citiesLoad(response.data));
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    dispatch(citiesActions.citiesFilter(event.target.value));
  };

  return (
    <>
      <h2 className="text-center w-100 text-primary">Cities</h2>
      <div className="mt-3 mb-4 d-flex justify-content-center">
        <input className="w-50 my-2 fs-5 form-control" onInput={handleSearch} type="text" placeholder="Find my next destination..." aria-label="Search" spellCheck="false" id="searchID" />
      </div>
      <section className="row row-cols-2 row-cols-sm-4 row-cols-lg-6 d-flex flex-wrap gap-3 justify-content-center">{citiesStore.citiesFilter.length > 0 ? citiesStore.citiesFilter.map((city, key) => <Card key={key} city={city} />) : <h3>City not found...</h3>}</section>
    </>
  );
}
