#!/usr/local/bin/php
<?php

$fileNames=array(); //instantiate the array 
$result = array();

$dir = "products/";
foreach (glob("products/*.txt") as $filename) {
    $f1 = substr($filename, 10);
    $f2 = substr($f1, 0, strlen($f1) - 4);
    array_push($fileNames, $f2);
  //  $f2= substr($f1, -3) 
 //   echo "$f2 size " . filesize($filename) . "\n";
}


sort($fileNames); // fileNames = [1,2,...], need to add "p" in the front and .txt at the end to get a full filename
$n = count($fileNames);
for ($i=0; $i < $n; $i++) {
  //  echo "$i p$fileNames[$i]\n";
  
    $fp = fopen("products/p$fileNames[$i].txt", "r");
    if ($fp) {
        $prod = new stdClass();
        $line1 = fgets($fp);
        $line1 = trim($line1);
        $line2 = fgets($fp);
        $line2 = trim($line2);
     //   echo "\tL1: $line1\n";
     //   echo "\tL2: $line2\n";
        fclose($fp);
     //   echo "$i";
        $prod->fileName = "p$fileNames[$i]";
        $prod->description = $line1;
        $prod->id = $line2;
        array_push($result, $prod);
    } else {
        echo "Failed in openning products/p$fileNames[$i].txt\n";
    }
   
}
echo json_encode($result);
exit(200);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id, name, description FROM projects";
$result = $conn->query($sql);



if ($result->num_rows > 0) {
    // output data of each row
    // echo "{\"records\":[";
    while($row = $result->fetch_assoc()) {
        $proj = new stdClass(); // create a new odbc_fetch_object
        $proj->id = $row["id"];
        $proj->name = $row["name"];
        $proj->description = $row["description"];
        array_push($list,$proj);

        // echo "{";
        // echo "\"id\": \" " . $row["id"] . "\",";
        // echo "\"name\":\" " . $row["name"] . "\",";
        // echo "\"description\":\" " . $row["description"]. "\"";
        // echo "}, "; 
    }
    // echo "]}"; 
    echo json_encode($list);
} else {
    echo "0 results";
}
$conn->close();
exit(200);
?>
