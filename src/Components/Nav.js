import React from 'react'
import '../Components/Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<div className="nav-bar">
			<NavLink exact to="/">
				<h2 className="nav-link">Home</h2>
			</ NavLink> 
			<NavLink to="/Map">
				<h2 className="nav-link">Map</h2>
			</ NavLink>
		</div>
	)
}

export default Nav;