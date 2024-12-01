const express = require("express");
const app = express();
const path = require("path");

// Set up EJS and static files
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Define the resume data
const resumeData = {
  name: "Mihir Rathod",
  title: "Full Stack Web And Mobile App Developer",
  tagline: "Self-Learner And Hard Working Team Leader",
  contact: {
    email: "rthdmihir@gmail.com",
    phone: "8469595089",
    location: "Surat, India",
    portfolio: "https://krmdigital.in",
    github: "https://github.com/Mihir090821"
  },
  education: [
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Sir P. T. Sarvajanik College of Science College",
      location: "Surat, Gujarat"
    },
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Swarrnim Startup & Innovation University",
      dates: "06/2022 - 05/2024",
      projects: [
        "Google Docs Clone using Flutter and Firebase",
        "HRM Software with Travel Allowances and Distance Tracking"
      ]
    }
  ],
  skills: [
    "AWS", "Docker", "Git", "GitHub/GitLab", "Jenkins", "PHP", 
    "Node.js", "Express.js", "React (MUI)", "React Native (Expo)", 
    "Flutter", "Firebase", "MongoDB", "MySQL", "JavaScript (ES7)", 
    "HTML", "CSS", "jQuery", "Bootstrap"
  ],
  internships: [
    {
      role: "Project Manager",
      company: "Disha Infosys",
      dates: "12/2022 - Present",
      location: "Surat, India",
      contact: "Nirav Kansara - +919033636482"
    },
    {
      role: "Junior PHP Developer",
      company: "Instance IT Solutions",
      dates: "06/2021 - 11/2021",
      location: "Surat, India",
      contact: "Chirag Gadiya - 93270 50851"
    }
  ],
  projects: [
    {
      title: "KRM DIGITAL Website",
      description: "Teaching web development and uploading a blog.",
      dates: "02/2022 - Present"
    },
    {
      title: "Solid Waste Management System",
      description: "Managing waste collection and income using PHP & MySQL."
    },
    {
      title: "Whatshap Clone",
      description: "Firebase-based real-time chat app.",
      dates: "01/2021 - Present"
    },
    {
      title: "WhatsApp CRM",
      description: "WhatsApp Business API integration for CRM.",
      dates: "02/2024 - 05/2024"
    }
  ],
  languages: ["Gujarati (Native)", "Hindi (Native)", "English (Full Professional Proficiency)"]
};

// Route for rendering the resume
app.get("/", (req, res) => {
  res.render("index", { resume: resumeData });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
