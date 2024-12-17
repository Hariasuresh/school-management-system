import React from "react";
import DashboardStats from "../components/DashboardStats";
import FeesManagementTable from "../components/FeesManagementTable";
import StudentDetailsTable from "../components/StudentDetailsTable";
import Sidebar from "../components/Sidebar";

const LibrarianDashboard = () => {
  const stats = [
    { title: "Total Books", value: "1,500" },
    { title: "Issued Books", value: "750" },
    { title: "Available Books", value: "750" },
  ];

  const feesData = [
    { name: "John Doe", class: "10-A", feesDue: "1,500", paid: "2,000" },
    { name: "Jane Smith", class: "9-B", feesDue: "1,200", paid: "1,800" },
  ];

  const studentsData = [
    { name: "John Doe", class: "10-A", rollNo: "15", contact: "9876543210" },
    { name: "Jane Smith", class: "9-B", rollNo: "22", contact: "9876543211" },
  ];

  const menuItems = [
    { label: "Dashboard", link: "/librarian/dashboard" },
    { label: "Books Management", link: "/librarian/books-management" },
    { label: "Issue Logs", link: "/librarian/issue-logs" },
    { label: "Students", link: "/librarian/students" },
  ];

  return (
    <div className="flex">
      <Sidebar role="Librarian" menuItems={menuItems} />

      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Librarian Dashboard</h1>
        <DashboardStats stats={stats} />
        <h2 className="text-2xl font-bold mb-4">Fees Management</h2>
        <FeesManagementTable fees={feesData} />
        <h2 className="text-2xl font-bold mb-4">Student Details</h2>
        <StudentDetailsTable students={studentsData} />
      </div>
    </div>
  );
};

export default LibrarianDashboard;
