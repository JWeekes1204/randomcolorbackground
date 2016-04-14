$(document).ready(function(){
    var colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Gray", "Black"];
    for (var i = 0; i < colors.length; i++) {
        var myDiv = $("<div>");
        myDiv.addClass("color-box");
        myDiv.css("background-color", colors[i]);
        $("body").append(myDiv);
        
    
    }
    
});
$("div").click(function(){
    $("div").append
});