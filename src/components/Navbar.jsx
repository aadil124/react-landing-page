import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light static-top p-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-2" href="/">
          React Landing Page
        </a>
        <a className="btn btn-primary py-2" href="#signup">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
