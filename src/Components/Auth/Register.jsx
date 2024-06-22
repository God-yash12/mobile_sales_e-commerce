
import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
        <div className="w-full p-4">
          <h2 className="text-3xl font-bold text-center mb-4">Register</h2>
          <div className="flex justify-center mb-4">
            <a href="/" className="text-blue-600 underline mr-2">Home</a> &gt;
            <a href="/account" className="text-blue-600 ml-2">Account</a>
          </div>
          <form className="mt-20 flex flex-col items-center">
            <div className="mb-4 w-3/4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4 w-3/4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-4 w-3/4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6 w-3/4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
              <p className="mt-4 text-sm font-thin">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
            </div>
            <div className="flex items-center justify-between w-3/4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Register
              </button>
            </div>
            <div className='flex items-center justify-between mt-4 w-3/4'>
              <div className="text-center w-full">
                <span className="font-bold text-sm text-gray-700">Already have an account? </span>
                <a href="/login" className="text-blue-600 hover:text-blue-800 underline">Login</a>
              </div>
            </div>
          </form>
        </div>    
      </div>
    </div>
  );
}

export default Register;
