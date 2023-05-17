<?php
include("../DevHire Website/serverconnectionHandler.php");

$json_string = file_get_contents('../pdf/result.json');
$data = json_decode($json_string, true);

foreach ($data['results'] as $item) {
  $email = $item['email'];
  $skillset = $item['skillset'];

}
?>