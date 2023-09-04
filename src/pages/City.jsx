import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import Card from '../components/city/Card';

export default function City({ city }) {
  document.title = 'MyTinerary... City';

  return (
    <div className="my-5 container w-75 d-flex flex-column justify-content-center">
      <h2 className="w-100 text-center text-primary">City</h2>
      <Anchor to="/cities/" className="text-center">
        <i className="bi-chevron-left text-black-50 display-4"></i>
      </Anchor>
      <Card className="mt-3" city={city} />
    </div>
  );
}
