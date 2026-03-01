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



App runing:

Logiin:
![WhatsApp Image 2026-03-01 at 5 21 47 PM](https://github.com/user-attachments/assets/d5fda262-1b0e-4aff-a847-2f9d601a3e5c)
![WhatsApp Image 2026-03-01 at 5 21 54 PM](https://github.com/user-attachments/assets/1bfc1ceb-527b-4d79-a9d2-c597538b5287)

Products and categories:
![WhatsApp Image 2026-03-01 at 5 21 54 PM](https://github.com/user-attachments/assets/bfa64b0b-a646-4024-812e-654e717ba601)
![WhatsApp Image 2026-03-01 at 5 22 13 PM](https://github.com/user-attachments/assets/965fd48c-f485-47ac-980e-6b027f8e5843)

Cart and detail:
![WhatsApp Image 2026-03-01 at 5 22 36 PM](https://github.com/user-attachments/assets/1807f8a5-1c3e-447f-902a-37482090b5cf)
![WhatsApp Image 2026-03-01 at 5 22 54 PM](https://github.com/user-attachments/assets/b6a46f9e-2910-4671-a789-e271745863ab)






