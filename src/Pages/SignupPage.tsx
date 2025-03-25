import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 text-left">
        <h1 className="text-xl font-semibold text-gray-900">
          Create your PopX account
        </h1>
        <form className="mt-6 text-left" onSubmit={handleSubmit}>
          <label className="text-xs font-medium text-purple-600">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
            onChange={handleChange}
            required
          />

          <label className="text-xs font-medium text-purple-600 mt-3 block">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter phone number"
            className="w-full px-3 py-2 border rounded-lg mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
            onChange={handleChange}
            required
          />

          <label className="text-xs font-medium text-purple-600 mt-3 block">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full px-3 py-2 border rounded-lg mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
            onChange={handleChange}
            required
          />

          <label className="text-xs font-medium text-purple-600 mt-3 block">
            Password *
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-lg mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
            onChange={handleChange}
            required
          />

          <label className="text-xs font-medium text-purple-600 mt-3 block">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            className="w-full px-3 py-2 border rounded-lg mt-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
            onChange={handleChange}
          />

          <label className="text-xs font-medium text-purple-600 mt-3 block">
            Are you an Agency? *
          </label>
          <div className="flex gap-4 mt-1">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-5 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:bg-purple-800 hover:shadow-lg"
            onClick={() => navigate("/account-settings")}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
