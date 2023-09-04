import React from 'react';
import { Link as Anchor } from 'react-router-dom';

export default function Card({ city }) {
  return (
    <div className="col">
      <Anchor to={'/city/' + city._id} style={{ textDecoration: 'none' }}>
        <div className="card shadow h-100">
          <img src={'http://localhost:5000' + city.image} height="200px" className="card-img-top object-fit-cover" alt="event" />
          <div className="card-body">
            <h5 className="card-title fw-bold">{city.name}</h5>
            <h6 className="card-title">{city.country}</h6>
            <h6 className="pt-2 card-title text-black-50">{city.itineraries.length > 0 ? 'View itineraries' : ''}</h6>
          </div>
        </div>
      </Anchor>
    </div>
  );
}
