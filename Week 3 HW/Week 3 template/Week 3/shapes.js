var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.fillRect(85,     302, 100, 100);
ctx.strokeStyle = "black";
ctx.lineWidth = "5";
ctx.strokeRect(85, 302, 100, 100);
ctx.fill();
ctx.stroke();

ctx.strokeStyle = "rgb(255,0,0)";
ctx.beginPath();
ctx.lineTo(85,683);
ctx.lineTo(278,550);
ctx.lineWidth = "5";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";
ctx.arc(385, 441, 67, 0, 2*Math.PI, false);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.strokeStyle = "#00ffff";
ctx.fillStyle = "#ff00ff";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.moveTo(558, 309);
ctx.lineTo(667, 284);
ctx.lineTo(724, 380);
ctx.lineTo(650, 464);
ctx.lineTo(548, 420);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.strokeStyle = "rgb(32,32,32)";
ctx.fillStyle = "#ffff00";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.moveTo(635,497 );
ctx.lineTo(667, 555);
ctx.lineTo(732, 567);
ctx.lineTo(687, 615);
ctx.lineTo(695, 680);
ctx.lineTo(636, 652);
ctx.lineTo(576, 680);
ctx.lineTo(584, 615);
ctx.lineTo(539, 567);
ctx.lineTo(604, 555);
ctx.closePath();
ctx.fill();
ctx.stroke();