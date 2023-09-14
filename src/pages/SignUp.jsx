import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';
import userActions from '../redux/actions/user';
import countries from '../data/countries.js';

export default function SignUp() {
  // Document ➜ Title
  document.title = 'MyTinerary... Sign up';

  // Hook ➜ Ref
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const imageRef = useRef();
  const countryRef = useRef();

  // Router
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();

  // Sign Up ➜ Form
  const signUpForm = (event) => {
    event.preventDefault();

    // Data
    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const image = imageRef.current.value;
    const country = countryRef.current.value;

    // Sign Up
    signUp({ name, surname, email, password, image, country });
  };

  // Sign Up ➜ Google
  const signUpGoogle = (credential) => {
    // Google ➜ Token
    const token = credential;

    // Google ➜ Token ➜ Payload
    const payload = jwt_decode(token);

    // Data
    const name = payload.given_name;
    const surname = payload.family_name;
    const email = payload.email;
    const password = payload.sub;
    const image = payload.picture;
    const country = '';

    // Sign Up
    signUp({ name, surname, email, password, image, country });
  };

  // Sign Up
  const signUp = (data) => {
    // HTTP ➜ Request (post)
    axios
      .post('http://localhost:5000/sign/up', data)
      .then((response) => {
        // Local Storage ➜ Item ➜ User (save)
        localStorage.setItem('user', JSON.stringify(response.data));

        // Redux ➜ Dispatch ➜ User (load)
        dispatch(userActions.userLoad(response.data));

        // Toast
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 10000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Registration successfully',
          footer: `Welcome ${response.data.name}`,
        });

        // Navigate
        navigate('/');
      })
      .catch((error) => {
        // Modal
        Swal.fire({
          icon: 'error',
          title: 'Registration denied',
          text: 'Please verify your details and try again.',
        });
      });
  };

  return (
    <div className="my-5 w-50 container d-flex flex-column justify-content-center">
      <h2 className="mb-4 w-100 text-center text-primary">Sign up</h2>
      <Form className="p-5 border rounded shadow fs-5" onSubmit={signUpForm}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control className="fs-4" type="text" required ref={nameRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control className="fs-4" type="text" required ref={surnameRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="fs-4" type="email" required ref={emailRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control className="fs-4" type="password" required ref={passwordRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>URL Image</Form.Label>
          <Form.Control className="fs-4" type="text" ref={imageRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Select className="fs-4" ref={countryRef}>
            <option value=""></option>
            {countries.map((country) => (
              <option value={country}>{country}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <button className="mt-3 mb-5 px-4 py-2 btn btn-primary fs-5" type="submit">
          <i class="me-3 bi bi-person-check-fill"></i>Send
        </button>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            // Sign Up ➜ Google
            signUpGoogle(credentialResponse.credential);
          }}
          onError={() => {
            console.log('Google: Login failed');
          }}
        />
      </Form>
    </div>
  );
}
