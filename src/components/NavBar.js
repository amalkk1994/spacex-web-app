import React from "react"
import logo from "../assets/img/logo.png"
import NavItem from "./NavItem"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-slate-800 py-3 px-4">
      <div className="flex justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10" />
        </Link>
        <ul className="flex gap-12 items-center mr-20">
          <NavItem link="/launches" label="Launch" />
          <NavItem link="/missions" label="Missions" />
          <NavItem link="/ships" label="Ships" />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
