import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 ">
        <h1 className="text-xl font-semibold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-6">
          <button
            className="w-full py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
          <button
            className="w-full mt-3 py-3 bg-purple-200 text-purple-700 font-medium rounded-lg shadow-md transition-all duration-300 hover:bg-purple-300 hover:shadow-lg"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
