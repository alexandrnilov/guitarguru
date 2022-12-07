<?php
$result = 0;
if (isset($_POST['email']) && $_POST['email'] != '' && isset($_POST['pass']) && $_POST['pass'] != ''){
  $email = $_POST['email'];
  $pass = $_POST['pass'];
  if (filter_var($email,FILTER_VALIDATE_EMAIL) == true){
    $email = filter_var(trim($email),FILTER_SANITIZE_STRING);
  }
  $pass = filter_var(trim($_POST['pass']),FILTER_SANITIZE_STRING);
  $pass = md5($pass.'vuvouyv5768uvbu');
}
else {$result = 1;}
if ($result == 0){
  $mysql = new mysqli('localhost', 'ukulel2g_gg', '!3QweAsdZc',  'ukulel2g_gg');
  $check = $mysql->query("SELECT * FROM `users_bd` WHERE (`email` = '$email' AND `password` = '$pass')");
  $user = $check->fetch_assoc();
  if (count($user) == 0){$result = 2;}
  else {setcookie('user',$user['id'],time()+3600,'/','guitarguru.ru',true);}
  $mysql->close();
}
echo json_encode(array('success' => $result));
?>
