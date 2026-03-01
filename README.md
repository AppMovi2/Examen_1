# Fake Store App - Exam 1

## 📱 App Summary

Fake Store App is a mobile application developed with **React Native** that simulates a simple e-commerce system.

The application allows users to:

- Create a local user account
- Login using local storage (AsyncStorage)
- View products from FakeStore API
- Filter products by categories
- Open product detail screen
- Add products to a shopping cart
- Calculate subtotal and total prices
- Remove products or clear the cart

The project uses Redux Toolkit for state management and Axios for API requests.

---

## 🧱 Technologies Used

- React Native
- Redux Toolkit
- Axios
- React Navigation
- AsyncStorage

---

## ⚙️ Installation

Open a terminal in the project folder and run:

```bash
npm install

##▶️ Run the Application
Start Metro Bundler:
npx react-native start --reset-cache
Open another terminal and run:
npx react-native run-android

##📲 Running on Physical Device (Optional)
Enable Developer Options on Android


Enable USB Debugging


Connect device with USB


Run:


adb devices
adb reverse tcp:8081 tcp:8081
npx react-native run-android

##🧭 How the App Works
1. User Registration
User enters username and password.


Data is stored locally using AsyncStorage.


2. Login
App validates credentials saved locally.


If correct, user enters the app.


3. Products Screen
Products are loaded from FakeStore API.


Shows product name and price.


Products can be filtered by category.


4. Product Detail
Displays product information.


Allows adding product to cart.


5. Shopping Cart
Displays selected products.


Shows quantity, subtotal and total.


Allows removing items or clearing cart.


Payment button is simulated.



##🧠 State Management
Redux Toolkit is used to manage:
Products and categories


Shopping cart state


Main slices:
productsSlice


cartSlice



##💾 Local Storage
AsyncStorage is used to save:
User credentials


Local app data



