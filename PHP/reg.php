<?php
/*
Коды ошибок регистрации $result
0 нет ошибок
1 не заполнены поля
2 не коректный email
3 повторный пароль не верный
4 слишком простой пароль
5 пользователь с такой почтой уже зарегистрирован
*/
$result = 0;
  if (isset($_POST['email']) && isset($_POST['pass']) && isset($_POST['pass2'])){
    $email = $_POST['email'];
    if (filter_var($email,FILTER_VALIDATE_EMAIL) == true){
      $email = filter_var(trim($email),FILTER_SANITIZE_STRING);
    }
    else $result = 2;
    if ($_POST['pass'] != $_POST['pass2']) $result = 3;
    else {
      $pass = filter_var(trim($_POST['pass']),FILTER_SANITIZE_STRING);
      if (mb_strlen($pass)<2 || mb_strlen($pass)>20) $result = 4;
    }

    $mysql = new mysqli('localhost', 'ukulel2g_gg', '!3QweAsdZc',  'ukulel2g_gg');
    $check = $mysql->query("SELECT * FROM `users_bd` WHERE `email` = '$email'");
    $user = $check->fetch_assoc();
    if (count($user) != 0){$result = 5;}
    $mysql->close();
  }
  else $result = 1;


  if ($result == 0){
    $pass = md5($pass.'vuvouyv5768uvbu');
    $hash = md5($email . time());
    $mysql = new mysqli('localhost', 'ukulel2g_gg', '!3QweAsdZc',  'ukulel2g_gg');
    $mysql->query("INSERT INTO `users_bd` (`email`, `password`) VALUES ('$email', '$pass')");
    $mysql->close();

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "To: <$email>\r\n";
    $headers .= "From: <mail@example.com>\r\n";
        // Сообщение для Email
    $message = '
        <html>
        <head>
        <title>Подтвердите Email</title>
        </head>
        <body>
        <p>Что бы подтвердить Email, перейдите по <a href="http://guitarguru.ru/confirmed.php?hash=' . $hash . '">ссылка</a></p>
        </body>
        </html>
        ';
    echo json_encode(array('success' => $result));
  }
  else {
    echo json_encode(array('success' => $result));
  }
?>
