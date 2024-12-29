import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig";

const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({ title: "", balance: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Account List
  const fetchAccounts = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("account");
      setAccounts(response.data);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch accounts.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("account/create/", formData);
      setAccounts([...accounts, response.data]);
      setFormData({ title: "", balance: "" });
    } catch (err) {
      setError("Failed to add account.");
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`account/delete/${id}`);
      setAccounts(accounts.filter((account) => account.id !== id));
    } catch (err) {
      setError("Failed to delete account.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">
        Account Management
      </h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Account List */}
      {isLoading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <div key={account.id} className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">
                {account.title}
              </h2>
              <p className="text-gray-600">Balance: ${account.balance}</p>
              <button
                onClick={() => handleDelete(account.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Account Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Add New Account
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 shadow rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Balance
            </label>
            <input
              type="number"
              name="balance"
              value={formData.balance}
              onChange={(e) =>
                setFormData({ ...formData, balance: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Account;
