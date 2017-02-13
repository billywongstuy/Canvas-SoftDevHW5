var c = document.getElementById("slate");
var b = document.getElementById("clear");

var crtRect = function() {
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(50,50,100,200); 
};

c.addEventListener("click",crtRect);


var clear = function() {
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(50,50,100,200); 
}

b.addEventListener("click",clear);
