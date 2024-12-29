import React, { useState } from "react";
import Login from "./components/Login";
import Account from "./components/Account";
import Inventory from "./components/Inventory";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const logoutFunc = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (!token) {
    return <Login setToken={(newToken) => setToken(newToken)} />;
  }
  // const router = Router(
  //   Routes(
  //     <Route path="/" element={<MainLayout />}>
  //       <Route index element={<HomePage />} />
  //       <Route path="/jobs" element={<JobsPage />} />
  //       <Route
  //         path="/jobs/:id"
  //         element={<JobPage deleteJob={deleteJob} />}
  //         loader={jobLoader}
  //       />
  //       <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
  //       <Route
  //         path="/edit-job/:id"
  //         element={<EditJobPage editJobSubmit={editJob} />}
  //         loader={jobLoader}
  //       />
  //       <Route path="*" element={<NotFoundPage />} />
  //     </Route>
  //   )
  // );

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
