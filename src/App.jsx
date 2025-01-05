import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Inventory from "./components/Inventory";
import Account from "./components/Account";
import Transaction from "./components/Transaction";
import Supplier from "./components/Supplier";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/account" element={<Account />} />
          <Route path="/transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
