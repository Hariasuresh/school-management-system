import React from "react";

const FeesManagementTable = ({ fees }) => (
  <table className="w-full bg-white rounded shadow mb-6">
    <thead>
      <tr>
        <th className="p-3 text-left">Name</th>
        <th className="p-3 text-left">Class</th>
        <th className="p-3 text-left">Fees Due</th>
        <th className="p-3 text-left">Paid</th>
      </tr>
    </thead>
    <tbody>
      {fees.map((fee, index) => (
        <tr key={index}>
          <td className="p-3">{fee.name}</td>
          <td className="p-3">{fee.class}</td>
          <td className="p-3">₹ {fee.feesDue}</td>
          <td className="p-3">₹ {fee.paid}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default FeesManagementTable;
