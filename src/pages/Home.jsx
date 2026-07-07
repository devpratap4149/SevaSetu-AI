import React from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  const features = [
    {
      icon: "🤖",
      title: "AI Civic Assistant",
      description: "Get 24/7 instant answers to all your civic queries and navigate government requirements seamlessly in multiple languages.",
      linkTo: "/assistant",
      linkText: "Ask Assistant"
    },
    {
      icon: "🔍",
      title: "Smart Scheme Finder",
      description: "Find government welfare schemes tailored to your profile (age, profession, and state) instantly.",
      linkTo: "/scheme-finder",
      linkText: "Find Schemes"
    },
    {
      icon: "📢",
      title: "Report Public Issues",
      description: "Submit details of local infrastructure, utility, or sanitation issues directly to local authorities.",
      linkTo: "/report-issue",
      linkText: "Report Issue"
    },
    {
      icon: "⏳",
      title: "Track Complaints",
      description: "Monitor the real-time status of your reports with full transparency and updates from departments.",
      linkTo: "/track-complaint",
      linkText: "Track Status"
    },
    {
      icon: "📋",
      title: "Document Checklist",
      description: "Understand exactly which identity, income, or residence documents are required before applying for services.",
      linkTo: "/services",
      linkText: "Explore Services"
    },
    {
      icon: "🗣️",
      title: "Multilingual Support",
      description: "Interact comfortably in English, Hindi, or Hinglish with voice-ready text layouts designed for inclusion.",
      linkTo: "/assistant",
      linkText: "Try Chat"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">🇮🇳 Digital India Initiative</div>
        <h1 className="hero-title">SevaSetu AI</h1>
        <h2 className="hero-subtitle">Government Services, Simplified by AI.</h2>
        <p className="hero-description">
          An intelligent civic companion that helps citizens access public services, 
          understand welfare schemes, report local issues, and receive personalized support 
          in their preferred language.
        </p>
        <div className="hero-actions">
          <Link to="/assistant" className="btn btn-primary">Ask AI Assistant</Link>
          <Link to="/report-issue" className="btn btn-secondary">Report an Issue</Link>
          <Link to="/services" className="btn btn-tertiary">Explore Services</Link>
        </div>
      </section>

      {/* Stats Quick Banner */}
      <section className="quick-stats-banner">
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Paperless Info</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label font-bold">AI Support</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">0+</span>
          <span className="stat-label">Active Users</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">Instant</span>
          <span className="stat-label">Complaint ID</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Key Platform Features</h2>
          <p className="section-subtitle">Empowering citizens with AI-driven information and complaints management.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkTo={feature.linkTo}
              linkText={feature.linkText}
            />
          ))}
        </div>
      </section>

      {/* Visual Banner */}
      <section className="info-banner-section">
        <div className="info-banner-content">
          <h3>Making Governance Accessible</h3>
          <p>SevaSetu AI bridges the gap between citizens and administration by translating complex government guides into actionable, easy-to-understand steps.</p>
          <div className="banner-badges">
            <span>🛡️ Safe & Secure</span>
            <span>📱 Responsive Design</span>
            <span>⚡ Instant Responses</span>
          </div>
        </div>
      </section>
    </div>
  );
}
