import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmPasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setPasswordMatch(formData.password === formData.confirmPassword);
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic
    setIsPending(true);

    // Simulating delay for demo purposes
    setTimeout(() => {
      setIsPending(false);
      setRegistrationSuccess(true);

      // Redirect to Login after a successful registration
      history.push("/login");
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className="Reg-h1">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="middleName">Middle Name (optional)</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="region">Region/State</label>
          <input
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        {/* Password validation */}
        <div></div>

        {/* Password validation */}
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword || ""}
            onChange={handleConfirmPasswordChange}
          />
          {passwordMatch ? (
            <span className="password-match-valid">Passwords match</span>
          ) : (
            <span className="password-match-invalid">
              Passwords do not match
            </span>
          )}
        </div>

        {/* Submit button */}
        <button className="Submit" type="Submit" disabled={isPending}>
          {isPending ? "submitting..." : "submit"}
        </button>
      </form>

      {/* Loading popup */}
      {isPending && <div>Loading...</div>}

      {/* Success popup */}
      {registrationSuccess && (
        <div>
          Registration successful! Please check your email to verify your
          account.
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
