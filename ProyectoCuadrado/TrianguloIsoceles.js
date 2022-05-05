var lados = 4;
var base = 5;
var altura;

function calcularAltura(){
    if (lados != base){
        altura = Math.sqrt((lados * lados)-(base * base/4));
        console.log("La altura del triangulo isoceles es: " + altura);
    } else {
        console.log("Esto no es un triangulo isoceles");
    }
}