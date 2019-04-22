$(document).ready(function(){
	
var winh= $(window).height();
var navh = $(".navbar").innerHeight();
var sliderh = $(".slider,.carousel-item").height(winh-navh);	
/*---------------------start shuffel images-----------------------------------------------*/	
$(".ulc").click(function(){
$(this).addClass('active').siblings().removeClass('active');		
});	
/*-------------------------------------------------------------*/
$(".tec").click(function(){
	
$(".tecno").css('opacity',1);
$(".doc,.adab,.deen,.sience,.eco").css('opacity',.1);
});
/*------------------------------------------------------------*/
/*-------------------------------------------------------------*/
$(".dc").click(function(){
	
$(".doc").css('opacity',1);
$(".tecno,.adab,.deen,.sience,.eco").css('opacity',.1);
});
/*------------------------------------------------------------*/
/*------------------------------------------------------------*/
$(".sie").click(function(){
	
$(".sience").css('opacity',1);
$(".doc,.adab,.deen,.tecno,.eco").css('opacity',.1);
});
/*-------------------------------------------------------------*/
/*--------------------------------------------------------------*/
$(".den").click(function(){
	
$(".deen").css('opacity',1);
$(".doc,.adab,.tecno,.sience,.eco").css('opacity',.1);
});
/*----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
$(".ad").click(function(){
	
$(".adab").css('opacity',1);
$(".doc,.tecno,.deen,.sience,.eco").css('opacity',.1);
});
/*--------------------------------------------------------------------*/
/*---------------------------------------------------------------------*/
$(".ec").click(function(){
	
$(".eco").css('opacity',1);
$(".doc,.adab,.deen,.sience,.tecno").css('opacity',.1);
});
/*------------------------------------------------------------------------*/
$(".all").click(function(){
$(".doc,.adab,.deen,.sience,.tecno,.eco").css('opacity',1);
});
/*-----------------end images shuffel-----------------------------------------*/
});