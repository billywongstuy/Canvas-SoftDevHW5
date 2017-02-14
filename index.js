var c = document.getElementById("slate");
var b = document.getElementById("clear");
var opt = document.getElementById("mode");
var ctx = c.getContext("2d");
var prevX = null;
var prevY = null;

ctx.beginPath();

var crtRect = function(e) {

    var red = document.getElementById("cRed").value;
    var blue = document.getElementById("cBlue").value;
    var green = document.getElementById("cGreen").value;

    var color = "rgba(" + red + "," + blue + "," + green + ",0.5)"
    ctx.fillStyle = color;
    
    ctx.fillRect(e.offsetX,e.offsetY,100,200);
};


var crtLine = function(e) {
    
    var red = document.getElementById("cRed").value;
    var blue = document.getElementById("cBlue").value;
    var green = document.getElementById("cGreen").value;

    var color = "rgba(" + red + "," + blue + "," + green + ",0.5)"
    ctx.fillStyle = color;

    var radius = 15;

    
    if (prevX != null) {
	ctx.moveTo(prevX,prevY);
    }
    
    
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    
    ctx.beginPath();

    prevX = e.offsetX;
    prevY = e.offsetY;
    
    ctx.arc(e.offsetX,e.offsetY,radius,0,360);
    ctx.stroke();
    ctx.fill();
    
}


var decide = function(e) {
    if (opt.value == "rect") {
	c.removeEventListener("click",crtLine);
	c.addEventListener("click",crtRect);
    }
    else {
	c.removeEventListener("click",crtRect);
	c.addEventListener("click",crtLine);
    }
}
decide();


opt.addEventListener("change",decide);



var validColor = function(c) {
    if (c.length < 6) {return false;}
    return true;
}

var clear = function() {
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.clearRect(0,0,c.width,c.height);
    prevX = null;
    prevY = null;
    ctx.beginPath();
}

b.addEventListener("click",clear);
