import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // This is just a placeholder. Replace it with actual authentication logic.
    // Example: setIsLoggedIn(auth.isAuthenticated());

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/">
                        <img className="btn btn-ghost text-xl" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Avatar"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {!isLoggedIn && (
                                <>
                                    <li>
                                        <Link to="/signUp" className="justify-between">
                                            Sign Up
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link to="/login">Login</Link></li>
                                </>
                            )}
                            {isLoggedIn && (
                                <li><Link to="/logout">Logout</Link></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
