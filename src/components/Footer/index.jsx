import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-sm d-flex flex-column align-items-center gap-4 flex-sm-row justify-content-sm-between">
        <div className="d-flex flex-row gap-2 gap-sm-4">
          <a href="https://www.instagram.com" target="_blank">
            <i className="bi-instagram footer-icon"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <i className="bi-twitter footer-icon"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <i className="bi-facebook footer-icon"></i>
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <i className="bi-whatsapp footer-icon"></i>
          </a>
        </div>

        <div>
          <span>MyTinerary 2023</span>
        </div>
      </div>
    </footer>
  );
}
