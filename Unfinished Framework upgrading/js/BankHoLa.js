'use strict'

function BankHoLa() {
	var score;
    
    this.berekenScore = berekenScore;
    this.getScore = getScore;
    
    function berekenScore(dobbel1,dobbel2) {
        score = dobbel1 + dobbel2;
    }
    function getScore(){
        return score;
    }
}