import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="d-flex flex-grow-1">
                <span className="w-100 d-lg-none d-block"></span>
                <Link className="navbar-brand" to="/">
                Inventory
                </Link>
                <div className="w-100 text-right">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul className="navbar-nav ml-auto flex-nowrap">
                    <li className="nav-item active">
                        <Link href="/" className="nav-link ">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <Link to="/signin" className="nav-link">
                    <button type="button" id="get-started-button">Logout <i className="fa fa-sign-out" aria-hidden="true"></i></button>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;