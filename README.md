#NSS GEC Patan

Welcome to the official **NSS GEC Patan** website repository. This project is developed using the **MERN stack (MongoDB, Express.js, React, Node.js)** and aims to provide a centralized platform for students, volunteers, and coordinators to engage, share, and organize National Service Scheme activities at **Government Engineering College, Patan**.

> Motto: **"Not Me But You"**

---

## 🌐 Live Website

🚀 [Visit the Website](https://your-deployed-link.com)

---

## 📸 Project Screenshots

> _(Add screenshots or screen recordings here once available for a visual preview of the site.)_

---

## 🎯 Features

- 📅 Upcoming Events Management
- 🖼️ Dynamic Photo Gallery
- 🧑‍🤝‍🧑 Volunteer Profiles & Info
- 📃 Digital Reports & Certificates Upload
- 📝 Admin Dashboard for Event/Content Control
- 📧 Contact Form with Backend Mail Support
- 🔐 User Authentication (Admin Login)
- 📈 Analytics Dashboard (Coming Soon)

---

## 🧰 Tech Stack

### 🔹 Frontend:
- React.js
- Tailwind CSS / Styled Components
- Axios
- React Router

### 🔸 Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### 🧪 Others:
- Multer (File Upload)
- Nodemailer (Emails)
- Cloudinary (Image Storage)
- dotenv (Environment Variables)

---

## 🗂️ Folder Structure

```bash
nss-gec-patan/
├── client/                  # React Frontend
│   ├── public/
│   └── src/
│       ├── assets/          # Images and static files
│       ├── components/      # Reusable components
│       ├── pages/           # Page components
│       ├── utils/           # Utility functions
│       ├── App.js
│       └── index.js
├── server/                  # Node.js Backend
│   ├── config/              # DB and cloud config
│   ├── controllers/         # Route handlers
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── middleware/          # Auth, error handling
│   ├── uploads/             # Uploaded files
│   ├── .env                 # Environment variables
│   └── server.js            # Entry point
├── .gitignore
├── README.md
└── package.json
