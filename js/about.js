$(document).ready(function(){
	
$("div.am1").click(function(){
	
	$(this).nextAll(".am11").slideToggle();
});	
$("div.am2").click(function(){
	
	$(this).nextAll(".am21").slideToggle();
});	
$("div.am3").click(function(){
	
	$(this).nextAll(".am31,.am32,.am33").slideToggle();
});	
$("div.am4").click(function(){
	
	$(this).prevAll(".am41").slideToggle();
});		
});