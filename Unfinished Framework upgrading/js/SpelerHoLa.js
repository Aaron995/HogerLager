'use strict'

function SpelerHoLa() {
    var saldo;
    var inzet;
    var score;
    var voorspelling = 0;
    var _saldo;
    var _inzet;
    
    _saldo = new Portemonnee();
    _saldo.ontvang(50);
    _inzet = new Portemonnee();
    _inzet.ontvang(10);
    
    this.getSaldo = getSaldo;
    this.verlaagSaldo = verlaagSaldo;
    this.verhoogSaldo = verhoogSaldo;
    this.getInzet = getInzet;
    this.verlaagInzet = verlaagInzet;
    this.verhoogInzet = verhoogInzet;
    this.berekenScore = berekenScore;
    this.getScore = getScore;
    this.voorspellingLager = voorspellingLager;
    this.voorspellingHoger = voorspellingHoger;
    this.getVoorspelling = getVoorspelling;
    this.voorspellingReset = voorspellingReset;
    

    
    function getSaldo() {
        saldo = _saldo.hoeveelGeldIsEr();
        return saldo;
    }
    
    function verlaagSaldo(bedrag){
        _saldo.betaal(bedrag);
    }
    function verhoogSaldo(bedrag){
        _saldo.ontvang(bedrag);
    }
    function getInzet(){
        inzet = _inzet.hoeveelGeldIsEr();
        return inzet;
    }
    function verlaagInzet(){
        _inzet.betaal(10);
        while (_inzet.hoeveelGeldIsEr() <= 0){
                _inzet.ontvang(10); }
        
    }
    function verhoogInzet(){
        _inzet.ontvang(10);
        if (_inzet.hoeveelGeldIsEr() > _saldo.hoeveelGeldIsEr()){
            window.alert("U kunt niet meer inzetten dan uw saldo!");
            _inzet.betaal(_inzet.hoeveelGeldIsEr());
            _inzet.ontvang(_saldo.hoeveelGeldIsEr());
        }
    }
    function berekenScore(dobbel1, dobbel2){
        score = dobbel1 + dobbel2;
    }
    function getScore(){
        return score;
    }
    function voorspellingHoger(){
        voorspelling = "hoger";
    }
    function voorspellingLager(){
        voorspelling = "lager";
    }
    function getVoorspelling(){
        return voorspelling;
    }
    function voorspellingReset(){
        voorspelling = 0;
    }
    
}

