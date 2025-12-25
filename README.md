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

| landing page Page | login  |
|------------|----------------|
| <img width="1521" height="835" alt="image" src="https://github.com/user-attachments/assets/09750e01-c0cc-4573-a4ba-1a550d8790dc" /> | <img width="819" height="622" alt="image" src="https://github.com/user-attachments/assets/c665b46a-81a6-4d29-a6a8-454095db65fe" />|

| user sign up | garage owner signup  |
|------------|----------------|
| <img width="790" height="779" alt="image" src="https://github.com/user-attachments/assets/623bbf01-bce9-4576-9a73-46b7392c0ca3" />| <img width="1021" height="850" alt="image" src="https://github.com/user-attachments/assets/f7b05183-86bf-4beb-b22d-53509f7444e2" />|

| Home page | Home page |
|------------|----------------|
| <img width="1919" height="878" alt="image" src="https://github.com/user-attachments/assets/9eede962-fd16-4baa-9e7e-c456af660dba" />| <img width="1919" height="875" alt="image" src="https://github.com/user-attachments/assets/3cc21532-e382-47aa-8bee-e81907dc33b6" />|

| details page | Booking page |
|------------|----------------|
| <img width="1378" height="880" alt="image" src="https://github.com/user-attachments/assets/c118137c-aebb-4820-b77e-54c57741a7a8" />| <img width="720" height="873" alt="image" src="https://github.com/user-attachments/assets/cfd66c49-6b65-4e9d-9aba-97e6fcdc2b00" />|

| configuration Booking | Send Email to Garge Owner page  |
|------------|----------------|
| <img width="1051" height="729" alt="image" src="https://github.com/user-attachments/assets/ed593472-9e50-405d-adf3-2792b1e525cc" />| <img width="665" height="335" alt="image" src="https://github.com/user-attachments/assets/e716aa46-d5a4-4f81-8320-015375a1f71d" />|

### Database screenshot
| database strucher | user database  | booking database |
|------------|----------------|-----------------|
|<img width="250" height="178" alt="image" src="https://github.com/user-attachments/assets/925bc6b5-381f-44aa-a6c3-549bdbaf85fd" />| <img width="1597" height="306" alt="image" src="https://github.com/user-attachments/assets/53815d01-61cb-49cb-8b86-08c128c733b1" />|<img width="1679" height="393" alt="image" src="https://github.com/user-attachments/assets/1f2f0f7c-4a78-47d4-85f7-cd060f3769bd" />|

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
