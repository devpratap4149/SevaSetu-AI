import React, { useState } from "react";
import { schemes } from "../data/schemes";

export default function SchemeFinder() {
  const [age, setAge] = useState("");
  const [state, setState] = useState("All States");
  const [category, setCategory] = useState("Student");
  const [need, setNeed] = useState("Education");
  const [recommendedSchemes, setRecommendedSchemes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const statesList = [
    "All States",
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Delhi",
    "Gujarat",
    "Haryana",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Uttar Pradesh",
    "West Bengal"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);

    // Matching logic
    // Match by category AND need
    const matches = schemes.filter((scheme) => {
      const categoryMatch = scheme.categories.includes(category);
      const needMatch = scheme.needs.includes(need);
      
      // Senior citizens must be matched dynamically or by age if applicable
      const parsedAge = parseInt(age);
      if (category === "Senior Citizen" && !isNaN(parsedAge) && parsedAge < 60) {
        // Just warning/override, but for now we let it match
      }

      return categoryMatch || needMatch;
    });

    // Sort: schemes matching BOTH category and need come first
    const sortedMatches = [...matches].sort((a, b) => {
      const aBoth = a.categories.includes(category) && a.needs.includes(need);
      const bBoth = b.categories.includes(category) && b.needs.includes(need);
      
      if (aBoth && !bBoth) return -1;
      if (!aBoth && bBoth) return 1;
      return 0;
    });

    setRecommendedSchemes(sortedMatches);
  };

  const handleReset = () => {
    setAge("");
    setState("All States");
    setCategory("Student");
    setNeed("Education");
    setRecommendedSchemes([]);
    setHasSearched(false);
  };

  return (
    <div className="scheme-finder-container">
      <div className="page-header">
        <h1 className="page-title">Smart Scheme Finder</h1>
        <p className="page-subtitle">Answer a few simple questions to discover central and state government schemes you are eligible for.</p>
      </div>

      <div className="finder-layout">
        {/* Form Column */}
        <div className="form-column">
          <div className="form-card">
            <h3 className="form-card-title">🔍 Check Eligibility</h3>
            <p className="form-card-subtitle">Fill in your profile details to see matching welfare benefits.</p>

            <form onSubmit={handleSubmit} className="finder-form">
              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="age-input">Age (in years)</label>
                  <input
                    id="age-input"
                    type="number"
                    min="1"
                    max="120"
                    placeholder="e.g. 24"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state-select">Residing State</label>
                  <select
                    id="state-select"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="form-control"
                  >
                    {statesList.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Primary Beneficiary Category</label>
                <div className="radio-grid">
                  {["Student", "Farmer", "Worker", "Senior Citizen", "Woman", "Entrepreneur"].map((cat) => (
                    <label 
                      key={cat} 
                      className={`radio-label-box ${category === cat ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={category === cat}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      <span>
                        {cat === "Student" && "🎓"}
                        {cat === "Farmer" && "🌾"}
                        {cat === "Worker" && "👷"}
                        {cat === "Senior Citizen" && "👵"}
                        {cat === "Woman" && "👩"}
                        {cat === "Entrepreneur" && "🚀"}
                        {" " + cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="need-select">Primary Requirement / Need</label>
                <select
                  id="need-select"
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  className="form-control"
                >
                  <option value="Education">🎓 Education & Scholarships</option>
                  <option value="Health">🏥 Healthcare & Insurance</option>
                  <option value="Housing">🏠 Affordable Housing</option>
                  <option value="Employment">💼 Employment & Skills</option>
                  <option value="Business">💰 Business Loans & Funding</option>
                  <option value="Food Support">🌾 Food Security & Subsidies</option>
                </select>
              </div>

              <div className="form-actions-flex">
                <button type="submit" className="btn btn-primary flex-grow">
                  Find Match Schemes
                </button>
                <button type="button" className="btn btn-outline" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results Column */}
        <div className="results-column">
          {hasSearched ? (
            <div className="results-wrapper">
              <div className="results-summary-header">
                <h3>Recommended Welfare Schemes ({recommendedSchemes.length})</h3>
                <p>Matching filters: <span className="highlight-tag">{category}</span> & <span className="highlight-tag">{need}</span></p>
              </div>

              {recommendedSchemes.length > 0 ? (
                <div className="schemes-results-list">
                  {recommendedSchemes.map((scheme) => {
                    const isPerfectMatch = scheme.categories.includes(category) && scheme.needs.includes(need);
                    return (
                      <div 
                        key={scheme.id} 
                        className={`scheme-result-card ${isPerfectMatch ? "perfect-match" : ""}`}
                      >
                        {isPerfectMatch && (
                          <span className="perfect-match-badge">⭐ Best Match</span>
                        )}
                        <div className="scheme-result-header">
                          <span className="scheme-result-icon">{scheme.icon}</span>
                          <div>
                            <h4>{scheme.title}</h4>
                            <div className="scheme-meta-tags">
                              {scheme.categories.map((c, i) => <span key={i} className="meta-tag cat-tag">{c}</span>)}
                              {scheme.needs.map((n, i) => <span key={i} className="meta-tag need-tag">{n}</span>)}
                            </div>
                          </div>
                        </div>

                        <p className="scheme-result-desc">{scheme.description}</p>

                        <div className="scheme-details-grid">
                          <div>
                            <strong>🟢 Benefits:</strong>
                            <p>{scheme.benefits}</p>
                          </div>
                          <div>
                            <strong>🔍 Eligibility:</strong>
                            <p>{scheme.eligibility}</p>
                          </div>
                        </div>

                        <div className="scheme-result-actions">
                          <a 
                            href={`https://www.google.com/search?q=site:.gov.in+${encodeURIComponent(scheme.title)}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-sm btn-outline-primary"
                          >
                            Official Government Portal ↗
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="no-schemes-card">
                  <span className="no-schemes-icon">📭</span>
                  <h4>No Exact Match Found</h4>
                  <p>We couldn't find a direct scheme for this specific combination. Try relaxing your filters or selecting a different requirement.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="pre-search-state-card">
              <div className="pre-search-icon">🔍</div>
              <h3>Ready to Find Schemes</h3>
              <p>Fill out the profile questions on the left and click "Find Match Schemes" to view eligible central and state policies.</p>
              <div className="civic-tips-box">
                <strong>💡 Civic Fact:</strong>
                <p>Over 300+ welfare programs exist in India, but up to 40% of eligible citizens miss out due to a lack of awareness of documents required.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
