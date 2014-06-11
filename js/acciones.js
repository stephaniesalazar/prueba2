// JavaScript Document

$(document).ready(function() {
	document.addEventListener("deviceready", function(){
	   $('#B1').tap(function(){
		    navigator.notification.beep(3);
	   }); //TAP B1
	   
	   
	   $('#B2').tap(function(){
		    navigator.notification.vibrate(500);
	   }); //TAP B2
	   
	}); //device ready
});//ready