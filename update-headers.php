<?php
/**
 * Batch Update Script - Add Meta Tags to All PHP Files
 * This script adds proper SEO metadata to all PHP pages
 */

// Include header configuration
require_once 'includes/header.php';

// List of all PHP files to update (main pages and blogs/treatments)
$phpFiles = [
    'index.php',
    'about.php',
    'contact.php',
    'gallery.php',
    'blog/blog.php',
    'treatments/treatments.php',
    'treatments/dental-implants.php',
    'treatments/root-canal.php',
    'treatments/invisible-aligners.php',
    'treatments/smile-designing.php',
    'treatments/kids-dentistry.php',
    'treatments/zirconia-ceramic-teeth.php',
];

// Blog posts configuration
$blogPosts = [];
for ($i = 1; $i <= 9; $i++) {
    $blogPosts["blog/blog-$i.php"] = [
        'title' => "Blog Post $i | Dr.Roshan's Dental Care",
        'description' => "Read expert dental article and tips on oral health and dental treatments.",
        'keywords' => "dental blog, oral health, dental care tips, dental treatment information",
    ];
}

// Merge all files
$allFiles = array_merge($phpFiles, array_keys($blogPosts));

echo "Updating PHP files with SEO metadata...\n";
echo "================================================\n\n";

$updated = 0;
$errors = 0;

foreach ($allFiles as $file) {
    $filePath = __DIR__ . '/' . $file;

    if (!file_exists($filePath)) {
        echo "❌ NOT FOUND: $file\n";
        $errors++;
        continue;
    }

    // Read file content
    $content = file_get_contents($filePath);

    // Check if already updated
    if (strpos($content, '<?php require_once') !== false) {
        echo "⏭️  ALREADY UPDATED: $file\n";
        continue;
    }

    // Insert PHP require at the beginning
    $newContent = preg_replace(
        '/^(<!doctype html>)/i',
        '<?php require_once \'' . (strpos($file, '/') ? '../' : '') . 'includes/header.php\'; ?>' . PHP_EOL . '$1',
        $content,
        1
    );

    // Write back to file
    if (file_put_contents($filePath, $newContent)) {
        echo "✅ UPDATED: $file\n";
        $updated++;
    } else {
        echo "❌ ERROR: $file (write failed)\n";
        $errors++;
    }
}

echo "\n================================================\n";
echo "Update Complete!\n";
echo "Updated: $updated\n";
echo "Errors: $errors\n";
echo "================================================\n";

?>
