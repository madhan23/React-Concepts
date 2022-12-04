import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
function RedirectToHomePage({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <Outlet />
      </div>
      <button onClick={() => navigate("/")}>back to home page</button>
    </div>
  );
}

export default RedirectToHomePage;
