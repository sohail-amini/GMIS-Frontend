import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import ItemManagement from "../components/ItemManagment"; // Make sure path is correct
import NewItem from "../components/NewItem";
export const Home = () => {
  return (
    <div className="w-full h-screen bg-[#F5F7FF] flex">
      <Sidebar />

      <div className="w-full mr-[25%]">
        <Routes>
          <Route path="/" element={<ItemManagement />} />
          <Route path="/newItem" element={<NewItem />} />
        </Routes>
      </div>
    </div>
  );
};
