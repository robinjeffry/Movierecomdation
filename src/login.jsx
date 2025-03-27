import React, { useState } from "react";
import axios from "axios";
import "./modal.css";

const Login = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem("jwtToken", token);
      setSuccess("Login successful!");
      setError("");

      console.log("Login Success:", response.data);

      // Auto-close modal after login
      setTimeout(closeModal, 1500);

    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials. Try again.");
      setSuccess("");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button onClick={handleLogin}>Login</button>
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Login;
