import React from "react";
const Home = React.lazy(() => import("./components/Home"));
const Profile = React.lazy(() => import("./components/Profile"));
const Login = React.lazy(() => import("./components/Login"));

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "profile", component: Profile, name: "Profile" },
  { path: "login", component: Login, name: "Login" },
];

export default routes;
