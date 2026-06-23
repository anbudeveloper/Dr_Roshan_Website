<?php
/**
 * Email Configuration with PHPMailer via Gmail SMTP
 * This file handles email sending for form submissions
 */

// Load PHPMailer from Composer vendor
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Gmail SMTP Configuration
define('GMAIL_USERNAME', 'drroshansdentalcaretrichy@gmail.com');
define('GMAIL_APP_PASSWORD', 'mkot klnh rjah cwtc'); // App-specific password
define('GMAIL_SMTP_HOST', 'smtp.gmail.com');
define('GMAIL_SMTP_PORT', 587);
define('GMAIL_SMTP_ENCRYPTION', 'tls');

// Email Recipients
define('CLINIC_EMAIL', 'gobright.growth@gmail.com');
define('CLINIC_NAME', "Dr. Roshan's Dental Care");
define('BACKUP_EMAIL', 'drroshansdentalcaretrichy@gmail.com');

// Email templates
function getEmailTemplate($type, $data) {
    switch($type) {
        case 'appointment':
            return getAppointmentEmailTemplate($data);
        case 'contact':
            return getContactEmailTemplate($data);
        default:
            return null;
    }
}

function getAppointmentEmailTemplate($data) {
    $html = '<html style="font-family: Arial, sans-serif;">';
    $html .= '<head><meta charset="UTF-8"></head>';
    $html .= '<body style="margin: 0; padding: 0; background: #f5f5f5;">';
    $html .= '<div style="max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">';

    $html .= '<div style="padding: 20px; background: linear-gradient(135deg, #071b57 0%, #0d2a7a 100%); border-radius: 6px; margin-bottom: 30px; text-align: center;">';
    $html .= '<h2 style="color: white; margin: 0; font-size: 24px;">Appointment Request</h2>';
    $html .= '</div>';

    $html .= '<div style="padding: 20px; background: #f9f9f9; border-left: 4px solid #ff2638; border-radius: 4px; margin-bottom: 20px;">';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Name:</strong> ' . htmlspecialchars($data['name']) . '</p>';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Phone:</strong> ' . htmlspecialchars($data['phone']) . '</p>';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Email:</strong> ' . htmlspecialchars($data['email'] ?? 'Not provided') . '</p>';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Treatment:</strong> ' . htmlspecialchars($data['treatment'] ?? 'Not specified') . '</p>';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Preferred Date:</strong> ' . htmlspecialchars($data['date'] ?? 'Not specified') . '</p>';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Submission Time:</strong> ' . date('Y-m-d H:i:s') . '</p>';
    $html .= '</div>';

    $html .= '<p style="color: #999; font-size: 11px; margin: 20px 0; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">';
    $html .= 'This is an automated email from Dr. Roshan\'s Dental Care appointment system.';
    $html .= '</p>';
    $html .= '</div></body></html>';

    return $html;
}

function getContactEmailTemplate($data) {
    $html = '<html style="font-family: Arial, sans-serif;">';
    $html .= '<head><meta charset="UTF-8"></head>';
    $html .= '<body style="margin: 0; padding: 0; background: #f5f5f5;">';
    $html .= '<div style="max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">';

    $html .= '<div style="padding: 20px; background: linear-gradient(135deg, #071b57 0%, #0d2a7a 100%); border-radius: 6px; margin-bottom: 30px; text-align: center;">';
    $html .= '<h2 style="color: white; margin: 0; font-size: 24px;">Contact Form Message</h2>';
    $html .= '</div>';

    $html .= '<div style="padding: 20px; background: #f9f9f9; border-left: 4px solid #ff2638; border-radius: 4px; margin-bottom: 20px;">';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Name:</strong> ' . htmlspecialchars($data['name']) . '</p>';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Phone:</strong> ' . htmlspecialchars($data['phone']) . '</p>';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Email:</strong> ' . htmlspecialchars($data['email']) . '</p>';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Treatment Interest:</strong> ' . htmlspecialchars($data['treatment'] ?? 'Not specified') . '</p>';
    $html .= '<p style="margin: 8px 0;"><strong style="color: #071b57;">Submission Time:</strong> ' . date('Y-m-d H:i:s') . '</p>';
    $html .= '</div>';

    if (!empty($data['message'])) {
        $html .= '<div style="padding: 20px; background: #f0f8ff; border-left: 4px solid #071b57; border-radius: 4px; margin-bottom: 20px;">';
        $html .= '<h3 style="color: #071b57; margin-top: 0; margin-bottom: 10px;">Message:</h3>';
        $html .= '<p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">';
        $html .= htmlspecialchars($data['message']);
        $html .= '</p>';
        $html .= '</div>';
    }

    $html .= '<p style="color: #999; font-size: 11px; margin: 20px 0; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">';
    $html .= 'This is an automated email from Dr. Roshan\'s Dental Care contact form system.';
    $html .= '</p>';
    $html .= '</div></body></html>';

    return $html;
}

