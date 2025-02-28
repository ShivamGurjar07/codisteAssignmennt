# 📍 Travel Log Application 🗺️  

> A **full-stack travel diary app** where users can log their travel experiences, upload images, view locations on a map, and interact with others.

![Travel Log App](https://via.placeholder.com/800x400?text=Travel+Log+App+Preview)

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
- 📦 **Multer (Image Upload)**
- 🌍 **City-to-LatLng API** (For fetching coordinates)

---

## 🚀 Features  
✅ **User Authentication** (Sign Up, Login, Logout)  
✅ **Create Travel Logs** (Title, Description, Date, Image)  
✅ **View Entries on Map** (Leaflet.js Integration)  
✅ **Edit & Delete Entries** (Only the owner)  
✅ **Interactive UI with Notifications**  
✅ **Responsive & Mobile Friendly**  

---

## 📦 Installation & Setup  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/travel-log-app.git
cd travel-log-app
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
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
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
| ![Dashboard](https://via.placeholder.com/400x250?text=Dashboard) | ![Map View](https://via.placeholder.com/400x250?text=Map+View) |

---

## ❓ Common Issues  

1️⃣ **City-to-LatLng Not Working in Vite**  
✔️ Use **dynamic import** inside the function:  
```js
const CityToLatLng = await import("@musjib999/city_to_lat_long");
const getLatLng = CityToLatLng.default || CityToLatLng.getLatLng;
```

2️⃣ **MongoDB Connection Error**  
✔️ Ensure your **MongoDB URI** in `.env` is correct.  

---

## 🤝 Contributing  

1. **Fork the repository**  
2. **Create a feature branch** (`git checkout -b feature-name`)  
3. **Commit changes** (`git commit -m "Added feature X"`)  
4. **Push to GitHub** (`git push origin feature-name`)  
5. **Submit a Pull Request** 🚀  

---

## 📜 License  
This project is **MIT Licensed**. Feel free to use and modify it.

---

## 📞 Contact  
💡 Need help? Open an [issue](https://github.com/your-username/travel-log-app/issues)  
💻 Connect with me on **[LinkedIn](https://linkedin.com/in/your-profile)**  
