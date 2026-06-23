<?php
/**
 * Code Minification Script
 * Minifies CSS, JavaScript, and HTML to hide code and improve loading
 */

error_reporting(0);
ini_set('display_errors', 0);

function minifyJS($code) {
    // Remove comments
    $code = preg_replace('!/\*[^*]*\*+(?:[^/*][^*]*\*+)*/!', '', $code);
    $code = preg_replace('!//.*?(\r\n|\n|$)!', '', $code);

    // Remove whitespace
    $code = preg_replace('/\s+/', ' ', $code);
    $code = preg_replace('/\s*([{}()[\];:,>+\-*\/=])\s*/', '$1', $code);

    return trim($code);
}

function minifyCSS($code) {
    // Remove comments
    $code = preg_replace('!/\*[^*]*\*+(?:[^/*][^*]*\*+)*/!', '', $code);

    // Remove unnecessary spaces
    $code = preg_replace('/\s+/', ' ', $code);
    $code = preg_replace('/\s*([{}:;,>+~])\s*/', '$1', $code);
    $code = preg_replace('/;}/', '}', $code);

    return trim($code);
}

function minifyHTML($code) {
    // Remove HTML comments
    $code = preg_replace('/<!--.*?-->/s', '', $code);

    // Remove whitespace between tags
    $code = preg_replace('/>\s+</s', '><', $code);
    $code = preg_replace('/\n\s+/', '', $code);

    return trim($code);
}

// Get file type
$type = isset($_GET['type']) ? $_GET['type'] : 'js';
$file = isset($_GET['file']) ? $_GET['file'] : '';

if (empty($file)) {
    http_response_code(404);
    exit('File not found');
}

// Security: prevent directory traversal
$file = basename($file);
$filepath = __DIR__ . '/' . $file;

if ($type === 'css') {
    $filepath = __DIR__ . '/assets/' . $file;
} elseif ($type === 'js') {
    $filepath = __DIR__ . '/' . $file;
}

if (!file_exists($filepath)) {
    http_response_code(404);
    exit('File not found');
}

$content = file_get_contents($filepath);

if ($type === 'css') {
    header('Content-Type: text/css; charset=UTF-8');
    header('Cache-Control: public, max-age=31536000');
    echo minifyCSS($content);
} elseif ($type === 'js') {
    header('Content-Type: application/javascript; charset=UTF-8');
    header('Cache-Control: public, max-age=31536000');
    echo minifyJS($content);
} else {
    header('Content-Type: text/html; charset=UTF-8');
    echo minifyHTML($content);
}
?>
