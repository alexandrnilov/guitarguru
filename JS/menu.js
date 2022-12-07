var menuShow = function(){
var left = $('.top-line').offset().left+'px',
      top = $('.top-line').height()+'px',
      width = 276;

$('.mob-lu').css({'height':($(window).height()-75)+'px'});
//console.log($('.mob-menu').height()+'px');
if ($('.conteiner').width()<=476){width = 188;}
if ($('.conteiner').width()>476 && $('.conteiner').width()<=666){width = 257;}
if ($('.conteiner').width()>666){width = $('.tp-left').width()-42;}
$('.blur-div').fadeIn(100,function(){
  $('.mob-menu').css({'left' : left, 'top' : top});
    $('.mob-menu').show(0,function(){
      $('.mob-menu').animate({'width':width+'px'},100);
    });
  });
  $('.mob').toggleClass('active-mob');
  $(window).on("resize",function(){
    $('.mob-lu').css({'height':($(window).height()-75)+'px'});
    left = $('.top-line').offset().left+'px';
    top = $('.top-line').height()+'px';
    width = 276;
    if ($('.conteiner').width()<=476){width = 188;}
    if ($('.conteiner').width()>476 && $('.conteiner').width()<=666){width = 257;}
    if ($('.conteiner').width()>666){width = $('.tp-left').width()-42;}
    $('.mob-menu').css({'left' : left, 'top' : top});
    $('.mob-menu').css({'width':width+'px'});
  });
};
var menuHide = function(del){
  $('.mob-menu').animate({'width':'0'},100,function(){
    $('.mob-menu').hide(0,function(){
      if (del == true) $('.blur-div').fadeOut(100,function(){
         $('.mob').toggleClass('active-mob');
       });
      else $('.mob').toggleClass('active-mob');
    });
  });
  $(window).off("orientationchange");
};
export const menu = {
  "menuShow" : menuShow,
  "menuHide" : menuHide
};
