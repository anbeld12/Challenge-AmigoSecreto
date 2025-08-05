let cantidad_amigos = 0;
let amigos = [];            // Lista para almacenar los nombres de los amigos
let resultado = false;      // Indica si ya se ha realizado un sorteo

// ------------------------------------------------------------------------
// Funciones para manejar el sorteo de amigos secretos
// ------------------------------------------------------------------------

// Función para agregar un amigo a la lista
function agregarAmigo(){
    // Verifica si ya se ha realizado un sorteo previo
    if (resultado) {
        document.getElementById("resultado").innerHTML = "";
        resultado = false;
        amigos = [];
    }

    nombre_amigo = document.getElementById("amigo").value;

    // Verifica si el campo de entrada está vacío
    if (nombre_amigo == ""){
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre_amigo); 

    nombre_amigo = `<li>${nombre_amigo}</li>` + document.getElementById("listaAmigos").innerHTML;
    asignarTextoElemento("#listaAmigos", nombre_amigo);
    document.getElementById("amigo").value = "";
    cantidad_amigos++;
}

// Función para sortear un amigo secreto
function sortearAmigo(){
    // Verifica que haya al menos 2 amigos en la lista para realizar el sorteo
    if (cantidad_amigos < 2){
        alert("Por favor, ingrese al menos 2 amigos para realizar el sorteo.");
        return;
    }

    document.getElementById("listaAmigos").innerHTML = "";

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoAleatorio = amigos[indiceAleatorio];
    asignarTextoElemento("#resultado", `Tu amigo secreto es: ${amigoAleatorio}`);

    resultado = true;
}

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}