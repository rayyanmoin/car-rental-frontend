/** @format */

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "./Styles.css";
import { Loading } from "./Loading";
import "react-toastify/dist/ReactToastify.css";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/carrentalapi/customers/getList");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const columnDefs = [
    { headerName: "Customer ID", field: "customerId", width: 120 },
    { headerName: "CNIC", field: "cnic", width: 150 },
    { headerName: "Full Name", field: "fullName", width: 120 },
    { headerName: "Email", field: "email", width: 200 },
    { headerName: "Phone Number", field: "phoneNumber", width: 130 },
    { headerName: "Address", field: "address", width: 270 },
    { headerName: "Created At", field: "createdAt", width: 270 },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: "550px", width: "1200px", margin: "0 auto" }}>
      {customers.length > 0 ? (
        <>
          <h1>Total Customers: {customers.length}</h1>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={customers}
            pagination={true}
            paginationPageSize={10}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CustomerList;
