/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddUser.css";

export const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    status: "",
    cnic: "",
  });

  const [status] = useState(["Active", "Inactive"]);

  function hasEmptyValues(obj) {
    return Object.values(obj).some((value) => value === "" || value === null || value === undefined);
  }

  const notify = () => toast("User Creatred Successfully!", { type: "success" });
  const notifyError = () => toast("Error While Adding User!", { type: "error" });
  const notifyWarning = () => toast("Please Fill All The Fields!", { type: "warning" });

  const addUser = async () => {
    console.log(userData);
    if (hasEmptyValues(userData)) {
      notifyWarning();
      return;
    } else {
      try {
        const response = await axios.post("http://localhost:8080/api/addusers", null, {
          params: userData,
        });
        console.log(response);
        notify();
        setUserData({
          name: "",
          status: "",
          cnic: "",
        });
      } catch (error) {
        notifyError();
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="card">
        <h2>Create User</h2>
        <div className="form-group">
          <label htmlFor="name" class="required">
            Name
          </label>
          <input type="text" id="name" name="name" value={userData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cnic" class="required">
            CNIC
          </label>
          <input type="text" id="cnic" name="cnic" value={userData.cnic} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="status" className="required">
            Status
          </label>
          <select id="statusOption" name="status" value={userData.status} onChange={handleInputChange}>
            <option key={null} value={null}></option>
            {status.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <button className="submitBtn" type="submit" onClick={addUser}>
          Create User
        </button>
      </div>
    </div>
  );
};
