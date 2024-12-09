import {React, useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import './App.css';
import NavButton from './NavButton.js';

function NavBar() {
    return (
        <nav className="navbar">
            <NavButton path="bio" text="BIO"/>
            <NavButton path="projects" text="PROJECTS"/>
            <NavButton path="contact" text="CONTACT"/>
        </nav>
    );
}

export default NavBar;