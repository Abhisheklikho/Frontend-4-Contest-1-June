import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      formValue.fullName.trim() === "" ||
      formValue.email.trim() === "" ||
      formValue.password.trim() === "" ||
      formValue.confirmPassword.trim() === ""
    ) {
      setFormError("Error: All fields are mandatory");
      setSuccessMessage("");
    } else if (formValue.password !== formValue.confirmPassword) {
      setFormError("Error: Passwords do not match");
      setSuccessMessage("");
    } else {
      setFormError("");
      setSuccessMessage("Successfully Signed Up!");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          className="signup-input"
          placeholder="Full Name"
          value={formValue.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className="signup-input"
          placeholder="Email"
          value={formValue.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="signup-input"
          placeholder="Password"
          value={formValue.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          className="signup-input"
          placeholder="Confirm Password"
          value={formValue.confirmPassword}
          onChange={handleChange}
        />

        {formError && <p className="error-message">{formError}</p>}
        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}

        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignUp;
