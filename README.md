🛒 Fake Store App - Exam 1
📱 Overview

Fake Store App is a mobile application built with React Native that simulates a simple e-commerce system.

Main Features

Local user registration (AsyncStorage)

Login using local storage

Products from FakeStore API

Category filtering

Product detail screen

Shopping cart

Subtotal and total calculation

🧱 Technologies Used

React Native

Redux Toolkit

Axios

React Navigation

AsyncStorage

⚙️ Installation

Open a terminal inside the project folder:

npm install
▶️ Run the App

Start Metro Bundler:

npx react-native start --reset-cache

Open another terminal and run:

npx react-native run-android
📱 Running on Physical Device (Optional)

Enable USB Debugging and run:

adb devices
adb reverse tcp:8081 tcp:8081
npx react-native run-android
🧭 App Flow
1️⃣ Register User

Enter username and password

Press Create User

Data is saved locally

2️⃣ Login

Enter saved credentials

Press Sign In

3️⃣ Products Screen

Products are loaded from FakeStore API

Category filter available

4️⃣ Product Detail

Shows product information

Add to cart button

5️⃣ Shopping Cart

Shows selected products

Calculates total

Remove or clear cart

🧠 State Management

Redux Toolkit manages:

productsSlice

cartSlice

💾 Local Storage

AsyncStorage stores:

User credentials

Local app data

Images
![WhatsApp Image 2026-03-01 at 5 21 47 PM](https://github.com/user-attachments/assets/454d8aa1-bb07-420e-a2e0-421719ef324e)
![WhatsApp Image 2026-03-01 at 5 21 54 PM](https://github.com/user-attachments/assets/db0fa9d3-ff65-4d2a-ad7b-cc86972e9954)
![WhatsApp Image 2026-03-01 at 5 22 06 PM](https://github.com/user-attachments/assets/fba7fca9-2a0a-4d50-b86d-b0e1126c08f0)
![WhatsApp Image 2026-03-01 at 5 22 13 PM](https://github.com/user-attachments/assets/8924f20e-b407-4f1d-8e2a-39fa2d76cb2a)
![WhatsApp Image 2026-03-01 at 5 22 36 PM](https://github.com/user-attachments/assets/70d1103c-d3c3-46a9-8059-eebea0adab82)
![WhatsApp Image 2026-03-01 at 5 22 54 PM](https://github.com/user-attachments/assets/7da9d79f-8b91-49e1-b4f3-d15f8c20409e)



👨‍💻 Author
Johel Santiago Mena Benavides 
