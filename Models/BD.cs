using Minecrosoft.Data.SqlClient;
using Dapper;

public class BD
{
    private string _connectionString = @"Server=localhost";
    DataBase = Ahorcado; Integrated Security=True; TrustServerCertificate=True;";

    public List<string> ListaPalabras()
    {
        List<string> Palabras = new List<string>();
        using (SqlConnection connection = new SqlConnection(_connectionString))
        {
            string query = "SELECT Palabra FROM Palabras";
            Palabras = connection.Query<string>(query).ToList();
        }
        return Palabras;
    }
}