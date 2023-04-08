import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Chat from "./Chat";

function Navbar() {
  const navi = useNavigate();
  const navigatefun = () => {
    navi("/login");
  };
  return (
    <>
      <Chat/>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Navbar;
