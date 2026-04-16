<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

$name    = trim($input['name']    ?? '');
$phone   = trim($input['phone']   ?? '');
$purpose = trim($input['purpose'] ?? '');
$budget  = trim($input['budget']  ?? '');
$date    = date('Y-m-d H:i:s');

if (!$name || !$phone) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Name and phone are required']);
    exit;
}

// ── Save to CSV ────────────────────────────────────────────────────────────────
$csvFile = __DIR__ . '/leads.csv';
$isNew   = !file_exists($csvFile);
$fh      = fopen($csvFile, 'a');
if ($fh) {
    if ($isNew) {
        fputcsv($fh, ['Greenz by Danube – Leads']);
        fputcsv($fh, ['Date', 'Name', 'Phone', 'Purpose', 'Budget']);
    }
    fputcsv($fh, [$date, $name, $phone, $purpose, $budget]);
    fclose($fh);
}

// ── Send email via hosting mail ────────────────────────────────────────────────
$to      = 'noreply@iivre.com';
$subject = 'New Lead – Greenz by Danube';

$body  = "New lead received from the Greenz by Danube landing page.\n\n";
$body .= "Date     : {$date}\n";
$body .= "Name     : {$name}\n";
$body .= "Phone    : {$phone}\n";
$body .= "Purpose  : {$purpose}\n";
$body .= "Budget   : {$budget}\n\n";
$body .= "Reply directly to this email to contact the lead.\n";

$headers  = "From: noreply@iivre.com\r\n";
$headers .= "Cc: socialmedia@iivre.com\r\n";
$headers .= "Reply-To: {$phone}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

echo json_encode([
    'success'  => true,
    'mailSent' => $sent,
    'csv'      => $isNew ? 'created' : 'updated',
]);
