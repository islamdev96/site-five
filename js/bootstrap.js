/*global $, alert, console, jquery, var  */

$(function () {
   
    'use strict';
    
    // Show Color Option Div When Click On The Gear 
    
    $(".gear-check").click(function () {
       
        $(".color-option").fadeToggle();
    
    });
    // Change Theme Color On Click 
    
    var colorLi = $(".color-option ul li");
    
    colorLi
          .eq(0).css("backgroundColor", "#E41B17").end()
          .eq(2).css("backgroundColor", "#009AFF").end()
          .eq(1).css("backgroundColor", "#E426D5").end()
          .eq(3).css("backgroundColor", "#FFD500");
    
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
    // jgugug 
    

    var scrollButton = $("#scroll-top");  
    
    $(window).scroll(function () {
        
        console.log($(this).scrollOTop());
        
        if ($(this).scrollOTop() >= 700) {
            
            scrollButton.show();
        }
    });
    
    /// Loading Screen 


    $(window).on('load', function () {
    
    
    //Loading Elements 
    
    
        $(".loading-overlay").fadeOut(20000);
    
 
   
    });
    
   
});
