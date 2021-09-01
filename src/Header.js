import React from 'react'
import './css/Header.css'

function responsiveNav() {
	const navLinks = document.getElementsByClassName('nav-links')[0]
	navLinks.classList.toggle("active")
}


function Header() {
	return (
		<div>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			<nav className="nav">
				<div className="nav-brand">Covid Meter</div>
				<a href="#home" className="toggle-button" onClick={responsiveNav}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</a>
				<div className="nav-links">
					<ul>
						<li><a href="/"> Link1</a></li>
						<li><a href="/">Link2</a></li>
						<li><a href="/">Link3</a></li>
						<li><a href="/">Link4</a></li>
					</ul>
				</div>
			</nav>
		</div>
	)
}


export default Header
