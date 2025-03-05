# multi_level_authorization_
# Multi-Level Authorization System

## Overview
This project implements a **Multi-Level Authorization System** using **Node.js, Express.js, and MongoDB**. It supports three levels of users:
- **Admin**
- **Manager**
- **User**

Each level has specific roles and permissions, ensuring secure and structured access to resources. API requests were tested using **Postman** and **Thunder Client**.

## Features
✅ **User Authentication & Authorization** (JWT-based)
✅ **Role-Based Access Control (RBAC)**
✅ **CRUD Operations** (with role-specific permissions)
✅ **Secure API with Middleware Protection**
✅ **MongoDB for Database Storage**
✅ **Express.js for Backend API Handling**

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Token), bcrypt.js
- **API Testing:** Postman, Thunder Client

## Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/knowsyash/multi_level_authorization_.git
cd multi-level-authorization
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the Server
```sh
npm start
```
The server will run on `http://localhost:5000`

## API Endpoints
### 🔹 Authentication
- **Register User:** `POST /api/auth/register`
- **Login:** `POST /api/auth/login`

### 🔹 User Management (Admin Only)
- **Get All Users:** `GET /api/users`
- **Delete User:** `DELETE /api/users/:id`

### 🔹 Role-Based Actions
- **Admin:** Full control over all users and managers
- **Manager:** Can manage regular users
- **User:** Can access only their own data

## Middleware
- **Auth Middleware** - Protects routes by verifying JWT
- **Role-Based Middleware** - Restricts access based on user role

## Future Enhancements
🔹 **Refresh Token Mechanism**
🔹 **Two-Factor Authentication (2FA)**
🔹 **Admin Panel for User Management**

## Contributing
Pull requests are welcome! Feel free to contribute by fixing bugs, improving security, or adding features.

## License
This project is licensed under the **MIT License**.

---
🚀 **Developed by [Yash Singhal](https://github.com/knowsyash)**
