import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Cities from './pages/Cities';
import City from './pages/City';
import Login from './pages/Login';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [{ path: '/', element: <Home /> }] },
  { path: '/cities', element: <Layout />, children: [{ path: '/cities', element: <Cities /> }] },
  { path: '/city', element: <Layout />, children: [{ path: '/city/:id', element: <City /> }] },
  { path: '/login', element: <Layout />, children: [{ path: '/login', element: <Login /> }] },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
