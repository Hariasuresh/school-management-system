import React from "react";

const StudentDetailsTable = ({ students }) => (
  <table className="w-full bg-white rounded shadow mb-6">
    <thead>
      <tr>
        <th className="p-3 text-left">Name</th>
        <th className="p-3 text-left">Class</th>
        <th className="p-3 text-left">Roll No</th>
        <th className="p-3 text-left">Contact</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student, index) => (
        <tr key={index}>
          <td className="p-3">{student.name}</td>
          <td className="p-3">{student.class}</td>
          <td className="p-3">{student.rollNo}</td>
          <td className="p-3">{student.contact}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default StudentDetailsTable;
