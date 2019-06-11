$(function (){
   $('body > header .nav_one .nav_bar .nav_bar_item').mouseover(function (){
       $('body > header .nav_one .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show();
       
       $('body > header .nav_one .nav_bar .nav_bar_item .mega_menu:visible').hide();
       $(this).find('.mega_menu').show();
   });
   
   $('body > header .nav_one .nav_bar .nav_bar_item .sub_menu .sub_menu_item').mouseover(function (){
       $('body > header .nav_one .nav_bar .nav_bar_item .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show();
   });
   
   $('#menu_icon').click(function (){
       if($(window).width() <= 950){
           $('body > header .nav_one .nav_bar').fadeIn("slow"); 
       }
   });
   
   $('body > header .nav_one .nav_bar > header img').click(function (){
       if($(window).width() <= 950){
            $('body > header .nav_one .nav_bar').fadeOut("slow"); 
       }
   });
});
