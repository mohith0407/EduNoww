# EduNoww App – Learning Management System (LMS)

**EduNoww App** is a full-featured Learning Management System (LMS) developed using the **MERN Stack** — MongoDB, Express.js, React.js, and Node.js. It is designed to streamline online learning, course management, and student interaction.

---

## 💻 Tech Stack

- **Frontend:** React.js with Tailwind CSS
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **State Management:** Redux

---


## 🛡️ Security

- Passwords are securely hashed using **bcrypt**
- API protected using **JWT**
- Role-based access control: `admin`, `student`



## 📂 Project Folder Structure
```plaintext
### Root Directory
edunoww-app/
│
├── client/ # React frontend
├── server/ # Express backend
├── .env # Environment variables
├── package.json # Root-level dependencies
└── README.md

### Frontend – `client/`
client/
├── public/
│   └── index.html                    # Root HTML template
│
├── src/
│   ├── assets/
│   │   └── images/                   # Static image assets
│   │
│   ├── Components/                   # Reusable UI components
│   ├── Constants/                    # App-wide constants
│   ├── Helpers/                      # Utility/helper functions
│   ├── Layout/                       # Layout components (Navbar, Footer)
│   ├── Pages/                        # Route-based page views
│   ├── Redux/                        # Redux setup
│   │   ├── Slices/                   # Redux slices (e.g., auth, courses)
│   │   └── store.js                  # Redux store configuration
│   │
│   ├── App.jsx                       # Root app component and routes
│   ├── index.css                     # Tailwind + global styles
│   └── main.jsx                      # App entry point
│
├── .env.example.js                   # Sample environment config
├── .eslintrc.cjs                     # ESLint configuration
├── .gitignore                        # Git ignore file
├── package.json                      # NPM scripts and dependencies
├── package-lock.json                 # Dependency lock file
├── postcss.config.js                 # PostCSS setup
├── tailwind.config.js                # Tailwind configuration
├── vercel.json                       # Vercel deployment settings
└── vite.config.js                    # Vite bundler configuration


### Backend – `backend/`
backend/
├── config/
│   └── db.config.js                 # MongoDB connection configuration
│
├── controllers/                     # Business logic and route handlers
│   ├── course.controller.js         # Course-related logic
│   ├── miscellaneous.controller.js  # Miscellaneous features
│   └── user.controller.js           # User auth and profile management
│
├── middleware/                      # Express middleware functions
│   ├── auth.middleware.js           # Auth and role checking
│   ├── error.middleware.js          # Error handler
│   └── multer.middleware.js         # File upload handling
│
├── models/                          # Mongoose models
│   ├── course.model.js              # Course schema
│   └── user.model.js                # User schema
│
├── routes/                          # API route definitions
│   ├── course.routes.js             # Routes for courses
│   ├── miscellaneous.routes.js      # Routes for misc endpoints
│   └── user.routes.js               # Routes for user/auth
│
├── utils/                           # Utility functions
│   ├── error.utils.js               # Custom error classes
│   └── sendEmail.js                 # Email sending logic
│
├── .env.example.js                  # Sample environment configuration
├── .gitignore                       # Git ignored files
├── app.js                           # Express app setup (middleware, routes)
├── package.json                     # Project metadata and dependencies
├── package-lock.json                # Dependency lock file
└── server.js                        # App entry point (DB connect, listen)

```
## 🎯 Objectives

- Centralize online education for students
- Streamline scheduling and access to learning materials
- Offer an engaging and scalable educational platform

---

## 🧠 Future Enhancements

- Student-instructor interaction
- chatBot system
- More personalised UI

---

## 📝 Conclusion

**EduNoww App** provides an effective solution for digital learning, combining robust backend support with a user-friendly frontend. It aims to be a scalable and impactful LMS platform.
