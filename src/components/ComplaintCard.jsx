import React from "react";

export default function ComplaintCard({ complaint }) {
  const { id, issueType, location, description, priority, status, date } = complaint;

  // Status mapping for CSS class and step completion
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "resolved":
        return "status-resolved";
      case "in review":
        return "status-review";
      default:
        return "status-pending";
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      default:
        return "priority-low";
    }
  };

  // For visual timeline progress bar
  const getProgressPercentage = (status) => {
    switch (status?.toLowerCase()) {
      case "resolved":
        return 100;
      case "in review":
        return 50;
      default:
        return 10;
    }
  };

  return (
    <div className="complaint-card">
      <div className="complaint-card-header">
        <div>
          <span className="complaint-id">{id}</span>
          <span className="complaint-date">{new Date(date).toLocaleDateString("en-IN")}</span>
        </div>
        <div className="badge-container">
          <span className={`badge ${getPriorityClass(priority)}`}>{priority} Priority</span>
          <span className={`badge ${getStatusClass(status)}`}>{status}</span>
        </div>
      </div>

      <div className="complaint-details">
        <h3 className="complaint-issue">{issueType}</h3>
        <p className="complaint-loc">📍 <strong>Location:</strong> {location}</p>
        <p className="complaint-desc">{description}</p>
      </div>

      {/* Visual Progress Timeline */}
      <div className="complaint-timeline">
        <div className="timeline-track">
          <div 
            className="timeline-progress" 
            style={{ width: `${getProgressPercentage(status)}%` }}
          ></div>
        </div>
        <div className="timeline-steps">
          <div className={`timeline-step ${status ? "completed" : ""}`}>
            <span className="step-dot">●</span>
            <span className="step-label">Submitted</span>
          </div>
          <div className={`timeline-step ${status === "In Review" || status === "Resolved" ? "completed" : ""}`}>
            <span className="step-dot">●</span>
            <span className="step-label">In Review</span>
          </div>
          <div className={`timeline-step ${status === "Resolved" ? "completed" : ""}`}>
            <span className="step-dot">●</span>
            <span className="step-label">Resolved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
