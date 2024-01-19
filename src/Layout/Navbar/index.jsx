import React from 'react';
import { NavLink } from "react-router-dom";
import "./style.scss"

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <ul className='navbar_pages'>
          <li>
            {" "}
            <NavLink to={"/"} className={"page"}>
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/add"} className={"page"}>
              AddPage
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/detail:id"} className={"page"}>
              Detail
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/basket"} className={"page"}>
              Basket
            </NavLink>
          </li>
            <li>
              {" "}
              <NavLink to={"/wishlist"} className={"page"}>
                Wishlist
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/contact"} className={"page"}>
                Contact
              </NavLink>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
