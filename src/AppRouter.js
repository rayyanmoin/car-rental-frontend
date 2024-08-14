/** @format */

// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import { Home } from "./Components/Home.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Branches from "./Components/Branches.js";
import Cars from "./Components/Cars.js";
import CustomerList from "./Components/CustomerList..js";
import AddBranch from "./Components/AddBranch.js";
import Maintenance from "./Components/Maintenance.js";
import Reservation from "./Components/Reservation.js";
import Customers from "./Components/Customers.js";
import AddCar from "./Components/AddCar.js";
import AddMaintenance from "./Components/AddMaintenance.js";
import AddReservation from "./Components/AddReservation.js";
import Employee from "./Components/Employee.js";
import EmployeeSalary from "./Components/EmployeeSalary.js";
import AddEmployee from "./Components/AddEmployee.js";
import AddEmployeeSalary from "./Components/AddEmployeeSalary.js";

const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<ToastContainer
				toastStyle={{
					fontFamily: "Arial",
				}}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cars" element={<Cars />} />
				<Route path="/employee" element={<Employee />} />
				<Route path="/branches" element={<Branches />} />
				<Route path="/addBranch" element={<AddBranch />} />
				<Route path="/employeeSalary" element={<EmployeeSalary />} />
				<Route path="/addEmployeeSalary" element={<AddEmployeeSalary />} />
				<Route path="/addCustomer" element={<Customers />} />
				<Route path="/customer" element={<CustomerList />} />
				<Route path="/addCar" element={<AddCar />} />
				<Route path="/maintenance" element={<Maintenance />} />
				<Route path="/addEmployee" element={<AddEmployee />} />
				<Route path="/addMaintenance" element={<AddMaintenance />} />
				<Route path="/addReservation" element={<AddReservation />} />
				<Route path="/reservation" element={<Reservation />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
