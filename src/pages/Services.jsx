import React, { useState } from "react";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  // Get unique departments for filter dropdown
  const departments = ["All", ...new Set(services.map(s => {
    // Simplify department name for filter tags
    if (s.department.includes("Municipal")) return "Municipal";
    if (s.department.includes("Transport")) return "Transport";
    if (s.department.includes("Health")) return "Health & Welfare";
    if (s.department.includes("Housing")) return "Housing";
    if (s.department.includes("Food")) return "Food & Ration";
    if (s.department.includes("Election")) return "Election";
    return "Other";
  }))];

  const matchesFilter = (service) => {
    // Search filter
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.department.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    // Department filter
    if (selectedDept === "All") return true;
    if (selectedDept === "Municipal") return service.department.includes("Municipal");
    if (selectedDept === "Transport") return service.department.includes("Transport");
    if (selectedDept === "Health & Welfare") return service.department.includes("Health") || service.department.includes("National Health");
    if (selectedDept === "Housing") return service.department.includes("Housing");
    if (selectedDept === "Food & Ration") return service.department.includes("Food");
    if (selectedDept === "Election") return service.department.includes("Election");
    
    return true;
  };

  const filteredServices = services.filter(matchesFilter);

  return (
    <div className="services-page-container">
      <div className="page-header">
        <h1 className="page-title">Directory of Government Services</h1>
        <p className="page-subtitle">Learn details, eligibility, required documents, and apply links for key public services.</p>
      </div>

      {/* Filter and Search Controls */}
      <div className="services-controls-card">
        <div className="search-box-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search services (e.g. birth certificate, Ration, Voter)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button className="clear-search-btn" onClick={() => setSearchTerm("")}>✕</button>
          )}
        </div>

        <div className="filter-tags-container">
          <span className="filter-label">Filter by Category:</span>
          <div className="filter-tags">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`filter-tag-btn ${selectedDept === dept ? "active" : ""}`}
                onClick={() => setSelectedDept(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Service Cards */}
      {filteredServices.length > 0 ? (
        <div className="services-grid">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              documents={service.documents}
              steps={service.steps}
              department={service.department}
              icon={service.icon}
            />
          ))}
        </div>
      ) : (
        <div className="no-results-card">
          <span className="no-results-icon">🔎</span>
          <h3>No Services Found</h3>
          <p>We couldn't find any services matching "{searchTerm}" under the selected category. Try adjusting your search query.</p>
          <button className="btn btn-secondary" onClick={() => { setSearchTerm(""); setSelectedDept("All"); }}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
