function ArriesgarLetra()
{
let palabraSecreta = document.getElementById(palabraSecreta).Value;
let palabra = document.getElementById(palabra).Value;
let letra = document.getElementById(letra).Value;
let intentos = document.getElementById(intentos).Value;

let i = 0;
while(i < palabraSecreta.Lenght && palabraSecreta[i] != letra)
    {
        i++
    }
   if (i < palabraSecreta.Lenght)
    {
    
    }
   else
    {
        intentos.innerHTML -= 1;
    }
}
