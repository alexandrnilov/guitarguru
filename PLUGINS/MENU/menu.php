<div class="blur-div">
	<div class="mob-menu">
		<img id="close_menu" class="close" src="./IMG/crest-dark.svg">
		<lu class="mob-lu">
			<h1>Меню</h1>
			<li class="li-mob">
				<div class="mob-item1">
					<a href="./curses.php">Курсы</a>
					<img src="./IMG/btn-right-dark.svg">
				</div>
				<div class="mob-item2">
					<a href="./curses.php#guitar">Гитара</a>
					<a href="./curses.php#ukulele">Укулеле</a>
					<a href="./curses.php#rangement">Аранжировка</a>
				</div>
			</li>
			<li class="li-mob">
				<div class="mob-item1">
					<a href="./price.php">Прайс</a>
					<img src="./IMG/btn-right-dark.svg">
				</div>
				<div class="mob-item2">
					<a href="./price.php#">На дому</a>
					<a href="./price.php#">Онлайн</a>
					<a href="./price.php#">Заочное</a>
				</div>
			</li>
			<li class="li-mob">
				<div class="mob-item1">
					<a href="#">Расписание</a>
				</div>
			</li>
			<li class="li-mob">
				<div class="mob-item1">
					<a href="#">Блог</a>
				</div>
			</li>
			<li class="li-mob">
				<div class="mob-item1">
					<a href="#">Библиотека</a>
					<img src="./IMG/btn-right-dark.svg">
				</div>
				<div class="mob-item2">
					<a href="#">Гитара</a>
					<a href="#">Укулеле</a>
				</div>
			</li>
			<div class="line"></div>
			<li class="li-mob">
				<div class="mob-item1">
					<?php if($id == 0): ?>
						<a id="log-m" class="log" href="#">Вход</a>
					<?php else: ?>
						<a id="exit-m" class="exit" href="#">Выход</a>
					<?php endif; ?>
				</div>
			</li>
			<li class="li-mob">
				<div class="mob-item1">
					<?php if($id == 0): ?>
						<a id="sig-m" class="sig" href="#">Регистрация</a>
					<?php else: ?>
						<a id="acount-m" class="acount" href="#">Кабинет</a>
					<?php endif; ?>
				</div>
			</li>
		</lu>
	</div>
</div>
