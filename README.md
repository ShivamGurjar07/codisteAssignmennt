# 📍 Travel Log Application 🗺️  

> A **full-stack travel diary app** where users can log their travel experiences, upload images, view locations on a map.


---

## 🏗️ Tech Stack  
### **Frontend** (React + Vite)
- ⚛ **React (Vite)**
- 🎨 **Plain CSS** (Responsive UI)
- 🔥 **React Toastify** (Notifications)
- 🗺 **Leaflet.js** (Interactive Map)

### **Backend** (Express + MongoDB)
- 🚀 **Node.js + Express.js**
- 🗄 **MongoDB + Mongoose**
- 🔐 **JWT Authentication**

---

## 🚀 Features  
✅ **User Authentication** (Sign Up, Login, Logout)  
✅ **Create Travel Logs** (Title, Description, Date, Image Url)  
✅ **View Entries on Map** (Leaflet.js Integration)  
✅ **Edit & Delete Entries** (Only the owner)  
✅ **Interactive UI with Notifications**  
✅ **Responsive & Mobile Friendly**  

---

## 📦 Installation & Setup  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/ShivamGurjar07/codisteAssignmennt.git
cd codisteAssignmennt
```

### **2️⃣ Install Dependencies**  

#### **Backend**  
```sh
cd backend
npm install
```

#### **Frontend**  
```sh
cd frontend
npm install
```

### **3️⃣ Setup Environment Variables**  

Create a **.env** file in the **backend** folder:  
```ini
PORT=1010
MONGO_URI=mongodb+srv://shivam:shivam@cluster0.xct6t.mongodb.net/TravelLog1
JWT_SECRET=shivam
```

---

## ▶️ Running the App  

### **Start Backend**
```sh
cd backend
npm run dev
```
Server runs on: `http://localhost:1010`

### **Start Frontend**
```sh
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

---

## 🌍 API Endpoints (Backend)  

| Method | Endpoint         | Description            | Auth |
|--------|-----------------|------------------------|------|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login user | ❌ |
| `GET` | `/api/travel` | Fetch all travel logs | ✅ |
| `POST` | `/api/travel` | Create a travel log | ✅ |
| `PUT` | `/api/travel/:id` | Edit a travel log | ✅ |
| `DELETE` | `/api/travel/:id` | Delete a travel log | ✅ |

✅ = Requires Authentication

---

## 🎨 Screenshots  

| **Dashboard** | **Map View** |
|--------------|-------------|
![image](https://github.com/user-attachments/assets/d8da2707-f92a-46d5-b470-00ce59fa743e)  
![image](https://github.com/user-attachments/assets/dd1daf0a-a01d-4826-83ef-fa8853459895)
![image](https://github.com/user-attachments/assets/0f858aa5-c381-4bb0-b437-e7c41562baa2)

---


2️⃣ **MongoDB Connection Error**  
✔️ Ensure your **MongoDB URI** in `.env` is correct.  

---

## 📜 License  
This project is **MIT Licensed**. Feel free to use and modify it.

---

## 📞 Contact  
💡 Need help? Open an [issue](https://github.com/shivamgurjar07)  
💻 Connect with me on **[LinkedIn](https://www.linkedin.com/in/shivamgurjar07/)**  
