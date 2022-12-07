import {logForm} from './log_form.js';
import {regForm} from './reg_form.js';
import {mainForm} from './mainForm.js';
import {menu} from './menu.js';
var clearForms = function(clear,del) {
  if (clear != null){
    for(var i = 0; i < clear.length; i++ ){
      clear[i](del);
    }
  }
};
export const forms = {
  "clearForms": clearForms,
  "addLogForm": function() {logForm.addLogForm();},
  "delLogForm": function(del){logForm.delLogForm(del)},
  "addRegForm": function(){regForm.addRegForm()},
  "delRegForm": function(del){regForm.delRegForm(del)},
  "addMainForm": function(){mainForm.addMainForm()},
  "delMainForm": function(del){mainForm.delMainForm(del)},
  "menuShow": function () {menu.menuShow();},
  "menuHide": function (del) {menu.menuHide(del);},
  "registration": function (th) {regForm.registration(th);},
  "login": function (th) {logForm.login(th);}
}
