'use strict'

function ControllerHoLa() {
    var view;
    var bank;
    var speler;
    var dobbelsteen1Speler;
    var dobbelsteen2Speler;
    var dobbelsteen1Bank;
    var dobbelsteen2Bank;
    var spel;
    var buttons;
    var img;
    var input;
    
    this.configure = configure;
    this.reageerOpBankGooien = reageerOpBankGooien;
    this.reageerOpSpelerGooien = reageerOpSpelerGooien;
    this.reageerOpInzetVerlagen = reageerOpInzetVerlagen;
    this.reageerOpInzetVerhogen = reageerOpInzetVerhogen;
    this.reageerOpVoorspelLager = reageerOpVoorspelLager;
    this.reageerOpVoorspelHoger = reageerOpVoorspelHoger;
    this.reset = reset;

    function configure() {
        view = new ViewHoLa();
        bank = new BankHoLa();
        speler = new SpelerHoLa();
        dobbelsteen1Speler = new DobbelsteenHoLa();
        dobbelsteen2Speler = new DobbelsteenHoLa();
        dobbelsteen1Bank = new DobbelsteenHoLa();
        dobbelsteen2Bank = new DobbelsteenHoLa();
        spel = new SpelHoLa();
        
        buttons = document.querySelectorAll('button');
	    buttons[0].onclick = reageerOpBankGooien;
        buttons[1].onclick = reageerOpSpelerGooien;	
		
        img = document.querySelectorAll('img');
	    img[0].onclick = reageerOpInzetVerlagen;
        img[1].onclick = reageerOpInzetVerhogen;	
		
        input = document.querySelectorAll('input');
		input[0].onclick = reageerOpVoorspelHoger;
        input[1].onclick = reageerOpVoorspelLager;
    
        view.toonInzet(speler.getInzet());
        view.toonSaldo(speler.getSaldo());
        
    }


    function reageerOpBankGooien() {
        if (spel.getToestand() == "bank"){
        dobbelsteen1Bank.rol();
        dobbelsteen2Bank.rol();
        view.toonDobbelstenenBank(dobbelsteen1Bank.getWaarde(),dobbelsteen2Bank.getWaarde());
        bank.berekenScore(dobbelsteen1Bank.getWaarde(), dobbelsteen2Bank.getWaarde());
        spel.volgendeToestand();
        }
       else {
            window.alert("De bank heeft al gegooit!");
        }
    }

    function reageerOpSpelerGooien() {
       switch (spel.getToestand()){
           case "bank":
           window.alert("De bank moet eerst rollen!");
            break;
           case "inzet":
               if (speler.getVoorspelling == 0){
                   window.alert("U moet uw verwatching nog selecteren!");}
               else {
           spel.volgendeToestand(); }
            break;
       }
        if (spel.getToestand() == "speler") {
            document.getElementById("spelerGooien").disabled = true;
		dobbelsteen1Speler.rol();
        dobbelsteen2Speler.rol();  view.toonDobbelstenenSpeler(dobbelsteen1Speler.getWaarde() ,dobbelsteen2Speler.getWaarde());
        speler.berekenScore(dobbelsteen1Speler.getWaarde(), dobbelsteen2Speler.getWaarde());
        spel.vergelijk(bank.getScore(),speler.getScore(),speler.getVoorspelling());
        if (spel.getWinnaar() == "speler"){
            view.toonmededeling("U heeft gewonnen!");
            speler.verhoogSaldo(speler.getInzet());
        }
        else{
            view.toonmededeling("U heeft verloren!");
            speler.verlaagSaldo(speler.getInzet());
        }
        setTimeout(function(){ spel.volgendeToestand();
                             reset();}, 5000);
      }
    }

    function reageerOpInzetVerlagen() {
        switch (spel.getToestand()){
            case "inzet":
            speler.verlaagInzet(); 
            view.toonInzet(speler.getInzet());
            break;
            case "bank":
            window.alert("De bank moet eerst gooien!");
            break;
            case "speler":
            window.alert("U heeft uw inzet en verwatching al bevestigd!");
            break;
        }
			
    }

    function reageerOpInzetVerhogen() {
        switch (spel.getToestand()){
            case "inzet":
            speler.verhoogInzet(); 
            view.toonInzet(speler.getInzet());
            break;
            case "bank":
            window.alert("De bank moet eerst gooien!");
            break;
            case "speler":
            window.alert("U heeft uw inzet en verwatching al bevestigd!");
            break;
        }
    }

    function reageerOpVoorspelHoger() 
	{
		switch (spel.getToestand()){
            case "inzet":
            speler.voorspellingHoger(); 
            break;
            case "bank":
            window.alert("De bank moet eerst gooien!");
            break;
            case "speler":
            window.alert("U heeft uw inzet en verwatching al bevestigd!");
            break;
        }
    }

    function reageerOpVoorspelLager() {
        switch (spel.getToestand()){
            case "inzet":
            speler.voorspellingLager(); 
            break;
            case "bank":
            window.alert("De bank moet eerst gooien!");
            break;
            case "speler":
            window.alert("U heeft uw inzet en verwatching al bevestigd!");
            break;
        }
	}
    function reset(){
        if (speler.getSaldo() < 10){
            view.toonSaldo(speler.getSaldo());
            view.toonInzet("");
            view.toonmededeling("U heeft onvoldoende saldo! Game over!");
            document.getElementById("hoger").disabled = true;
            document.getElementById("lager").disabled = true;
            document.getElementById("inzetVerhogen").onclick = function(){
  this.disabled = true}
            document.getElementById("inzetVerlagen").onclick = function(){
  this.disabled = true}
            document.getElementById("computerGooien").disabled = true;
            document.getElementById("spelerGooien").disabled = true;
        }
        else {
            view.toonDobbelstenenBank(0,0);
            view.toonDobbelstenenSpeler(0,0);
            view.toonmededeling("");
        while (speler.getInzet() > 10){
                speler.verlaagInzet();}
            view.toonInzet(speler.getInzet());
            view.toonSaldo(speler.getSaldo());
            speler.voorspellingReset();
            var ele = document.getElementsByName("verwachting");
            for(var i=0;i<ele.length;i++)
            ele[i].checked = false; 
            document.getElementById("spelerGooien").disabled = false;}
    }
}