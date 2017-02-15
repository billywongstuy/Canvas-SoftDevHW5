var c = document.getElementById("slate");
var b = document.getElementById("clear");
var opt = document.getElementById("mode");
var ctx = c.getContext("2d");
var prevX = null;
var prevY = null;
var inpRed = document.getElementById("cRed")
var inpBlue = document.getElementById("cBlue")
var inpGreen = document.getElementById("cGreen")


ctx.beginPath();

var crtRect = function(e) {
    var red = inpRed.value;
    var blue = inpBlue.value;
    var green = inpGreen.value;
    var color = "rgba(" + red + "," + green + "," + blue + ",0.5)"
    ctx.fillStyle = color;
    ctx.fillRect(e.offsetX,e.offsetY,100,200);
};


var crtLine = function(e) {   
    var red = inpRed.value;
    var blue = inpBlue.value;
    var green = inpGreen.value;
    var color = "rgba(" + red + "," + green + "," + blue + ",0.5)"
    ctx.fillStyle = color;
    var radius = 15;
    
    if (prevX != null) {ctx.moveTo(prevX,prevY);}
       
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


var clear = function() {
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.clearRect(0,0,c.width,c.height);
    prevX = null;
    prevY = null;
    ctx.beginPath();
}

b.addEventListener("click",clear);


var changeColor = function() {
    var red = inpRed.value;
    var blue = inpBlue.value;
    var green = inpGreen.value;
    var cDiv = document.getElementById("choColor")
    cDiv.style.backgroundColor = "rgb("+red+","+green+","+blue+")"
}

inpRed.addEventListener("change",changeColor);
inpGreen.addEventListener("change",changeColor);
inpBlue.addEventListener("change",changeColor);
			   
