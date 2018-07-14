$("document").ready(function (){

 $("header img").click(omImgClick);
 
//$("header img").click(function (){
   // $("ul").css("border", "2px dotted red");

//
$("header img").mouseover(function (){
    $(".txt_point").css("border", "2px solid blue");
})
//
$("header img").mouseout(function (){
    $(".txt_point").css("border", "none");
})
//  mouseover & mouseout put together:
$(".form_up").hover(
     function (){$(".form_up").css("border", "2px solid blue");},
    function (){$(".form_up").css("border", "none");} );

$(".form_up").toggle(omImgClick1,omImgClick2,omImgClick3);

})
 
 
function omImgClick(){
    $("ul").toggleClass("img_new");
} 

function omImgClick1(){
    $(".form_up").css("color","red");
}     

function omImgClick2(){
    $(".form_up").css("color","green");
}     
function omImgClick3(){
    $(".form_up").css("color","black");
} 