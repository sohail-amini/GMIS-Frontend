import { useState } from "react";
import NewItem from "./NewItem";

const ItemManagement = () => {
  const [items, setItems] = useState([]);
  const [showNewItem, setShowNewItem] = useState(false);
  const handleAddItem = (newItem) => {
    // Add the new item to the existing list
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="relative">
      {showNewItem && (
        <NewItem onSubmit={handleAddItem} setShowNewItem={setShowNewItem} />
      )}
      <div className="container mx-auto flex flex-col relative">
        <div className="border-b relative flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold text-gray-600 ">مدیریت اجناس</h1>
          <button
            onClick={() => setShowNewItem(true)}
            className="bg-primary text-white px-5 py-3 rounded "
          >
            ثبت جنس
          </button>
        </div>
        <div className="mt-6 p-4">
          <h2 className="text-2xl font-bold">لیست اجناس</h2>
          <ul className="list-disc ml-6 mt-4">
            {items.map((item, index) => (
              <li key={index} className="mb-2">
                <p>
                  <strong>{item.productName}</strong> (Balance: {item.balance})
                  - {item.description} (Category: {item.category})
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemManagement;
