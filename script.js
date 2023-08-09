function calcular() {
    let tipo = document.querySelector("#tipo").value; 
    let cantidad = parseFloat(document.querySelector("#cantidad").value);
    let cantidadKm = parseFloat(document.querySelector("#cantidad1").value);
    let pago = 0;
    let costoPorPersona = 0;
    let costoPorKilometro = 0;

    if (tipo == "A") {
        pago = 2.0 * cantidadKm; // Corrección aquí
    } else if (tipo == "B") {
        pago = 2.5 * cantidad;
    } else if (tipo == "C") {
        pago = 3.0 * cantidad;
    } else {
        // Tipo no válido
        document.querySelector("#resultado").innerHTML = "Tipo de bus no válido";
    } 

    if (cantidad < 20) {
        costoPorPersona = (pago / cantidad).toFixed(2);
    } else {
        costoPorPersona = (pago / cantidad).toFixed(2);
    }

    costoPorKilometro = (pago * cantidadKm).toFixed(2);
    
    document.querySelector("#resultado").innerHTML = `El resultado es ${pago.toFixed(2)}`;
    document.querySelector("#costoPorPersona").innerHTML = `El costo por persona es ${costoPorPersona}`;
    document.querySelector("#costoPorKilometro").innerHTML = `El costo por kilómetro es ${costoPorKilometro}`;
}

document.querySelector("#calcularButton").addEventListener("click", calcular);