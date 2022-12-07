var form = '<div class="log_form_cont">'+
'<img id="close_logForm" class="close" src="./IMG/crest-dark.svg">'+
'<h1>Войдите в свой профиль</h1>'+
'<div id="warning"></div>'+
'<form class="log_form">'+
    '<input type="email" name="email" id="email" required placeholder="Электронная почта">'+
    '<input type="password" name="pass" id="pass" required placeholder="Введите пароль">'+
    '<button id="btn_log" type="submit" class="btn">'+
      'ВОЙТИ'+
      '<img src="./IMG/btn-right.svg"/>'+
    '</button>'+
'</form>'+
'<a href="#">Не помню пароль</a>'+
'<p>Еще нет профиля? <a href="#" class="sig">Зарегистрируйтесь</a></p>'+
'</div>';

var addLogForm = function(){
  console.log('addLogForm');
  $('.blur-div').prepend(form);
  $('.blur-div').fadeIn(100,function(){
    $('.log_form_cont').fadeIn(300);
  });
};

var delLogForm = function(del){
  console.log('delLogForm');
  console.log(del);
  if ($('.log_form_cont').length > 0){
    $('.log_form_cont').fadeOut(200,function(){
      if (del == true) {
        $('.blur-div').fadeOut(100,function(){
          $('.log_form_cont').remove();
        });
      }
      else $('.log_form_cont').remove();
    });
  }
};
export const logForm = {
  "addLogForm": addLogForm,
  "delLogForm": delLogForm
};
