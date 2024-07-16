/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddUser.css";

export const Withdraw = () => {
  const [accountData, setAccountData] = useState({
    accountNumber: "",
    amount: "",
    pin: "",
  });

  function hasEmptyValues(obj) {
    return Object.values(obj).some((value) => value === "" || value === null || value === undefined);
  }

  function notifyFunc(response) {
    if (response.data === "Invalid pin. Please provide correct pin!") {
      notifyError();
    } else if (response.data == "Amount withdrawn from account successfully!") {
      notify();
    } else if (response.data == "Withdrawal amount exceeded!") {
      notifyExceed();
    }
  }

  const notify = () => toast("Amount withdrawn from account successfully!", { type: "success" });
  const notifyError = () => toast("Invalid pin. Please provide correct pin!", { type: "error" });
  const notifyWarning = () => toast("Please Fill All The Fields!", { type: "warning" });
  const notifyExceed = () => toast("Withdrawal amount exceeded!", { type: "error" });

  const withdraw = async () => {
    console.log(accountData);
    if (hasEmptyValues(accountData)) {
      notifyWarning();
      return;
    } else {
      try {
        const response = await axios.post("http://localhost:8080/api/withdraw", null, {
          params: accountData,
        });
        console.log(response);
        notifyFunc(response);
        setAccountData({
          accountNumber: "",
          amount: "",
          pin: "",
        });
      } catch (error) {
        notifyError();
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountData({
      ...accountData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="card">
        <h2>Withdraw Amount</h2>
        <div className="form-group">
          <label htmlFor="accountNumber" class="required">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={accountData.accountNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" class="required">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={accountData.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin" class="required">
            Pin
          </label>
          <input type="text" id="pin" name="pin" value={accountData.pin} onChange={handleInputChange} />
        </div>
        <button className="submitBtn" type="submit" onClick={withdraw}>
          Withdraw
        </button>
      </div>
    </div>
  );
};
