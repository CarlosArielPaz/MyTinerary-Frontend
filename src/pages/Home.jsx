import React from 'react';
import Welcome from '../components/home/Welcome';
import Carrousel from '../components/home/Carrousel';

export default function Home() {
  return (
    <div className='my-5'>
      <Welcome />
      <Carrousel />
    </div>
  );
}
