import React from "react";

export default function About() {
  const impacts = [
    {
      title: "Faster Civic Support",
      description: "Automated routing guidelines and AI pre-filled grievance details slash processing and triage times.",
      icon: "⚡"
    },
    {
      title: "Better Transparency",
      description: "Direct tracking timelines and local status dashboards reduce communication gaps between citizens and administrators.",
      icon: "👁️"
    },
    {
      title: "Digital Inclusion",
      description: "Bridges the digital divide by simplifying complex bureaucratic texts into conversational guides.",
      icon: "🌐"
    },
    {
      title: "Multilingual Accessibility",
      description: "Hinglish, Hindi, and regional phrasing models ensure access for diverse socio-economic groups.",
      icon: "🗣️"
    },
    {
      title: "Citizen-Friendly Governance",
      description: "Turns frustrating forms into a supportive conversational interface, encouraging democratic participation.",
      icon: "🤝"
    }
  ];

  const futureScopes = [
    {
      title: "Real Gemini API Integration",
      description: "Integrate production LLM endpoints for true contextual understanding and adaptive citizen assistance."
    },
    {
      title: "Government Portal APIs",
      description: "Connect directly to UMANG and State CSC databases to verify eligibility and submit documents in real-time."
    },
    {
      title: "Voice Assistant Support",
      description: "Enable speech-to-text input to help illiterate or visually impaired citizens register complaints effortlessly."
    },
    {
      title: "Regional Language Translation",
      description: "Support translations in all 22 official Indian languages including Tamil, Telugu, Bengali, Marathi, etc."
    },
    {
      title: "Official Admin Dashboard",
      description: "Build a portal for government staff to view, filter, assign, and update reported complaints."
    },
    {
      title: "Geo-Tagged Grievance Tracking",
      description: "Incorporate GPS tagging for reported issues to locate broken lights or potholes directly on Google Maps."
    },
    {
      title: "WhatsApp & Telegram Bots",
      description: "Expand outreach through simple automated chat numbers on common messaging platforms."
    }
  ];

  return (
    <div className="about-page-container">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">About SevaSetu AI</h1>
        <p className="page-subtitle">GenAI-Powered Civic Companion — Bridging the Gap Between Citizens & Governance.</p>
      </div>

      {/* Grid: Problem & Solution */}
      <div className="about-split-grid">
        <div className="about-card problem-card">
          <div className="about-card-badge red-badge">⚠️ The Problem</div>
          <h3>Why Citizens Struggle with Civic Services</h3>
          <p>
            India features hundreds of citizen services and welfare schemes. However, regular citizens, 
            especially those in semi-urban and rural areas, often struggle to access them due to:
          </p>
          <ul className="about-list">
            <li>❌ <strong>Complex Bureaucracy:</strong> Confusing terminology and legal descriptions.</li>
            <li>❌ <strong>Scattered Information:</strong> Guidelines spread across dozens of outdated websites.</li>
            <li>❌ <strong>Document Ambiguity:</strong> High rejection rates due to missing or incorrect documents.</li>
            <li>❌ <strong>Language Barriers:</strong> Portals lacking support for local terms or casual vernacular.</li>
            <li>❌ <strong>Opaque Tracking:</strong> No clean visibility on the status of reported local issues.</li>
          </ul>
        </div>

        <div className="about-card solution-card">
          <div className="about-card-badge green-badge">💡 The Solution</div>
          <h3>SevaSetu AI - Your Digital Bridge</h3>
          <p>
            SevaSetu AI serves as an intelligent companion that simplifies interaction with public systems. 
            By leveraging Generative AI concepts, the platform provides:
          </p>
          <ul className="about-list">
            <li>✅ <strong>Conversational Assistant:</strong> Understands natural, casual wording in Hinglish & Hindi.</li>
            <li>✅ <strong>Smart Filter Engine:</strong> Matches schemes instantly based on citizen demographics.</li>
            <li>✅ <strong>Formal Draft Writer:</strong> Formulates formal complaints out of raw, informal descriptions.</li>
            <li>✅ <strong>Consolidated Database:</strong> Provides clear document checklists and steps in one click.</li>
            <li>✅ <strong>Transparent Tracking:</strong> Visual status timelines for reported complaints.</li>
          </ul>
        </div>
      </div>

      {/* Impact Section */}
      <section className="about-impact-section">
        <div className="section-header">
          <h2 className="section-title">Expected Platform Impact</h2>
          <p className="section-subtitle">Empowering digital governance and enhancing the Ease of Living index for citizens.</p>
        </div>
        <div className="impact-grid">
          {impacts.map((imp, idx) => (
            <div key={idx} className="impact-card">
              <span className="impact-icon">{imp.icon}</span>
              <h4>{imp.title}</h4>
              <p>{imp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Scope Section */}
      <section className="future-scope-section">
        <div className="section-header">
          <h2 className="section-title">🔮 Future Scope</h2>
          <p className="section-subtitle">Roadmap to transition from a hackathon prototype to a national production platform.</p>
        </div>

        <div className="future-scope-timeline">
          {futureScopes.map((scope, idx) => (
            <div key={idx} className="timeline-node">
              <div className="node-number">{idx + 1}</div>
              <div className="node-content">
                <h4>{scope.title}</h4>
                <p>{scope.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
