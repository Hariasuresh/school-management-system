import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardStats from "../components/DashboardStats";
import FeesManagementTable from "../components/FeesManagementTable";
import StudentDetailsTable from "../components/StudentDetailsTable";
import Sidebar from "../components/Sidebar";

const StaffDashboard = () => {
  const stats = [
    { title: "Total Students", value: 1200 },
    { title: "Fees Collected", value: "₹ 15,00,000" },
    { title: "Pending Fees", value: "₹ 3,00,000" },
  ];

  const feesData = [
    { name: "John Doe", class: "10th", feesDue: 5000, paid: 15000 },
    { name: "Jane Smith", class: "9th", feesDue: 4000, paid: 16000 },
  ];

  const studentData = [
    { name: "John Doe", class: "10th", rollNo: "A1", contact: "1234567890" },
    { name: "Jane Smith", class: "9th", rollNo: "B2", contact: "9876543210" },
  ];

  const menuItems = [
    { label: "Dashboard", link: "/staff/dashboard" },
    { label: "Fees Management", link: "/staff/fees-management" },
    { label: "Student Details", link: "/staff/student-details" },
  ];

  return (
    <div className="flex">
      <Sidebar role="Staff" menuItems={menuItems} />

      <div className="flex-1 p-6 bg-gray-100">
        <Routes>
          <Route path="/staff/dashboard" element={<DashboardStats stats={stats} />} />
          <Route path="/staff/fees-management" element={<FeesManagementTable fees={feesData} />} />
          <Route path="/staff/student-details" element={<StudentDetailsTable students={studentData} />} />
        </Routes>
      </div>
    </div>
  );
};

export default StaffDashboard;
