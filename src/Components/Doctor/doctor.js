import React from 'react';
import './doctor.css';

const Dashboard = () => {
  const appointments = [
    { time: "9:00 AM", patientName: "John Doe", reason: "Annual Check-up" },
    { time: "10:30 AM", patientName: "Jane Smith", reason: "Follow-up" },
  ];

  const recentPatients = [
    { name: "Alice Johnson", lastVisit: "2023-06-01" },
    { name: "Bob Williams", lastVisit: "2023-05-28" },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Bayer Health</h2>
        <ul>
          <li>Dashboard</li>
          <li>Patient List</li>
          <li>Appointments</li>
          <li>Messages</li>
          <li>Logout</li>
        </ul>
      </aside>
      
      <main className="main-content">
        <h1>Welcome, Dr. Smith</h1>

        <section className="appointments-section">
          <h2>Today's Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient Name</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.time}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="recent-patients-section">
          <h2>Recent Patients</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Visit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentPatients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient.name}</td>
                  <td>{patient.lastVisit}</td>
                  <td><button className="view-profile-btn">View Profile</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
