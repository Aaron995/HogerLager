'use strict';
var saldo;
var verwachting;
var inzet;
var pen;
var canvas;
var steennummer;
var ogen;
var bankUitkomst;
var spelerUitkomst
var inzet;
var bankGegooit;

function reageerOpLaden()
{
    canvas = document.getElementById('canvas')
	pen = canvas.getContext("2d");
	pen.lineWidth = 3;
	pen.strokeStyle = "green";
	pen.strokeRect(50,50,150,150);
    saldo = 500;
	hide();
	startGame();
}
window.onload = reageerOpLaden;

function startGame()
{
    var ele = document.getElementsByName("verwachting");
    for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
	pen.clearRect(0,0,canvas.width,canvas.height );
	verwachting = 0;
	inzet = 10;
    bankGegooit = 0;
	pen.clearRect(0,0,canvas.width,canvas.height );
		if (saldo < 10)
	{
		pen.font="70px Georgia";
		pen.fillText("Game over!", 10, 50);
		pen.fillText("U heeft", 10, 130);
		pen.fillText("onvoldoende", 10, 210);
		pen.fillText("saldo!", 10, 290);
		show() ;

	}
    else
    {
	unblokKnop();
    pen.font="40px Georgia";
    pen.fillText("Uw saldo is: " + saldo, 10,290) ;
	pen.fillText("Uw inzet is: " + inzet, 10, 340);
    }
}

function bankDobbelsteen()
{
    if (bankGegooit == 1)
    {
        window.alert("De bank heeft al gegooit");
    }
    else
    {
    pen.font="40px Georgia";
	pen.fillText("De bank heeft:", 10, 40);
	steennummer=1;
	ogen = gooiDobbelsteen();
	bankUitkomst = ogen;
	tekenDobbelsteen(steennummer, ogen);
	steennummer=2;
	ogen = gooiDobbelsteen();
	bankUitkomst = bankUitkomst + ogen ;
	tekenDobbelsteen(steennummer, ogen);
    bankGegooit = 1
    }
}

function spelerDobbelsteen()
{


	pen.font="40px Georgia";
	pen.fillText("U rolde:", 400, 40);
	steennummer=3;
	ogen = gooiDobbelsteen();
	spelerUitkomst = ogen;
	tekenDobbelsteen(steennummer, ogen);
	steennummer=4;
	ogen =gooiDobbelsteen();
	spelerUitkomst = spelerUitkomst + ogen;
	tekenDobbelsteen(steennummer, ogen);
	uitkomst();
}
function gooiDobbelsteen()
{
	var ogen = Math.floor(Math.random() * 6) + 1;
	return ogen;
}

function tekenDobbelsteen(steennummer, ogen)
{
    pen.strokeStyle = "black";
    var x
    var y
	switch (steennummer)
	{
		case 1 :
		x = 20;
		y = 50;
		break;
		case 2 :
		x = 210;
		y = 50;
		break;
		case 3 :
		x = 400;
		y = 50;
		break;
		case 4 :
		x = 600;
		y = 50;
		break;
	}
	pen.beginPath();
	pen.strokeRect(x,y,150,150);
	switch (ogen)
		{
			case 1 :
			pen.arc(x + 75, y + 75,15,0, 2*Math.PI);
			pen.fill();
			pen.stroke();
			break;
			case 2 :
			pen.beginPath();
			pen.arc(x + 30,y + 30,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 120,y + 120,15,0, 2*Math.PI);
			pen.fill();
			pen.stroke();
			break;
			case 3 :
			pen.beginPath();
			pen.arc(x + 30,y + 30,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 75,y + 75,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 120,y + 120,15,0, 2*Math.PI);
			pen.fill();
			pen.stroke();
			break;
			case 4 :
			pen.beginPath();
			pen.arc(x + 30,y + 30,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 30,y + 120,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 120,y + 30,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 120,y + 120,15,0, 2*Math.PI);
			pen.fill();
			pen.stroke();
			break;
			case 5 :
			pen.beginPath();
			pen.arc(x + 30,y + 30,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 30,y + 120,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 120,y + 30,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 75,y + 75,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 120,y + 120,15,0, 2*Math.PI);
			pen.fill();
			pen.stroke();
			break;
			case 6 :
			pen.beginPath();
			pen.arc(x + 30,y + 30,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 30,y + 75,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 30,y + 120,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 120,y + 30,15,0, 2*Math.PI);
			pen.fill();
			pen.arc(x + 120,y + 75,15,0, 2*Math.PI);
			pen.fill();
			pen.beginPath();
			pen.arc(x + 120,y + 120,15,0, 2*Math.PI);
			pen.fill();
			pen.stroke();
			break;
		}
}

function inzetten(z)
{
    switch (z)
    {
        case '+':
                inzet = inzet + 10;
                veranderInzet();
                break;
        case '-':
                inzet = inzet - 10;
                veranderInzet();
                break;
    }
}
function veranderInzet()
{


	pen.clearRect(9,300,550,550);
	if (inzet < 10)
	{
		inzet = 10;
	}
	if (inzet > saldo)
	{
		inzet = saldo;
	}
	pen.font="40px Georgia";
	pen.fillText("Uw inzet is: " + inzet,10, 340);
}

function rolLager()
{
	verwachting = "Lager";
}

function rolHoger()
{
	verwachting = "Hoger";
}

function okKnop()
{
    if (bankGegooit == 0)
    {
        window.alert("De bank moet eerst gooien");
        return;
    }
	if (verwachting == 0)
	{
		window.alert("Selecteer hoger of lager");
	}
	else
	{
	blokKnop()


	saldo = saldo - inzet;
	spelerDobbelsteen();
	}
}

function uitkomst()
{
	switch (verwachting)
	{
		case "Lager":
		if (spelerUitkomst < bankUitkomst)
		{
			pen.font="40px Georgia";
			pen.fillText("U wint!",400, 290);
			saldo = saldo + inzet + inzet;
		}
		else
		{
			pen.font="40px Georgia";
			pen.fillText("U verliest!",400, 290);
		}
		break;
		case "Hoger":
		if (spelerUitkomst > bankUitkomst)
		{
			pen.font="40px Georgia";
			pen.fillText("U wint!",400, 290);
			saldo = saldo + inzet + inzet;
		}
		else
		{
			pen.font="40px Georgia";
			pen.fillText("U verliest!",400, 290);
		}
		break;
	}
	setTimeout(function(){startGame();}, 5000);
}
function blokKnop()
{
	document.getElementById("bankGooien").disabled = true;
	document.getElementById("spelerGooien").disabled = true;

}

function unblokKnop()
{
	document.getElementById("bankGooien").disabled = false;
	document.getElementById("spelerGooien").disabled = false;

}

function show(){
if(document.layers) document.layers['reset'].visibility="show";
if(document.getElementById) document.getElementById("reset").style.visibility="visible";
if(document.all) document.all.reset.style.visibility="visible";
}

function hide(){
if(document.layers) document.layers['reset'].visibility="hide";
if(document.getElementById) document.getElementById("reset").style.visibility="hidden";
if(document.all) document.all.reset.style.visibility="hidden";
}
