import React from "react";
import "./Modal.css";

const Login = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Login;
