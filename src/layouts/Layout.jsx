import React from 'react';
import { Navigate, Outlet, useOutlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/user';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout() {
  // Outlet
  const pathname = useOutlet().props.children.props.match.pathnameBase;
  //console.log(useOutlet(this));
  console.log(pathname);

  // Router
  const navigate = useNavigate();

  // Redux
  const userStore = useSelector((store) => store.user.user);

  const dispatch = useDispatch();

  // Local Storage
  const userLocalStorage = JSON.parse(localStorage.getItem('user'));

  // Reload Redux
  if (!userStore && userLocalStorage) {
    console.log('RECARGA');

    // Redux ➜ Dispatch (load)
    dispatch(userActions.userLoad(userLocalStorage));
  }

  // Protected routes
  if ((pathname == '/signup' || pathname == '/signin') && localStorage.getItem('user')) {
    console.log('NAVIGATE');

    // Navigate
    return navigate('/');
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
