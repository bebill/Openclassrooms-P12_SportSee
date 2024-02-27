import "./sass/main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { User } from "./pages/user";
import { Error404 } from "./pages/error404";
import { TopNav } from "./layout/TopNav";
import { SideNav } from "./layout/SideNav";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <TopNav />
        <SideNav />
        <Routes>
          <Route path="/" element={<Navigate to="/user/18" />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
