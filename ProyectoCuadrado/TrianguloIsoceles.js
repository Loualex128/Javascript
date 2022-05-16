var lados = 4;
var base = 4;
var altura;

function calcularAltura(lados,base){
    if (lados != base){
        altura = Math.sqrt(lados**2-(base**2/4));
        console.log("La altura del triangulo isoceles es: " + altura);
    } else {
        console.log("Esto no es un triangulo isoceles");
    }
}

calcularAltura(lados,base);