/** @format */

// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import CustomerList from "./Components/CustomerList..js";
import { Home } from "./Components/Home.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Branches from "./Components/Branches.js";
import Cars from "./Components/Cars.js";
import { AddUser } from "./Components/AddUser.js";
import AddBranch from "./Components/AddBranch.js";
import { AddLoan } from "./Components/AddLoan.js";
import { Deposit } from "./Components/Deposit.js";
import { Withdraw } from "./Components/Withdraw.js";
import Maintenance from "./Components/Maintenance.js";
import Reservation from "./Components/Reservation.js";
import Customers from "./Components/Customers.js";
import AddCar from "./Components/AddCar.js";
import AddMaintenance from "./Components/AddMaintenance.js";
import AddReservation from "./Components/AddReservation.js";

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
				<Route path="/customers" element={<CustomerList />} />
				<Route path="/" element={<Home />} />
				<Route path="/cars" element={<Cars />} />
				<Route path="/branches" element={<Branches />} />
				<Route path="/addUser" element={<AddUser />} />
				<Route path="/addBranch" element={<AddBranch />} />
				<Route path="/addLoan" element={<AddLoan />} />
				<Route path="/addCustomer" element={<Customers />} />
				<Route path="/addCar" element={<AddCar />} />
				<Route path="/maintenance" element={<Maintenance />} />
				<Route path="/addMaintenance" element={<AddMaintenance />} />
				<Route path="/addReservation" element={<AddReservation />} />
				<Route path="/reservation" element={<Reservation />} />
				<Route path="/deposit" element={<Deposit />} />
				<Route path="/withdraw" element={<Withdraw />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
