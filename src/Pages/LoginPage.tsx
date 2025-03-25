import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 ">
        <h1 className="text-xl font-semibold text-gray-900">Sign in to your PopX account</h1>
        <p className="text-gray-500 text-sm mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form className="mt-6 text-left">
          <label className="text-xs font-medium text-purple-600">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-3 py-2 border rounded-lg mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />

          <label className="text-xs font-medium text-purple-600 mt-3 block">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-lg mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full mt-5 py-3 bg-gray-400 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:bg-purple-500 hover:shadow-lg"
            disabled
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
