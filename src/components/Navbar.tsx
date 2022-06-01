import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar: React.FC = () => (

    <nav>
        <div className="nav-wrapper purple lighten-1 px1">
        <NavLink to="/React_Typescript_Project" className="brand-logo center">React + Typescript</NavLink>
            <ul className="left hide-on-med-and-down">
        <li><NavLink to="/React_Typescript_Project">Home</NavLink></li>
        <li><NavLink to="/todoList">Todo List</NavLink></li>
        <li><NavLink to="/about">Info</NavLink></li>
            </ul>
    </div>
    </nav>
)
export default Navbar;
