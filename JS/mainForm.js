var form = '<div class="mainForm">'+
  '<img id="close_mainForm" class="close" src="./IMG/crest-dark.svg">'+
  '<h1>Запишись на бесплатное занятие!</h1>'+
  '<form class="main" action="" method="post">'+
    '<input id="user-name" type="text" name="user-name" placeholder="Имя" required>'+
    '<input id="user-number" type="tel" name="user-number" placeholder="Телефон" required>'+
    '<button id="main-form" type="submit" class="btn">'+
      'ОСТАВИТЬ ЗАЯВКУ'+
      '<img src="./IMG/btn-right.svg"/>'+
    '</button>'+
    '<p>Оставляя заявку, вы принимаете <a href="#">Условия соглашения</a></p>'+
  '</form>'+
'</div>';

var addMainForm = function(){
  $('.blur-div').prepend(form);
  $('.blur-div').fadeIn(100,function(){
    $('.mainForm').fadeIn(300);
  });
}
var delMainForm = function(del){
  console.log('delMainForm');
  console.log(del);
  if ($('.mainForm').length > 0){
    $('.mainForm').fadeOut(200,function(){
      if (del == true) {
        $('.blur-div').fadeOut(100,function(){
          $('.mainForm').remove();
        });
      }
      else $('.mainForm').remove();
      });
    }
}
export const mainForm = {
  "addMainForm": addMainForm,
  "delMainForm": delMainForm
};
