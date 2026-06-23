<?php
/**
 * Test Email Script
 * Sends a test email to verify the PHPMailer system is working
 */

require_once 'email-config.php';

// Test form data
$testData = [
    'form_type' => 'contact',
    'name' => 'Test User - System Test',
    'phone' => '+91 9443164101',
    'email' => 'test@example.com',
    'treatment' => 'Dental Implants',
    'date' => date('Y-m-d'),
    'message' => 'This is a test email to verify the PHPMailer system is working correctly.',
];

echo "🧪 SENDING TEST EMAIL...\n";
echo "================================\n\n";

try {
    // Send test email
    $result = handleFormSubmission($testData);

    if ($result['success']) {
        echo "✅ TEST EMAIL SENT SUCCESSFULLY!\n\n";
        echo "Details:\n";
        echo "- Sender: " . GMAIL_USERNAME . "\n";
        echo "- Recipient: " . CLINIC_EMAIL . "\n";
        echo "- BCC: " . BACKUP_EMAIL . "\n";
        echo "- Subject: 📬 New Contact Form Message - Test User - System Test\n";
        echo "- Form Type: contact\n";
        echo "- Timestamp: " . date('Y-m-d H:i:s') . "\n\n";
        echo "✅ Check your email inbox at:\n";
        echo "   - " . CLINIC_EMAIL . " (Primary)\n";
        echo "   - " . BACKUP_EMAIL . " (Backup/BCC)\n\n";
        echo "Email should arrive within 5 seconds!\n";
    } else {
        echo "❌ FAILED TO SEND TEST EMAIL\n\n";
        echo "Error: " . ($result['error'] ?? 'Unknown error') . "\n";
    }
} catch (Exception $e) {
    echo "❌ EXCEPTION OCCURRED:\n";
    echo "Error: " . $e->getMessage() . "\n";
}

echo "\n================================\n";
?>
