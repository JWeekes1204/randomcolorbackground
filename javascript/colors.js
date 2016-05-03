$(document).ready(function(){
    var colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Gray", "Black"];
    for (var i = 0; i < colors.length; i++) {
        var myDiv = $("<div>");
        myDiv.addClass("color-box");
        myDiv.css("background-color", colors[i]);
        $("body").append(myDiv);
        
    
    }
    $("button").click(function(){
       var random = (Math.random() * (colors.length - 0));
       var random = Math.round(random)
       console.log(random)
       $("body").css("background-color", colors[random])
    });
});


//$("div").click(function(){
   // $("body")
//});