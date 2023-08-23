import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import Card from '../components/city/Card';

export default function City({ city }) {
  return (
    <div className="my-5 container w-75sss d-flex flex-column justify-content-center">
      <h2 className="text-center w-100 text-primary">City</h2>
      <Anchor to="/cities/">
        <i className="col-1 bi-chevron-left text-black-50 display-4"></i>
      </Anchor>
      <Card className="mt-3" city={city} />
      <h1 className="mt-5 text-center w-100">Under construction</h1>
    </div>
  );
}
