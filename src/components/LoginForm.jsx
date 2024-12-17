import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: email, role: response.data.role },
      });
      navigate(`/${response.data.role}-dashboard`);
    } catch (error) {
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      {/* Main Card */}
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Top Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-blue-600 mb-2">
            School Management System
          </h1>
          <p className="text-gray-600 text-sm">Welcome Back! Please Login</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Decorative Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-blue-600 h-2"></div>
      </div>
    </div>
  );
};

export default LoginForm;
