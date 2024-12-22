import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Login } from "./views/Login";
import { Home } from "./views/Home";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
