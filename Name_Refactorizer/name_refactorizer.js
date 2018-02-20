document.getElementById("input").onclick = function() {
    if (this.value == "Enter a Name") {
        this.value = "";
    }
};

document.getElementById("input").onkeyup = function umlautUntoggle() {
    var text = document.getElementById("input").value;
    var i = 0;
    var j = text.length;
    var letter;
    var text2 = [];
    while (i < j) {
        letter = text.substring(i, i + 1);
        text2[i] = letter;
        i++;
    }

    if (
        (text2.includes("A") == true ||
            text2.includes("E") == true ||
            text2.includes("I") == true ||
            text2.includes("O") == true ||
            text2.includes("U") == true ||
            text2.includes("Y") == true ||
            text2.includes("a") == true ||
            text2.includes("e") == true ||
            text2.includes("i") == true ||
            text2.includes("o") == true ||
            text2.includes("u") == true ||
            text2.includes("y") == true) &&
        (text2.includes("Ä") == true ||
            text2.includes("Ë") == true ||
            text2.includes("Ï") == true ||
            text2.includes("Ö") == true ||
            text2.includes("Ü") == true ||
            text2.includes("Ÿ") == true ||
            text2.includes("ä") == true ||
            text2.includes("ë") == true ||
            text2.includes("ï") == true ||
            text2.includes("ö") == true ||
            text2.includes("ü") == true ||
            text2.includes("ÿ") == true)
    ) {
        document.getElementById("umlautButton").classList.remove("active");
        document.getElementById("reset").classList.add("toggled");
        document.getElementById("umlautButton").classList.add("halfActive");
    } else if (
        text2.includes("Ä") == true ||
        text2.includes("Ë") == true ||
        text2.includes("Ï") == true ||
        text2.includes("Ö") == true ||
        text2.includes("Ü") == true ||
        text2.includes("Ÿ") == true ||
        text2.includes("ä") == true ||
        text2.includes("ë") == true ||
        text2.includes("ï") == true ||
        text2.includes("ö") == true ||
        text2.includes("ü") == true ||
        text2.includes("ÿ") == true
    ) {
        document.getElementById("umlautButton").classList.add("active");
        document.getElementById("reset").classList.remove("toggled");
        document.getElementById("umlautButton").classList.remove("halfActive");
    } else {
        document.getElementById("umlautButton").classList.remove("active");

        document.getElementById("reset").classList.remove("toggled");
        document.getElementById("umlautButton").classList.remove("halfActive");

    }

};

document.getElementById("vowelUp").onclick = function() {

    var text = document.getElementById("input").value;
    var i = 0;
    var j = text.length;
    var letter;
    var text2 = [];
    while (i < j) {
        letter = text.substring(i, i + 1);

        switch (letter) {
            case "A":
                letter = "E";
                break;
            case "Ä":
                letter = "Ë";
                break;
            case "E":
                letter = "I";
                break;
            case "Ë":
                letter = "Ï";
                break;
            case "I":
                letter = "O";
                break;
            case "Ï":
                letter = "Ö";
                break;
            case "O":
                letter = "U";
                break;
            case "Ö":
                letter = "Ü";
                break;
            case "U":
                letter = "Y";
                break;
            case "Ü":
                letter = "Ÿ";
                break;
            case "Y":
                letter = "A";
                break;
            case "Ÿ":
                letter = "Ä";
                break;
            case "a":
                letter = "e";
                break;
            case "ä":
                letter = "ë";
                break;
            case "e":
                letter = "i";
                break;
            case "ë":
                letter = "ï";
                break;
            case "i":
                letter = "o";
                break;
            case "ï":
                letter = "ö";
                break;
            case "o":
                letter = "u";
                break;
            case "ö":
                letter = "ü";
                break;
            case "u":
                letter = "y";
                break;
            case "ü":
                letter = "ÿ";
                break;
            case "y":
                letter = "a";
                break;
            case "ÿ":
                letter = "ä";
                break;
            default:
                break;
        }

        text2[i] = letter;
        i++;
    }

    document.getElementById("input").value = text2.join("");
};

