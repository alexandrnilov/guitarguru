<?php
  setcookie('user',$user['id'],time()+3600,'/','guitarguru.ru',true);
  header('Location: /');
  die();
?>
