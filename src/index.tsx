import "./sass/main.scss";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { User } from "./pages/user";

const App = () => {
  // Recharge la page à chaque changement d'URL (fix un problème de changement de style sur le tableau de score lorsque la page n'est pas rechargée)
  useEffect(() => {
    const handleNavigation = () => {
      window.location.reload();
    };

    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/user/18" />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
