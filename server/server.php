<?php
use Workerman\Worker;
  
require_once __DIR__ . '/../vendor/autoload.php';

$wsWorker = new Worker('websocket://0.0.0.0:2346');
$wsWorker->count = 4;

$user = 'root';
$pass = 'root';
$dbname = 'quiz';
$dbh = new PDO('mysql:host=localhost;dbname=quiz', $user, $pass);

foreach($dbh->query('SELECT * from room') as $row) {
  print_r($row);
}

$clients = [];
$id = [];

$wsWorker->onConnect = function ($connection) use ($clients, $wsWorker, $dbh) {
  global $id;
  echo "New connection \n";
  echo 'last: ' . $id[0];
  array_push($id, mt_rand(0, 100000));
  // $id = mt_rand(0, 100000);
  echo " new: ". $id[-1] ." \n";
  var_dump($id);

  $dbh->query("INSERT INTO room (userId) VALUES ('". $id[0] ."')");
  foreach ($wsWorker->connections as $client) {
    $client->send(json_encode($clients));
  }
};

$wsWorker->onMessage = function ($connection, $data) use ($wsWorker){
  foreach ($wsWorker->connections as $client) {
    $client->send($data);
  }
};




$wsWorker->onClose = function ($connection) use ($wsWorker, $dbh) {
  global $id;
  var_dump($wsWorker->connections);

  echo "delete: ". $id[0] ." \n";
  $dbh->query("DELETE FROM room WHERE userId = '". $id[0] ."'");
  array_pop($id);
  echo "Connection closed \n";
};


Worker::runAll();