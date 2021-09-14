import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = ({ userInfo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const errorList = [];
    if (email === "") {
      errorList.push({
        errorType: "Email Validation",
        message: "Please enter valid email address",
      });
    } else if (password === "") {
      errorList.push({
        errorType: "Password Validation",
        message: "Please enter valid password",
      });
    } else if (userInfo === null) {
      errorList.push({
        errorType: "Invalide Credential",
        message: "Invalide Credential, Please try again.",
      });
    } else if (userInfo.email !== email) {
      errorList.push({
        errorType: "Invalide Credential",
        message: "Invalide Credential, Please try again.",
      });
    } else if (userInfo.password !== password) {
      errorList.push({
        errorType: "Invalide Credential",
        message: "Invalide Credential, Please try again.",
      });
    }
    setError(errorList);
    if (errorList.length === 0) {
      const signInObject = {
        email,
        password,
      };
      console.log("Signin successfully=>", signInObject);
      localStorage.setItem("isLogin", JSON.stringify(true));
    } else {
      localStorage.setItem("isLogin", JSON.stringify(false));
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };
  return (
    <div className="row" id="signInBox">
      <div className="d-flex justify-content-center allign-items-center">
        <div className="card text-white bg-secondary mt-3 w-50">
          <div className="card-body">
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
            <form id="signInForm">
              <div className="form-group row mb-3">
                <input
                  className="form-control"
                  type="Email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group row mb-3">
                <input
                  className="form-control"
                  type="Password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="row px-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary rounded-pill"
                  onClick={(e) => handleSignInSubmit(e)}
                >
                  Login
                </button>
              </div>
              <hr />
              <div className="text-sm text-center">
                New on Site? <Link to="/register">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
