$(document).ready(function() {
   $('.menubtn').click(function(){
   $('.subnav').toggle();
   $('.menubtnicon').toggleClass("selected");
   });
   
   //collapsible buttons
   $('.controller').click(function(){
	   $(this).toggleClass('active');
	   $(this).parent('.button-container').find('.collapsible').toggle();
   });
   
   //find a dealer/financial solutions
	if($(window).width() < 752){
		$('#loadfirst').removeClass('active');
	}
		
   var dealeronload = $('#dealeronload').html();
   $('#dynamic-display').html(dealeronload);
   
   $('.control').click(function(){
	   var newhtml = $(this).parent('.threecol li').find('.twocol-container').html();
	   $('#dynamic-display').html(newhtml);
		   if($(window).width() > 751){
			   $('.control').removeClass('active');
			   $(this).toggleClass('active');
		   }
		   if($(window).width() < 752){
			   $(this).parent('.threecol li').find('.twocol-container').toggle();
			   $(this).toggleClass('active');
			   $(this).parent('li').toggleClass('active');
		   }
   });
   
});
 
 $(window).bind('resize', function(){


 if($(window).width() > 751){
       $('#loadfirst').removeClass('active');
	   $('.twocol-container').hide();
	   $('.control').removeClass('active');
    }

/*  if($(window).width() < 752){
       $('#loadfirst').removeClass('active');
	   $('.control').removeClass('active');
    }*/
}); 

$(window).bind('resize', function(){
	
 if ($(window).width() > 752) {
       $('.subnav').show();
	}
	
if ($(window).width() < 751) {
       $('.subnav').hide();
	  $('.menubtnicon').removeClass('selected');
	}		

});

$(function(){
     $(".img-swap").hover(
          function(){this.src = this.src.replace("_off","_on");},
          function(){this.src = this.src.replace("_on","_off");
     });
});
