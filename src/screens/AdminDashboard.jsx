// src/screens/AdminDashboard.jsx

import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2>Course Management</h2>
          <p>Manage courses, add new courses, and edit existing ones.</p>
          <button className="dashboard-button">Manage Courses</button>
        </div>
        <div className="dashboard-section">
          <h2>User Management</h2>
          <p>Manage users, view user details, and update permissions.</p>
          <button className="dashboard-button">Manage Users</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
