import React, { useEffect, useState } from 'react';
import { Link as Anchor, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Card() {
  const { id } = useParams();

  const [city, setCity] = useState([{ name: '', country: '', image: '' }]);

  useEffect(() => {
    axios('http://localhost:5000/api/cities/' + id)
      .then((response) => {
        setCity(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(id);
  return (
    <div className="col">
      <div className="card shadow h-100">
        <img src={'http://localhost:5000' + city[0].image} height="400px" className="card-img-top object-fit-cover" alt="event" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{city[0].name}</h5>
          <h6 className="card-title">{city[0].country}</h6>
        </div>
      </div>
    </div>
  );
}
