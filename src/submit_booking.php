<?php
// ===================================
// PHPMailer
// ===================================
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// ===================================
// DATABASE CONFIG
// ===================================
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "vehicle_service";

// ===================================
// CONNECT MYSQL (NO DATABASE)
// ===================================
$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    die("❌ MySQL connection failed: " . $conn->connect_error);
}

// ===================================
// AUTO CREATE DATABASE
// ===================================
$conn->query("
    CREATE DATABASE IF NOT EXISTS `$dbname`
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci
");

// ===================================
// USE DATABASE
// ===================================
$conn->select_db($dbname);

// ===================================
// AUTO CREATE TABLE (MATCHES YOUR LOGIC)
// ===================================
$conn->query("
    CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        phone VARCHAR(20),
        city VARCHAR(50),
        address TEXT,
        vehicle_type VARCHAR(50),
        vehicle_model VARCHAR(50),
        vehicle_number VARCHAR(50),
        service_type VARCHAR(50),
        problem TEXT,
        date DATE,
        time TIME,
        pickup_option VARCHAR(20),
        garage_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB
");

// ===================================
// YOUR ORIGINAL LOGIC (UNCHANGED)
// ===================================
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $city = $_POST['city'] ?? '';
    $address = $_POST['address'] ?? '';
    $vehicle_type = $_POST['vehicleType'] ?? '';
    $vehicle_model = $_POST['vehicleModel'] ?? '';
    $vehicle_number = $_POST['vehicleNumber'] ?? '';
    $service_type = $_POST['serviceType'] ?? '';
    $problem = $_POST['problem'] ?? '';
    $date = $_POST['date'] ?? '';
    $time = $_POST['time'] ?? '';
    $pickup_option = $_POST['pickupOption'] ?? '';
    $garage_id = intval($_POST['garageId'] ?? 0);

    $stmt = $conn->prepare("
        INSERT INTO bookings
        (name, email, phone, city, address, vehicle_type, vehicle_model, vehicle_number, service_type, problem, date, time, pickup_option, garage_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->bind_param(
        "sssssssssssssi",
        $name,
        $email,
        $phone,
        $city,
        $address,
        $vehicle_type,
        $vehicle_model,
        $vehicle_number,
        $service_type,
        $problem,
        $date,
        $time,
        $pickup_option,
        $garage_id
    );

    if ($stmt->execute()) {

        echo "✅ Booking confirmed!<br>";

        // ==========================
        // YOUR EMAIL LOGIC (SAME)
        // ==========================
        $garage_emails = [
            1 => 'XX@gmail.com',  // replace with your exmail
            2 => 'XX@gmail.com',  // replace with your exmail
            3 => 'XX@gmail.com',  // replace with your exmail
        ];

        if (isset($garage_emails[$garage_id])) {

            $mail = new PHPMailer(true);

            try {
                $mail->isSMTP();
                $mail->Host       = 'smtp.gmail.com';
                $mail->SMTPAuth   = true;
                $mail->Username   = 'XXX'; replace with your email
                $mail->Password   = 'XXXX XXXX XXXX XXXX'; // replace with your exmail 2 step verification password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
                $mail->Port       = 465;

                $mail->setFrom('XX@gmail.com', 'Garage Booking System');  // replace with your exmail
                $mail->addAddress($garage_emails[$garage_id]);

                $mail->isHTML(true);
                $mail->Subject = 'New Booking Received';
                $mail->Body = "
                    <h2>New Booking Details</h2>
                    <p><b>Name:</b> $name</p>
                    <p><b>Email:</b> $email</p>
                    <p><b>Phone:</b> $phone</p>
                    <p><b>City:</b> $city</p>
                    <p><b>Vehicle:</b> $vehicle_type - $vehicle_model ($vehicle_number)</p>
                    <p><b>Service:</b> $service_type</p>
                    <p><b>Problem:</b> $problem</p>
                    <p><b>Date & Time:</b> $date $time</p>
                    <p><b>Pickup:</b> $pickup_option</p>
                    <p><b>Address:</b> $address</p>
                ";

                $mail->send();
                echo "📧 Garage owner notified!";
            } catch (Exception $e) {
                echo "❌ Mail error: {$mail->ErrorInfo}";
            }

        } else {
            echo "❌ No email found for garage.";
        }

    } else {
        echo "❌ Insert error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
