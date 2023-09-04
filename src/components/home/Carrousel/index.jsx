import React, { useEffect, useState } from 'react';
import './style.css';

export default function Carrousel() {
  let arrayImages = [
    { title: 'Berlín', src: '/welcome//carrousel/berlin.jpg' },
    { title: 'China', src: '/welcome//carrousel/china.jpg' },
    { title: 'Dinamarca', src: '/welcome//carrousel/dinamarca.jpg' },
    { title: 'Dubai', src: '/welcome/carrousel/dubai.jpg' },
    { title: 'Japón', src: '/welcome/carrousel/japon.jpg' },
    { title: 'París', src: '/welcome//carrousel/paris.jpg' },
    { title: 'Praga', src: '/welcome/carrousel/praga.jpg' },
    { title: 'Singapur', src: '/welcome/carrousel/singapur.jpg' },
    { title: 'Suiza', src: '/welcome//carrousel/suiza.jpg' },
    { title: 'Venecia', src: '/welcome//carrousel/venecia.jpg' },
    { title: 'Viena', src: '/welcome//carrousel/viena.jpg' },
    { title: 'Washington', src: '/welcome//carrousel/washington.jpg' },
  ];

  let idTimeout;

  let [index, setIndex] = useState(0);

  useEffect(() => {
    idTimeout = setTimeout(() => {
      setIndex(index == 8 ? 0 : index + 4);
    }, 3000);
  }, [index]);

  function arrow(direction) {
    clearTimeout(idTimeout);

    index = direction == 'R' ? index - 4 : index + 4;
    index = index < 0 ? 8 : index > 8 ? 0 : index;

    setIndex(index);
  }

  return (
    <div className="mt-5">
      <div className="container-sm mt-2 d-flex flex-row justify-content-between align-items-center">
        <i className="col-1 bi-chevron-left text-black-50 display-4" onClick={() => arrow('R')}></i>
        <div>
          <div className="d-flex flex-row justify-content-center align-items-center ">
            <div className="me-5 col-5 position-relative">
              <h4 className="pb-3 position-absolute bottom-0 start-50 translate-middle-x text-white">{arrayImages[index].title}</h4>
              <img className="object-fit-cover rounded shadow" width="300px" height="200px" src={arrayImages[index].src} alt="Carrousel" />
            </div>
            <div className="col-5 position-relative">
              <h4 className="pb-3 position-absolute bottom-0 start-50 translate-middle-x text-white">{arrayImages[index + 1].title}</h4>
              <img className="object-fit-cover rounded shadow" width="300px" height="200px" src={arrayImages[index + 1].src} alt="Carrousel" />
            </div>
          </div>
          <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
            <div className="me-5 col-5 position-relative">
              <h4 className="pb-3 position-absolute bottom-0 start-50 translate-middle-x text-white">{arrayImages[index + 2].title}</h4>
              <img className="object-fit-cover rounded shadow" width="300px" height="200px" src={arrayImages[index + 2].src} alt="Carrousel" />
            </div>
            <div className="col-5 position-relative">
              <h4 className="pb-3 position-absolute bottom-0 start-50 translate-middle-x text-white">{arrayImages[index + 3].title}</h4>
              <img className="object-fit-cover rounded shadow" width="300px" height="200px" src={arrayImages[index + 3].src} alt="Carrousel" />
            </div>
          </div>
        </div>
        <i className="col-1 bi-chevron-right text-black-50 display-4" onClick={() => arrow('L')}></i>
      </div>
    </div>
  );
}
