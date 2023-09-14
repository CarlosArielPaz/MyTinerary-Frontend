import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import userActions from '../../redux/actions/user';
import './style.css';

export default function Header() {
  // Router
  const navigate = useNavigate();

  // Redux
  const userStore = useSelector((store) => store.user.user);

  const dispatch = useDispatch();

  // Handle ➜ Sign Out
  const handleSignOut = () => {
    // Local Storage ➜ Item (remove)
    localStorage.removeItem('user');

    // Redux ➜ Dispatch (remove)
    dispatch(userActions.userRemove());

    // Navigate
    navigate('/');

    // Modal
    Swal.fire({
      icon: 'success',
      title: 'Sign out',
    });
  };

  return (
    <>
      <header>
        <div className="container-sm d-flex flex-column align-items-center flex-xl-row justify-content-xl-between">
          <h1>MyTinerary</h1>

          <nav className="mt-4 d-flex flex-row flex-wrap justify-content-center gap-2">
            <Link to="/">
              <button className="px-4 py-2 btn fs-4" type="button">
                Home
              </button>
            </Link>
            <Link to="/cities">
              <button className="px-4 py-2 btn fs-4" type="button">
                Cities
              </button>
            </Link>
            {userStore ? (
              <>
                <button className="px-4 py-2 btn btn-primary fs-4" type="button" onClick={handleSignOut}>
                  <i class="me-3 bi bi-person-x-fill"></i>Sign out {userStore.name}
                </button>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <button className="px-4 py-2 btn btn-primary fs-4" type="button">
                    <i class="me-3 bi bi-person-plus-fill"></i>Sign up
                  </button>
                </Link>
                <Link to="/signin">
                  <button className="px-4 py-2 btn btn-primary fs-4" type="button">
                    <i class="me-3 bi bi-person-fill"></i>Sign in
                  </button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
