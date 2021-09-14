import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const REGISTER_URL = "http://apolis-grocery.herokuapp.com/api/auth/register";

const RegisterPage = ({ userInfo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [experience, setExperience] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const errorList = [];
    if (firstName === "") {
      errorList.push({
        errorType: "name Validation",
        message: "Please enter your first name",
      });
    }
    if (lastName === "") {
      errorList.push({
        errorType: "name Validation",
        message: "Please enter your last name",
      });
    }
    if (email === "") {
      errorList.push({
        errorType: "email Validation",
        message: "Please enter valid email address",
      });
    }
    if (password === "") {
      errorList.push({
        errorType: "password Validation",
        message: "Please enter password",
      });
    }
    if (confirmPassword === "") {
      errorList.push({
        errorType: "confirmPassword Validation",
        message: "Please enter confirm password",
      });
    }
    if (password !== confirmPassword) {
      errorList.push({
        errorType: "password and confirmPassword Validation",
        message: "Password and Confirm Password do not match",
      });
    }

    if (userInfo) {
      if (userInfo.email === email) {
        errorList.push({
          errorType: "email is exist",
          message:
            "Email Id already exist, Please try with different Email Id.",
        });
      }
    }
    setError(errorList);
    if (errorList.length === 0) {
      const signUpObject = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        mobile,
        experience,
      };
      console.log("Form Submitted Successfully=>", signUpObject);
      // localStorage.setItem("user", JSON.stringify(signUpObject));
      handleRegister(signUpObject);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "experience":
        setExperience(value);
        break;
    }
  };

  const handleRegister = (data) => {
    axios({
      method: "post",
      url: REGISTER_URL,
      data,
    })
      .then((response) => {
        const { data = {}, error = false, message = "" } = response.data;
        if (error === false) setSuccessMessage(message);
      })
      .catch((error) => {
        const cError = { ...error };
        const { message = "" } = cError.response.data;
        const errorList = [];
        errorList.push({
          errorType: "register failed",
          message,
        });
        setError(errorList);
      });
  };

  return (
    <div className="row" id="signUpBox">
      <div className="d-flex justify-content-center allign-items-center">
        <div
          className="card text-white bg-secondary mt-3 w-50"
          // style={{ maxWidth: "20rem" }}
        >
          <div className="card-body">
            <form id="signUpForm">
              <div className="row">
                <div className="col-lg-12">
                  <h4 className="text-center">
                    <Link to="/" className="text-decoration-none">
                      Grocery App
                    </Link>
                  </h4>
                  {error.length > 0 && (
                    <div className="alert alert-dismissible alert-primary">
                      <h4 className="alert-heading">Oops! You got an error!</h4>
                      <ul>
                        {error.map((err) => (
                          <li>{err.message}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {successMessage && (
                    <div className="alert alert-dismissible alert-success">
                      <strong>Heads up!</strong> {successMessage}. Go back to{" "}
                      <strong>
                        <Link to="/login">Login</Link>
                      </strong>
                      .
                    </div>
                  )}
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="firstName"
                          value={firstName}
                          placeholder="Enter First Name"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group  mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="lastName"
                          value={lastName}
                          placeholder="Enter Last Name"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          type="Email"
                          name="email"
                          value={email}
                          placeholder="Enter Your Email"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          value={password}
                          placeholder="Enter Password"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group  mb-3">
                        <input
                          className="form-control"
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          placeholder="Enter Confirm Password"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group  mb-3">
                        <input
                          className="form-control"
                          type="number"
                          name="mobile"
                          value={mobile}
                          placeholder="Enter Phone Number"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group  mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="experience"
                          value={experience}
                          placeholder="Enter Work Experience"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row px-3">
                    <button
                      className="btn btn-lg btn-primary rounded-pill"
                      onClick={handleSignUpSubmit}
                    >
                      Register
                    </button>
                  </div>
                  <hr />
                  <div className="text-sm text-center">
                    Already on Site? <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
