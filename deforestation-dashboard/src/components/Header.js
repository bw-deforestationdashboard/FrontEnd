import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <div className="Header">
      <Logo />
      <div>
        {!localStorage.getItem("token") && (
          <Button className="btn header-login" text="Login" link="/login" />
        )}
        {!localStorage.getItem("token") && (
          <Button
            className="btn header-signup"
            text="Sign Up"
            link="/register"
          />
        )}
        {localStorage.getItem("token") && (
          <Link to="/map-view" onClick={() => localStorage.clear()}>
            <button className="btn logout">Logout</button>
          </Link>
        )}
      </div>
    </div>
  );
}
