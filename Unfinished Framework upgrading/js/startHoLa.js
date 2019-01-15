'use strict'

window.onload = startHoLa;

function startHoLa()
{
	var controller = new ControllerHoLa();
	controller.configure();
    document.getElementById("hoger").disabled = true;
    document.getElementById("lager").disabled = true;
}