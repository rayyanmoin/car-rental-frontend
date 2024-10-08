/** @format */

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "./Styles.css";
import { Loading } from "./Loading";
import "react-toastify/dist/ReactToastify.css";

const Maintenance = () => {
	const [maintenance, setMaintenance] = useState([]);

	const fetchMaintenance = async () => {
		try {
			const response = await axios.get("http://localhost:8080/carrentalapi/carMaintenance/getList");
			setMaintenance(response.data);
		} catch (error) {
			console.error("Error fetching Maintenance:", error);
		}
	};

	useEffect(() => {
		fetchMaintenance();
	}, []);

	const columnDefs = [
		{ headerName: "Maintenance Id", field: "maintenanceId", width: 140 },
		{ headerName: "Make", field: "make", width: 120 },
		{ headerName: "Model", field: "model", width: 130 },
		{ headerName: "Year", field: "year", width: 120 },
		{ headerName: "Maintenance Date", field: "maintenanceDate", width: 260 },
		{ headerName: "Description", field: "description", width: 300 },
		{ headerName: "Cost", field: "cost", width: 100 },
		{ headerName: "Status", field: "status", width: 150 },
	];

	return (
		<div className="ag-theme-alpine" style={{ height: "550px", width: "1200px", margin: "0 auto" }}>
			{maintenance.length > 0 ? (
				<>
					<h1>Total Maintenance: {maintenance.length}</h1>

					<AgGridReact columnDefs={columnDefs} rowData={maintenance} pagination={true} paginationPageSize={10} />
				</>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Maintenance;
