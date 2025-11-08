import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const [auth, setAuth] = useState({ isAuthed: false, user: null });
  const location = useLocation();
  const handleOpenDashboard = () => {
    window.location.href = DASHBOARD_URL;
  };

  const DASHBOARD_URL =
    (typeof import.meta !== "undefined" &&
      import.meta &&
      import.meta.env &&
      import.meta.env.VITE_DASHBOARD_URL) ||
    process.env.REACT_APP_DASHBOARD_URL ||
    "https://wonderlost-zerodha-clonedashboard.onrender.com";

const API_URL = process.env.REACT_APP_API_URL || "https://wonderlost-zerodha-clonebackend.onrender.com";


  useEffect(() => {
    // Debug: verify which URL we will navigate to in production
    try { console.log("DASHBOARD_URL =>", DASHBOARD_URL); } catch {}

    const check = async () => {
      try {
        const res = await fetch(`${API_URL}/verify`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data?.status) setAuth({ isAuthed: true, user: data.user });
        else setAuth({ isAuthed: false, user: null });
      } catch (e) {
        setAuth({ isAuthed: false, user: null });
      }
    };
    check();
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {}
    setAuth({ isAuthed: false, user: null });
  };

  return (
    <div className="container-fluid p-0">
      <nav
        className="navbar navbar-expand-lg navbar-light border-bottom"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid px-5">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/images/Logo.png"
              alt="Logo"
              style={{ width: "25%", marginRight: "8px" }}
            />
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
              {!auth.isAuthed ? (
                <li className="nav-item">
                  <Link className="nav-link text-secondary" to="/signup">
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link text-secondary"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
              {/* Dashboard visible only when authenticated */}
              {auth.isAuthed && (
                <li className="nav-item d-flex align-items-center">
                  <a className="btn btn-primary" href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                    Dashboard
                  </a>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/TryAi">
                  Try AI For Free
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
