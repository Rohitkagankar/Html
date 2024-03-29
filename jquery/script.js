$("h1").css("color","orange");
$("button").addClass("btn");
$("button").text("rohit");
$("button").html("<em>hello world</em>");

// $("button").click(function(){
//     $("h2").text("thank you...");
// });
$("input").keypress(function(evt){
    console.log(evt.key);
    $("h2").text(evt.key);
})