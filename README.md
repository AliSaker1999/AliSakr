# 🧾 Receipt Management System

A full-stack web application built with **ASP.NET Core (C#)** and **React (TypeScript)** for managing and exploring recipes efficiently, with built-in **JWT authentication** and an **AI-based recipe suggestion** feature.

## 🚀 Technologies Used

- **Backend:** ASP.NET Core C#
- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** JWT (JSON Web Token)
- **API Documentation:** Swagger
- **AI Integration:** Recipe Suggestion Feature

## 📋 Features

### 👥 User Features
- View all recipes
- Search recipes
- AI-powered recipe suggestion
- Add new recipes
- Delete recipes

### 🔐 Authentication & Authorization
- Secure login via JWT tokens
- Two roles: `Admin` and `User`
- Only Admins can:
  - Create new users
  - Delete users
  - Access admin dashboard

### 🧪 API Testing
- All backend endpoints are fully testable via the built-in Swagger UI
- Backend and authentication functionality is complete and tested

### 🔑 Admin Credentials
Use the following credentials to log in as an admin:
Username: admin
Password: Admin123!


## 🧠 AI Recipe Suggestion
Includes an AI helper to suggest recipes based on context or preferences (available in the backend logic).

## 📁 Project Structure

- `/api` - ASP.NET Core Web API with user management, authentication, and recipe endpoints
- `/frontend` - React TypeScript frontend using Tailwind CSS

## ✅ How to Run

### Backend
1. Open the solution in Visual Studio or VS Code
2. Make sure SQL Server is running
3. Update your `appsettings.json` with your SQL connection string
4. Run the project – Swagger UI will open for testing

### Frontend
1. Navigate to `frontend` folder
2. Run: `npm install`
3. Start the app: `npm run dev` or `npm start`

---

## 🙋 About the Developer

This project was built as part of a technical assessment. It includes all core features like authentication, role-based access, and CRUD operations. The frontend and backend are fully integrated and tested.

Feel free to test the backend functionality via Swagger. If you'd like to see more or request access, please contact me.

---
