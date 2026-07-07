export const services = [
  {
    id: "birth-certificate",
    title: "Birth Certificate",
    description: "Official document certifying a person's birth, essential for age proof, school admission, passport, and other government documents.",
    documents: [
      "Hospital Birth Registration Slip / Discharge Certificate",
      "Aadhaar Card of Parents",
      "Address Proof of Parents (Electricity Bill, Water Bill, etc.)",
      "Affidavit (if applying after 1 year of birth)"
    ],
    steps: [
      "Obtain the birth slip from the hospital where the child was born.",
      "Visit the local Municipal Corporation office or log in to the State Civil Registration System (CRS) portal.",
      "Fill out the Birth Registration Form with parent and child details.",
      "Attach parents' Aadhaar cards and hospital discharge certificate.",
      "Submit the application (free within 21 days of birth; nominal late fee applies after).",
      "Receive/Download the certificate within 7 to 10 working days after verification."
    ],
    department: "Municipal Corporation / Directorate of Economics and Statistics",
    icon: "👶"
  },
  {
    id: "death-certificate",
    title: "Death Certificate",
    description: "Official document issued to establish the death of a person, crucial for settling inheritance, insurance claims, and property transfers.",
    documents: [
      "Medical Certificate of Cause of Death (from hospital/doctor)",
      "Aadhaar Card / Voter ID of the deceased",
      "Identity Proof of the applicant",
      "Affidavit confirming relationship and details"
    ],
    steps: [
      "Get the death slip or cause of death certificate from the hospital or attending doctor.",
      "Register the death within 21 days at the local Municipal Corporation or Gram Panchayat.",
      "Submit the Death Registration Form along with the deceased's ID documents and hospital slip.",
      "Verify the details in the register.",
      "The certificate is generated and issued in 5 to 7 working days."
    ],
    department: "Municipal Corporation / Department of Public Health",
    icon: "🕊️"
  },
  {
    id: "driving-license",
    title: "Driving License",
    description: "Official document permitting a citizen to drive motor vehicles on public roads in India.",
    documents: [
      "Learner's License (active and older than 30 days)",
      "Age Proof (Pan Card, Birth Certificate, School TC)",
      "Address Proof (Passport, Aadhaar Card, Rent Agreement)",
      "Passport size photographs",
      "Form 1A (Medical Certificate for applicants over 40 years)"
    ],
    steps: [
      "Apply for a Learner's License online via the Sarathi Parivahan portal and pass the online test.",
      "After 30 days and within 180 days of Learner's License issue, log in to Sarathi Parivahan.",
      "Fill out the Permanent Driving License application form.",
      "Book a slot for the physical driving test at the nearest RTO.",
      "Appear for the driving test on the scheduled date with your vehicle.",
      "Upon passing, the Driving License is dispatched to your registered address."
    ],
    department: "Regional Transport Office (RTO) / Ministry of Road Transport & Highways",
    icon: "🚗"
  },
  {
    id: "pm-awas-yojana",
    title: "Pradhan Mantri Awas Yojana (PMAY)",
    description: "A flagship central scheme aiming to provide affordable housing for the urban and rural poor in India.",
    documents: [
      "Aadhaar Card of all family members",
      "Voter ID / PAN Card",
      "Income Certificate / Salary Slips",
      "Bank Account details (Passbook copy)",
      "Affidavit stating the family does not own a pucca house anywhere in India",
      "Land ownership document (for PMAY-Gramin/Beneficiary Led Construction)"
    ],
    steps: [
      "Visit the official PMAY portal (pmaymis.gov.in for Urban, pmayg.nic.in for Rural) or visit a Common Service Center (CSC).",
      "Select the citizen assessment tab and enter your Aadhaar details.",
      "Complete the application form, entering family details, income, address, and bank info.",
      "Upload the required documents and submit.",
      "A physical survey will be conducted by municipal/village authorities to verify eligibility.",
      "Once approved, the subsidy or installment amount is credited directly to the beneficiary's bank account."
    ],
    department: "Ministry of Housing and Urban Affairs / Ministry of Rural Development",
    icon: "🏠"
  },
  {
    id: "ayushman-bharat",
    title: "Ayushman Bharat (PM-JAY)",
    description: "A national public health insurance scheme that offers free coverage of up to ₹5 Lakhs per family per year for secondary and tertiary hospitalisation.",
    documents: [
      "Aadhaar Card / Voter ID of all family members",
      "Ration Card (showing inclusion in SECC 2011 database)",
      "Income Certificate",
      "Caste Certificate (if applicable)"
    ],
    steps: [
      "Check eligibility on the PM-JAY portal (mera.pmjay.gov.in) using your mobile number/ration card.",
      "If eligible, visit an empaneled hospital or Ayushman Card center (CSC).",
      "Present Aadhaar Card and Ration Card to the Ayushman Mitra.",
      "The operator performs biometric/OTP authentication.",
      "Get your Ayushman Card printed. Show this card at any empaneled hospital for cashless healthcare."
    ],
    department: "National Health Authority (NHA) / Ministry of Health & Family Welfare",
    icon: "🏥"
  },
  {
    id: "scholarship-portal",
    title: "National Scholarship Portal (NSP)",
    description: "A single solution portal providing varied scholarships offered by Central, State, and UT governments to students.",
    documents: [
      "Student's Aadhaar Card / Aadhaar Enrolment ID",
      "Educational Marksheet of previous class",
      "Income Certificate of parents",
      "Caste Certificate (if applying under SC/ST/OBC quota)",
      "Bank Account details (linked with Aadhaar)",
      "Fee receipt of current academic year",
      "Bonafide Student Certificate from school/college"
    ],
    steps: [
      "Register as a new user on the National Scholarship Portal (scholarships.gov.in).",
      "Log in using the generated application ID and password sent to your mobile number.",
      "Fill out the scholarship scheme form (Pre-Matric, Post-Matric, or Merit-cum-Means).",
      "Upload scanned copies of marksheets, income proofs, and bank details.",
      "Submit the application online and take a printout.",
      "Submit the printed copy and physical documents to your educational institution for verification."
    ],
    department: "Ministry of Electronics & Information Technology / Ministry of Minority Affairs / Ministry of Social Justice",
    icon: "🎓"
  },
  {
    id: "ration-card",
    title: "Ration Card (NFSA)",
    description: "Official document issued by state governments to households, enabling them to purchase subsidised food grains under the National Food Security Act.",
    documents: [
      "Aadhaar Cards of all family members",
      "Income Certificate of the head of family",
      "Age proof of the head of family",
      "Voter ID / Rent Agreement / Electricity Bill (Address Proof)",
      "Group photograph of family members"
    ],
    steps: [
      "Log in to the State Food and Civil Supplies portal or visit your nearest Ration Office/CSC.",
      "Fill out the New Ration Card Application Form (Form A).",
      "Provide details of all family members and specify the designated head of family (usually the eldest female).",
      "Submit the form along with Aadhaar cards and income certificates.",
      "An Inspector from the Food Department will visit your house for verification.",
      "If approved, the Ration Card is issued and mapped to the nearest Fair Price Shop (FPS)."
    ],
    department: "Department of Food and Public Distribution / State Food Civil Supplies Departments",
    icon: "🌾"
  },
  {
    id: "voter-id",
    title: "Voter ID Card (EPIC)",
    description: "Identity card issued by the Election Commission of India to eligible citizens aged 18 and above, enabling them to cast votes in elections.",
    documents: [
      "Passport size photograph",
      "Age Proof (Birth Certificate, Class 10 Marksheet, PAN Card)",
      "Address Proof (Aadhaar Card, Passport, Water/Gas Bill)"
    ],
    steps: [
      "Go to the official Voters' Service Portal (voters.eci.gov.in) or download the Voter Helpline App.",
      "Sign up and log in, then click on 'Register as a New Voter' (Form 6).",
      "Enter your personal details, address, and select your assembly constituency.",
      "Upload your photo, age proof, and address proof documents.",
      "Submit the form and note down the Reference ID to track the application.",
      "A Booth Level Officer (BLO) will visit your address for verification, after which the EPIC card is printed and posted to your address."
    ],
    department: "Election Commission of India (ECI)",
    icon: "🗳️"
  }
];
