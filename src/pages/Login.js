import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const history = useHistory();
  // input field state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // getting email & password | localStorage ✔️✔️
  const userEmail = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@gmail.com";

  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userEmail && password === userPassword) {
      toast.success("Login Success");
      history.push("/profile");
    } else {
      toast.error("Invalid Credential");
    }
  };

  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center py-5 my-5">
        <form>
          <h4 className="form__heading">User Management System </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/">Signup !</Link>
            </p>
          </div>
          <button type="submit" className="form__button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
