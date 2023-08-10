import React from 'react';
import Welcome from '../components/Welcome';
import Carrousel from '../components/Carrousel';

export default function Home() {
  return (
    <div className='my-5'>
      <Welcome />
      <Carrousel />
    </div>
  );
}
