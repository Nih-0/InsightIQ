# 🚀 InsightIQ – AI Interview Analyzer (Frontend)

**InsightIQ** is an AI-powered interview preparation tool designed to help users practice answering interview questions through both text and audio inputs. Built with **React**, it provides real-time, intelligent feedback by integrating with a **Spring Boot backend** and AI models like OpenAI/Gemini.

---

## ✨ Features

- **Modern Welcome Page** – Clean, responsive landing page with intuitive navigation
- **Text & Audio Analysis** – Submit responses and receive AI-generated feedback on technical and soft skills
- **Progress Tracking** – Monitor improvement over multiple attempts (optional extension)
- **Email Contact Form** – Integrated with EmailJS to send bug reports or suggestions
- **Fully Responsive** – Optimized for both desktop and mobile users
- **About & Connect Pages** – Inform users about the platform and provide support access

---

## 🔧 Getting Started

### 📦 Prerequisites

Ensure the following tools are installed:

- Node.js (v16 or above): https://nodejs.org/
- npm: https://www.npmjs.com/ (or yarn: https://yarnpkg.com/)
- Backend server running at: `http://localhost:8080/api`

👉 Backend Repository:  
https://github.com/Nih-0/InsightIQ_Backend

---

### 📁 Installation Steps

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/ai-interview-analyzer-frontend.git
cd ai-interview-analyzer-frontend
Install Dependencies

bash
Copy
Edit
npm install
# or
yarn install
Configure Environment Variables

Create a .env file in the root of the project and add the following:

ini
Copy
Edit
REACT_APP_API_BASE_URL=http://localhost:8080/api
REACT_APP_EMAILJS_SERVICE_ID=service_1yd4k6v
REACT_APP_EMAILJS_TEMPLATE_ID=template_s7qq7ro
REACT_APP_EMAILJS_PUBLIC_KEY=V9jDMw4QCXLDkOsG3
After updating the .env file, restart your development server.

Start Development Server

bash
Copy
Edit
npm start
# or
yarn start
Access the app at:
http://localhost:3000

📂 Project Structure
text
Copy
Edit
src/
├── components/      # Reusable UI components (Navbar, Alerts, etc.)
├── pages/           # Main views (WelcomePage, HomePage, AnalysisPage, etc.)
├── services/        # API functions and utilities (e.g., apiService.js)
├── styles/          # CSS or Tailwind styling files
├── App.js           # App routes and layout
└── index.js         # Entry point

.env                 # Environment variable config
📧 EmailJS Integration
Service: https://www.emailjs.com/

Used for the contact form functionality

Ensure your .env contains correct EmailJS credentials:

REACT_APP_EMAILJS_SERVICE_ID

REACT_APP_EMAILJS_TEMPLATE_ID

REACT_APP_EMAILJS_PUBLIC_KEY

Your EmailJS template must include:
name, email, and message variables.

🔗 Backend API Integration
All API requests are sent to:
REACT_APP_API_BASE_URL=http://localhost:8080/api

📘 Expected API Endpoints
Method	Endpoint	Description
POST	/analyze	Analyze text-based answers
POST	/transcribe	Transcribe audio to text
POST	/analyze-audio	Analyze spoken/audio-based answers

Ensure CORS is enabled for http://localhost:3000 in your Spring Boot backend.



🛠 Troubleshooting
Issue	Solution
.env not working	Ensure it is at the project root and restart your dev server
API calls failing or undefined	Check .env values and base URL; confirm backend is running
EmailJS not sending	Verify service ID, template ID, and variable names in EmailJS dashboard

📦 Deployment
To build the frontend for production:

bash
Copy
Edit
npm run build
# or
yarn build
Deploy the contents of the build/ folder to any static hosting provider:

``` 

Vercel → https://vercel.com/

Netlify → https://www.netlify.com/

GitHub Pages → https://pages.github.com/


📚 Learn More
React Docs → https://react.dev/

Create React App → https://create-react-app.dev/docs/getting-started/

EmailJS Docs → https://www.emailjs.com/docs/

Spring Boot Backend → https://spring.io/projects/spring-boot

Backend Repo → https://github.com/Nih-0/InsightIQ_Backend
