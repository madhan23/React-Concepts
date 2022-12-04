import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>React Topics </h1>
      <button onClick={() => navigate("/hooks")}>React Hooks</button>
    </div>
  );
}

export default Home;
