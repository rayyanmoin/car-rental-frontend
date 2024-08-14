/** @format */

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "./Styles.css";
import { Loading } from "./Loading";
import "react-toastify/dist/ReactToastify.css";

const Employee = () => {
	const [employee, setEmployee] = useState([]);

	const fetchEmployee = async () => {
		try {
			const response = await axios.get("http://localhost:8080/carrentalapi/employee/getList");
			setEmployee(response.data);
		} catch (error) {
			console.error("Error fetching Employee:", error);
		}
	};

	useEffect(() => {
		fetchEmployee();
	}, []);

	const columnDefs = [
		{ headerName: "Employee Id", field: "employeeId", width: 130 },
		{ headerName: "Name", field: "name", width: 180 },
		{ headerName: "Profession", field: "profession", width: 200 },
		{ headerName: "Phone Number", field: "phoneNumber", width: 170 },
		{ headerName: "Address", field: "address", width: 280 },
		{ headerName: "Branch", field: "branchName", width: 210 },
	]; 

	return (
		<div className="ag-theme-alpine" style={{ height: "550px", width: "1200px", margin: "0 auto" }}>
			{employee.length > 0 ? (
				<>
					<h1>Total Employee: {employee.length}</h1>

					<AgGridReact columnDefs={columnDefs} rowData={employee} pagination={true} paginationPageSize={10} />
				</>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Employee;
