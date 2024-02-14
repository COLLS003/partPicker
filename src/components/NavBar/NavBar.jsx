import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-200 w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4">
        </a>
        <div className="flex flex-wrap items-center text-base justify-center">
          <a className="mr-5" href="/">Home</a>
          <a className="mr-5" href="/profile">Profile</a>
          <a className="mr-5" href="/register">Sign up</a>
          <a className="mr-5" href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
