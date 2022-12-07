<?php
//Определение типа устройства
require_once './LIBS/PHP/Mobile_Detect.php';
$detect = new Mobile_Detect;

//$mysql = new mysqli('localhost', 'root', 'root',  'reg-bd');
//$mysql->query("INSERT INTO `users` (`id`, `login`, `pass`, `name`) VALUES (NULL, 'MisterY', '', '')");
//$result = $mysql->query("SELECT `login` FROM `users`");
//var_dump($result);
//$mysql->close();
function get_head($template){
	require_once('./head.php');
}
function get_header($id){
	require_once('./header.php');
}
function get_template($template,$id){
	require_once('./TEMPLATE/'.$template.'.php');
}
function get_footer($id){
	require_once('./footer.php');
}
function get_menu($id){
	require_once('./PLUGINS/MENU/menu.php');
}
