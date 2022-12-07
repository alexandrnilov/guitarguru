$( document ).ready(function() {
	$('.mob-item1>img').click(function(e){
		var pr = e.currentTarget.parentElement,
				nx = $(pr).next()[0];
		$(nx).slideToggle(300);
		$(pr).toggleClass('act-m');
		return false;
	});

	$('.open-div').click(function(e){
	var th = e.currentTarget,
			pr =$(th).parents('.ab-item');
	$(pr).toggleClass('act');
	$(th).toggleClass('open-div close-div');
	$(pr).contents('p').slideToggle(200);
	return false;
});

/*LOGIN FORM*/

	$('.exit').click(function(){
			$.ajax({
				method: 'POST',
				url: './PHP/exit.php',
				success: function (success) {
					location.reload();
				}
			});
			return false;
	});
	/*$('body').on('submit','.log_form',function(e){
		console.log('Начинаю Вход');
		$.ajax({
    	type: 'POST',
      url: './PHP/check.php',
      data: $(this).serialize(),
			dataType: 'html',
			beforeSend: function () {
				$('#warning').text('Подождите...');
			},
      success: function (success) {
				console.log('Вход выполнен');
				var jsonData = JSON.parse(success);
				var w = jsonData.success;
				console.log('Ответ получен'+w);
				if (w == 0) location.reload();
				else $('#warning').text('Неверный логин или пароль');
      }
    });
		return false;
	});
	$('body').on('submit','.reg_form',function(e){
		console.log('Начинаю регистрацию');
		e.preventDefault();
		function beforeReg(){$('#warning').text('Подождите...');}
		function successReg(success){
			var jsonData = JSON.parse(success);
			var w = jsonData.success;
			console.log('Ответ получен'+w);
			switch(w) {
				case 0: {
					$('#warning').text('Регистраций прошла успешно');
					location.reload();
				}
				case 1: {$('#warning').text('Заполните пустые поля');}
				case 2: {$('#warning').text('Не коректный email');}
				case 3: {$('#warning').text('Пороли не совпадают');}
				case 4: {$('#warning').text('Некоректный пароль');}
				case 5: {$('#warning').text('Пользователь с таким email уже зарегистрирован');}
			}
		}
		$.ajax({
    	type: 'POST',
      url: './PHP/reg.php',
      data: $(this).serialize(),
		  dataType: 'html',
			beforeSend: beforeReg,
      success: successReg
    });
		return false;
	});*/

});
