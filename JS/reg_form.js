var form = '<div class="reg_form_cont">'+
'<img id="close_regForm" class="close" src="./IMG/crest-dark.svg">'+
'<h1>Создать профиль</h1>'+
'<div id="warning"></div>'+
'<form class="reg_form">'+
    '<input type="email" name="email" id="email" required placeholder="Электронная почта">'+
    '<input type="password" name="pass" id="pass" required placeholder="Введите пароль">'+
    '<input type="password" name="pass2" id="pass2" required placeholder="Повторите пароль">'+
    '<button id="btn_reg" type="submit" class="btn">'+
      'ЗАРЕГИСТРИРОВАТЬСЯ'+
      '<img src="./IMG/btn-right.svg"/>'+
    '</button>'+
    '<p>Нажимая на кнопку, я соглашаюсь с условиями <a href="#">пользовательского соглашения</a></p>'+
'</form>'+
'<p>Уже есть профиль? <a href="#" class="log">Войдите</a></p>'+
'</div>';
var addRegForm = function(){
  $('.blur-div').prepend(form);
  $('.blur-div').fadeIn(100,function(){
    $('.reg_form_cont').fadeIn(300);
  });
};
var delRegForm = function(del){
  console.log('delRegForm');
  console.log(del);
  if ($('.reg_form_cont').length > 0){
    $('.reg_form_cont').fadeOut(200,function(){
      if (del == true) {
        $('.blur-div').fadeOut(100,function(){
          $('.reg_form_cont').remove();
        });
      }
      else $('.reg_form_cont').remove();
    });
  }
};
var registration = function(th){
  console.log('Начинаю Регистрацию');
  console.log($(th).serialize());
  function beforeReg(){$('#warning').text('Подождите...');}
  function successReg(success){
    var jsonData = JSON.parse(success);
    var w = jsonData.success;
    console.log('Ответ получен'+w);
    switch(w) {
      case 0:
        $('#warning').text('Регистраций прошла успешно');
        location.reload(); break;

      case 1: $('#warning').text('Заполните пустые поля'); break;
      case 2: $('#warning').text('Не коректный email'); break;
      case 3: $('#warning').text('Пороли не совпадают'); break;
      case 4: $('#warning').text('Некоректный пароль'); break;
      case 5: $('#warning').text('Пользователь с таким email уже зарегистрирован'); break;
    }
  }
  $.ajax({
    type: 'POST',
    url: '../PHP/reg.php',
    data: $(th).serialize(),
    dataType: 'html',
    beforeSend: beforeReg,
    success: successReg
  });
}
export const regForm = {
  "addRegForm": addRegForm,
  "delRegForm": delRegForm,
  "registration": registration
};
