import React from "react";

const AccountSettings = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-lg font-semibold text-gray-900">
          Account Settings
        </h1>
        <div className="mt-4 flex items-center space-x-4">
          <img
            src="/profile_icon.png"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-medium text-gray-900">Kartik Rathor</h2>
            <p className="text-gray-500 text-sm">kartik@gmail.com</p>
          </div>
        </div>

        <p className="mt-4 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam.
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
