import React, { useState } from "react";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.jpg";

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("auth/get_token/", formData);
      const token = response.data.access;
      localStorage.setItem("token", token);
      setToken(token); // Save token in parent state
      setError("");
      navigate("/");
    } catch (err) {
      setError("Invalid username or password.");
    }
  };
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <form
        onSubmit={loginSubmit}
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
