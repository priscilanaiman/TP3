public class PalabrasAhorcado
{
    private BD DataBase;
    private List<string> palabras;

    public PalabrasAhorcado()
    {
        DataBase = new BD();
        palabras = DataBase.ListaPalabras();
    }
    
    public string ObtenerPalabra()
    {
        Random random = new Random();
        int indice = random.Next(palabras.Count);
        return palabras[indice];
    }
}