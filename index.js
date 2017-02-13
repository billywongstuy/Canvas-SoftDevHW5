var c = document.getElementById("slate");
var b = document.getElementById("clear");

var crtRect = function(e) {
    var ctx = c.getContext("2d");
    
    var color = document.getElementById("color").value;
    if (validColor(color)) {ctx.fillStyle = "#"+color;}
    else {ctx.fillStyle = "#ff0000";}
    
    ctx.fillRect(e.offsetX,e.offsetY,100,200);
    console.log(e.offsetX);
    console.log(e.offsetY);
};

c.addEventListener("click",crtRect);


var validColor = function(c) {
    if (c.length < 6) {return false;}
    return true;
}

var clear = function() {
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.clearRect(0,0,c.width,c.height); 
}

b.addEventListener("click",clear);
