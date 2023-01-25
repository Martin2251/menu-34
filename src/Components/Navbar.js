import React from 'react'
import { Link } from 'react-router-dom'
import * as Icons from "react-icons/fa"
import "./style.css";
import { navItems } from './NavItems';
import Button from './Button';

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <Link to="/" className="navbar-logo">
            Nature
            <Icons.FaTree  />
        </Link>
        <ul className='nav-items'>
            {navItems.map((item) => {
                return (
                <li key={item.id} className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
                </li>
                )
            })}
        </ul>
        <Button  />
    </nav>
    </>
  )
}

export default Navbar