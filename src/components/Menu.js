import React from "react"
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : undefined)}>Home</NavLink></li>
                <li><NavLink to="/add" className={({ isActive }) => (isActive ? "active-link" : undefined)}>Add Techno</NavLink></li>
                <li><NavLink to="/list" className={({ isActive }) => (isActive ? "active-link" : undefined)}>Technos list</NavLink></li>
            </ul>
        </div >
    )
}

export default Menu