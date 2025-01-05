import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig";

const Supplier = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    account: "",
    name: "",
    contact_person: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Supplier List
  const fetchSuppliers = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("supplier");
      setSuppliers(response.data);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch suppliers.");
      setIsLoading(false);
    }
  };

  // Fetch Account List
  const fetchAccounts = async () => {
    try {
      const response = await axiosInstance.get("account");
      setAccounts(response.data);
    } catch (err) {
      setError("Failed to fetch accounts.");
    }
  };

  useEffect(() => {
    fetchSuppliers();
    fetchAccounts();
  }, []);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("supplier/create/", formData);
      setSuppliers([...suppliers, response.data]);
      setFormData({
        account: "",
        name: "",
        contact_person: "",
        email: "",
        phone: "",
        address: "",
      });
    } catch (err) {
      setError("Failed to add supplier.");
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`supplier/delete/${id}`);
      setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
    } catch (err) {
      setError("Failed to delete supplier.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">
        Supplier Management
      </h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Supplier List */}
      {isLoading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">
                {supplier.name}
              </h2>
              <p className="text-gray-600">Account: {supplier.account_name}</p>
              <p className="text-gray-600">
                Contact Person: {supplier.contact_person}
              </p>
              <p className="text-gray-600">Email: {supplier.email}</p>
              <p className="text-gray-600">Phone: {supplier.phone}</p>
              <p className="text-gray-600">Address: {supplier.address}</p>
              <button
                onClick={() => handleDelete(supplier.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Supplier Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Add New Supplier
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 shadow rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Account
            </label>
            <select
              name="account"
              value={formData.account}
              onChange={(e) =>
                setFormData({ ...formData, account: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              required>
              <option value="">Select an Account</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.title}
                </option>
              ))}
            </select>
          </div>
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
            <label className="block text-gray-700 font-medium mb-2">
              Contact Person
            </label>
            <input
              type="text"
              name="contact_person"
              value={formData.contact_person}
              onChange={(e) =>
                setFormData({ ...formData, contact_person: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add Supplier
          </button>
        </form>
      </div>
    </div>
  );
};

export default Supplier;
