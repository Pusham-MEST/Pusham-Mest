import React from 'react';
import { logo } from '../assets';

const Navbar = () => {
  return (
    <div>
      <div>
        {/* Your logo and other content */}
        <img src={logo} alt="Logo" />
      </div>
      <div>
        {/* Menu and dropdown */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Sign Up
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
