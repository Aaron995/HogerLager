'use strict'

function Portemonnee()
{
    var bedrag = 0;
    
    this.ontvang = ontvang;
    this.betaal = betaal;
    this.hoeveelGeldIsEr = hoeveelGeldIsEr;
    
    function ontvang(geld)
    {
            bedrag = bedrag + geld;
    }
    function betaal(geld)
    {
            bedrag = bedrag -geld;
    }
    function hoeveelGeldIsEr()
    {
        return bedrag;
    }
}