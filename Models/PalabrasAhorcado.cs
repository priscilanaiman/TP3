public class PalabrasAhorcado
{
    private List<string> palabras;

    public PalabrasAhorcado()
    {
        this.palabras.Add("ELEFANTE");
        this.palabras.Add("SINFONICO");
        this.palabras.Add("VENTANAL");
        this.palabras.Add("DESTRUCCION");
        this.palabras.Add("HEGEMONIA");
        this.palabras.Add("SIMULADORES");
        this.palabras.Add("ELECTRODOMESTICO");
        this.palabras.Add("INTOXICACION");
        this.palabras.Add("VENENOSO");
        this.palabras.Add("ACONDICIONADOR");
    } 
    public string ObtenerPalabra()
    {
        Random random = new Random();
        int indice = random.Next(palabras.Count);
        return palabras[indice];
    }
}