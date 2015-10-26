<?php

/**
 * Set the callback variable to what jQuery sends over
 */
$callback = (string)$_GET['callback'];
if (!$callback) $callback = 'callback';

$prov_id = $_REQUEST['prov_id'];
if(!$prov_id) $prov_id = 10;
/**
 * The $filename parameter determines what file to load from local source
 */
$filename = $_GET['filename'];
$json = file_get_contents("../data/".$filename);
$rules_arr = json_decode($json,true);	// transform json to array

foreach ($rules_arr as $key => $val)
{
    $rs[$val['prov_code']] = $val;
}
// Send the output
$json = json_encode($rs[$prov_id]);

header('Content-Type: text/javascript');
echo "$callback($json);";

?>