function drawCardType(){
	var type1 = document.getElementById("cs-card-type1").getContext("2d");
	var type2 = document.getElementById("cs-card-type2").getContext("2d");
	var type3 = document.getElementById("cs-card-type3").getContext("2d");
	var type4 = document.getElementById("cs-card-type4").getContext("2d");
	var type41 = document.getElementById("cs-card-type4-1").getContext("2d");
	var type5 = document.getElementById("cs-card-type5").getContext("2d");
	var type6 = document.getElementById("cs-card-type6").getContext("2d");
	var type7 = document.getElementById("cs-card-type7").getContext("2d");
	var type8 = document.getElementById("cs-card-type8").getContext("2d");
	drawType1(type1);
	drawType2(type2);
	drawType3(type3);
	drawType4(type4);
	drawType41(type41);
	drawType5(type5);
	drawType6(type6);
	drawType7(type7);
	drawType8(type8);
}

function drawType1(c){
	drawBg(c);
	drawOutline(c);
	drawLine(c,c.canvas.width/3,10,c.canvas.width/3,c.canvas.height-10);
	drawLine(c,c.canvas.width/3*2,10,c.canvas.width/3*2,c.canvas.height-10);
}

function drawType2(c){
	drawBg(c);
	drawOutline(c);
	drawLine(c,c.canvas.width/2,10,c.canvas.width/2,c.canvas.height-10);
}

function drawType3(c){
	drawBg(c);
	drawOutline(c);
	drawLine(c,10,c.canvas.height/2,c.canvas.width-10,c.canvas.height/2);
}

function drawType4(c){
	drawBg(c);
	drawOutline(c);
	drawLine(c,c.canvas.width/2,c.canvas.height/2,c.canvas.width/2,c.canvas.height-10);
	drawLine(c,10,c.canvas.height/2,c.canvas.width-10,c.canvas.height/2);
}

function drawType41(c){
	drawBg(c);
	drawOutline(c);
	drawLine(c,10,c.canvas.height/2,c.canvas.width-10,c.canvas.height/2);
	drawLine(c,c.canvas.width/2,10,c.canvas.width/2,c.canvas.height/2);
}

function drawType5(c){
	drawBg(c);
	drawOutline(c);
	drawLine(c,10,c.canvas.height/2,c.canvas.width-10,c.canvas.height/2);
	drawLine(c,c.canvas.width/3,10,c.canvas.width/3,c.canvas.height-10);
	drawLine(c,c.canvas.width/3+20,(c.canvas.height-20)/6+10,c.canvas.width/3+80,(c.canvas.height-20)/6+10);
	drawLine(c,c.canvas.width/3+20,(c.canvas.height-20)/6*2+10,c.canvas.width/3+80,(c.canvas.height-20)/6*2+10);
	drawLine(c,c.canvas.width/3+20,(c.canvas.height-20)/6*4+10,c.canvas.width/3+80,(c.canvas.height-20)/6*4+10);
	drawLine(c,c.canvas.width/3+20,(c.canvas.height-20)/6*5+10,c.canvas.width/3+80,(c.canvas.height-20)/6*5+10);
}

function drawType6(c){
	drawBg(c);
	drawOutline(c);
	drawLine(c,10,c.canvas.height/2,c.canvas.width-10,c.canvas.height/2);
	drawLine(c,c.canvas.width/3,10,c.canvas.width/3,c.canvas.height-10);
	drawLine(c,c.canvas.width/3+20,(c.canvas.height-20)/6+10,c.canvas.width/3+80,(c.canvas.height-20)/6+10);
	drawLine(c,c.canvas.width/3+20,(c.canvas.height-20)/6*2+10,c.canvas.width/3+50,(c.canvas.height-20)/6*2+10);
	drawLine(c,c.canvas.width/3+60,(c.canvas.height-20)/6*2+10,c.canvas.width/3+80,(c.canvas.height-20)/6*2+10);
	drawLine(c,c.canvas.width/3+20,(c.canvas.height-20)/6*4+10,c.canvas.width/3+80,(c.canvas.height-20)/6*4+10);
	drawLine(c,c.canvas.width/3+20,(c.canvas.height-20)/6*5+10,c.canvas.width/3+50,(c.canvas.height-20)/6*5+10);
	drawLine(c,c.canvas.width/3+60,(c.canvas.height-20)/6*5+10,c.canvas.width/3+80,(c.canvas.height-20)/6*5+10);
}

function drawType7(c){
	drawBg(c);
	drawOutline(c);
	drawLine(c,10,c.canvas.height/2,c.canvas.width-10,c.canvas.height/2);
	drawLine(c,c.canvas.width/7*3,10,c.canvas.width/7*3,c.canvas.height-10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*2+10,c.canvas.width/7*3+50,(c.canvas.height-20)/8*2+10);
	drawLine(c,c.canvas.width/7*3+60,(c.canvas.height-20)/8*2+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*2+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*3+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*3+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*5+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*5+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*6+10,c.canvas.width/7*3+50,(c.canvas.height-20)/8*6+10);
	drawLine(c,c.canvas.width/7*3+60,(c.canvas.height-20)/8*6+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*6+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*7+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*7+10);
}

function drawType8(c){
	drawBg(c);
	drawOutline(c);
	drawLine(c,10,c.canvas.height/2,c.canvas.width-10,c.canvas.height/2);
	drawLine(c,c.canvas.width/7*3,10,c.canvas.width/7*3,c.canvas.height-10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*2+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*2+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*3+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*3+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*5+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*5+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*6+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*6+10);
	drawLine(c,c.canvas.width/7*3+20,(c.canvas.height-20)/8*7+10,c.canvas.width/7*3+80,(c.canvas.height-20)/8*7+10);
}

function drawLine(c,x,y,dx,dy,fillStyle,strokeStyle,lineWidth){
	c.save();
	c.fillStyle = fillStyle || "#ffffff";
	c.strokeStyle = strokeStyle || "#ffffff";
	c.lineWidth = lineWidth || 1;
	c.beginPath();
	c.moveTo(x,y);
	c.lineTo(dx,dy);
	c.stroke();
	c.restore();
}

function drawOutline(c){
	drawLine(c,10,10,c.canvas.width-10,10);
	drawLine(c,c.canvas.width-10,10,c.canvas.width-10,c.canvas.height-10);
	drawLine(c,c.canvas.width-10,c.canvas.height-10,10,c.canvas.height-10);
	drawLine(c,10,c.canvas.height-10,10,10);
}

function drawBg(c,fillStyle,strokeStyle){
	c.fillStyle = fillStyle || "lightgray";
	c.strokeStyle = strokeStyle || "lightgray";
	c.lineWidth = 0.5;
	c.fillRect(0,0,c.canvas.width,c.canvas.height);
}
