import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ComplaintCard from "../components/ComplaintCard";

export default function TrackComplaint() {
  const routerLocation = useLocation();
  const [searchId, setSearchId] = useState("");
  const [complaints, setComplaints] = useState([]);

  // Fetch complaints on load and check for redirect state
  useEffect(() => {
    const stored = localStorage.getItem("sevasetu_complaints");
    if (stored) {
      setComplaints(JSON.parse(stored));
    }

    // Check if redirect state has a search ID
    if (routerLocation.state && routerLocation.state.searchId) {
      setSearchId(routerLocation.state.searchId);
    }
  }, [routerLocation]);

  // Filter complaints by search query
  const filteredComplaints = complaints.filter((comp) => {
    if (!searchId.trim()) return true;
    return comp.id.toLowerCase().includes(searchId.toLowerCase()) || 
           comp.issueType.toLowerCase().includes(searchId.toLowerCase()) ||
           comp.location.toLowerCase().includes(searchId.toLowerCase());
  });

  return (
    <div className="track-complaint-container">
      <div className="page-header">
        <h1 className="page-title">Track Complaint Status</h1>
        <p className="page-subtitle">Search by your unique Complaint ID or browse your submitted reports to see live progress.</p>
      </div>

      {/* Search Bar */}
      <div className="search-track-card">
        <div className="search-box-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by Complaint ID (e.g. SS-2026-001) or issue type..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="search-input"
          />
          {searchId && (
            <button className="clear-search-btn" onClick={() => setSearchId("")}>✕</button>
          )}
        </div>
      </div>

      <div className="track-layout">
        {/* Complaints List */}
        <div className="complaints-list-column">
          {filteredComplaints.length > 0 ? (
            <div className="complaints-grid-vertical">
              {filteredComplaints.map((comp) => (
                <ComplaintCard key={comp.id} complaint={comp} />
              ))}
            </div>
          ) : (
            <div className="no-complaints-card">
              <span className="no-complaints-icon">📭</span>
              <h3>No Complaints Found</h3>
              {searchId ? (
                <p>We couldn't find any complaints matching "{searchId}". Please check the ID or try searching for another term.</p>
              ) : (
                <p>You haven't filed any complaints yet, or your browser history was cleared. Click the button below to report an issue.</p>
              )}
              <button 
                className="btn btn-primary" 
                onClick={() => window.location.href = "/report-issue"}
              >
                Report New Issue
              </button>
            </div>
          )}
        </div>

        {/* Info Sidebar */}
        <div className="track-info-sidebar">
          <div className="sidebar-card status-definitions">
            <h4>📈 Status Tracking Guide</h4>
            <p>Every logged ticket goes through the following lifecycle checkpoints:</p>
            
            <div className="status-item-info">
              <span className="dot-indicator pending"></span>
              <div>
                <strong>Pending (Stage 1)</strong>
                <p>The issue has been registered. The digital assistant is dispatching it to the regional cell.</p>
              </div>
            </div>

            <div className="status-item-info">
              <span className="dot-indicator review"></span>
              <div>
                <strong>In Review (Stage 2)</strong>
                <p>A municipal inspector is assigned, is visiting the location, or estimating repair costs.</p>
              </div>
            </div>

            <div className="status-item-info">
              <span className="dot-indicator resolved"></span>
              <div>
                <strong>Resolved (Stage 3)</strong>
                <p>The repair team has resolved the issue. The ticket is closed and verified.</p>
              </div>
            </div>
          </div>

          <div className="sidebar-card disclaimer-card">
            <h4>💡 Demo Operations</h4>
            <p>This application stores data directly in your browser's <strong>LocalStorage</strong>.</p>
            <p>Any additions, status updates, or changes you make will be saved locally on this device.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
