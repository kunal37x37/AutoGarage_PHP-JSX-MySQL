<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Common fields for both user types
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $user_type = $_POST['user_type'];
    
    // Validate common inputs
    if (empty($username) || empty($email) || empty($password)) {
        header('Location: index.php?error=Please fill in all required fields');
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: index.php?error=Invalid email format');
        exit;
    }
    
    if (strlen($password) < 8) {
        header('Location: index.php?error=Password must be at least 8 characters');
        exit;
    }
    
    // Check if email already exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$email]);
    
    if ($stmt->rowCount() > 0) {
        header('Location: index.php?error=Email already exists');
        exit;
    }
    
    // Handle file uploads
    $profile_image = null;
    if ($user_type === 'user' && isset($_FILES['profile_image']) && $_FILES['profile_image']['error'] === UPLOAD_ERR_OK) {
        $upload_dir = 'uploads/profiles/';
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0755, true);
        }
        
        $file_ext = pathinfo($_FILES['profile_image']['name'], PATHINFO_EXTENSION);
        $profile_image = $upload_dir . uniqid() . '.' . $file_ext;
        
        if (!move_uploaded_file($_FILES['profile_image']['tmp_name'], $profile_image)) {
            header('Location: index.php?error=Failed to upload profile image');
            exit;
        }
    }
    
    // Hash password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert user into database
    $pdo->beginTransaction();
    
    try {
        $stmt = $pdo->prepare("INSERT INTO users (user_type, username, email, password, phone, profile_image) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([ 
            $user_type,
            $username,
            $email,
            $hashedPassword,
            $user_type === 'user' ? $_POST['phone'] : null,
            $profile_image
        ]);
        
        $user_id = $pdo->lastInsertId();
        
        // If garage owner, insert garage details
        if ($user_type === 'garage_owner') {
            $garage_image = null;
            if (isset($_FILES['garage_image']) && $_FILES['garage_image']['error'] === UPLOAD_ERR_OK) {
                $upload_dir = 'uploads/garages/';
                if (!is_dir($upload_dir)) {
                    mkdir($upload_dir, 0755, true);
                }
                
                $file_ext = pathinfo($_FILES['garage_image']['name'], PATHINFO_EXTENSION);
                $garage_image = $upload_dir . uniqid() . '.' . $file_ext;
                
                if (!move_uploaded_file($_FILES['garage_image']['tmp_name'], $garage_image)) {
                    throw new Exception("Failed to upload garage image");
                }
            }
            
            $stmt = $pdo->prepare("INSERT INTO garage_owners 
                (user_id, garage_name, garage_location, garage_city, garage_pincode, garage_contact, services_offered, opening_time, closing_time, garage_image) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([
                $user_id,
                $_POST['garage_name'],
                $_POST['garage_location'],
                $_POST['garage_city'],
                $_POST['garage_pincode'],
                $_POST['garage_contact'],
                $_POST['services_offered'],
                $_POST['opening_time'],
                $_POST['closing_time'],
                $garage_image
            ]);
        }
        
        $pdo->commit();
        header('Location: index.php?error=Account created successfully. Please login.');
        exit;
    } catch (Exception $e) {
        $pdo->rollBack();
        // Clean up uploaded files if any
        if (isset($profile_image)) @unlink($profile_image);
        if (isset($garage_image)) @unlink($garage_image);
        header('Location: index.php?error=' . urlencode('Registration failed: ' . $e->getMessage()));
        exit;
    }
}

header('Location: index.php');
exit;
?>
