import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';
import userActions from '../redux/actions/user';

export default function SignIn() {
  // Document ➜ Title
  document.title = 'MyTinerary... Sign in';

  // Hook ➜ Ref
  const emailRef = useRef();
  const passwordRef = useRef();

  // Router
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();

  // Sign In ➜ Form
  const signInForm = (event) => {
    event.preventDefault();

    // Data
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Sign In
    signIn({ email, password });
  };

  // Sign In ➜ Google
  const signInGoogle = (credential) => {
    // Google ➜ Token
    const token = credential;

    // Google ➜ Token ➜ Payload
    const payload = jwt_decode(token);

    // Data
    const email = payload.email;
    const password = payload.sub;

    // Sign In
    signIn({ email, password });
  };

  // Sign In
  const signIn = (data) => {
    console.log(data);
    // HTTP ➜ Request (post)
    axios
      .post('http://localhost:5000/sign/in', data)
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
          title: 'Signed in successfully',
          footer: `Welcome ${response.data.name}`,
        });

        // Navigate
        navigate('/');
      })
      .catch((error) => {
        // Modal
        Swal.fire({
          icon: 'error',
          title: 'Access denied',
          text: 'Please verify your email and password and try again',
        });
      });
  };

  return (
    <div className="my-5 w-50 container d-flex flex-column justify-content-center">
      <h2 className="mb-4 w-100 text-center text-primary">Sign in</h2>
      <Form className="p-5 border rounded shadow fs-5" onSubmit={signInForm}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="fs-4" type="email" required ref={emailRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control className="fs-4" type="password" required ref={passwordRef} />
        </Form.Group>
        <button className="mt-3 mb-5 px-4 py-2 btn btn-primary fs-5" type="submit">
          <i class="me-3 bi bi-person-check-fill"></i>Access
        </button>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            // Sign In ➜ Google
            signInGoogle(credentialResponse.credential);
          }}
          onError={() => {
            console.log('Google: Login failed');
          }}
        />
      </Form>
    </div>
  );
}
