//var
var myCanv = document.getElementById('myCanvas');
var context = myCanv.getContext('2d');

//ndas
context.beginPath();
context.arc(680,240,200,0,2*Math.PI);
context.fillStyle = '#F2CAB8';
context.fill();
context.strokeStyle = '#F2CAB8';
context.stroke();

//rambut2
context.beginPath();
context.arc(670,240,210,3.35,1.8*Math.PI);
context.fillStyle = 'black';
context.fill();
context.strokeStyle = 'black';
context.stroke();

//rambut3
context.beginPath();
context.arc(670,275,245,3.75,1.90*Math.PI);
context.fillStyle = 'black';
context.fill();
context.strokeStyle = 'black';
context.stroke();

//rambut5
context.beginPath();
context.arc(605,125,100,4.6,1.8*Math.PI);
context.fillStyle = 'black';
context.fill();
context.strokeStyle = 'black';
context.stroke();

//rambut5
context.beginPath();
context.arc(605,110,100,5,2.1*Math.PI);
context.fillStyle = 'black';
context.fill();
context.strokeStyle = 'black';
context.stroke();

//mata1
context.beginPath();
context.arc(580,220,80,0,1*Math.PI);
context.lineWidth = 15;
context.lineCap = 'bitt';
context.fillStyle = 'black';
context.lineWidth = 25;
context.fill();
context.strokeStyle = 'white';
context.stroke();

//mata2
context.beginPath();
context.arc(780,220,80,0,1*Math.PI);
context.lineWidth = 15;
context.lineCap = 'bitt';
context.fillStyle = 'black';
context.fill();
context.lineWidth = 25;
context.strokeStyle = 'white';
context.stroke();

//rambut1
context.beginPath();
context.arc(690,245,210,3,1.5*Math.PI);
context.lineWidth = 20;
context.fillStyle = 'black';
context.fill();
context.lineWidth = 3;
context.strokeStyle = 'black';
context.stroke();

//rambut4
context.beginPath();
context.arc(690,265,200,3.64,1.9*Math.PI);
context.fillStyle = 'black';
context.fill();
context.strokeStyle = 'black';
context.stroke();

//alis1
context.beginPath();
context.moveTo(510,200);
context.quadraticCurveTo(550,215,650,205);
context.lineCap = 'round';
context.lineWidth = 30;
context.strokeStyle = '#171717';
context.stroke();

//alis2
context.beginPath();
context.moveTo(710,200);
context.quadraticCurveTo(780,160,850,200);
context.lineCap = 'round';
context.lineWidth = 30;
context.strokeStyle = '#171717';
context.stroke();

//badan
context.beginPath();
context.moveTo(680,910);
context.quadraticCurveTo(680,510,680,2000);
context.lineCap = 'round';
context.lineWidth = 700;
context.strokeStyle = '';
context.stroke();

//ketiak1
context.beginPath();
context.moveTo(515,680);
context.quadraticCurveTo(500,700,490,720);
context.lineWidth = 25;
context.strokeStyle = '#2997f6';
context.stroke();

//ketiak2
context.beginPath();
context.moveTo(515,680);
context.quadraticCurveTo(515,700,515,720);
context.lineWidth = 25;
context.strokeStyle = '#2997f6';
context.stroke();

//ketiak3
context.beginPath();
context.moveTo(850,680);
context.quadraticCurveTo(865,700,875,720);
context.lineWidth = 25;
context.strokeStyle = '#2997f6';
context.stroke();

//ketiak4
context.beginPath();
context.moveTo(850,680);
context.quadraticCurveTo(850,700,850,720);
context.lineWidth = 25;
context.strokeStyle = '#2997f6';
context.stroke();

//leher
context.beginPath();
context.moveTo(680,400);
context.quadraticCurveTo(680,510,680,500);
context.lineCap = 'round';
context.lineWidth = 150;
context.strokeStyle = '#F2CAB8';
context.stroke();

//gagang
context.beginPath();
context.moveTo(680,500);
context.quadraticCurveTo(680,510,680,630);
context.lineWidth = 15;
context.strokeStyle = 'gray';
context.stroke();

//permen1
context.beginPath();
context.arc(680,420,75,0,2*Math.PI);
context.fillStyle = '#306BD1';
context.lineWidth = 30;
context.fill();
context.strokeStyle = '#306BD1';
context.stroke();

//permen2
context.beginPath();
context.arc(680,420,60,0,2*Math.PI);
context.fillStyle = '#64EBE2';
context.lineWidth = 30;
context.fill();
context.strokeStyle = '#64EBE2';
context.stroke();

//permen3
context.beginPath();
context.arc(680,420,30,0,2*Math.PI);
context.fillStyle = '#DEEB7B';
context.lineWidth = 65;
context.fill();
context.strokeStyle = '#DEEB7B';
context.stroke();

//permen4
context.beginPath();
context.arc(680,420,20,0,2*Math.PI);
context.lineWidth = 55;
context.fillStyle = '#EB6363';
context.fill();
context.strokeStyle = '#EB6363';
context.stroke();

//permen5
context.beginPath();
context.arc(680,420,10,0,2*Math.PI);
context.lineWidth = 45;
context.fillStyle = '#9CF26D';
context.fill();
context.strokeStyle = '#9CF26D';
context.stroke();

//permen6
context.beginPath();
context.arc(680,420,5,0,2*Math.PI);
context.lineWidth = 35;
context.fillStyle = '#A06DF2';
context.fill();
context.strokeStyle = '#A06DF2';
context.stroke();

//permen7
context.beginPath();
context.arc(680,420,5,0,2*Math.PI);
context.lineWidth = 15;
context.fillStyle = '#663333';
context.fill();
context.strokeStyle = '#663333';
context.stroke();

//mulut1
context.beginPath();
context.arc(700,351,25,0,2*Math.PI);
context.fillStyle = '#F2CAB8';
context.fill();
context.strokeStyle = '#F2CAB8';
context.stroke();

//mulut2
context.beginPath();
context.arc(650,351,25,0,2*Math.PI);
context.fillStyle = '#F2CAB8';
context.fill();
context.strokeStyle = '#F2CAB8';
context.stroke();

//font
context.font = '50pt Calibri';
context.fillStyle = 'white';
context.fillText ('Hi Bruh!', 150,150);