import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({ name: "", cost: "", price: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Inventory List
  const fetchInventory = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("inventory");
      setInventory(response.data);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch inventory.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("inventory/create/", formData);
      setInventory([...inventory, response.data]);
      setFormData({ name: "", cost: "", price: "" });
    } catch (err) {
      setError("Failed to add inventory item.");
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`inventory/delete/${id}`);
      setInventory(inventory.filter((item) => item.id !== id));
    } catch (err) {
      setError("Failed to delete inventory item.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">
        Inventory Management
      </h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Inventory List */}
      {isLoading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventory.map((item) => (
            <div key={item.id} className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600">Cost: ${item.cost}</p>
              <p className="text-gray-600">Price: ${item.price}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Inventory Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Add New Item</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 shadow rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Cost</label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={(e) =>
                setFormData({ ...formData, cost: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
