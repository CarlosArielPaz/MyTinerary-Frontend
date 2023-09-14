import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
      <div className="container d-flex flex-row">
        <div className="col-8 pe-4">
          <h2>Find your perfect destination</h2>
          <p className="my-4">Our app will help you find the perfect path for your next trip. With an esay-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <Link to="/cities">
            <button className="px-4 py-2 btn btn-primary fs-5" type="button">
              <i class="me-3 bi bi-search"></i>View more
            </button>
          </Link>
        </div>
        <div className="col-4">
          <img className="img-fluid rounded shadow" src="/welcome/welcome.jpg" alt="welcome" />
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <Link to="/cities">
          <button className="px-4 py-2 btn btn-primary fs-5" type="button">
            <i class="me-3 bi bi-magic"></i> Let's visit more magical cities
          </button>
        </Link>
      </div>
    </>
  );
}
