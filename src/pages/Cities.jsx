import React from 'react';
import Cards from '../components/cities/Cards';

export default function Cities() {
  document.title = 'MyTinerary... Cities';

  return (
    <div className="my-5">
      <Cards />
    </div>
  );
}
