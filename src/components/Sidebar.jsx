import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ role, menuItems }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <div className="w-1/5 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-5">{role}</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="mb-3 cursor-pointer hover:text-gray-400"
            onClick={() => handleNavigation(item.link)} // Navigate on click
          >
            {item.label}
          </li>
        ))}
      </ul>
      <button
        onClick={handleLogout}
        className="mt-10 text-red-400 hover:text-red-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
