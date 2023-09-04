import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <>
      <header>
        <div className="container-sm d-flex flex-column align-items-center flex-xl-row justify-content-xl-between">
          <h1>MyTinerary</h1>

          <nav className="mt-4 d-flex flex-row flex-wrap justify-content-center gap-2">
            <Anchor to="/">
              <button className="px-4 py-2 btn fs-5" type="button">
                Home
              </button>
            </Anchor>
            <Anchor to="/cities">
              <button className="px-4 py-2 btn fs-5" type="button">
                Cities
              </button>
            </Anchor>
            <Anchor to="/login">
              <button className="px-4 py-2 btn btn-primary fs-5" type="button">
                <i className="bi-person"></i> Login
              </button>
            </Anchor>
          </nav>
        </div>
      </header>
    </>
  );
}
