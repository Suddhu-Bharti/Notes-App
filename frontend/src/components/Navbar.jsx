import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return <nav className="navbar bg-dark px-4">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/notes">Notes</Link></h4>
        <h4><Link className="link" to="/create-notes">Create Note</Link></h4>
    </nav>
}

export default Navbar;