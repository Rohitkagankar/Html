$("h1").css("color","orange");
$("button").addClass("btn");
$("button").text("rohit");
$("button").html("<em>hello world</em>");

$("button").click(function(){
    $("h2").text("thank you...");
});



//mouse events--------
$("input").keypress(function(evt){
    console.log(evt.key);
    $("h2").text(evt.key);
});
$(".text").mouseenter(function(){
    $(".text").css("background-color","yellow");
});
$(".text").mouseleave(function(){
    $(".text").css("background-color","orange");
});
$(".text").click(function(){
    $(".text").css("background-color","black");
});
$(".text").dblclick(function(){
    $(".text").css("background-color","violet");
});
$(".text").contextmenu(function(){
    $(".text").css("background-color","pink");
});

//keyboard events--------
$("body").keypress(function(){
    $(this).css("background-color","black");
});
$("body").keyup(function(){
    $(this).css("background-color","pink");
});
$("body").keydown(function(){
    $(this).css("background-color","orange");
});