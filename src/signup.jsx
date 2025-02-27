import React from "react";
import "./Modal.css";

const Signup = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Signup</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Signup</button>
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Signup;
