import React from "react";

function Navbar() {
  const handleNavigation = (path) => {
    // You can handle the navigation logic here.
    // For example, use the React Router history to navigate.
    // history.push(path);
  };

  return (
    <div>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-brand btn"
            onClick={() => handleNavigation("/")}
          >
            Navbar
          </button>
          <button
            className="navbar-toggler btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link active btn"
                  aria-current="page"
                  onClick={() => handleNavigation("/")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() => handleNavigation("/features")}
                >
                  Features
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() => handleNavigation("/pricing")}
                >
                  Pricing
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => handleNavigation("/")}
                >
                  Dropdown link
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item btn"
                      onClick={() => handleNavigation("/")}
                    >
                      Action
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item btn"
                      onClick={() => handleNavigation("/")}
                    >
                      Another action
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item btn"
                      onClick={() => handleNavigation("/")}
                    >
                      Something else here
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
