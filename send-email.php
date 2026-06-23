<?php
/**
 * Email Sending Endpoint
 * Receives form data from JavaScript and sends email
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(json_encode(['status' => 'ok']));
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['error' => 'Method not allowed']));
}

// Include email configuration
require_once 'email-config.php';

// Get JSON data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    exit(json_encode(['error' => 'Invalid JSON']));
}

// Validate required fields
$required = ['form_type', 'name', 'phone'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        exit(json_encode([
            'error' => "Missing required field: $field"
        ]));
    }
}

// Sanitize data
$formData = [
    'form_type' => htmlspecialchars($data['form_type']),
    'name' => htmlspecialchars($data['name']),
    'phone' => htmlspecialchars($data['phone']),
    'email' => htmlspecialchars($data['email'] ?? ''),
    'treatment' => htmlspecialchars($data['treatment'] ?? 'Not specified'),
    'date' => htmlspecialchars($data['date'] ?? 'Not specified'),
    'message' => htmlspecialchars($data['message'] ?? ''),
];

try {
    // Send email
    $result = handleFormSubmission($formData);

    if ($result['success']) {
        // Log successful submission
        error_log("Email sent successfully for: " . $formData['name']);

        // Also track to analytics if available
        if (file_exists(__DIR__ . '/analytics/track.php')) {
            $analyticsData = array_merge($formData, ['timestamp' => date('Y-m-d H:i:s')]);
            @file_put_contents(__DIR__ . '/analytics/logs/forms_' . date('Y-m-d') . '.log',
                json_encode($analyticsData) . PHP_EOL, FILE_APPEND);
        }

        http_response_code(200);
        exit(json_encode([
            'success' => true,
            'message' => 'Form submitted successfully. We will contact you soon!'
        ]));
    } else {
        http_response_code(500);
        error_log("Email send failed: " . ($result['error'] ?? 'Unknown error'));
        exit(json_encode([
            'success' => false,
            'error' => $result['error'] ?? 'Failed to send email'
        ]));
    }
} catch (Exception $e) {
    error_log("Email submission error: " . $e->getMessage());
    http_response_code(500);
    exit(json_encode([
        'success' => false,
        'error' => 'An error occurred. Please try again later. Details: ' . $e->getMessage()
    ]));
}

?>
