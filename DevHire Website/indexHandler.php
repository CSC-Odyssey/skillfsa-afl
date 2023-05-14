
<?php
include("../DevHire Website/serverconnectionHandler.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = json_decode(file_get_contents('php://input'), true);
    $newResults = $jsonData['results'];

    // Open the result.json file for reading
    $file = '../pdf/result.json';
    $handle = fopen($file, 'r') or die('Cannot open file:  '.$file);

    // Read the existing data from the file
    $existingData = json_decode(fread($handle, filesize($file)), true);
    fclose($handle);

    // Merge the existing data with the new results array
    $mergedResults = array_merge($existingData['results'], $newResults);
    $uniqueResults = [];

    // Remove duplicates and lowercase skillset values
    foreach ($mergedResults as $result) {
        foreach ($mergedResults as $result) {
        $result['skillset'] = array_map('strtolower', $result['skillset']);
        $result['skillset'] = array_unique($result['skillset']);
        sort($result['skillset']);

        if (!in_array($result, $uniqueResults)) {
            array_push($uniqueResults, $result);
        }
    }

    // Open the result.json file for writing
    $handle = fopen($file, 'w') or die('Cannot open file:  '.$file);

    // Write the JSON data to the file
    fwrite($handle, json_encode(['results' => $uniqueResults]));

    // Close the file handle
    fclose($handle);
}
}?>