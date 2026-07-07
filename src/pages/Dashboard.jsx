import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Dashboard() {
  const [complaints, setComplaints] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    review: 0,
    resolved: 0
  });

  useEffect(() => {
    const stored = localStorage.getItem("sevasetu_complaints");
    if (stored) {
      const data = JSON.parse(stored);
      setComplaints(data);

      const counts = data.reduce(
        (acc, curr) => {
          acc.total += 1;
          if (curr.status === "Pending") acc.pending += 1;
          if (curr.status === "In Review") acc.review += 1;
          if (curr.status === "Resolved") acc.resolved += 1;
          return acc;
        },
        { total: 0, pending: 0, review: 0, resolved: 0 }
      );
      setStats(counts);
    }
  }, []);

  // Popular services slice
  const popularServices = services.slice(0, 4);

  // Issues by type count for mock chart
  const getIssueDistribution = () => {
    const defaultDist = {
      "Broken Road": 2,
      "Street Light": 4,
      "Garbage": 3,
      "Water Leak": 1,
      "Drainage": 2,
      "Electricity": 1
    };

    complaints.forEach(c => {
      const type = c.issueType;
      if (defaultDist[type] !== undefined) {
        defaultDist[type] += 1;
      } else {
        defaultDist["Other"] = (defaultDist["Other"] || 0) + 1;
      }
    });

    return defaultDist;
  };

  const dist = getIssueDistribution();
  const maxVal = Math.max(...Object.values(dist));

  return (
    <div className="dashboard-container">
      <div className="page-header">
        <h1 className="page-title">Citizen Command Dashboard</h1>
        <p className="page-subtitle">Real-time civic analytics, grievance metrics, and overview of public services.</p>
      </div>

      {/* Stats Cards Grid */}
      <div className="stats-grid">
        <div className="stat-card total-card">
          <div className="stat-card-header">
            <span className="stat-card-title">Total Reports</span>
            <span className="stat-card-icon">📂</span>
          </div>
          <h2 className="stat-card-number">{stats.total}</h2>
          <p className="stat-card-footer">Grievances filed by you</p>
        </div>

        <div className="stat-card pending-card">
          <div className="stat-card-header">
            <span className="stat-card-title">Pending Issues</span>
            <span className="stat-card-icon">🟡</span>
          </div>
          <h2 className="stat-card-number">{stats.pending}</h2>
          <p className="stat-card-footer">Awaiting ward assignment</p>
        </div>

        <div className="stat-card review-card">
          <div className="stat-card-header">
            <span className="stat-card-title">In Review</span>
            <span className="stat-card-icon">🔵</span>
          </div>
          <h2 className="stat-card-number">{stats.review}</h2>
          <p className="stat-card-footer">Assigned to engineers</p>
        </div>

        <div className="stat-card resolved-card">
          <div className="stat-card-header">
            <span className="stat-card-title">Resolved Issues</span>
            <span className="stat-card-icon">🟢</span>
          </div>
          <h2 className="stat-card-number">{stats.resolved}</h2>
          <p className="stat-card-footer">Closed & rectified</p>
        </div>

        <div className="stat-card services-count-card">
          <div className="stat-card-header">
            <span className="stat-card-title font-bold">Services Online</span>
            <span className="stat-card-icon">🏛️</span>
          </div>
          <h2 className="stat-card-number">{services.length}</h2>
          <p className="stat-card-footer">Available online guides</p>
        </div>
      </div>

      {/* Analytics and Popular Area */}
      <div className="dashboard-analytics-layout">
        {/* Mock Chart Area */}
        <div className="analytics-card chart-card-container">
          <div className="card-title-flex">
            <h3>📊 Grievance Category Analytics</h3>
            <span className="tag">Live Distribution</span>
          </div>
          <p className="card-subtitle">Comparative frequency of reported local issues in the area.</p>
          
          {/* CSS-only Bar Chart */}
          <div className="bar-chart-container">
            <div className="y-axis-labels">
              <span>High</span>
              <span>Med</span>
              <span>Low</span>
              <span>0</span>
            </div>
            
            <div className="bars-flex-container">
              {Object.entries(dist).map(([type, count]) => {
                const heightPercent = maxVal > 0 ? (count / maxVal) * 85 : 0;
                return (
                  <div key={type} className="bar-wrapper">
                    <div className="bar-fill-area">
                      <div 
                        className="bar-column" 
                        style={{ height: `${heightPercent || 10}%` }}
                        title={`${count} complaints`}
                      >
                        <span className="bar-count-badge">{count}</span>
                      </div>
                    </div>
                    <span className="bar-label-text">{type.split(" ")[0]}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="chart-legend">
            <span>💡 <em>Height represents relative volume of reports.</em></span>
          </div>
        </div>

        {/* Popular Services Section */}
        <div className="analytics-card popular-services-card">
          <div className="card-title-flex">
            <h3>🔥 Popular Services</h3>
            <Link to="/services" className="see-all-link">All Services &rarr;</Link>
          </div>
          <p className="card-subtitle">Most frequently accessed citizen registration portals.</p>

          <div className="popular-services-list">
            {popularServices.map((service) => (
              <div key={service.id} className="popular-service-item">
                <span className="pop-icon">{service.icon}</span>
                <div className="pop-info">
                  <h4>{service.title}</h4>
                  <span className="pop-dept">{service.department.split("/")[0]}</span>
                </div>
                <Link to="/services" className="btn btn-sm btn-outline">Guide</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Table/List */}
      <div className="recent-activity-section">
        <div className="section-title-flex">
          <h3>⏳ Recent Grievance Logs</h3>
          <Link to="/track-complaint" className="btn btn-sm btn-outline">Track History</Link>
        </div>

        {complaints.length > 0 ? (
          <div className="activity-table-wrapper">
            <table className="activity-table">
              <thead>
                <tr>
                  <th>Complaint ID</th>
                  <th>Issue Type</th>
                  <th>Location</th>
                  <th>Priority</th>
                  <th>Date Filed</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {complaints.slice(-5).reverse().map((c) => (
                  <tr key={c.id}>
                    <td><strong className="table-highlight-id">{c.id}</strong></td>
                    <td>{c.issueType}</td>
                    <td className="table-loc-col">{c.location}</td>
                    <td>
                      <span className={`priority-indicator-bullet ${c.priority.toLowerCase()}`}></span>
                      {c.priority}
                    </td>
                    <td>{new Date(c.date).toLocaleDateString("en-IN")}</td>
                    <td>
                      <span className={`status-pill ${c.status.toLowerCase().replace(" ", "-")}`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-activity-placeholder">
            <p>No recent complaints logged. Filed complaints will show up here in real time.</p>
            <Link to="/report-issue" className="btn btn-primary btn-sm">Report an Issue Now</Link>
          </div>
        )}
      </div>
    </div>
  );
}
