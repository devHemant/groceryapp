import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const LOGIN_URL = "https://apolis-grocery.herokuapp.com/api/auth/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const history = useHistory();

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
    }
    //  else if (userInfo === null) {
    //   errorList.push({
    //     errorType: "Invalide Credential",
    //     message: "Invalide Credential, Please try again.",
    //   });
    // } else if (userInfo.email !== email) {
    //   errorList.push({
    //     errorType: "Invalide Credential",
    //     message: "Invalide Credential, Please try again.",
    //   });
    // } else if (userInfo.password !== password) {
    //   errorList.push({
    //     errorType: "Invalide Credential",
    //     message: "Invalide Credential, Please try again.",
    //   });
    // }
    setError(errorList);
    if (errorList.length === 0) {
      const signInObject = {
        email,
        password,
      };
      console.log("Signin successfully=>", signInObject);
      handleLogin(signInObject);
      // localStorage.setItem("isLogin", JSON.stringify(true));
    } else {
      // localStorage.setItem("isLogin", JSON.stringify(false));
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
  const handleLogin = (data) => {
    axios({
      method: "post",
      url: LOGIN_URL,
      data,
    })
      .then((response) => {
        const { user = {}, token = "" } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
        history.push("/");
      })
      .catch((error) => {
        const { message = "" } = error.response.data;
        const errorList = [];
        errorList.push({
          errorType: "login failed",
          message,
        });
        setError(errorList);
      });
  };
  return (
    <div className="row" id="signInBox">
      <div className="d-flex justify-content-center allign-items-center">
        <div className="card text-white bg-secondary mt-3 w-50">
          <div className="card-body">
            <h4 className="text-center">
              <Link to="/" className="text-decoration-none">
                Grocery Store
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
