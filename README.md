# 📸 Live Photo Gallery Frontend

A modern React-based web application that displays newly captured images in real time. The application communicates with the backend using REST APIs and Socket.IO, allowing users to instantly view and download images as soon as they are detected by the backend service.

This project demonstrates a real-time event photography workflow where guests can immediately access their photos without manually refreshing the page.

---

# 🌐 Live Application

**Vercel Deployment**

https://live-photo-gallery-frontend.vercel.app/

---

# 🎥 Demo Video

Google Drive Demo

https://drive.google.com/file/d/13odnr8QlOE06iWieEQUz81r4SK0oqF6M/view?usp=drivesdk

The demonstration includes:

* Project Overview
* Frontend Walkthrough
* Backend Architecture
* Real-time Image Synchronization
* Socket.IO Communication
* Automatic Image Detection
* Download Functionality
* GitHub Actions (CI)
* Vercel Deployment
* Why the Backend Uses ngrok

---

# 🚀 Features

* Real-time image updates using Socket.IO
* Responsive image gallery
* Image preview modal
* Instant synchronization without refreshing
* Download images directly
* Displays previously captured images on application startup
* Responsive UI for desktop and mobile
* REST API integration
* Automatic deployment with Vercel

---

# 🏗️ Architecture

```text
Local Folder
      │
      ▼
Backend (Express + Chokidar)
      │
      ├── MongoDB
      ├── Socket.IO
      └── REST API
             │
             ▼
React Frontend (Vercel)
```

---

# ⚙️ Technologies Used

* React.js
* Vite
* Axios
* Socket.IO Client
* CSS3
* Vercel

---

# 📂 Project Structure

```text
src
├── components
│   ├── Gallery
│   ├── Header
│   ├── ImageCard
│   ├── ImageModal
│   └── Stats
│
├── services
│   ├── imageApi.js
│   └── socket.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# 🔄 Application Workflow

1. The application loads all previously captured images from the backend.
2. A Socket.IO connection is established.
3. The backend watches a configured folder for newly added images.
4. Whenever a new image is detected, the backend emits a Socket.IO event.
5. The frontend immediately updates the gallery without requiring a page refresh.
6. Users can preview and download images directly from the application.

---

# 📡 API Integration

The frontend communicates with the backend using Axios.

Base URL:

```text
VITE_API_URL/api
```

Available endpoint:

```text
GET /images
```

Returns all stored image metadata.

---

# 🔌 Socket.IO Integration

The application establishes a WebSocket connection to receive real-time updates.

Whenever the backend emits:

```text
new-image
```

the frontend automatically updates the gallery.

No manual refresh is required.

---

# 🌐 Environment Variables

Create a `.env` file.

```env
VITE_API_URL=https://your-ngrok-url.ngrok-free.app
```

---

# ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

# 🚀 Deployment

The frontend is deployed on **Vercel**.

Every push to the GitHub repository automatically triggers:

* GitHub Actions (Build Validation)
* Vercel Automatic Deployment

This ensures that every successful commit is automatically deployed.

---

# 🌍 Why the Backend Uses ngrok

The frontend is hosted on Vercel, while the backend runs locally because it continuously monitors a Windows folder using Chokidar.

Cloud platforms cannot directly monitor files stored on a local computer. To enable secure communication between the deployed frontend and the local backend, the backend is exposed using **ngrok**.

This allows the frontend to receive real-time image updates exactly as it would in a production event photography workflow.

---

# 💼 Business Applications

This solution can be used for:

* Wedding Photography
* Birthday Events
* Corporate Events
* Conferences
* School Functions
* College Events
* Photo Booth Systems
* Studio Photography
* Exhibition Photography
* Instant Guest Photo Sharing

---

# 🔮 Future Enhancements

The current implementation watches a local folder.

Future production implementations can receive images from:

* Wi-Fi Cameras
* DSLR Cameras
* FTP/SFTP Servers
* Network Shared Storage (NAS)
* Mobile Applications
* Cloud Storage (AWS S3, Azure Blob Storage, Google Cloud Storage)
* Event Photography Software
* QR Code Based Image Retrieval

Only the image source changes—the frontend remains the same.

---

# 👨‍💻 Developer

**Chegondi Yashwanth**

📧 Email: [567yashwanth@gmail.com](mailto:567yashwanth@gmail.com)

📱 Phone: +91 9391786983
