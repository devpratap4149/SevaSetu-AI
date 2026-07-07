import React, { useState } from "react";
import ChatBox from "../components/ChatBox";

export default function Assistant() {
  const [casualInput, setCasualInput] = useState("");
  const [authority, setAuthority] = useState("Municipal Commissioner");
  const [citizenName, setCitizenName] = useState("");
  const [citizenAddress, setCitizenAddress] = useState("");
  const [generatedDraft, setGeneratedDraft] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const generateComplaintDraft = (e) => {
    e.preventDefault();
    if (!casualInput.trim()) return;

    const today = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const parsedText = casualInput.toLowerCase();
    let subject = "Complaint regarding civic issue in the locality";
    let issueCategory = "civic issue";
    let detailDescription = casualInput;

    // Predefined parsing logic for realistic subject and details
    if (parsedText.includes("street light") || parsedText.includes("light kharab") || parsedText.includes("bijli")) {
      subject = "Complaint regarding non-functional street lights in the area";
      issueCategory = "street light failure";
      detailDescription = `The street lights in our locality have not been functioning for the past few days (as described: "${casualInput}"). Due to this, the entire area remains in complete darkness after sunset, posing safety and security risks to residents and pedestrians.`;
    } else if (parsedText.includes("road") || parsedText.includes("pothole") || parsedText.includes("sadak") || parsedText.includes("road kharab")) {
      subject = "Urgent repair requested for broken roads and severe potholes";
      issueCategory = "damaged road infrastructure";
      detailDescription = `The main road in our area is severely damaged with numerous deep potholes (as described: "${casualInput}"). This is causing traffic congestion, vehicle damage, and posing a serious threat of accidents, especially during night hours and rainy conditions.`;
    } else if (parsedText.includes("garbage") || parsedText.includes("kachra") || parsedText.includes("clean") || parsedText.includes("safai")) {
      subject = "Request for clearance of accumulated municipal waste and garbage";
      issueCategory = "garbage accumulation and public hygiene";
      detailDescription = `Garbage has been accumulating in our locality without regular clearance (as described: "${casualInput}"). The overflowing bins are causing foul smells, attracting stray animals, and creating highly unhygienic conditions that could lead to health hazards.`;
    } else if (parsedText.includes("water") || parsedText.includes("paani") || parsedText.includes("leakage") || parsedText.includes("leak")) {
      subject = "Complaint regarding drinking water leakage / irregular supply";
      issueCategory = "water utility disruption";
      detailDescription = `There is an ongoing issue with the drinking water infrastructure in our area (as described: "${casualInput}"). This has resulted in fresh water being wasted / contaminated, leading to acute drinking water shortage for residents.`;
    } else if (parsedText.includes("drainage") || parsedText.includes("naali") || parsedText.includes("sewage")) {
      subject = "Urgent request to clear blocked sewage drains and overflowing water";
      issueCategory = "drainage system blockage";
      detailDescription = `The drainage pipes in our street are choked, leading to overflow of sewage water onto the road (as described: "${casualInput}"). This has created an unhealthy environment, making it extremely difficult for residents to step out.`;
    }

    const draft = `To,
The ${authority},
Municipal Corporation Office,
Date: ${today}

Subject: ${subject}

Respected Sir/Madam,

I am writing to bring to your kind attention a matter of urgent concern regarding ${issueCategory} in our neighborhood.

As a resident of this locality, I would like to report that:
${detailDescription}

We reside at the following address: ${citizenAddress || "[Enter Address Here]"}.

This situation is causing extreme inconvenience to the children, senior citizens, and all other residents daily. We have tried requesting local maintenance staff, but no action has been taken yet.

Therefore, we request your office to look into this matter immediately and direct the concerned department to take rectification measures as soon as possible.

Thanking you in anticipation.

Yours faithfully,

Name: ${citizenName || "[Your Name]"}
Address: ${citizenAddress || "[Your Address]"}
Contact: [Your Mobile Number]`;

    setGeneratedDraft(draft);
    setCopySuccess(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedDraft);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="assistant-page-container">
      <div className="page-header">
        <h1 className="page-title">AI Civic Assistant</h1>
        <p className="page-subtitle">Solve queries instantly or write formal representations to municipal authorities.</p>
      </div>

      <div className="assistant-layout">
        {/* Chatbot Column */}
        <div className="chatbot-column">
          <ChatBox />
        </div>

        {/* Complaint Generator Column */}
        <div className="generator-column">
          <div className="generator-card">
            <div className="generator-header">
              <span className="generator-icon">📝</span>
              <div>
                <h3>Formal Complaint Draft Generator</h3>
                <p>Convert your informal language into a structured administrative letter.</p>
              </div>
            </div>

            <form onSubmit={generateComplaintDraft} className="generator-form">
              <div className="form-group">
                <label htmlFor="authority-select">Target Government Authority</label>
                <select 
                  id="authority-select"
                  value={authority} 
                  onChange={(e) => setAuthority(e.target.value)}
                  className="form-control"
                >
                  <option value="Municipal Commissioner">Municipal Commissioner / Mayor</option>
                  <option value="Assistant Commissioner of Police (Traffic)">Traffic Police Commissioner</option>
                  <option value="Executive Engineer (Electricity Board)">Electricity Board Engineer</option>
                  <option value="Sarpanch / Gram Panchayat Head">Gram Panchayat Head (Sarpanch)</option>
                  <option value="Ward Officer / Health Inspector">Local Ward Officer</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="citizen-name">Your Full Name (Optional)</label>
                <input 
                  id="citizen-name"
                  type="text" 
                  placeholder="e.g. Ramesh Kumar"
                  value={citizenName} 
                  onChange={(e) => setCitizenName(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="citizen-address">Your Locality / Address</label>
                <input 
                  id="citizen-address"
                  type="text" 
                  placeholder="e.g. Sector 4, R.K. Puram, New Delhi"
                  value={citizenAddress} 
                  onChange={(e) => setCitizenAddress(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="casual-desc">Describe your issue in casual words (Hinglish/English)</label>
                <textarea 
                  id="casual-desc"
                  placeholder="e.g. Mere area me 5 din se street light kharab hai, gully me andhera rehta hai..."
                  value={casualInput} 
                  onChange={(e) => setCasualInput(e.target.value)}
                  className="form-control text-area"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Generate Formal Letter
              </button>
            </form>

            {/* Generated output */}
            {generatedDraft && (
              <div className="generated-output-area">
                <div className="output-header">
                  <span>📄 Generated Draft Letter</span>
                  <button className="copy-btn" onClick={copyToClipboard}>
                    {copySuccess ? "✅ Copied!" : "📋 Copy Text"}
                  </button>
                </div>
                <pre className="output-content">{generatedDraft}</pre>
                <div className="output-footer-info">
                  💡 <em>You can copy this text, fill in placeholders, print it, or submit it to your ward office.</em>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
