function OnclickPromedio(){
    const x1 = parseInt(document.getElementById("x1").value);
    const y1 = parseInt(document.getElementById("y1").value);

    const x2 = parseInt(document.getElementById("x2").value);
    const y2 = parseInt(document.getElementById("y2").value);

    const x3 = parseInt(document.getElementById("x3").value);
    const y3 = parseInt(document.getElementById("y3").value);

    const x4 = parseInt(document.getElementById("x4").value);
    const y4 = parseInt(document.getElementById("y4").value);

    const x5 = parseInt(document.getElementById("x5").value);
    const y5 = parseInt(document.getElementById("y5").value);

    const promedioPacientes = CalcularPromedioClinica(x1,x2,x3,x4,x5,y1,y2,y3,y4,y5);
    const Resultado = document.getElementById("resultado");
    Resultado.innerText = "El promedio de pacientes que fueron atendidos esta semana es del: " + promedioPacientes + "%";
}

function CalcularPromedioClinica(x1,x2,x3,x4,x5,y1,y2,y3,y4,y5){
    const pacientesAgendados = x1 + x2 + x3 + x4 + x5;
    const pacientesAtendidos = y1 + y2 + y3 + y4 + y5;

    const promedio = pacientesAtendidos/pacientesAgendados * 100;

    return promedio;
}