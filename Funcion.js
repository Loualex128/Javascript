var name = "Juan David";
var lastname = " Castro Gallego";
var nickname = "juandc";

function Ejemplo (name,lastname,nickname){

    var completeName = name + lastname;

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

Ejemplo(name,lastname,nickname)