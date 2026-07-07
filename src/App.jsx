import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Assistant from "./pages/Assistant";
import Services from "./pages/Services";
import SchemeFinder from "./pages/SchemeFinder";
import ReportIssue from "./pages/ReportIssue";
import TrackComplaint from "./pages/TrackComplaint";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import "./App.css";

function App() {
  // Initialize LocalStorage with mock complaints for demo purposes if empty
  useEffect(() => {
    const stored = localStorage.getItem("sevasetu_complaints");
    if (!stored) {
      const defaultComplaints = [
        {
          id: "SS-2026-001",
          name: "Rajesh Kumar",
          mobile: "9876543210",
          issueType: "Broken Road",
          location: "Kailash Colony Main Road, near Metro Gate 2, New Delhi",
          description: "Large pothole in the middle of the road causing vehicles to swerve dangerously. Needs urgent repair.",
          priority: "High",
          status: "Resolved",
          date: "2026-06-28T08:30:00.000Z"
        },
        {
          id: "SS-2026-002",
          name: "Sunita Deshmukh",
          mobile: "8765432109",
          issueType: "Street Light",
          location: "Sector 15, Block B, Lane 3, Noida",
          description: "Three street lights in a row have been completely non-functional for 5 days. It becomes pitch dark at night, raising safety concerns.",
          priority: "Medium",
          status: "In Review",
          date: "2026-07-02T15:45:00.000Z"
        },
        {
          id: "SS-2026-003",
          name: "Karthik Subramanian",
          mobile: "7654321098",
          issueType: "Garbage",
          location: "Gandhi Nagar 4th Main Road, Bengaluru",
          description: "Municipal waste has not been collected for a week. The community bin is overflowing, spreading foul odor and attracting stray dogs.",
          priority: "High",
          status: "Pending",
          date: "2026-07-06T11:20:00.000Z"
        }
      ];
      localStorage.setItem("sevasetu_complaints", JSON.stringify(defaultComplaints));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/services" element={<Services />} />
            <Route path="/scheme-finder" element={<SchemeFinder />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/track-complaint" element={<TrackComplaint />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <h4>🏛️ SevaSetu AI</h4>
              <p>Government Services, Simplified by AI.</p>
            </div>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/assistant">AI Assistant</a>
              <a href="/dashboard">Dashboard</a>
            </div>
            <div className="footer-right">
              <p className="copyright">© 2026 SevaSetu AI. Designed for Citizen Empowerment.</p>
              <span className="badge badge-govt">🇮🇳 Digital India Prototype</span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
