import React from "react";
import { Link } from "react-router-dom";

export default function FeatureCard({ icon, title, description, linkTo, linkText }) {
  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">
        <span className="feature-icon">{icon}</span>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      {linkTo && (
        <Link to={linkTo} className="feature-link">
          {linkText || "Explore"} &rarr;
        </Link>
      )}
    </div>
  );
}
