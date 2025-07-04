🚀 InsightIQ – AI Interview Analyzer (Frontend)
InsightIQ is an AI-powered interview preparation tool designed to help users practice interview questions through text or audio and receive intelligent, real-time feedback. This React-based frontend interfaces seamlessly with a backend (Spring Boot) to provide a smooth and interactive experience.

✨ Features
🖥 Modern Welcome Page – Clean and user-friendly landing page with intuitive navigation

💬 Text & Audio Analysis – Submit responses and receive detailed AI-generated feedback

📊 Progress Tracking – Review your previous attempts and monitor your improvement over time

📞 Contact Form – Send messages via EmailJS integration

📱 Responsive Design – Optimized for desktop and mobile screens

ℹ️ About & Connect Pages – Learn more about the project or reach out to the team

🔧 Getting Started
📦 Prerequisites
Make sure you have the following installed:

Node.js (v16+ recommended) → https://nodejs.org/

npm → https://www.npmjs.com/

yarn (optional) → https://yarnpkg.com/

Backend server (Spring Boot) running at http://localhost:8080/api

You can refer to the backend repository here:
https://github.com/Nih-0/InsightIQ_Backend

📁 Installation Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/ai-interview-analyzer-frontend.git
cd ai-interview-analyzer-frontend
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Configure environment variables:

Create a .env file in the root of the project and add the following:

ini
Copy
Edit
REACT_APP_API_BASE_URL=http://localhost:8080/api
REACT_APP_EMAILJS_SERVICE_ID=service_1yd4k6v
REACT_APP_EMAILJS_TEMPLATE_ID=template_s7qq7ro
REACT_APP_EMAILJS_PUBLIC_KEY=V9jDMw4QCXLDkOsG3
Restart the dev server after editing .env.

Start the development server:

bash
Copy
Edit
npm start
# or
yarn start
Your app will be live at: http://localhost:3000

📂 Project Structure
bash
Copy
Edit
src/
│
├── components/      # Reusable UI components (Navbar, Alerts, etc.)
├── pages/           # Main views (WelcomePage, HomePage, AnalysisPage, etc.)
├── services/        # API interactions (apiService.js)
├── styles/          # Global and scoped styles
├── App.js           # Routes and layout
└── index.js         # Entry point of the React app
.env                 # Local environment variables
📧 EmailJS Integration
Email sending is powered by EmailJS

Website: https://www.emailjs.com/

Configure your .env with Service ID, Template ID, and Public Key

Your template must include these variables: name, email, message

🔗 Backend API Integration
The frontend expects a backend API at the URL specified in:

nginx
Copy
Edit
REACT_APP_API_BASE_URL
Expected API Endpoints:
Method	Endpoint	Description
POST	/analyze	Analyze text-based answers
POST	/transcribe	Transcribe audio to text
POST	/analyze-audio	Analyze spoken answers

Make sure CORS is enabled for http://localhost:3000 on your backend.

🛠 Troubleshooting
Issue	Possible Fix
.env not working?	Ensure it's in the root directory and restart the dev server
API calls going to undefined/...?	Check your .env values and restart
EmailJS not sending?	Verify the Service ID, Template ID, and variables in the EmailJS dashboard

🚀 Deployment
To create a production build:

bash
Copy
Edit
npm run build
or
yarn build
Then deploy the contents of the build/ folder to any static hosting provider, like:

Vercel → https://vercel.com/

Netlify → https://www.netlify.com/

GitHub Pages → https://pages.github.com/

📄 License
This project is for educational or demo use. Please add a license file if required.

📚 Learn More
React Docs → https://react.dev/

Create React App → https://create-react-app.dev/docs/getting-started/

EmailJS Documentation → https://www.emailjs.com/docs/

Spring Boot (Backend) → https://spring.io/projects/spring-boot

Backend GitHub Repository → https://github.com/Nih-0/InsightIQ_Backend
