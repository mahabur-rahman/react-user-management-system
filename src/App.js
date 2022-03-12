import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// global css
import "./global.scss";
// react router dom
import { Switch, Route } from "react-router-dom";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// component
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import UserList from "./pages/UserList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/profile" component={HomePage} />
        <Route exact path="/users" component={UserList} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
