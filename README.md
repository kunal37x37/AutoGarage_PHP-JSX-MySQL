# 🚗 AutoGarage – Online Vehicle Service & Booking System  
### (PHP Backend + React JSX + MySQL | XAMPP Based Project)

![License](https://img.shields.io/badge/License-MIT-green)
![Tech](https://img.shields.io/badge/Tech-PHP%20%7C%20React%20(JSX)%20%7C%20MySQL-blue)
![Status](https://img.shields.io/badge/Status-Completed-success)

AutoGarage is a **full-stack web application** developed using **PHP, MySQL, and React (JSX)** that allows users to book vehicle services online and receive confirmation emails.

This project is designed for **college projects, internships, and learning full-stack development** with a **simple setup and automatic database creation**.

---

## 📘 Project Overview

AutoGarage uses **different technologies for different responsibilities**:

### 🔧 Backend (PHP + MySQL)
Handled using **PHP**:
- User **Login / Signup / Logout**
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

## 🛠 Tech Stack

**Frontend**
- React.js (JSX)
- HTML5
- CSS3
- JavaScript

**Backend**
- PHP
- PHPMailer (SMTP)

**Database**
- MySQL (XAMPP)

**Tools**
- XAMPP
- VS Code
- GitHub

---

## 🖼 Screenshots


Display them here:

![Homepage](screenshots/homepage.png)
![Booking Page](screenshots/booking.png)
![Details Page](screenshots/details.png)

---

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
│   └── config.php
│
├── package.json
├── composer.json
├── .gitignore
├── README.md
└── LICENSE
```

## Installation & Setup
###1.Start XAMPP
- Start Apache
- Start MySQL
###2.Place Project in htdocs
C:\xampp\htdocs\AutoGarage_PHP-JSX-MySQL
