# 🛒 Fake Store App - Exam 1

## 📱 Overview

Fake Store App is a mobile application built with **React Native** that simulates a basic e-commerce experience.

The application allows users to:

- Create a local user account
- Login using local storage (AsyncStorage)
- View products from FakeStore API
- Filter products by category
- View product details
- Add products to a shopping cart
- Calculate subtotal and total
- Remove products or clear the cart

---

## 🧱 Technologies Used

- React Native
- Redux Toolkit
- Axios
- React Navigation
- AsyncStorage

---

## ⚙️ Installation

Open a terminal inside the project folder and run:

```bash
npm install
▶️ Run the Application

Start Metro Bundler:

npx react-native start --reset-cache

Open another terminal and run:

npx react-native run-android
📱 Running on Physical Device (Optional)

Enable Developer Options on Android

Enable USB Debugging

Connect device via USB

Run:

adb devices
adb reverse tcp:8081 tcp:8081
npx react-native run-android
🧭 App Flow (How it Works)
🔐 1. Register User

Enter username and password.

Press Create User.

Data is saved locally using AsyncStorage.

🔓 2. Login

Enter saved credentials.

Press Sign In.

User enters the main app.

🛍️ 3. Products Screen

Products are loaded from FakeStore API.

Shows title and price.

Products can be filtered by categories.

📦 4. Product Detail

Shows product information.

Allows adding product to cart.

🛒 5. Shopping Cart

Displays selected products.

Calculates subtotal and total.

Allows removing items or clearing cart.

Payment button is simulated.

🧠 State Management

Redux Toolkit is used to manage:

Products state (productsSlice)

Cart state (cartSlice)

💾 Local Storage

AsyncStorage is used to store:

User credentials

Local app data

📸 Screenshots

Create a folder named:

screenshots/

Add images like:

login.png

products.png

detail.png

cart.png

Example:

👨‍💻 Author

Student Name