document.getElementById("vowelDown").onclick = function() {

    var text = document.getElementById("input").value;
    var i = 0;
    var j = text.length;
    var letter;
    var text2 = [];
    while (i < j) {
        letter = text.substring(i, i + 1);

        switch (letter) {
            case "A":
                letter = "Y";
                break;
            case "Ä":
                letter = "Ÿ";
                break;
            case "E":
                letter = "A";
                break;
            case "Ë":
                letter = "Ä";
                break;
            case "I":
                letter = "E";
                break;
            case "Ï":
                letter = "Ë";
                break;
            case "O":
                letter = "I";
                break;
            case "Ö":
                letter = "Ï";
                break;
            case "U":
                letter = "O";
                break;
            case "Ü":
                letter = "Ö";
                break;
            case "Y":
                letter = "U";
                break;
            case "Ÿ":
                letter = "Ü";
                break;
            case "a":
                letter = "y";
                break;
            case "ä":
                letter = "ÿ";
                break;
            case "e":
                letter = "a";
                break;
            case "ë":
                letter = "ä";
                break;
            case "i":
                letter = "e";
                break;
            case "ï":
                letter = "ë";
                break;
            case "o":
                letter = "i";
                break;
            case "ö":
                letter = "ï";
                break;
            case "u":
                letter = "o";
                break;
            case "ü":
                letter = "ö";
                break;
            case "y":
                letter = "u";
                break;
            case "ÿ":
                letter = "ü";
                break;
            default:
                break;
        }

        text2[i] = letter;
        i++;
    }

    document.getElementById("input").value = text2.join("");
};

document.getElementById("consonantDown").onclick = function() {
    var text = document.getElementById("input").value;
    var i = 0;
    var j = text.length;
    var letter;
    var text2 = [];
    while (i < j) {
        letter = text.substring(i, i + 1);

        switch (letter) {
            case "B":
                letter = "Z";
                break;
            case "C":
                letter = "B";
                break;
            case "D":
                letter = "C";
                break;
            case "F":
                letter = "D";
                break;
            case "G":
                letter = "F";
                break;
            case "H":
                letter = "G";
                break;
            case "J":
                letter = "H";
                break;
            case "K":
                letter = "J";
                break;
            case "L":
                letter = "K";
                break;
            case "M":
                letter = "L";
                break;
            case "N":
                letter = "M";
                break;
            case "P":
                letter = "N";
                break;
            case "Q":
                letter = "P";
                break;
            case "R":
                letter = "Q";
                break;
            case "S":
                letter = "R";
                break;
            case "T":
                letter = "S";
                break;
            case "V":
                letter = "T";
                break;
            case "W":
                letter = "V";
                break;
            case "X":
                letter = "W";
                break;
            case "Z":
                letter = "X";
                break;
            case "b":
                letter = "z";
                break;
            case "c":
                letter = "b";
                break;
            case "d":
                letter = "c";
                break;
            case "f":
                letter = "d";
                break;
            case "g":
                letter = "f";
                break;
            case "h":
                letter = "g";
                break;
            case "j":
                letter = "h";
                break;
            case "k":
                letter = "j";
                break;
            case "l":
                letter = "k";
                break;
            case "m":
                letter = "l";
                break;
            case "n":
                letter = "m";
                break;
            case "p":
                letter = "n";
                break;
            case "q":
                letter = "p";
                break;
            case "r":
                letter = "q";
                break;
            case "s":
                letter = "r";
                break;
            case "t":
                letter = "s";
                break;
            case "v":
                letter = "t";
                break;
            case "w":
                letter = "v";
                break;
            case "x":
                letter = "w";
                break;
            case "z":
                letter = "x";
                break;
            default:
                break;
        }

        text2[i] = letter;
        i++;
    }

    document.getElementById("input").value = text2.join("");
};

document.getElementById("consonantUp").onclick = function() {
    var text = document.getElementById("input").value;
    var i = 0;
    var j = text.length;
    var letter;
    var text2 = [];
    while (i < j) {
        letter = text.substring(i, i + 1);

        switch (letter) {
            case "B":
                letter = "C";
                break;
            case "C":
                letter = "D";
                break;
            case "D":
                letter = "F";
                break;
            case "F":
                letter = "G";
                break;
            case "G":
                letter = "H";
                break;
            case "H":
                letter = "J";
                break;
            case "J":
                letter = "K";
                break;
            case "K":
                letter = "L";
                break;
            case "L":
                letter = "M";
                break;
            case "M":
                letter = "N";
                break;
            case "N":
                letter = "P";
                break;
            case "P":
                letter = "Q";
                break;
            case "Q":
                letter = "R";
                break;
            case "R":
                letter = "S";
                break;
            case "S":
                letter = "T";
                break;
            case "T":
                letter = "V";
                break;
            case "V":
                letter = "W";
                break;
            case "W":
                letter = "X";
                break;
            case "X":
                letter = "Z";
                break;
            case "Z":
                letter = "B";
                break;
            case "b":
                letter = "c";
                break;
            case "c":
                letter = "d";
                break;
            case "d":
                letter = "f";
                break;
            case "f":
                letter = "g";
                break;
            case "g":
                letter = "h";
                break;
            case "h":
                letter = "j";
                break;
            case "j":
                letter = "k";
                break;
            case "k":
                letter = "l";
                break;
            case "l":
                letter = "m";
                break;
            case "m":
                letter = "n";
                break;
            case "n":
                letter = "p";
                break;
            case "p":
                letter = "q";
                break;
            case "q":
                letter = "r";
                break;
            case "r":
                letter = "s";
                break;
            case "s":
                letter = "t";
                break;
            case "t":
                letter = "v";
                break;
            case "v":
                letter = "w";
                break;
            case "w":
                letter = "x";
                break;
            case "x":
                letter = "z";
                break;
            case "z":
                letter = "b";
                break;
            default:
                break;
        }

        text2[i] = letter;
        i++;
    }

    document.getElementById("input").value = text2.join("");
};

