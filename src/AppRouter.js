/** @format */

// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Customers from "./Components/Customers.js";
import { Home } from "./Components/Home.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Branches from "./Components/Branches.js";
import Cars from "./Components/Cars.js";
import { AddUser } from "./Components/AddUser.js";
import AddBranch  from "./Components/AddBranch.js";
import { AddLoan } from "./Components/AddLoan.js";
import { Deposit } from "./Components/Deposit.js";
import { Withdraw } from "./Components/Withdraw.js";
import CustomerHelp from "./Components/CustomerHelp.js";
import { AddCustomerHelp } from "./Components/AddCustomerHelp.js";
import Maintenance from "./Components/Maintenance.js";
import Reservation from "./Components/Reservation.js";
const AppRouter = () => {
  return (
		<Router>
			<Navbar />
			<ToastContainer
				toastStyle={{
					fontFamily: "Dancing Script",
				}}
			/>
			<Routes>
				<Route path="/customers" element={<Customers />} />
				<Route path="/" element={<Home />} />
				<Route path="/cars" element={<Cars />} />
				<Route path="/branches" element={<Branches />} />
				<Route path="/addUser" element={<AddUser />} />
				<Route path="/addBranch" element={<AddBranch />} />
				<Route path="/addLoan" element={<AddLoan />} />
				<Route path="/maintenance" element={<Maintenance />} />
				<Route path="/reservation" element={<Reservation />} />
				<Route path="/deposit" element={<Deposit />} />
				<Route path="/withdraw" element={<Withdraw />} />
				<Route path="/customerHelps" element={<CustomerHelp />} />
				<Route path="/addCustomerHelp" element={<AddCustomerHelp />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
