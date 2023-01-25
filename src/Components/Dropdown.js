import React from 'react'
import { serviceDropdown } from './NavItems'
import { Link } from 'react-router-dom'
import "./Dropdown.css"

const Dropdown = () => {
  return (
    <>
    <ul>
        {serviceDropdown.map(item => {
            return(
                <li key={item.id}>
                    <Link className={item.cName}>{item.title}</Link>
                </li>
            )
        })}
    </ul>
    </>
  )
}

export default Dropdown