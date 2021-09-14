import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Grocery Store{" "}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-md-auto">
            <li className="nav-item">
              <a
                target="_blank"
                rel="noopener"
                className="nav-link"
                href="https://github.com/devHemant"
              >
                <i className="fa fa-github"></i> GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                rel="noopener"
                className="nav-link"
                href="https://twitter.com/TheHemant17"
              >
                <i className="fa fa-twitter"></i> Twitter
              </a>
            </li>
            {user ? (
              <li className="nav-item">
                <Link onClick={handleLogout} className="nav-link">
                  <i className="fa fa-user" /> {user.firstName} (Logout)
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="fa fa-user-o" /> Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
