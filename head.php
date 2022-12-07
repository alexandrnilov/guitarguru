<!DOCTYPE html>
<html class = "no-js" lang = "ru">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
		<link rel="stylesheet" type="text/css"  href = './CSS/top-line.css' media= 'all' >
		<link rel="stylesheet" type="text/css"  href = './CSS/style.css' media= 'all' >
		<link rel="stylesheet" type="text/css"  href = './CSS/main.css' media= 'all' >
		<link rel="stylesheet" type="text/css"  href = './CSS/<?php echo $template; ?>.css' media= 'all' >
		<link rel="stylesheet" type="text/css"  href = './CSS/footer.css' media= 'all' >
		<script src="./JS/jquery.js"></script>
		<script src="./JS/app.js" type="module"></script>
		<script src="./JS/main.js"></script>
		<?php if ($template == 'Post'): ?>
			<script src="./PLUGINS/POSTS/post-viewer.js" type="module"></script>
		<?php endif; ?>
		<title>GUITARGURU</title>
	</head>
	<?php
		if ($_COOKIE['user'] != ''){
			$id = $_COOKIE['user'];
		}
		else $id = 0;
		get_header($id);
	?>
	<body class="body">
		<?php
			get_menu($id);
			get_template($template,$id);
		?>
