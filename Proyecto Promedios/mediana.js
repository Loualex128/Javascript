
const lista = [
    100,
    400000000,
    500,
    200
]

const mitadLista = parseInt(lista.length / 2);

function calcularMediaAritmetica (lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedio = sumaLista / lista.length;
    
    return promedio;
    }

function esPar (numero) {

    if (numero % 2 == 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista.length)){
    const elemento1 = lista[mitadLista -1];
    const elemento2 = lista[mitadLista];

    const promedioElementos = calcularMediaAritmetica([elemento1,elemento2]);

    mediana = promedioElementos
} else {
    mediana = lista[mitadLista];
}