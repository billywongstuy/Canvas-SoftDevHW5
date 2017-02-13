var c = document.getElementById("slate");
var b = document.getElementById("clear");

var crtRect = function(e) {
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(e.offsetX,e.offsetY,100,200);
    console.log(e.offsetX);
    console.log(e.offsetY);
};

c.addEventListener("click",crtRect);


var clear = function() {
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,c.width,c.height); 
}

b.addEventListener("click",clear);
