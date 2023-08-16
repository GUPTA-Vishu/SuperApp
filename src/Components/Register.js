import React, { useState } from "react";
// import { useEffect } from "react";
import rockstar from "./image/rockstar.png";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const navigate=useNavigate();

  const initialValues = { name: "", username: "", email: "", number: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    console.log(`Input field '${name}' updated with value: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Here, you can trigger your actual submission logic.

      localStorage.setItem('formData', JSON.stringify(formValues)); 
      console.log("Form submitted:", formValues);
      setFormValues(initialValues);
      setFormErrors({});
      setIsSubmit(false);
      navigate('/Onboarding');
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  return (
    <div className="register_page">
      <div className="left_container">
        <img src={rockstar} alt="" />
        <h1 className="discover">Discover New things on SuperApp</h1>
      </div>
      <div className="right_container">
        <h1 className="heading">Super App</h1>
        <p className="subheading">Create your New Account </p>

        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
        <form onSubmit={handleSubmit}>
          <div className="ui divider"></div>
          <div className="uiform">
            <div className="field">
              <input
                className="field1"
                type="text"
                name="name"
                placeholder="name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p className="error1">{formErrors.name}</p>
            <div className="field">
              <input
                className="field2"
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p className="error2">{formErrors.username}</p>
            <div className="field">
              <input
                className="field3"
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="error3">{formErrors.email}</p>
            <div className="field">
              <input
                className="field4"
                type="text"
                name="number"
                placeholder="Number"
                value={formValues.number}
                onChange={handleChange}
              />
            </div>
            <p className="error4">{formErrors.number}</p>
            <Link
              to={Object.keys(formErrors).length === 0 ? "/Onboarding" : "#"}
              className={
                Object.keys(formErrors).length > 0 ? "disabled-link" : ""
              }
            >
              <button
                className="fluid ui button blue"
                disabled={Object.keys(formErrors).length > 0}
                onClick={handleSubmit}
                type="submit"
              >
                SIGN UP
              </button>
            </Link>
          </div>
        </form>

        <p className="heading2">
          By clicking on Sign up. you agree to Superapp{" "}
          <span className="span1">Terms and Conditions of Use</span>
          <br />
        </p>

        <p className="last_heading">
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp
          <span className="">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
