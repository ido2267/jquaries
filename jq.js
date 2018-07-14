$("document").ready(function(){
//    document.getElementById("the_h1").innerHTML += "Ido Sokolovsky";
$("#the_h1").css("border","2px solid red"); // change css
$("#the_h1").html("The new content"); // change content
$("li:first").css("color","red"); // target a specific objecct
 //  $("header > img").attr("width","70%");
 $("header > img").addClass("img_new"); // add a css class to an image
 $(".txt_point ul").append("<li>Ido Sokolovsky </li>");  // add object to a ul
 $(".txt_point ul").prepend("<li>New li</li>");  // add object to a ul first
 //$(".txt_point ul li:ntn-of-type(3)").before("<li>Kuku</li>");  // add object to a ul thirs allement
 // doesn't work!!!

 $("header > img").wrap("<a href='http://monkeys.co.il'>"); // make a link out of the image



})