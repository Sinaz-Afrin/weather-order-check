# 🌦️ Weather-Based Order Delay System

## 📌 Overview
This project checks weather conditions for delivery cities and updates order status if there are potential delays.

---

## ⚙️ Features
- Fetch weather data using OpenWeatherMap API
- Parallel API calls using Promise.all
- Detect bad weather (Rain, Snow, Extreme)
- Update order status to "Delayed"
- Generate customer apology messages
- Handle invalid cities without crashing

---

## 🧠 Tech Stack
- Node.js
- Axios
- dotenv
- OpenWeatherMap API

---

## 🚀 How to Run

1. Install dependencies:
   npm install

2. Add API key in .env file:
   API_KEY = your_api_key_here

3. Run:
   node index.js

---

## 📄 Output
Orders are updated in orders.json with:
- Status: Delayed
- Message: Apology message

---

## 📝 AI Log

Prompts used:

1. "Write JavaScript code to fetch multiple API calls in parallel using Promise.all"
2. "How to handle API errors in async JavaScript without stopping execution"
3. "Generate a polite delivery delay message based on weather conditions"

---

## 👨‍💻 Author
Sinaz Afrin
