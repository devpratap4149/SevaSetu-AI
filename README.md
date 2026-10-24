# SevaSetu AI 🏛️

**Government Services, Simplified by AI.**

An intelligent, GenAI-powered civic companion that helps Indian citizens access public services, understand complex government schemes, report local issues, track complaints, and receive personalized assistance in their preferred language.

---

## ⚠️ Problem Statement
Citizens often struggle to access government benefits and services due to:
- Complex administrative descriptions and bureaucratic terminology.
- Scattered instructions and required documents spread across multiple outdated websites.
- High rejection rates of applications because of document checklist confusion.
- Language barriers, especially for vernacular users typing in Hinglish or regional phrasing.
- No direct, transparent channel to report municipal issues and track resolution progress.

## 💡 Solution
**SevaSetu AI** serves as a digital bridge between citizens and local administration. It translates complex legal/procedural information into citizen-friendly conversational guides and provides a direct civic report portal.

---

## 🌟 Key Features
1. **AI Civic Assistant**: Chatbot interface responding to common questions about services, schemes, and reports with predefined conversational logic (supports Hinglish/Hindi phrasing).
2. **Formal Draft Generator**: Converts informal local descriptions (e.g. *"mere road kharab hai"*) into structured, print-ready formal letters addressed to local authorities.
3. **Smart Scheme Finder**: Matches welfare schemes (like PMAY, PM-Kisan, APY) tailored to user demographics (Age, State, Category, Need).
4. **Directory of Services**: Searchable catalog of 8 core citizen services (Birth/Death Certificates, Ration Card, Voter ID, etc.) with collapsible, detailed lists of documents and application steps.
5. **Civic Issue Reporting**: Standard form to log local grievances (Broken Roads, Street Lights, Garbage, etc.) with automatic ticket ID generation (e.g. `SS-2026-004`).
6. **Ticket Tracking Timeline**: An interactive timeline progress bar reflecting the status of reports (`Pending`, `In Review`, `Resolved`) stored in browser storage.
7. **Citizen Analytics Dashboard**: High-level visual indicators showing reported totals, status breakdowns, recent activity logs, and a CSS-only categorical bar chart.

---

## 🛠️ Tech Stack
- **Framework**: React.js (v18+)
- **Build Tool**: Vite
- **Routing**: React Router DOM (v6)
- **Styling**: Vanilla CSS (Fluid, Responsive, Dashboard Layout)
- **Database/Persistence**: Browser LocalStorage
- **Icons/Graphics**: Custom Emojis and SVGs (Lightweight)

---

## 📂 Folder Structure
```text
src/
  ├── components/
  │    ├── Navbar.jsx           # Responsive top navigation menu
  │    ├── FeatureCard.jsx      # Home page feature showcase card
  │    ├── ServiceCard.jsx      # Expandable accordion card for services
  │    ├── ComplaintCard.jsx    # Visual status card with timeline tracker
  │    └── ChatBox.jsx          # AI Chatbot assistant interface
  ├── data/
  │    ├── services.js          # Static service details (documents, steps, depts)
  │    └── schemes.js           # Static welfare schemes list
  ├── pages/
  │    ├── Home.jsx             # Hero landing page
  │    ├── Assistant.jsx        # Chatbot + Formal Complaint Draft Writer
  │    ├── Services.jsx         # Searchable directory of public services
  │    ├── SchemeFinder.jsx     # Profile matching form for welfare benefits
  │    ├── ReportIssue.jsx      # Grievance registration form
  │    ├── TrackComplaint.jsx   # Ticket search and tracking timeline
  │    ├── Dashboard.jsx        # Analytics charts and statistics
  │    └── About.jsx            # Project vision, Problem/Solution details
  ├── App.jsx                   # Router mappings & LocalStorage initial seed data
  ├── main.jsx                  # React DOM mount point
  ├── index.css                 # Base reset stylesheet
  └── App.css                   # Theme styles, grids, animations, and typography
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd SevaSetu-AI
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the local address in your browser:
   `http://localhost:5173`

---

## 🔮 Future Scope
- **Real Gemini API Integration**: Shift from predefined logic to live Google Gemini API endpoints for contextual answers.
- **National Government APIs**: Connect to UMANG, Digilocker, or State CSC platforms for direct logins.
- **Voice Assistant**: Integrated speech-to-text to help illiterate or visually impaired citizens.
- **Official Admin Panel**: Dashboard for municipal staff to assign tickets and update repair statuses.
- **GPS Geo-tagging**: Pin civic problems (like potholes) directly onto regional maps.
- **WhatsApp Bot**: Access SevaSetu tools through simple text prompts on mobile chats.

---


*Note: This project contains only one branch (`main`), repository size is under 10 MB, and all local assets are optimized for Vercel deployment. No heavy frameworks or styling libraries were used.*
