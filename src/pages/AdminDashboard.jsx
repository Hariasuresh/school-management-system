import React from "react";
import DashboardStats from "../components/DashboardStats";
import FeesManagementTable from "../components/FeesManagementTable";
import StudentDetailsTable from "../components/StudentDetailsTable";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Students", value: 1200 },
    { title: "Teachers", value: 80 },
    { title: "Classes", value: 20 },
  ];

  const fees = [
    { name: "John Doe", class: "10A", feesDue: 5000, paid: 1000 },
    { name: "Jane Smith", class: "9B", feesDue: 2000, paid: 2000 },
  ];

  const students = [
    { name: "John Doe", class: "10A", rollNo: 1, contact: "123-456-7890" },
    { name: "Jane Smith", class: "9B", rollNo: 2, contact: "098-765-4321" },
  ];

  const menuItems = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Students", link: "/admin/manage-students" },
    { label: "Fees Management", link: "/admin/fees-management" },
    { label: "Settings", link: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar role="Admin" menuItems={menuItems} />

      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <DashboardStats stats={stats} />
        <h2 className="text-2xl font-semibold mb-4">Fees Management</h2>
        <FeesManagementTable fees={fees} />
        <h2 className="text-2xl font-semibold mb-4">Student Details</h2>
        <StudentDetailsTable students={students} />
      </div>
    </div>
  );
};

export default AdminDashboard;
