/** @format */

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "./CustomerList.css";
import { Loading } from "./Loading";
import "react-toastify/dist/ReactToastify.css";

const Cars = () => {

  const [cars, setCars] = useState([]);


	const fetchCars = async () => {
		try {
			const response = await axios.get("http://localhost:8080/carrentalapi/cars/getList");
			setCars(response.data);
		} catch (error) {
			console.error("Error fetching cars:", error);
		}
	};

	useEffect(() => {
		fetchCars();
	}, []);

	const columnDefs = [
		{ headerName: "Car ID", field: "carId", width: 80 },
		{ headerName: "Branch Name", field: "branchName", width: 180 },
		{ headerName: "Make", field: "make", width: 150 },
		{ headerName: "Model", field: "model", width: 120 },
		{ headerName: "Year", field: "year", width: 100 },
		{ headerName: "Color", field: "color", width: 130 },
		{ headerName: "Liecense Plate", field: "licensePlate", width: 180 },
		{ headerName: "Status", field: "status", width: 150 },
		{ headerName: "Daily Rental Rate", field: "dailyRentalRate", width: 170 },
	];

	return (
		<div className="ag-theme-alpine" style={{ height: "550px", width: "1200px", margin: "0 auto" }}>
			{cars.length > 0 ? (
				<>
					<h1>Total Cars: {cars.length}</h1>
          
					<AgGridReact columnDefs={columnDefs} rowData={cars} pagination={true} paginationPageSize={10} />
				</>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Cars;
