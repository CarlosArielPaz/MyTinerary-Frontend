import React, { useEffect, useState } from 'react';
import { Link as Anchor, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../../../redux/actions/city';
import axios from 'axios';
import Itinerary from '../Itinerary';

export default function Card() {
  const { id } = useParams();

  //const [city, setCity] = useState({ name: '', country: '', image: '', itineraries: [] });

  let cityStore = useSelector((store) => store.city.city);

  const dispatch = useDispatch();

  useEffect(() => {
    axios('http://localhost:5000/api/cities/' + id)
      .then((response) => {
        //setCity(response.data);

        dispatch(cityActions.cityLoad(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col">
      <div className="card shadow h-100">
        <img src={'http://localhost:5000' + cityStore.image} height="400px" className="card-img-top object-fit-cover" alt="event" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{cityStore.name}</h5>
          <h6 className="card-title">{cityStore.country}</h6>
        </div>
      </div>

      {/* <section className="mt-5 d-flex flex-wrap gap-3 justify-content-center">{city.itineraries && city.itineraries.length > 0 ? city.itineraries.map((itinerary, key) => <Itinerary key={key} itinerary={itinerary} />) : <h3>Currently no itineraries...</h3>}</section> */}
      <section className="mt-5 d-flex flex-wrap gap-3 justify-content-center">{cityStore.itineraries && cityStore.itineraries.length > 0 ? cityStore.itineraries.map((itinerary, key) => <Itinerary key={key} itinerary={itinerary} />) : <h3>Currently no itineraries...</h3>}</section>
    </div>
  );
}
