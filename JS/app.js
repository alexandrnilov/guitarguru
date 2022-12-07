import {forms} from './all_forms.js';
$( document ).ready(function() {
  $('.mob, #close_menu').click(function(){
    var res = true;
    if($('.log_form_cont').length > 0) {forms.clearForms([forms.delLogForm],false); res = false;}
    else if($('.reg_form_cont').length > 0) {forms.clearForms([forms.delRegForm],false); res = false;}
    else if($('.mainForm').length > 0) {forms.clearForms([forms.delMainForm],false);res = false;}
    else console.log('Все формы закрыты');
    if ($('.mob').hasClass('active-mob')){
      forms.menuHide(res);
    }
    else forms.menuShow();
  });

  $('.log, .sig, .first-btn').click(function(e){
    var clear = [];
    if ($('.mob').hasClass('active-mob')){forms.menuHide(false);}
      switch(e.target.classList[0]){
        case 'log': forms.clearForms([forms.delRegForm,forms.delMainForm],false); forms.addLogForm(); break;
        case 'sig': forms.clearForms([forms.delLogForm,forms.delMainForm],false); forms.addRegForm(); break;
        case 'first-btn': forms.clearForms([forms.delRegForm,forms.delLogForm],false); forms.addMainForm(); break;
      }
      return false;
  });

  $('.blur-div').click(function(e){
    if ($(e.target).attr('class') == 'blur-div'){
      forms.clearForms([forms.delRegForm,forms.delMainForm,forms.delLogForm],true);
      if ($('.mob').hasClass('active-mob')){
        forms.menuHide(true);
      }
    }
  });
  $('.blur-div').on('click',
    '#close_logForm, #close_regForm, #close_mainForm, #btn_reg, #btn_log,'+
    ' .log, .sig, .first-btn',
    function(e){
    var target = e.currentTarget;
    switch($(target).attr('id')){
      case 'close_logForm': forms.delLogForm(true); break;
      case 'close_regForm': forms.delRegForm(true); break;
      case 'close_mainForm': forms.delMainForm(true); break;
      case 'btn_reg': forms.registration($('.reg_form')); break;
      case 'btn_log': forms.login($('.log_form')); break;
    }
    var clear = [];
    if ($('.mob').hasClass('active-mob')){forms.menuHide(false);}
    switch(e.target.classList[0]){
      case 'log': forms.clearForms([forms.delRegForm,forms.delMainForm],false); forms.addLogForm(); break;
      case 'sig': forms.clearForms([forms.delLogForm,forms.delMainForm],false); forms.addRegForm(); break;
      case 'first-btn': forms.clearForms([forms.delRegForm,forms.delLogForm],false); forms.addMainForm(); break;
    }
    return false;
	});
});
