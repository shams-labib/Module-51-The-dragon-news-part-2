import React, {  useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthProvider';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { SignInUser } = useContext(AuthContext);
  const [error, setError] = useState("")
  console.log(location)

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    SignInUser(email, password)
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`)
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        setError(err.message)
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-7">
        <h1 className="font-semibold text-center text-xl py-3">
          LogIn Your Account
        </h1>
        <div className="card-body">
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input name="email" required type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" required type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
                 {
              error && <p className='text-red-500'>{error}</p>
            }
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="text-center mt-3">
                Don’t Have An Account?
                <Link
                  to="/auth/register"
                  className="text-blue-500 font-semibold hover:text-blue-800"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
