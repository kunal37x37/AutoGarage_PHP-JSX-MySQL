<?php
session_start();
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    
    // Validate inputs
    if (empty($email) || empty($password)) {
        $_SESSION['error'] = 'Please fill in all fields';
        header('Location: ../php/index.php');
        exit;
    }
    
    // Check user credentials
    $stmt = $pdo->prepare("SELECT id, username, password FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    
    if ($user && password_verify($password, $user['password'])) {
        // Login successful - set session variables
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        
        // Redirect to dashboard.html
        header('Location: homepage.html');
        exit;
    } else {
        // Login failed
        $_SESSION['error'] = 'Invalid email or password';
        header('Location: ../php/index.php');
        exit;
    }
}

header('Location: ../php/index.php');
exit;
?>