import React, { useState, useEffect, useRef } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Namaste! 🙏 I am SevaSetu AI, your civic assistant. I can help you find government schemes, understand application procedures for certificates, draft formal complaints, or track existing issues. How may I assist you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    { text: "How to apply for a birth certificate?", query: "birth certificate" },
    { text: "What documents are required for PM Awas Yojana?", query: "PM Awas" },
    { text: "How can I report a broken street light?", query: "street light" },
    { text: "Which schemes are available for students?", query: "student" },
    { text: "How to track my complaint?", query: "track" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes("birth certificate") || q.includes("janam praman")) {
      return `Here is the detailed process for obtaining a **Birth Certificate**:

### 📋 Required Documents:
- **Hospital Discharge Slip** or Birth registration slip from hospital.
- **Aadhaar Cards** of both parents (identity proof).
- **Address Proof** of parents (Electricity/Water bill or Voter ID).
- **Affidavit** (if registering after 1 year of birth).

### 🚶 Steps to Apply:
1. Obtain the birth slip from the hospital where the child was born.
2. Go online to your **State Civil Registration System (CRS)** portal, or visit the nearest **Municipal Corporation / Gram Panchayat** office.
3. Fill out the application form and attach parents' identity & address proofs.
4. Submit the form. It is free if registered within **21 days of birth**.
5. Once approved, download or collect the certificate.

🏛️ **Department:** Municipal Corporation / Registrar of Births & Deaths
⏱️ **Expected Time:** 7 - 10 working days.`;
    }
    
    if (q.includes("pm awas") || q.includes("awas yojana") || q.includes("housing")) {
      return `Here is information on the **Pradhan Mantri Awas Yojana (PMAY)**:

### 🔍 Eligibility:
- Families belonging to EWS (Annual Income < ₹3 Lakhs), LIG (Annual Income ₹3-6 Lakhs), or MIG (Annual Income ₹6-18 Lakhs).
- The beneficiary family must not own a pucca (permanent) house anywhere in India.

### 📋 Required Documents:
- **Aadhaar Cards** of all family members.
- **Voter ID** or PAN Card.
- **Income Certificate** or recent salary slips.
- **Bank Account Details** (copy of bank passbook).
- **Affidavit** stating the family does not own a house.
- Land documents (only for rural home construction).

### 🚶 Steps to Apply:
1. Visit the official portal: **pmaymis.gov.in** (Urban) or **pmayg.nic.in** (Rural), or visit a Common Service Center (CSC).
2. Choose 'Citizen Assessment' and verify using Aadhaar.
3. Fill in details (address, bank info, household income, family details).
4. Save, upload documents, and submit.
5. Note your application ID. A municipal surveyor will physically verify your current residence before final subsidy approval.`;
    }
    
    if (q.includes("street light") || q.includes("light kharab") || q.includes("bijli")) {
      return `To report a **broken or non-functional street light** in your locality, you can:

1. Go to the **'Report Issue'** tab on the navigation bar. Fill out the form, choose priority **'Medium' or 'High'**, select **'Street Light'** as issue type, and submit. It will generate a complaint ID (e.g., \`SS-2026-001\`) and save locally.
2. Alternatively, you can use the **'Formal Complaint Generator'** right beside this chat to generate a formal letter to print and submit directly to your Ward Officer or Municipal Councillor.

### 📝 Key Details to Include:
- Street name and landmark.
- Pole number (usually painted in black on the pole).
- Duration of the malfunction.

⏱️ **Resolution Time:** Typically 24 - 48 hours in urban areas once reported.`;
    }
    
    if (q.includes("student") || q.includes("scholarship") || q.includes("padhai")) {
      return `There are excellent government schemes supporting **students** in India:

### 1. 🎓 National Scholarship Portal (NSP)
- **What:** Direct scholarships for Pre-Matric, Post-Matric, and professional degrees.
- **Eligibility:** Minority, SC, ST, OBC, or EWS students with good academic records.

### 2. 🛠️ Skill India (PMKVY)
- **What:** Free certification courses in technical skills with job placement assistance.
- **Eligibility:** Any youth or school dropout aged 15-45.

### 3. 💼 PM MUDRA Yojana
- **What:** Collateral-free business loans up to ₹50,000 (Shishu) to start a micro-venture.
- **Eligibility:** Students/graduates who want to start their own businesses.

*Tip: Fill out our interactive **Scheme Finder** in the navigation bar to find specific schemes matching your exact age, state, and education needs!*`;
    }
    
    if (q.includes("track") || q.includes("complaint id") || q.includes("status")) {
      return `To track your submitted complaints:

1. Click on **'Track Complaint'** in the navigation bar.
2. Enter your Complaint ID (e.g., \`SS-2026-001\`). If you don't know it, you can view your full history of reported issues on the same page.
3. The page will show the issue type, date reported, priority level, and an interactive status bar:
   - **Pending** 🟡 (Just submitted, awaiting review)
   - **In Review** 🔵 (Assigned to local field engineer/officer)
   - **Resolved** 🟢 (Work completed, issue fixed)`;
    }

    // Default response
    return `Thank you for asking. I'm processing your query: "${query}".

As a civic AI assistant, I can guide you on:
- **Certificates**: Birth, Death, Income, Castes, Driving License.
- **Welfare Schemes**: Pension, Housing, Health, Student Scholarships, Farmers.
- **Civic Problems**: Broken roads, street light repairs, garbage dumps, drainage blockages.

Please try clicking one of the **Quick Questions** below, or rephrase your query with words like "birth certificate", "PM Awas", "student", or "street light" for detailed guides. 

*Note: For official government services, always ensure you visit registered domains ending in **.gov.in**.*`;
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText("");
    
    // Simulate bot typing
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getBotResponse(text);
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Helper to render markdown-like formatting in messages
  const renderMessageText = (text) => {
    // Basic Markdown parser for Bold and Headers
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let content = line;
      let isHeader = false;
      let headerLevel = 0;

      if (line.startsWith("### ")) {
        content = line.replace("### ", "");
        isHeader = true;
        headerLevel = 3;
      } else if (line.startsWith("## ")) {
        content = line.replace("## ", "");
        isHeader = true;
        headerLevel = 2;
      }

      // Replace bold text **word** with <strong>word</strong>
      const boldRegex = /\*\*(.*?)\*\*/g;
      let matches = [...content.matchAll(boldRegex)];
      let jsxContent = [];
      let lastIndex = 0;

      if (matches.length > 0) {
        matches.forEach((match, mIdx) => {
          // text before match
          jsxContent.push(content.substring(lastIndex, match.index));
          // match inside strong
          jsxContent.push(<strong key={`b-${mIdx}`}>{match[1]}</strong>);
          lastIndex = match.index + match[0].length;
        });
        jsxContent.push(content.substring(lastIndex));
      } else {
        // Replace code/id tags `code` with <code>code</code>
        const codeRegex = /`(.*?)`/g;
        let cMatches = [...content.matchAll(codeRegex)];
        if (cMatches.length > 0) {
          cMatches.forEach((match, cIdx) => {
            jsxContent.push(content.substring(lastIndex, match.index));
            jsxContent.push(<code className="inline-code" key={`c-${cIdx}`}>{match[1]}</code>);
            lastIndex = match.index + match[0].length;
          });
          jsxContent.push(content.substring(lastIndex));
        } else {
          jsxContent = content;
        }
      }

      if (isHeader) {
        if (headerLevel === 2) return <h4 className="chat-h2" key={idx}>{jsxContent}</h4>;
        return <h5 className="chat-h3" key={idx}>{jsxContent}</h5>;
      }

      return (
        <p className="chat-para" key={idx}>
          {jsxContent === "" ? "\u00A0" : jsxContent}
        </p>
      );
    });
  };

  return (
    <div className="chat-box-container">
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-avatar">🤖</div>
          <div>
            <h3 className="chat-bot-name">Civic Assistant</h3>
            <span className="chat-status"><span className="status-dot"></span> Online | Multilingual</span>
          </div>
        </div>
        <span className="chat-badge">GenAI Powered</span>
      </div>

      <div className="chat-messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message-wrapper ${msg.sender === "user" ? "user-wrapper" : "bot-wrapper"}`}>
            <div className={`chat-message ${msg.sender === "user" ? "user-message" : "bot-message"}`}>
              {msg.sender === "bot" ? renderMessageText(msg.text) : <p>{msg.text}</p>}
              <span className="chat-time">{msg.time}</span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="chat-message-wrapper bot-wrapper">
            <div className="chat-message bot-message typing-message">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div className="quick-questions-container">
        <span className="quick-questions-title">💡 Ask Quick Questions:</span>
        <div className="quick-questions-list">
          {quickQuestions.map((q, idx) => (
            <button 
              key={idx} 
              className="quick-question-btn" 
              onClick={() => handleSend(q.query)}
            >
              {q.text}
            </button>
          ))}
        </div>
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Ask in Hindi, English or Hinglish (e.g. 'mere road kharab hai')..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyPress}
          className="chat-input"
        />
        <button className="chat-send-btn" onClick={() => handleSend()}>
          Send ➔
        </button>
      </div>
    </div>
  );
}
