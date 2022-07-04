//Helpers
function esPar(numerito){
    return (numerito % 2 == 0);
}

function calcularMediaAritmetica (lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedio = sumaLista / lista.length;
    
    return promedio;
}

//Calculadora de Mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana General
const salariosVe = colombia.map(

    function(personita){

        return personita.salary;
    }
);

const salariosVeSorted = salariosVe.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);
medianaGeneralVe = medianaSalarios(salariosVeSorted);

//Mediana top 10%
const spliceStart = (salariosVeSorted.length * 90) / 100;
const spliceCount = salariosVeSorted.length - spliceStart;
const salariosVeTop10 = salariosVeSorted.splice(spliceStart,spliceCount);

const medianaTop10Ve = medianaSalarios(salariosVeTop10);


console.log({
    medianaGeneralVe,
    medianaTop10Ve,
});