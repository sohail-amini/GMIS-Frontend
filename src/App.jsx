import React, { useState } from "react";
import Login from "./components/Login";
import Account from "./components/Account";
import Inventory from "./components/Inventory";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (!token) {
    return <Login setToken={(newToken) => setToken(newToken)} />;
  }

  return (
    <div>
      <Account />
      <hr />
      <Inventory />
      <br />
      <hr />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default App;
