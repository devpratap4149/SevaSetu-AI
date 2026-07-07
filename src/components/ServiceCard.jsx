import React, { useState } from "react";

export default function ServiceCard({ title, description, documents, steps, department, icon }) {
  const [showDocs, setShowDocs] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  return (
    <div className="service-card">
      <div className="service-header">
        <span className="service-icon">{icon}</span>
        <div>
          <h3 className="service-title">{title}</h3>
          <span className="service-dept">{department}</span>
        </div>
      </div>
      
      <p className="service-description">{description}</p>
      
      <div className="service-collapsibles">
        <div className="collapsible-section">
          <button 
            className={`collapsible-trigger ${showDocs ? "active" : ""}`} 
            onClick={() => setShowDocs(!showDocs)}
          >
            <span>📋 Required Documents</span>
            <span className="chevron">{showDocs ? "▲" : "▼"}</span>
          </button>
          {showDocs && (
            <ul className="collapsible-content doc-list">
              {documents.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="collapsible-section">
          <button 
            className={`collapsible-trigger ${showSteps ? "active" : ""}`} 
            onClick={() => setShowSteps(!showSteps)}
          >
            <span>🚶 How to Apply (Step-by-Step)</span>
            <span className="chevron">{showSteps ? "▲" : "▼"}</span>
          </button>
          {showSteps && (
            <ol className="collapsible-content step-list">
              {steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
