var color = {
	circles: "#7B68EE",
	lines: "black",

}
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var rect = canvas.getBoundingClientRect();
var pointsX = [];
var	pointsY = [];
var points = [];
var circleRadius = 5;
var circles = [];


function resizeCanvas(width, height) {
    canvas.width = width;
    canvas.height = height;
}

function drawLine(x, y){
	ctx.beginPath();
		ctx.strokeStyle = color.lines;
		ctx.lineWidth = 1;
		ctx.moveTo(pointsX[pointsX.length -2], pointsY[pointsY.length-2]);
		ctx.lineTo(pointsX[pointsX.length-1], pointsY[pointsY.length-1]);
		ctx.stroke();
}


canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event){
	var x = event.x - rect.left;
	var y = event.y - rect.top;

	pointsX.push(x);
	pointsY.push(y);

	ctx.beginPath();
	var c = ctx.arc(x, y, circleRadius, 0, 2*Math.PI, false);
	ctx.fillStyle = color.circles;
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = color.lines;
	ctx.stroke();
	circles.push(c);


	if(circles.length > 1){
		drawLine(x, y);
	}

}

canvas.addEventListener('dblclick', deletePoint, false);

