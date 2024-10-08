// Layout.jsx - Zain Gova - 301018602 - September 22, 2024

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/icon.svg";
import Footer from "./Footer";
import {socials} from "../data/socials.jsx";

export default function Layout() {
    return (
        <>
            <div className="header">
                <NavLink to="/" className="header-link">
                    <h1 className="title">Zain Gova</h1>
                    <img src={logo} alt="Logo" className="logo" />
                </NavLink>
            </div>
            <nav>
                <NavLink to="/" end className="nav-link nav-link-first">
                    Home
                </NavLink>|
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>|
                <NavLink to="/services" className="nav-link">
                    Services
                </NavLink>|
                <NavLink to="/project" className="nav-link">
                    Projects
                </NavLink>|
                <NavLink to="/contact" className="nav-link">
                    Contact
                </NavLink>
            </nav>
            
            <br />
            <hr />
        </>
    );
}