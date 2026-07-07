import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReportIssue() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [issueType, setIssueType] = useState("Broken Road");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  
  // Success states
  const [success, setSuccess] = useState(false);
  const [generatedId, setGeneratedId] = useState("");

  const issueTypes = [
    "Broken Road",
    "Street Light",
    "Garbage",
    "Water Leakage",
    "Drainage",
    "Electricity",
    "Other"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch existing complaints
    const stored = localStorage.getItem("sevasetu_complaints");
    let complaints = stored ? JSON.parse(stored) : [];

    // Calculate next sequential ID
    const nextNumber = complaints.length + 1;
    const formattedId = `SS-2026-${String(nextNumber).padStart(3, "0")}`;

    // Create new complaint object
    const newComplaint = {
      id: formattedId,
      name,
      mobile,
      issueType,
      location,
      description,
      priority,
      status: "Pending", // Always starts as Pending
      date: new Date().toISOString()
    };

    // Save back to localstorage
    complaints.push(newComplaint);
    localStorage.setItem("sevasetu_complaints", JSON.stringify(complaints));

    // Update state to trigger success UI
    setGeneratedId(formattedId);
    setSuccess(true);

    // Reset Form
    setName("");
    setMobile("");
    setIssueType("Broken Road");
    setLocation("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <div className="report-issue-container">
      <div className="page-header">
        <h1 className="page-title">Report a Civic Issue</h1>
        <p className="page-subtitle">Submit details of local infrastructure failures, utilities disruption, or sanitation issues directly.</p>
      </div>

      <div className="report-layout-container">
        {success ? (
          <div className="report-success-card animate-fade-in">
            <div className="success-icon-wrapper">🎉</div>
            <h2 className="success-title">Issue Reported Successfully!</h2>
            <p className="success-subtitle">Your grievance has been logged in the SevaSetu civic system.</p>
            
            <div className="ticket-box">
              <span className="ticket-label">COMPLAINT ID (EPIC TRACKER)</span>
              <h3 className="ticket-id">{generatedId}</h3>
              <p className="ticket-note">Use this ID to track updates on the status of this issue.</p>
            </div>

            <div className="success-actions">
              <button 
                className="btn btn-primary" 
                onClick={() => navigate("/track-complaint", { state: { searchId: generatedId } })}
              >
                Track this Complaint
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => setSuccess(false)}
              >
                Report Another Issue
              </button>
            </div>
          </div>
        ) : (
          <div className="report-form-card">
            <div className="form-card-badge">📢 Civic Action</div>
            <h3>Grievance Submission Form</h3>
            <p className="form-card-desc">Please provide accurate details of the issue to ensure prompt resolution by local authorities.</p>

            <form onSubmit={handleSubmit} className="report-form">
              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="reporter-name">Your Full Name</label>
                  <input
                    id="reporter-name"
                    type="text"
                    placeholder="e.g. Anil Kapoor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reporter-mobile">Mobile Number (for updates)</label>
                  <input
                    id="reporter-mobile"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="10-digit number (e.g. 9876543210)"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="issue-type-select">Type of Civic Issue</label>
                  <select
                    id="issue-type-select"
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                    className="form-control"
                  >
                    {issueTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Grievance Urgency / Priority</label>
                  <div className="priority-btn-group">
                    {["Low", "Medium", "High"].map((prio) => (
                      <button
                        key={prio}
                        type="button"
                        className={`priority-btn ${prio.toLowerCase()} ${priority === prio ? "active" : ""}`}
                        onClick={() => setPriority(prio)}
                      >
                        {prio}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="issue-location">Exact Location / Address / Landmark</label>
                <input
                  id="issue-location"
                  type="text"
                  placeholder="e.g. In front of Central Library, Ward 12, Metro Pillar 45"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="issue-desc">Detailed Description of the Issue</label>
                <textarea
                  id="issue-desc"
                  placeholder="Describe the issue, how long it has been present, and any specific details for the maintenance engineer..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control text-area"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit Grievance
              </button>
            </form>
          </div>
        )}

        {/* Sidebar Info Card */}
        <div className="report-info-sidebar">
          <div className="sidebar-card">
            <h4>🛡️ Citizen Charter</h4>
            <p>Under the Right to Public Services Act, civic departments are bound to address and resolve reports within scheduled timelines:</p>
            
            <ul className="charter-list">
              <li>⚡ <strong>Electricity:</strong> 12 - 24 Hours</li>
              <li>🚰 <strong>Water Leaks:</strong> 24 - 48 Hours</li>
              <li>💡 <strong>Street Light:</strong> 48 Hours</li>
              <li>🗑️ <strong>Garbage:</strong> 24 Hours</li>
              <li>🛣️ <strong>Broken Roads:</strong> 7 - 15 Days</li>
            </ul>
          </div>

          <div className="sidebar-card status-guide-card">
            <h4>Timeline Stages</h4>
            <div className="status-flow">
              <div className="flow-step">
                <span className="flow-dot pending"></span>
                <div>
                  <h5>Pending</h5>
                  <p>Issue received by SevaSetu AI database and mapped to local ward register.</p>
                </div>
              </div>
              <div className="flow-step">
                <span className="flow-dot review"></span>
                <div>
                  <h5>In Review</h5>
                  <p>Assigned to the field supervisor who inspects the site and allocates repair funds.</p>
                </div>
              </div>
              <div className="flow-step">
                <span className="flow-dot resolved"></span>
                <div>
                  <h5>Resolved</h5>
                  <p>Issue corrected by the maintenance crew, verified and closed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
