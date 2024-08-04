import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
        <h1 className="text-xl font-bold">CONGES</h1>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src="/profile-pic.png"
          alt="Profile"
          className="h-8 rounded-full"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
          Déconnexion
        </button>
      </div>
    </header>
  );
};

export default Header;
