# 🌐 Website Navigator

## 📌 Project Overview

Website Navigator is a full-stack web application that allows users to upload an Excel or CSV file containing website URLs and seamlessly browse them one by one inside the app.

It simplifies the process of reviewing multiple websites by providing navigation controls and an embedded viewer.

---

## 🚀 Features

* 📂 Upload Excel (.xlsx, .xls) or CSV (.csv) files
* 🔗 Automatically extract URLs from uploaded file
* 🌐 View websites directly inside the app (iframe)
* ⬅️➡️ Navigate between websites (Next / Previous)
* 📊 Display current position (e.g., 2 of 10)
* ⚡ Drag & Drop file upload support
* 🎨 Modern glassmorphism UI
* ⏳ Loading indicators for better UX
* ❌ Error handling for invalid files and upload failures

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS (Glassmorphism UI)

### Backend

* Node.js
* Express.js
* Multer (file upload handling)

### Deployment

* Frontend: Vercel
* Backend: Render

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repository

```bash
git clone https://github.com/vivekkumar677/website-navigator.git
cd website-navigator
```

---

### 🔹 2. Frontend Setup

```bash
cd client
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

### 🔹 3. Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### 🔹 4. Environment Configuration

Update backend URL in frontend:

```js
const BACKEND_URL = "http://localhost:5000";
```

For production:

```js
const BACKEND_URL = "https://website-navigator-hn0v.onrender.com";
```

---

## 📄 File Format (Excel / CSV)

Your uploaded file should contain a column with website URLs.

### ✅ Example CSV:

```csv
url
https://example.com
https://google.com
https://github.com
```

### ✅ Example Excel:

| url                 |
| ------------------- |
| https://example.com |
| https://google.com  |
| https://github.com  |

## 🌍 Live Demo

Frontend:
https://website-navigator-seven.vercel.app/

Backend:
https://website-navigator-hn0v.onrender.com/

## 👨‍💻 Author

Vivek Kumar

---