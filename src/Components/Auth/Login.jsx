import React from 'react';

const Login = () => {
  return (
    <div className="min-h-full flex items-center justify-center">
      <div className="max-w-5xl w-full p-8 rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4 mx-4">
          <h2 className="text-3xl font-bold text-center md:text-center mb-4">Log In</h2>
          <div className="flex justify-center md:justify-center mb-4">
            <a href="/" className="text-blue-600 underline mr-2">Home</a> &gt;
            <a href="/account" className="text-blue-600 ml-2">Account</a>
          </div>
          <form className="mt-4 md:mt-20 p-4">
            <div className="mb-4 md:w-3/4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6 md:w-3/4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
              <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800 underline mt-2" href="/forgotpassword">Forgot your password?</a>
            </div>
            <div className="flex items-center justify-between md:w-3/4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 p-4 md:p-12 mt-10 md:mt-0">
          <h3 className="text-xl font-bold mt-10 md:mt-20">New Customer</h3>
          <p className="mt-4 text-sm font-thin">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
          <a href="/register" className='mt-4 inline-block'>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
