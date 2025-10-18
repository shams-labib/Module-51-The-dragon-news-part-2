import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext/AuthProvider';

const Register = () => {

    const {user, createUser} = use(AuthContext);
 const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    
    createUser(email, password).then(result => {
        console.log(result.user)
    }).catch(err => {
        console.log(err);
        alert(err.code, err.message)
    })
    
 }

    return (
         <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-7">
                <h1 className='font-semibold text-center text-xl py-3'>Register Your Account</h1>
      <div className="card-body">
       <form onSubmit={handleSubmit}>
         <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
           type="text" 
           name='name'
           className="input" 
           placeholder="Your name" />
          <label className="label">Photo URL</label>
          <input
           type="text" 
           name='photo'
           className="input" 
           placeholder="Photo URL" />
          <label className="label">Email</label>
          <input
           type="email" 
           name='email'
           className="input" 
           placeholder="Email" />
          <label className="label">Password</label>
          <input 
          type="password" 
          name='password'
          className="input" 
          placeholder="Password" />
          <div> <label className="label">
    <input type="checkbox" defaultChecked className="checkbox" />
    Accept terms and condition
  </label></div>
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='text-center mt-3'>Already Have An Account ? <Link to={'/auth/login'} className='text-blue-500 font-semibold hover:text-blue-800 '>LogIn</Link></p>
        </fieldset>
       </form>
      </div>
    </div>
        </div>
    );
};

export default Register;