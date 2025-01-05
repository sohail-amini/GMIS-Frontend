import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [inventories, setInventories] = useState([]);
  const [formData, setFormData] = useState({
    supplier: "",
    inventory: "",
    quantity: "",
    trans_date: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Transaction List
  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("transaction");
      setTransactions(response.data);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch transactions.");
      setIsLoading(false);
    }
  };

  // Fetch Suppliers
  const fetchSuppliers = async () => {
    try {
      const response = await axiosInstance.get("supplier");
      setSuppliers(response.data);
    } catch (err) {
      setError("Failed to fetch suppliers.");
    }
  };

  // Fetch Inventories
  const fetchInventories = async () => {
    try {
      const response = await axiosInstance.get("inventory");
      setInventories(response.data);
    } catch (err) {
      setError("Failed to fetch inventories.");
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchSuppliers();
    fetchInventories();
  }, []);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "transaction/create/",
        formData
      );
      setTransactions([...transactions, response.data]);
      setFormData({
        supplier: "",
        inventory: "",
        quantity: "",
        trans_date: "",
      });
    } catch (err) {
      setError("Failed to add transaction.");
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`transaction/delete/${id}`);
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
    } catch (err) {
      setError("Failed to delete transaction.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">
        Transaction Management
      </h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Transaction List */}
      {isLoading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">
                Supplier: {transaction.supplier}
              </h2>
              <p className="text-gray-600">
                Inventory: {transaction.inventory}
              </p>
              <p className="text-gray-600">Quantity: {transaction.quantity}</p>
              <p className="text-gray-600">
                Transaction Date: {transaction.trans_date}
              </p>
              <button
                onClick={() => handleDelete(transaction.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Transaction Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Add New Transaction
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 shadow rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Supplier
            </label>
            <select
              name="supplier"
              value={formData.supplier}
              onChange={(e) =>
                setFormData({ ...formData, supplier: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required>
              <option value="">Select a Supplier</option>
              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.id}>
                  {supplier.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Inventory
            </label>
            <select
              name="inventory"
              value={formData.inventory}
              onChange={(e) =>
                setFormData({ ...formData, inventory: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required>
              <option value="">Select an Inventory</option>
              {inventories.map((inventory) => (
                <option key={inventory.id} value={inventory.id}>
                  {inventory.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Transaction Date
            </label>
            <input
              type="date"
              name="trans_date"
              value={formData.trans_date}
              onChange={(e) =>
                setFormData({ ...formData, trans_date: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