document.getElementById("umlautButton").onclick = function() {
    var text = document.getElementById("input").value;
    var i = 0;
    var j = text.length;
    var letter;
    var text2 = [];

    while (i < j) {
        letter = text.substring(i, i + 1);

        switch (letter) {
            case "A":
                letter = "Ä";
                break;
            case "Ä":
                letter = "A";
                break;
            case "a":
                letter = "ä";
                break;
            case "ä":
                letter = "a";
                break;
            case "E":
                letter = "Ë";
                break;
            case "Ë":
                letter = "E";
                break;
            case "e":
                letter = "ë";
                break;
            case "ë":
                letter = "e";
                break;
            case "I":
                letter = "Ï";
                break;
            case "Ï":
                letter = "I";
                break;
            case "i":
                letter = "ï";
                break;
            case "ï":
                letter = "i";
                break;
            case "O":
                letter = "Ö";
                break;
            case "Ö":
                letter = "O";
                break;
            case "o":
                letter = "ö";
                break;
            case "ö":
                letter = "o";
                break;
            case "U":
                letter = "Ü";
                break;
            case "Ü":
                letter = "U";
                break;
            case "u":
                letter = "ü";
                break;
            case "ü":
                letter = "u";
                break;
            case "Ÿ":
                letter = "Y";
                break;
            case "ÿ":
                letter = "y";
                break;
            case "Y":
                letter = "Ÿ";
                break;
            case "y":
                letter = "ÿ";
            default:
                break;
        }

        text2[i] = letter;
        i++;
    }
    if (
        text2.includes("Ä") == true ||
        text2.includes("Ë") == true ||
        text2.includes("Ï") == true ||
        text2.includes("Ö") == true ||
        text2.includes("Ü") == true ||
        text2.includes("Ÿ") == true ||
        text2.includes("ä") == true ||
        text2.includes("ë") == true ||
        text2.includes("ï") == true ||
        text2.includes("ö") == true ||
        text2.includes("ü") == true ||
        text2.includes("ÿ") == true
    ) {
        this.classList.add("active");
    } else {
        this.classList.remove("active");
    }
    document.getElementById("input").value = text2.join("");
};

document.getElementById("reset").onclick = function() {

    this.classList.remove("toggled");

    var text = document.getElementById("input").value;

    if ((text.includes("A") == true ||
            text.includes("E") == true ||
            text.includes("I") == true ||
            text.includes("O") == true ||
            text.includes("U") == true ||
            text.includes("Y") == true ||
            text.includes("a") == true ||
            text.includes("e") == true ||
            text.includes("i") == true ||
            text.includes("o") == true ||
            text.includes("u") == true ||
            text.includes("y") == true) &&
        (text.includes("Ä") == true ||
            text.includes("Ë") == true ||
            text.includes("Ï") == true ||
            text.includes("Ö") == true ||
            text.includes("Ü") == true ||
            text.includes("Ÿ") == true ||
            text.includes("ä") == true ||
            text.includes("ë") == true ||
            text.includes("ï") == true ||
            text.includes("ö") == true ||
            text.includes("ü") == true ||
            text.includes("ÿ") == true)) {

        var i = 0;
        var j = text.length;
        var letter;
        var text2 = [];

        while (i < j) {
            letter = text.substring(i, i + 1);

            switch (letter) {
                case "Ä":
                    letter = "A";
                    break;
                case "ä":
                    letter = "a";
                    break;
                case "Ë":
                    letter = "E";
                    break;
                case "ë":
                    letter = "e";
                    break;
                case "Ï":
                    letter = "I";
                    break;
                case "ï":
                    letter = "i";
                    break;
                case "Ö":
                    letter = "O";
                    break;
                case "ö":
                    letter = "o";
                    break;
                case "Ü":
                    letter = "U";
                    break;
                case "ü":
                    letter = "u";
                    break;
                case "Ÿ":
                    letter = "Y";
                    break;
                case "ÿ":
                    letter = "y";
                    break;
                default:
                    break;
            }

            text2[i] = letter;
            i++;
        }

        document.getElementById("input").value = text2.join("");
        document.getElementById("umlautButton").classList.remove("halfActive");
        document.getElementById("umlautButton").classList.remove("active");

    };

};
