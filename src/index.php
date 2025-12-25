<?php
session_start();
require_once 'config.php';

if (isset($_SESSION['user_id'])) {
    header('Location: dashboard.html');
    exit;
}

$error = '';
if (isset($_GET['error'])) {
    $error = htmlspecialchars($_GET['error']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vehicle Service Booking</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="logo">
                <i class="fas fa-car"></i>
                <span>AutoCare</span>
            </div>
            <nav class="main-nav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>

    <main class="main-content">
        <div class="hero-section">
            <div class="container">
                <div class="hero-text">
                    <h1>Your Vehicle Deserves the Best Care</h1>
                    <p>Book professional garage services with just a few clicks</p>
                    <a href="#signup" class="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>

        <div class="auth-container" id="login">
            <div class="container">
                <div class="auth-box">
                    <h2>Login to Your Account</h2>
                    <?php if ($error): ?>
                        <div class="alert alert-danger"><?= $error ?></div>
                    <?php endif; ?>
                    
                    <form action="login.php" method="POST" class="auth-form">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                    
                    <div class="auth-footer">
                        <p>Don't have an account? <a href="#signup" class="toggle-signup">Sign up</a></p>
                        <p><a href="#forgot-password">Forgot password?</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="auth-container" id="signup" style="display: none;">
            <div class="container">
                <div class="auth-box">
                    <h2>Create Your Account</h2>
                    <div class="signup-options">
                        <button class="btn btn-outline active" id="user-signup-btn">I'm a Vehicle Owner</button>
                        <button class="btn btn-outline" id="garage-signup-btn">I'm a Garage Owner</button>
                    </div>
                    
                    <!-- User Signup Form -->
                    <form id="user-signup-form" action="signup.php" method="POST" enctype="multipart/form-data" class="auth-form">
                        <input type="hidden" name="user_type" value="user">
                        <div class="form-group">
                            <label for="user-username">Full Name</label>
                            <input type="text" id="user-username" name="username" required>
                        </div>
                        <div class="form-group">
                            <label for="user-email">Email Address</label>
                            <input type="email" id="user-email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="user-phone">Contact Number</label>
                            <input type="tel" id="user-phone" name="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="user-password">Password</label>
                            <input type="password" id="user-password" name="password" required>
                        </div>
                        <div class="form-group">
                            <label for="user-image">Profile Image</label>
                            <input type="file" id="user-image" name="profile_image" accept="image/*">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Register as User</button>
                    </form>
                    
                    <!-- Garage Owner Signup Form -->
                    <form id="garage-signup-form" action="signup.php" method="POST" enctype="multipart/form-data" class="auth-form" style="display: none;">
                        <input type="hidden" name="user_type" value="garage_owner">
                        <div class="form-group">
                            <label for="garage-username">Your Name</label>
                            <input type="text" id="garage-username" name="username" required>
                        </div>
                        <div class="form-group">
                            <label for="garage-email">Email Address</label>
                            <input type="email" id="garage-email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="garage-name">Garage Name</label>
                            <input type="text" id="garage-name" name="garage_name" required>
                        </div>
                        <div class="form-group">
                            <label for="garage-location">Garage Location</label>
                            <input type="text" id="garage-location" name="garage_location" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="garage-city">City</label>
                                <input type="text" id="garage-city" name="garage_city" required>
                            </div>
                            <div class="form-group">
                                <label for="garage-pincode">Pincode</label>
                                <input type="text" id="garage-pincode" name="garage_pincode" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="garage-contact">Contact Number</label>
                            <input type="tel" id="garage-contact" name="garage_contact" required>
                        </div>
                        <div class="form-group">
                            <label for="garage-services">Services Offered</label>
                            <textarea id="garage-services" name="services_offered" rows="3" required></textarea>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="opening-time">Opening Time</label>
                                <input type="time" id="opening-time" name="opening_time" required>
                            </div>
                            <div class="form-group">
                                <label for="closing-time">Closing Time</label>
                                <input type="time" id="closing-time" name="closing_time" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="garage-image">Garage Image</label>
                            <input type="file" id="garage-image" name="garage_image" accept="image/*">
                        </div>
                        <div class="form-group">
                            <label for="garage-password">Password</label>
                            <input type="password" id="garage-password" name="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Register as Garage Owner</button>
                    </form>
                    
                    <div class="auth-footer">
                        <p>Already have an account? <a href="#login" class="toggle-login">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>AutoCare</h3>
                    <p>Your trusted partner for vehicle maintenance and repairs.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Garage Street, Auto City</p>
                    <p><i class="fas fa-phone"></i> +1 234 567 890</p>
                    <p><i class="fas fa-envelope"></i> info@autocare.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 AutoCare. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Toggle between login and signup
        document.querySelectorAll('.toggle-signup').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById('login').style.display = 'none';
                document.getElementById('signup').style.display = 'block';
                window.scrollTo(0, document.getElementById('signup').offsetTop);
            });
        });

        document.querySelectorAll('.toggle-login').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById('signup').style.display = 'none';
                document.getElementById('login').style.display = 'block';
                window.scrollTo(0, document.getElementById('login').offsetTop);
            });
        });

        // Toggle between user and garage owner signup
        document.getElementById('user-signup-btn').addEventListener('click', function() {
            this.classList.add('active');
            document.getElementById('garage-signup-btn').classList.remove('active');
            document.getElementById('user-signup-form').style.display = 'block';
            document.getElementById('garage-signup-form').style.display = 'none';
        });

        document.getElementById('garage-signup-btn').addEventListener('click', function() {
            this.classList.add('active');
            document.getElementById('user-signup-btn').classList.remove('active');
            document.getElementById('garage-signup-form').style.display = 'block';
            document.getElementById('user-signup-form').style.display = 'none';
        });
    </script>
</body>
</html>