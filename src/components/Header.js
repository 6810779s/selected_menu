import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const Header = () => {
  return (
    <div>
      <nav style={{ display: "flex", padding: "20px 0" }}>
        {routes.map((route) => (
          <div style={{ marginRight: "20px" }} key={route.name}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black", //isActive가 true면 white, false면 black
                backgroundColor: isActive ? "blue" : "",
                borderRadius: "30px",
                padding: "8px",
                textDecoration: "none",
              })}
              to={route.path}
            >
              {route.name}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Header;
