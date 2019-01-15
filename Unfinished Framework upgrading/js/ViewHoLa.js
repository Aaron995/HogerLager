'use strict'

function ViewHoLa() {
    //Canvas klaarzetten voor gebruik
    var canvas = document.getElementById("canvas");
    var pen = canvas.getContext("2d");

    //Locatie's van de stenen {x, y}
    var Steen1 = new DobbelSteen(60, 100);
    var Steen2 = new DobbelSteen(240, 100);
    var Steen3 = new DobbelSteen(460, 100);
    var Steen4 = new DobbelSteen(640, 100);

    //De grote van de dobbelsteen
    var VierkantGrote = 150;

    //Public functions
    this.toonDobbelstenenSpeler = toonDobbelstenenSpeler;
    this.toonDobbelstenenBank = toonDobbelstenenBank;
    this.toonInzet = toonInzet;
    this.toonSaldo = toonSaldo;
    this.toonmededeling = toonMededeling;



    function toonDobbelstenenBank(waardeSteen1, waardeSteen2) {
        Steen1.tekenDobbelsteen(waardeSteen1);
        Steen2.tekenDobbelsteen(waardeSteen2);
    }

    function toonDobbelstenenSpeler(waardeSteen3, waardeSteen4) {
        Steen3.tekenDobbelsteen(waardeSteen3);
        Steen4.tekenDobbelsteen(waardeSteen4);
    }

    function toonInzet(_inzet) {
        tekenText("Inzet: " + _inzet, 20, canvas.height - 20, "black");

    }

    function toonSaldo(_saldo) {
        tekenText("Saldo: " + _saldo, 20, canvas.height - 40, "black");
    }

    //gebruik toonmededeling("") om de mededeling weg te halen
    function toonMededeling(_msg) {
        var _x = canvas.width / 2;
        var _y = canvas.height / 4 * 3;

        pen.font = "18px sans-serif";
        pen.clearRect(0, _y - 16, canvas.width, 20);

        var w = pen.measureText(_msg).width;
        pen.fillStyle = "black";
        pen.fillText(_msg, _x - w / 2, _y);
    }

    function tekenText(_msg, _x, _y, kleur) {
        pen.font = "18px sans-serif";

        var w = pen.measureText(_msg).width;
        pen.clearRect(_x, _y - 16, w + 40, 20);

        pen.fillStyle = kleur;
        pen.fillText(_msg, _x, _y);
    }

    function DobbelSteen(x, y) {

        this.tekenDobbelsteen = tekenDobbelsteen;

        function tekenVierkant(ix, iy, z) {
            pen.beginPath();

            pen.clearRect(ix, iy, z, z);

            pen.strokeStyle = "blank";
            pen.lineWidth = 4;
            pen.strokeRect(ix, iy, z, z);
            pen.stroke();
        }

        function Dot(ix, iy) {
            pen.beginPath();
            pen.fillStyle = "black";
            pen.arc(ix, iy, VierkantGrote / 11, 0, 2 * Math.PI, false);
            pen.fill();
        }


        function tekenDobbelsteen(nr) {
            var w = VierkantGrote,
                h = w;

            tekenVierkant(x, y, w);

            switch (nr) {
            case 5:
            case 3:
            case 1:
                Dot(x + w / 2, y + h / 2);
                if (nr == 1) break;

            case 4:
            case 2:
            case 6:
                Dot(x + (w / 4), y + (h / 4));
                Dot(x + (w / 4 * 3), y + (h / 4 * 3));
                if (nr == 2 || nr == 3) break;

                Dot(x + (w / 4), y + (h / 4 * 3));
                Dot(x + (w / 4 * 3), y + (h / 4));

                if (nr == 6) {
                    Dot(x + (w / 4), y + (h / 2));
                    Dot(x + (w / 4 * 3), y + (h / 2));
                }
                break;
            default:

            }
        }
    }

    toonDobbelstenenSpeler(0, 0);
    toonDobbelstenenBank(0, 0);
}