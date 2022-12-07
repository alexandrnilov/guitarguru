<header>
	<nav class="top-line conteiner">
		<div class="tp-left">
			<a href="#" class="logo">
				<img src="IMG/logo-icon.svg"/>
				<div>GUITAR<span>GURU</span></div>
			</a>
		</div>
		<div class="tp-center">
			<div style="width: 164px">
				<img src="IMG/telefon.svg"/>
				+7 (911) 912 25 67
			</div>
			<div style="width: 72px">
				<img src="IMG/telegram.svg"/>
				<img src="IMG/watsapp.svg"/>
			</div>
		</div>
		<div class="tp-right">
			<?php if ($id == 0): ?>
				<a id="log" class="log" href="#">Вход</a>
				<a id="sig" class="sig" href="#">Регистрация</a>
			<?php else: ?>
				<a id="exit" class="exit" href="#">Выход</a>
				<a id="acount" class="acount" href="#">Кабинет</a>
			<?php endif; ?>
			<svg class="mob" width="30" height="24" viewBox="0 0 30 24" fill="none" stroke="#1D4359" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 2.17644L28.9998 2" stroke-width="4"/>
			<path d="M1 12.0883L28.9998 11.9119" stroke-width="4"/>
			<path d="M1 22L28.9998 21.8236" stroke-width="4"/>
			</svg>
		</div>
	</nav>
</header>
