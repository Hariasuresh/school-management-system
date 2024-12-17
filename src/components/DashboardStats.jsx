import React from "react";

const DashboardStats = ({ stats }) => (
  <div className="grid grid-cols-3 gap-6 mb-6">
    {stats.map((stat, index) => (
      <div key={index} className="bg-white p-5 rounded shadow">
        <h3 className="text-lg font-bold">{stat.title}</h3>
        <p className="text-2xl">{stat.value}</p>
      </div>
    ))}
  </div>
);

export default DashboardStats;
