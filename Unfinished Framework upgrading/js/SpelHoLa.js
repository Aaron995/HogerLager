'use strict';

function SpelHoLa() {
    var winnaar;
    var toestand = "bank";
    
    this.vergelijk = vergelijk;
    this.getWinnaar = getWinnaar;
    this.getToestand = getToestand;
    this.volgendeToestand = volgendeToestand;
    
	function vergelijk(scoreBank,scoreSpeler,voorspelling){
        switch (voorspelling){
            case "lager":
                if (scoreBank > scoreSpeler){
                    winnaar = "speler";
                }
                else{
                    winnaar = "bank";
                }
                break;
            case "hoger" :
                if (scoreSpeler > scoreBank){
                    winnaar = "speler";
                }   
                else{
                    winnaar = "bank";
                }
                break;
                }
    }
    function getWinnaar(){
        return winnaar;
    }
    function getToestand(){
        return toestand;
    }
    function volgendeToestand(){
        switch (toestand){
            case "bank":
                toestand = "inzet";
                document.getElementById("hoger").disabled = false;
                document.getElementById("lager").disabled = false;
                break;
            case "inzet":
                toestand = "speler";
                document.getElementById("hoger").disabled = true;
                document.getElementById("lager").disabled = true;
                break;
            case "speler":
                toestand = "bank";
                break;
        }    
        
    }
}