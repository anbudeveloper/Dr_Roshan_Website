<?php
/**
 * Global Configuration File
 * Central place for all configuration constants
 */

// ===== Email Configuration =====
define('CLINIC_EMAIL', 'drgmshahul@gmail.com');
define('CLINIC_SECONDARY_EMAIL', 'drroshansdentalcaretrichy@gmail.com');
define('MARKETING_EMAIL', 'gobright.growth@gmail.com');

// ===== Site Configuration =====
define('SITE_NAME', "Dr. Roshan's Dental Care");
define('SITE_URL', 'https://drroshansdentalcare.com');
define('SITE_PHONE', '+91 94431 64101');
define('SITE_WHATSAPP', '919443164101');

// ===== Clinic Address =====
define('CLINIC_ADDRESS', '83, 80ft Road, Thillai Nagar, 10th Cross');
define('CLINIC_CITY', 'Trichy');
define('CLINIC_STATE', 'Tamil Nadu');
define('CLINIC_POSTAL', '620018');
define('CLINIC_COUNTRY', 'India');

// ===== Business Hours =====
define('HOURS_WEEKDAY', '9:00 AM - 8:00 PM');
define('HOURS_SATURDAY', '9:00 AM - 8:00 PM');
define('HOURS_SUNDAY', '10:00 AM - 2:00 PM');

// ===== Analytics Configuration =====
define('ANALYTICS_ENABLED', true);
define('ANALYTICS_LOG_DIR', __DIR__ . '/analytics/logs');
define('ANALYTICS_NOTIFY_EMAIL', true);
define('ANALYTICS_NOTIFY_RECIPIENT', CLINIC_SECONDARY_EMAIL);

// ===== Email Notifications =====
define('SEND_EMAIL_NOTIFICATIONS', false); // Set to true to enable email notifications

// ===== Social Media =====
define('SOCIAL_FACEBOOK', 'https://www.facebook.com/profile.php?id=61585815080475');
define('SOCIAL_INSTAGRAM', 'https://www.instagram.com/dr.roshansdentalcare/');
define('SOCIAL_WHATSAPP_URL', 'https://wa.me/' . SITE_WHATSAPP);

// ===== SEO Configuration =====
define('SEO_TITLE_SUFFIX', ' | Dr.Roshan\'s Dental Care');
define('SEO_DESCRIPTION_DEFAULT', 'Multi-speciality dental clinic in Trichy offering dental implants, root canal treatment, invisible aligners, smile designing, kids dentistry and ceramic teeth.');
define('SEO_KEYWORDS_DEFAULT', 'dentist Trichy, dental clinic, dental implants, root canal, orthodontics');

// ===== Development =====
define('DEBUG_MODE', false); // Set to true for development
define('DISPLAY_ERRORS', false);

// ===== Timezone =====
define('TIMEZONE', 'Asia/Kolkata');
date_default_timezone_set(TIMEZONE);

// ===== Session Configuration =====
session_start();

// ===== Helper Functions =====

/**
 * Get full clinic address
 */
function getFullAddress() {
    return CLINIC_ADDRESS . ", " . CLINIC_CITY . " - " . CLINIC_POSTAL . ", " . CLINIC_STATE . ", " . CLINIC_COUNTRY;
}

/**
 * Get clinic contact info
 */
function getContactInfo() {
    return [
        'email' => CLINIC_EMAIL,
        'phone' => SITE_PHONE,
        'address' => getFullAddress(),
        'whatsapp' => SOCIAL_WHATSAPP_URL,
    ];
}

/**
 * Format phone number
 */
function formatPhone($phone) {
    return htmlspecialchars($phone);
}

/**
 * Format email
 */
function formatEmail($email) {
    return htmlspecialchars($email);
}

/**
 * Get current year
 */
function getCurrentYear() {
    return date('Y');
}

/**
 * Log to file
 */
function logMessage($message, $type = 'info') {
    if (!DEBUG_MODE) return;

    $logFile = __DIR__ . '/logs/debug.log';
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[$timestamp] [$type] $message\n";

    if (!is_dir(dirname($logFile))) {
        mkdir(dirname($logFile), 0755, true);
    }

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
}

?>
