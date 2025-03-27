import React, { useState } from "react";
import axios from "axios";
import "./modal.css";

const Signup = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: "",
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
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccess("Signup successful! Please log in.");
      setError("");
      console.log("Signup Success:", response.data);

      // Close modal after successful signup
      setTimeout(closeModal, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
      setSuccess("");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Signup</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />

        <button onClick={handleSignup}>Signup</button>
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Signup;