/**
 * Send email using Gmail SMTP
 *
 * @param string $to Recipient email address
 * @param string $subject Email subject
 * @param string $body Email body (HTML)
 * @param array $replyTo Optional reply-to address
 * @return bool Success status
 */
function sendEmailViaGmail($to, $subject, $body, $replyTo = null) {
    // Primary: use PHPMailer with Gmail SMTP (most reliable)
    if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        $result = sendEmailViaPhpMailer($to, $subject, $body, $replyTo);
        if ($result) {
            return true;
        }
    }

    // Fallback: try using PHP mail() function if PHPMailer fails
    if (function_exists('mail')) {
        $result = sendEmailViaPHP($to, $subject, $body, $replyTo);
        if ($result) {
            return true;
        }
    }

    // If all else fails, return false
    return false;
}

/**
 * Send email using PHP mail() function
 * Note: This may not work if SMTP isn't configured on server
 */
function sendEmailViaPHP($to, $subject, $body, $replyTo = null) {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . GMAIL_USERNAME . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    if ($replyTo) {
        $headers .= "Reply-To: " . $replyTo . "\r\n";
    }

    return @mail($to, $subject, $body, $headers);
}

/**
 * Send email using PHPMailer (if installed)
 */
function sendEmailViaPhpMailer($to, $subject, $body, $replyTo = null) {
    try {
        $mail = new \PHPMailer\PHPMailer\PHPMailer(true);

        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = GMAIL_SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = GMAIL_USERNAME;
        $mail->Password = GMAIL_APP_PASSWORD;
        $mail->SMTPSecure = GMAIL_SMTP_ENCRYPTION;
        $mail->Port = GMAIL_SMTP_PORT;

        // Email details
        $mail->setFrom(GMAIL_USERNAME, CLINIC_NAME);
        $mail->addAddress($to);
        $mail->addBCC(BACKUP_EMAIL);

        if ($replyTo) {
            $mail->addReplyTo($replyTo);
        }

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $body;

        return $mail->send();
    } catch (Exception $e) {
        error_log("PHPMailer Error: " . $e->getMessage());
        return false;
    }
}

/**
 * Handle form submission and send email
 */
function handleFormSubmission($formData) {
    $formType = $formData['form_type'] ?? 'unknown';

    // Determine email subject
    if ($formType === 'appointment') {
        $subject = '🗓️ New Appointment Request - ' . htmlspecialchars($formData['name'] ?? 'Unknown');
    } else if ($formType === 'contact') {
        $subject = '📬 New Contact Form Message - ' . htmlspecialchars($formData['name'] ?? 'Unknown');
    } else {
        $subject = 'New Form Submission';
    }

    // Get email template
    $emailBody = getEmailTemplate($formType, $formData);

    if (!$emailBody) {
        return [
            'success' => false,
            'error' => 'Invalid form type'
        ];
    }

    // Send email
    $replyTo = $formData['email'] ?? null;
    $result = sendEmailViaGmail(CLINIC_EMAIL, $subject, $emailBody, $replyTo);

    if ($result) {
        return [
            'success' => true,
            'message' => 'Email sent successfully'
        ];
    } else {
        return [
            'success' => false,
            'error' => 'Failed to send email'
        ];
    }
}

?>
