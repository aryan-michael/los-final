import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/pages/personalDetails" >
			Personal Details
		</NavLink>
		<NavLink to="/contact" >
			Contact Us
		</NavLink>
		<NavLink to="/blogs" >
			Blogs
		</NavLink>
		<NavLink to="/sign-up" >
			Sign Up
		</NavLink>
		<NavLink to="/quotes" >
			Quotes
		</NavLink>
		<NavLink to="/form-data" >
			Form
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
