<?php
/* ===================================================
   UNIVERSAL DATABASE CONFIG (ALL MACHINES)
=================================================== */

$dbHosts = ['127.0.0.1', 'localhost'];
$ports   = ['3306', '3307'];
$username = 'root';
$password = '';
$dbname   = 'vehicle_service';

$pdo = null;
$connected = false;

/* -----------------------------------------------
   TRY ALL HOST + PORT COMBINATIONS
------------------------------------------------ */
foreach ($dbHosts as $host) {
    foreach ($ports as $port) {
        try {
            $pdo = new PDO(
                "mysql:host=$host;port=$port;charset=utf8mb4",
                $username,
                $password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_TIMEOUT => 2
                ]
            );
            $connected = true;
            break 2;
        } catch (PDOException $e) {
            // try next
        }
    }
}

if (!$connected) {
    die("❌ Database connection failed on all hosts/ports.");
}

/* -----------------------------------------------
   AUTO CREATE DATABASE
------------------------------------------------ */
$pdo->exec("
    CREATE DATABASE IF NOT EXISTS `$dbname`
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci
");

$pdo->exec("USE `$dbname`");

/* -----------------------------------------------
   CREATE USERS TABLE
------------------------------------------------ */
$pdo->exec("
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_type ENUM('user','garage_owner') NOT NULL,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(15) DEFAULT NULL,
        profile_image VARCHAR(255) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB
");

/* -----------------------------------------------
   CREATE GARAGE OWNERS TABLE
------------------------------------------------ */
$pdo->exec("
    CREATE TABLE IF NOT EXISTS garage_owners (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        garage_name VARCHAR(100) NOT NULL,
        garage_location TEXT NOT NULL,
        garage_city VARCHAR(50) NOT NULL,
        garage_pincode VARCHAR(10) NOT NULL,
        garage_contact VARCHAR(15) NOT NULL,
        services_offered TEXT NOT NULL,
        opening_time TIME NOT NULL,
        closing_time TIME NOT NULL,
        garage_image VARCHAR(255) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
    ) ENGINE=InnoDB
");

echo "✅ UNIVERSAL DB CONFIG WORKING";
?>
