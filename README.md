# 📊 K6 Regal Data Backend

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Backend-blue?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success?logo=mongodb)
![REST API](https://img.shields.io/badge/API-REST-orange)
![Cloud](https://img.shields.io/badge/Cloud-Deployment-purple?logo=icloud)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## ✅ Overview

This is the **backend service** for an application where users **paste K6 Regal load testing results**, which are:

✔ **Automatically saved** to a MongoDB cloud database  
✔ **Verified** for completeness and validity  
✔ **Filtered** for relevant performance metrics  
✔ **Exposed** via **REST APIs** for further processing and frontend integration  

---

## 🚀 Tech Stack

- **[Node.js](https://nodejs.org/)** – JavaScript runtime
- **[Express.js](https://expressjs.com/)** – Web framework
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** – Cloud database
- **[REST APIs](https://restfulapi.net/)** – API architecture
- **[Cloud Deployment](#-deployment)** – Remote backend hosting

---

## 📂 Features

✔ **User Data Submission** – Accepts pasted K6 Regal output via API  
✔ **Data Storage** – Saves processed results to MongoDB Atlas  
✔ **Filtration** – Extracts and stores relevant performance insights  
✔ **Verification** – Ensures data format and required fields are correct  
✔ **API Endpoints** – Exposes data for frontend dashboards or analytics tools  
✔ **Cloud Ready** – Optimized for deployment to platforms like Render, Railway, or Vercel  

---

## 🛠 Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/k6-regal-backend.git
cd k6-regal-backend

# 2️⃣ Install dependencies
npm install

# 3️⃣ Configure environment variables
cp .env.example .env
# Add your MongoDB URI, PORT, and any cloud credentials

# 4️⃣ Start development server
npm run dev
