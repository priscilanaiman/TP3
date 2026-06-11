public class PalabrasAhorcado
{
    private BD DataBase = new BD();
    private List<string> palabras = DataBase.ListaPalabras();

    public string ObtenerPalabra()
    {
        Random random = new Random();
        int indice = random.Next(palabras.Count);
        return palabras[indice];
    }
}