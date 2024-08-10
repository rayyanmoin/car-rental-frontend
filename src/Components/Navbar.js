/** @format */

// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/customers">Customers</Link>
				</li>
				<li>
					<Link to="/cars">Cars</Link>
				</li>
				<li>
					<Link to="/branches">Branches</Link>
				</li>
				<li>
					<Link to="/maintenance">Maintenance</Link>
				</li>
				<li>
					<Link to="/reservation">Reservation</Link>
				</li>
				<li>
					<Link to="/employee">Employee</Link>
				</li>
				<li>
					<Link to="/employeeSalary">Employee Salary</Link>
				</li>
				<li>
					<Link to="/addCar">Add Car</Link>
				</li>
				<li>
					<Link to="/addBranch">Add Branch</Link>
				</li>
				<li>
					<Link to="/addReservation">Add Reservation</Link>
				</li>
				<li>
					<Link to="/addMaintenance">Add Maintenance</Link>
				</li>
				<li>
					<Link to="/addCustomer">Add Customer</Link>
				</li>
				<li>
					<Link to="/addEmployee">Add Employee</Link>
				</li>
				<li>
					<Link to="/addEmployeeSalary">Add Employee Salary</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
