/** @format */

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "./CustomerList.css";
import { Loading } from "./Loading";
import "react-toastify/dist/ReactToastify.css";

const Branches = () => {
 
  const [branches, setBranches] = useState([]);

	const fetchBranches = async () => {
		try {
			const response = await axios.get("http://localhost:8080/carrentalapi/branches/getList");
			setBranches(response.data);
		} catch (error) {
			console.error("Error fetching Branches:", error);
		}
	};

	useEffect(() => {
		fetchBranches();
	}, []);

	const columnDefs = [
		{ headerName: "Branch ID", field: "branchId", width: 130 },
		{ headerName: "Branch Name", field: "branchName", width: 240 },
		{ headerName: "Location", field: "location", width: 350 },
		{ headerName: "Phone Number", field: "phoneNumber", width: 230 },
		{ headerName: "Email", field: "email", width: 350 },
	];

	return (
		<div className="ag-theme-alpine" style={{ height: "550px", width: "1200px", margin: "0 auto" }}>
			{branches.length > 0 ? (
				<>
					<h1>Total Branches: {branches.length}</h1>

					<AgGridReact columnDefs={columnDefs} rowData={branches} pagination={true} paginationPageSize={10} />
				</>
			) : (
				<Loading />
			)}
		</div>
	);

 
};

export default Branches;
