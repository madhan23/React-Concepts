import React from "react";
import { Link } from "react-router-dom";
function Context() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to='/hooks/userprofile'>UserProfile</Link>
      <Link to='/hooks/userregister'>UserRegister</Link>
    </div>
  );
}

export default Context;
