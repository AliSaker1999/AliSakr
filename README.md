# 🧾 Recipe Management System

A modern full-stack web application for managing, searching, and exploring recipes, built with **ASP.NET Core (C#)** and **React (TypeScript)**. Features robust **JWT authentication**, a clean admin dashboard, and an integrated **AI-powered recipe assistant** (using free/open AI APIs like Groq).

---

## 🚀 Technologies Used

* **Backend:** ASP.NET Core C#
* **Frontend:** React + TypeScript
* **Styling:** Tailwind CSS 3
* **Authentication:** JWT (JSON Web Token), Identity roles
* **AI Assistant:** Groq API (Llama 3), OpenRouter, or similar free AI APIs
* **API Documentation:** Swagger

---

## 📋 Features

### 👤 User Features

* View all recipes (with filters and search)
* Search recipes by name, ingredient, or cuisine
* Add new recipes
* Delete recipes

### 🤖 AI Recipe Assistant

* Dedicated **AI Assistant** page for smart recipe suggestions:

  * Ask for recipes by nutrition (“high protein”, “low carb”, “sweet”, etc.)
  * The AI considers **your database** of recipes (not generic web answers)
  * Powered by free, fast, open models (no cost, no OpenAI key required)
* Optional: AI widget also on the Home page

### 🔐 Authentication & Authorization

* Secure JWT login
* Two roles: `Admin` and `User`
* Only **Admins** can:

  * Create or delete users
  * Access and manage user list
  * See the full admin dashboard

### 🧪 API Testing

* All backend endpoints are fully testable via built-in Swagger UI
* Backend and authentication functionality are complete and tested

### 🖥️ Dashboard Design

* Sidebar navigation: All Recipes, Add Recipe, Manage Users, AI Assistant
* Top navbar: App title, Login/Logout

---

## 🗝️ Default Admin Credentials

To test admin features, use:

* **Username:** admin
* **Password:** Admin123!

---

## 📁 Project Structure

```
/api         # ASP.NET Core Web API (users, auth, recipes, AI endpoint)
/frontend    # React + TypeScript app (Tailwind CSS)
/components  # Sidebar, Navbar, AI Assistant, etc.
/pages       # Home, Add Recipe, Users, AI Help
/layouts     # Dashboard layout
```

---

## ✅ How to Run

### Backend

1. Open `/api` in Visual Studio or VS Code
2. Run `dotnet watch run` in the terminal
3. API will be available at `http://localhost:5196` (Swagger auto-opens)

### Frontend

1. Open `/frontend`
2. Run `npm install`
3. Start the app: `npm run dev` or `npm start`
4. Frontend runs at `http://localhost:3000`

---

## 🧠 AI Integration

* Uses **free AI APIs** (Groq, OpenRouter, etc.), so no paid key is required
* The AI always uses your live recipe data for accurate answers

---

## 🙋 About the Developer

Built for a technical assessment and as a portfolio project, this app demonstrates full-stack skills, secure authentication, modern dashboard UI, and advanced AI integration.
Test all features freely. For questions, improvements, or access, please contact me.

---

Let me know if you want it more detailed or want to add sections (e.g., environment setup, screenshots, contribution guide, etc)!
