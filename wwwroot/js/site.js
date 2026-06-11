let intentosRestantes = 10;
let mensaje = "";
let palabraSecreta = document.getElementById("palabraSecreta").value;
let letrasAdivinadas = [];
for(let i = 0; i < palabraSecreta.length; i++)
{
    letrasAdivinadas.push("_");
}
let termino = false;

function ActualizarPantalla() {
    document.getElementById("letra").value = "";
    document.getElementById("intentos").innerText = "Intentos restantes: " + intentosRestantes;
    document.getElementById("palabra").innerText = palabraAdivinada(" ");

    document.getElementById("mensaje").innerText = mensaje;
}

function ArriesgarLetra()
{
    if ( termino ||intentosRestantes <= 0||document.getElementById("letra").value === "") {
        return;
    }
    if (intentosRestantes <= 1) 
    {
        mensaje = "¡Perdiste! La palabra era: " + palabraSecreta;
        intentosRestantes--;
    } 
    else 
    {
        let esta = false;
        let letra = document.getElementById("letra").value.toUpperCase();
        for(let i = 0; i < palabraSecreta.length; i++)
        {
            if(palabraSecreta[i] === letra)
            {
                letrasAdivinadas[i] = letra;
                esta = true;
            }
        }
        if (!esta) {
            intentosRestantes--;
        }
        else
        {
            if(palabraAdivinada() === palabraSecreta)
            {
                mensaje = "¡Ganaste! La palabra era: " + palabraSecreta;
                termino = true;
            }
        }
    }
    ActualizarPantalla();
}
function palabraAdivinada(separador = "")
{
    let palabraAdivinada = "";
    for(let i = 0; i < letrasAdivinadas.length; i++)
    {
        palabraAdivinada += letrasAdivinadas[i] + separador;
    }
    return palabraAdivinada;
}
ActualizarPantalla()