# 🚗 AutoGarage – Online Vehicle Service & Booking System  
### (PHP Backend + React JSX + MySQL | XAMPP Based Project)

![License](https://img.shields.io/badge/License-MIT-green)
![Tech](https://img.shields.io/badge/Tech-PHP%20%7C%20React%20(JSX)%20%7C%20MySQL-blue)
![Status](https://img.shields.io/badge/Status-Completed-success)

AutoGarage is a **full-stack web application** developed using **PHP, MySQL, and React (JSX)** that allows users to book vehicle services online and garage Owner receive confirmation emails.

This project is designed for **college projects, internships, and learning full-stack development** with a **simple setup and automatic database creation**.

---

## 📘 Project Overview

AutoGarage uses **different technologies for different responsibilities**:

### 🔧 Backend (PHP + MySQL)
Handled using **PHP**:
- User **Login / Signup / Logout/booking backend**
- Booking logic & form handling
- Database operations (Insert / Fetch)
- Automatic database & table creation
- Email sending using **PHPMailer**

### 🎨 Frontend
- **React (JSX)** → Booking page & Details page  
- **HTML + CSS + JavaScript** → Homepage & static UI pages  

This hybrid approach keeps the project **simple, structured, and practical**.

---

## 🎯 Key Features

- User authentication using PHP
- Vehicle service booking system
- Booking & details pages built in React (JSX)
- Homepage built using HTML, CSS & JavaScript
- Booking data stored in MySQL (XAMPP)
- Automatic database creation using `config.php`
- Booking confirmation email using PHPMailer
- Clean & beginner-friendly project structure

---

## 🧩 System Architecture
```txt
HTML / React (JSX)
        ↓
PHP Backend (API)
        ↓
MySQL Database
        ↓
Email Service (PHPMailer)
```

---
## 🖼 Screenshots


Display them here:

| Home Page | login  |
|------------|----------------|
| <img width="1521" height="835" alt="image" src="https://github.com/user-attachments/assets/09750e01-c0cc-4573-a4ba-1a550d8790dc" /> | <img width="819" height="622" alt="image" src="https://github.com/user-attachments/assets/c665b46a-81a6-4d29-a6a8-454095db65fe" />|

| user sign up | garage owner signup  |
|------------|----------------|
| <img width="790" height="779" alt="image" src="https://github.com/user-attachments/assets/623bbf01-bce9-4576-9a73-46b7392c0ca3" />| <img width="1021" height="850" alt="image" src="https://github.com/user-attachments/assets/f7b05183-86bf-4beb-b22d-53509f7444e2" />|


## 🎥 Demo Video

📂 Create a folder named `/demo` and add video file:


▶ **[Watch Project Demo Video](demo/autogarage_demo.mp4)**

---

## 📁 Project Folder Structure

```text
AutoGarage_PHP-JSX-MySQL/
│
├── public/
├── src/
│   ├── css/
│   │   └── main.css
│   │
│   ├── js/
│   │   ├── booking.jsx
│   │   └── details.jsx
│   │
│   ├── phpmailer/
│   ├── vendor/
│   │
│   ├── booking.html
│   ├── details.html
│   ├── homepage.html
│   │
│   ├── index.php
│   ├── login.php
│   ├── signup.php
│   ├── logout.php
│   ├── submit_booking.php
│   ├── config.php
│   ├── index.php
|   ├── index.css
|   ├── server.js
|   └── setuptest.js
|   
├── package.json
├── composer.json
├── .gitignore
├── README.md
└── LICENSE
```

## Installation & Setup
### 1.Start XAMPP
- Start Apache
- Start MySQL
- 
### 2.Auto Create Database

```text
C:\xampp\htdocs\AutoGarage_PHP-JSX-MySQL
```

### 3.Place Project in htdocs
- Open in browser:
```text
http://localhost/AutoGarage_PHP-JSX-MySQL/src/config.php
```
- ✔ Database & tables will be created automatically.

### 4.Run Project
```text
http://localhost/AutoGarage_PHP-JSX-MySQL/src/index.php
```
- 🎉 Project is now live locally.

### 📧 Email Functionality
- Booking confirmation email sent to user
- Implemented using PHPMailer
- Uses Gmail SMTP with App Password
- Email is triggered after successful booking

## 🚀 Future Enhancements
- Online payment gateway
- Admin dashboard
- Booking status tracking
- JWT based authentication
- Deployment on live server

## 📜 License
- This project is licensed under the MIT License.

## 👨‍💻 Author
- Patel Kunal Kiranbhai
- Computer Science & Engineering Student
- GitHub: https://github.com/kunal37x37
- Project Link:https://github.com/kunal37x37/AutoGarage_PHP-JSX-MySQL
